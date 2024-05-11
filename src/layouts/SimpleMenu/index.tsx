import { Transition } from "react-transition-group";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectSimpleMenu } from "../../stores/simpleMenuSlice";
import { useAppSelector } from "../../stores/hooks";
import { FormattedMenu, linkTo, nestedMenu, enter, leave } from "./simple-menu";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import logoUrl from "../../assets/images/logo.svg";
import clsx from "clsx";
import TopBar from "../../components/TopBar";
import MobileMenu from "../../components/MobileMenu";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";

function Main() {
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState<
    Array<FormattedMenu | "divider">
  >([]);
  const simpleMenuStore = useAppSelector(selectSimpleMenu);
  const simpleMenu = () => nestedMenu(simpleMenuStore, location);

  useEffect(() => {
    setFormattedMenu(simpleMenu());
  }, [simpleMenuStore, location.pathname]);

  return (
    <div className="py-2">
      <DarkModeSwitcher />
      <MainColorSwitcher />
      <MobileMenu />
      <div className="flex mt-[4.7rem] md:mt-0">
        {/* BEGIN: Simple Menu */}
        <nav className="pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px]">
          <Link
            to="/simple-menu/dashboard-overview-1"
            className="flex items-center pt-4 pl-5 intro-x"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="w-6"
              src={logoUrl}
            />
          </Link>
          <Divider type="div" className="my-6"></Divider>
          <ul>
            {/* BEGIN: First Child */}
            {formattedMenu.map((menu, menuKey) =>
              menu == "divider" ? (
                <Divider
                  type="li"
                  className={clsx([
                    "my-6",

                    // Animation
                    `opacity-0 animate-[0.4s_ease-in-out_0.1s_intro-divider] animate-fill-mode-forwards animate-delay-${
                      (menuKey + 1) * 10
                    }`,
                  ])}
                  key={menuKey}
                ></Divider>
              ) : (
                <li key={menuKey}>
                  <Menu
                    className={clsx({
                      // Animation
                      [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                        (menuKey + 1) * 10
                      }`]: !menu.active,
                    })}
                    menu={menu}
                    formattedMenuState={[formattedMenu, setFormattedMenu]}
                    level="first"
                  ></Menu>
                  {/* BEGIN: Second Child */}
                  {menu.subMenu && (
                    <Transition
                      in={menu.activeDropdown}
                      onEnter={enter}
                      onExit={leave}
                      timeout={300}
                    >
                      <ul
                        className={clsx([
                          "bg-black/10 rounded-lg dark:bg-darkmode-900/30",
                          { block: menu.activeDropdown },
                          { hidden: !menu.activeDropdown },
                        ])}
                      >
                        {menu.subMenu.map((subMenu, subMenuKey) => (
                          <li key={subMenuKey}>
                            <Menu
                              className={clsx({
                                // Animation
                                [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                  (subMenuKey + 1) * 10
                                }`]: !subMenu.active,
                              })}
                              menu={subMenu}
                              formattedMenuState={[
                                formattedMenu,
                                setFormattedMenu,
                              ]}
                              level="second"
                            ></Menu>
                            {/* BEGIN: Third Child */}
                            {subMenu.subMenu && (
                              <Transition
                                in={subMenu.activeDropdown}
                                onEnter={enter}
                                onExit={leave}
                                timeout={300}
                              >
                                <ul
                                  className={clsx([
                                    "bg-black/10 rounded-lg dark:bg-darkmode-900/30",
                                    {
                                      block: subMenu.activeDropdown,
                                    },
                                    { hidden: !subMenu.activeDropdown },
                                  ])}
                                >
                                  {subMenu.subMenu.map(
                                    (lastSubMenu, lastSubMenuKey) => (
                                      <li key={lastSubMenuKey}>
                                        <Menu
                                          className={clsx({
                                            // Animation
                                            [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                              (lastSubMenuKey + 1) * 10
                                            }`]: !lastSubMenu.active,
                                          })}
                                          menu={lastSubMenu}
                                          formattedMenuState={[
                                            formattedMenu,
                                            setFormattedMenu,
                                          ]}
                                          level="third"
                                        ></Menu>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </Transition>
                            )}
                            {/* END: Third Child */}
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                  {/* END: Second Child */}
                </li>
              )
            )}
            {/* END: First Child */}
          </ul>
        </nav>
        {/* END: Simple Menu */}
        {/* BEGIN: Content */}
        <div className="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block">
          <TopBar />
          <Outlet />
        </div>
        {/* END: Content */}
      </div>
    </div>
  );
}

function Menu(props: {
  className?: string;
  menu: FormattedMenu;
  formattedMenuState: [
    (FormattedMenu | "divider")[],
    Dispatch<SetStateAction<(FormattedMenu | "divider")[]>>
  ];
  level: "first" | "second" | "third";
}) {
  const navigate = useNavigate();
  const [formattedMenu, setFormattedMenu] = props.formattedMenuState;

  return (
    <Tippy
      as="a"
      options={{
        placement: "left",
      }}
      content={props.menu.title}
      href={props.menu.subMenu ? "#" : props.menu.pathname}
      className={clsx([
        "h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full",
        {
          "dark:text-slate-300": props.menu.active && props.level != "first",
          "text-white/70 dark:text-slate-400":
            !props.menu.active && props.level != "first",
          "z-10 bg-slate-100 dark:bg-darkmode-700":
            props.menu.active && props.level == "first",
          "before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-menu-corner before:absolute before:top-0 before:right-0 before:-mr-5 dark:before:bg-menu-corner-dark":
            props.menu.active && props.level == "first",
          "after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:bg-menu-corner after:absolute after:top-0 after:right-0 after:-mr-5 dark:after:bg-menu-corner-dark":
            props.menu.active && props.level == "first",
          "[&>div:nth-child(1)]:hover:before:bg-white/5 [&>div:nth-child(1)]:hover:before:dark:bg-darkmode-500/70":
            !props.menu.active &&
            !props.menu.activeDropdown &&
            props.level == "first",
        },
        props.className,
      ])}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        linkTo(props.menu, navigate);
        setFormattedMenu([...formattedMenu]);
      }}
    >
      <div
        className={clsx({
          "text-primary dark:text-slate-300":
            props.menu.active && props.level == "first",
          "dark:text-slate-400": props.level == "first",
          "before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full before:bg-slate-100 before:dark:bg-darkmode-700":
            props.menu.active && props.level == "first",
          "before:content-[''] before:z-[-1] before:w-[230px] before:absolute before:top-0 before:left-0 before:h-full before:rounded-l-full before:transition before:ease-in before:duration-100":
            !props.menu.activeDropdown &&
            !props.menu.active &&
            props.level == "first",
        })}
      >
        <Lucide icon={props.menu.icon} />
      </div>
    </Tippy>
  );
}

function Divider<C extends React.ElementType>(
  props: { as?: C } & React.ComponentPropsWithoutRef<C>
) {
  const { className, ...computedProps } = props;
  const Component = props.as || "div";

  return (
    <Component
      {...computedProps}
      className={clsx([
        props.className,
        "w-full h-px bg-white/[0.08] z-10 relative dark:bg-white/[0.07]",
      ])}
    ></Component>
  );
}

export default Main;
