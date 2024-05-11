import { useState, useEffect, Fragment } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectTopMenu } from "../../stores/topMenuSlice";
import { useAppSelector } from "../../stores/hooks";
import fakerData from "../../utils/faker";
import _ from "lodash";
import { FormattedMenu, linkTo, nestedMenu } from "./top-menu";
import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { FormInput } from "../../base-components/Form";
import { Menu, Popover } from "../../base-components/Headless";
import { Transition } from "@headlessui/react";
import logoUrl from "../../assets/images/logo.svg";
import clsx from "clsx";
import MobileMenu from "../../components/MobileMenu";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";

function Main() {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu>>([]);
  const topMenuStore = useAppSelector(selectTopMenu);
  const topMenu = () => nestedMenu(topMenuStore, location);

  useEffect(() => {
    setFormattedMenu(topMenu());
  }, [topMenuStore, location.pathname]);

  return (
    <div className="py-2">
      <DarkModeSwitcher />
      <MainColorSwitcher />
      <MobileMenu />
      {/* BEGIN: Top Bar */}
      <div className="border-b border-white/[0.08] mt-[2.2rem] md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
        <div className="flex items-center h-[70px] z-[51] relative">
          {/* BEGIN: Logo */}
          <Link
            to="/top-menu/dashboard-overview-1"
            className="hidden -intro-x md:flex"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="w-6"
              src={logoUrl}
            />
            <span className="ml-3 text-lg text-white"> Rubick </span>
          </Link>
          {/* END: Logo */}
          {/* BEGIN: Breadcrumb */}
          <Breadcrumb
            light
            className="h-full md:ml-10 md:pl-10 md:border-l border-white/[0.08] mr-auto -intro-x"
          >
            <Breadcrumb.Link to="/">Application</Breadcrumb.Link>
            <Breadcrumb.Link to="/" active={true}>
              Dashboard
            </Breadcrumb.Link>
          </Breadcrumb>
          {/* END: Breadcrumb */}
          {/* BEGIN: Search */}
          <div className="relative mr-3 intro-x sm:mr-6">
            <div className="hidden sm:block">
              <FormInput
                type="text"
                className="border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400/70"
                placeholder="Search..."
                onFocus={showSearchDropdown}
                onBlur={hideSearchDropdown}
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500"
              />
            </div>
            <a className="relative text-white/70 sm:hidden" href="">
              <Lucide icon="Search" className="w-5 h-5 dark:text-slate-500" />
            </a>
            <Transition
              as={Fragment}
              show={searchDropdown}
              enter="transition-all ease-linear duration-150"
              enterFrom="mt-5 invisible opacity-0 translate-y-1"
              enterTo="mt-[3px] visible opacity-100 translate-y-0"
              leave="transition-all ease-linear duration-150"
              leaveFrom="mt-[3px] visible opacity-100 translate-y-0"
              leaveTo="mt-5 invisible opacity-0 translate-y-1"
            >
              <div className="absolute right-0 z-10 mt-[3px]">
                <div className="w-[450px] p-5 box">
                  <div className="mb-2 font-medium">Pages</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/20 dark:bg-success/10 text-success">
                        <Lucide icon="Inbox" className="w-4 h-4" />
                      </div>
                      <div className="ml-3">Mail Settings</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pending/10 text-pending">
                        <Lucide icon="Users" className="w-4 h-4" />
                      </div>
                      <div className="ml-3">Users & Permissions</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary/80">
                        <Lucide icon="CreditCard" className="w-4 h-4" />
                      </div>
                      <div className="ml-3">Transactions Report</div>
                    </a>
                  </div>
                  <div className="mb-2 font-medium">Users</div>
                  <div className="mb-5">
                    {_.take(fakerData, 4).map((faker, fakerKey) => (
                      <a
                        key={fakerKey}
                        href=""
                        className="flex items-center mt-2"
                      >
                        <div className="w-8 h-8 image-fit">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={faker.photos[0]}
                          />
                        </div>
                        <div className="ml-3">{faker.users[0].name}</div>
                        <div className="w-48 ml-auto text-xs text-right truncate text-slate-500">
                          {faker.users[0].email}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mb-2 font-medium">Products</div>
                  {_.take(fakerData, 4).map((faker, fakerKey) => (
                    <a
                      key={fakerKey}
                      href=""
                      className="flex items-center mt-2"
                    >
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={faker.images[0]}
                        />
                      </div>
                      <div className="ml-3">{faker.products[0].name}</div>
                      <div className="w-48 ml-auto text-xs text-right truncate text-slate-500">
                        {faker.products[0].category}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Transition>
          </div>
          {/* END: Search */}
          {/* BEGIN: Notifications */}
          <Popover className="mr-4 intro-x sm:mr-6">
            <Popover.Button
              className="
              relative text-white/70 outline-none block
              before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger
            "
            >
              <Lucide icon="Bell" className="w-5 h-5 dark:text-slate-500" />
            </Popover.Button>
            <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
              <div className="mb-5 font-medium">Notifications</div>
              {_.take(fakerData, 5).map((faker, fakerKey) => (
                <div
                  key={fakerKey}
                  className={clsx([
                    "cursor-pointer relative flex items-center",
                    { "mt-5": fakerKey },
                  ])}
                >
                  <div className="relative flex-none w-12 h-12 mr-1 image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={faker.photos[0]}
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="" className="mr-5 font-medium truncate">
                        {faker.users[0].name}
                      </a>
                      <div className="ml-auto text-xs text-slate-400 whitespace-nowrap">
                        {faker.times[0]}
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      {faker.news[0].shortContent}
                    </div>
                  </div>
                </div>
              ))}
            </Popover.Panel>
          </Popover>
          {/* END: Notifications */}
          {/* BEGIN: Account Menu */}
          <Menu>
            <Menu.Button className="block w-8 h-8 overflow-hidden scale-110 rounded-full shadow-lg image-fit zoom-in intro-x">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={fakerData[9].photos[0]}
              />
            </Menu.Button>
            <Menu.Items className="w-56 mt-px relative bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
              <Menu.Header className="font-normal">
                <div className="font-medium">{fakerData[0].users[0].name}</div>
                <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                  {fakerData[0].jobs[0]}
                </div>
              </Menu.Header>
              <Menu.Divider className="bg-white/[0.08]" />
              <Menu.Item className="hover:bg-white/5">
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </Menu.Item>
              <Menu.Item className="hover:bg-white/5">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Add Account
              </Menu.Item>
              <Menu.Item className="hover:bg-white/5">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
              </Menu.Item>
              <Menu.Item className="hover:bg-white/5">
                <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
              </Menu.Item>
              <Menu.Divider className="bg-white/[0.08]" />
              <Menu.Item className="hover:bg-white/5">
                <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
              </Menu.Item>
            </Menu.Items>
          </Menu>
          {/* END: Account Menu */}
        </div>
      </div>
      {/* END: Top Bar */}
      {/* BEGIN: Top Menu */}
      <nav className="relative z-50 hidden md:block">
        <ul className="pb-3 xl:pb-0 xl:px-[50px] flex flex-wrap">
          {formattedMenu.map((menu, menuKey) => (
            <li
              className={clsx([
                "relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90",
                !menu.active &&
                  "[&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70",
              ])}
              key={menuKey}
            >
              <MenuLink
                className={clsx({
                  [`opacity-0 translate-y-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-${
                    (menuKey + 1) * 10
                  }`]: !menu.active,
                })}
                menu={menu}
                level="first"
              ></MenuLink>
              {/* BEGIN: Second Child */}
              {menu.subMenu && (
                <ul className="xl:left-[100%] xl:-ml-[4px] shadow-[0px_3px_20px_#0000000b] bg-primary hidden w-56 absolute rounded-md z-20 px-0 top-0 mt-14 xl:-mt-5 before:block before:absolute before:w-full before:h-full before:bg-black/10 before:inset-0 before:rounded-md before:z-[-1] dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]">
                  {menu.subMenu.map((subMenu, subMenuKey) => (
                    <li
                      className="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90"
                      key={subMenuKey}
                    >
                      <MenuLink menu={subMenu} level="second"></MenuLink>
                      {/* BEGIN: Third Child */}
                      {subMenu.subMenu && (
                        <ul
                          className={clsx([
                            "left-[100%] ml-0 shadow-[0px_3px_20px_#0000000b] bg-primary hidden w-56 absolute rounded-md z-20 px-0 top-0 mt-0 before:block before:absolute before:w-full before:h-full before:bg-black/10 before:inset-0 before:rounded-md before:z-[-1] dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]",
                          ])}
                        >
                          {subMenu.subMenu.map(
                            (lastSubMenu, lastSubMenuKey) => (
                              <li
                                className="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90"
                                key={lastSubMenuKey}
                              >
                                <MenuLink
                                  menu={lastSubMenu}
                                  level="third"
                                ></MenuLink>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                      {/* END: Third Child */}
                    </li>
                  ))}
                </ul>
              )}
              {/* END: Second Child */}
            </li>
          ))}
        </ul>
      </nav>
      {/* END: Top Menu */}
      {/* BEGIN: Content */}
      <div className="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block">
        <Outlet />
      </div>
      {/* END: Content */}
    </div>
  );
}

function MenuLink(props: {
  className?: string;
  menu: FormattedMenu;
  level: "first" | "second" | "third";
}) {
  const navigate = useNavigate();
  return (
    <a
      href={props.menu.subMenu ? "#" : props.menu.pathname}
      className={clsx([
        "h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative",
        props.level == "first" && "px-5 mr-1",
        props.level != "first" && "px-0 mr-0",
        props.level == "first" &&
          props.menu.active &&
          "z-10 bg-slate-100 dark:bg-darkmode-700",
        props.level == "first" &&
          props.menu.active &&
          "before:content-[''] before:w-[20px] before:h-[20px] before:-ml-[20px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-menu-corner before:absolute before:bottom-0 before:left-0 before:hidden before:xl:block dark:before:bg-menu-corner-dark",
        props.level == "first" &&
          props.menu.active &&
          "after:content-[''] after:w-[20px] after:h-[20px] after:-mr-[20px] after:rotate-180 after:scale-[1.04] after:bg-[length:100%] after:bg-menu-corner after:absolute after:bottom-0 after:right-0 after:hidden after:xl:block dark:after:bg-menu-corner-dark",
        props.className,
      ])}
      onClick={(event) => {
        event.preventDefault();
        linkTo(props.menu, navigate);
      }}
    >
      <div
        className={clsx([
          "dark:text-slate-400",
          props.level == "first" &&
            props.menu.active &&
            "text-primary dark:text-white",
          !props.menu.active &&
            "before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100",
        ])}
      >
        <Lucide icon={props.menu.icon} />
      </div>
      <div
        className={clsx([
          "ml-3 flex items-center whitespace-nowrap dark:text-slate-400",
          props.level == "first" &&
            props.menu.active &&
            "text-black font-medium dark:text-white",
          props.level != "first" && "w-full",
        ])}
      >
        {props.menu.title}
        {props.menu.subMenu && (
          <Lucide
            icon="ChevronDown"
            className={clsx([
              "hidden w-4 h-4 transition duration-100 ease-in xl:block",
              props.level == "first" && "ml-2",
              props.level != "first" && "ml-auto",
            ])}
          />
        )}
      </div>
    </a>
  );
}

export default Main;
