import Button from "../../base-components/Button";
import { fetchTableData } from "../../common/api";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinitionAlign, VerticalAlign } from "tabulator-tables";
import { useRef, useState } from "react";
import { BASE_URL } from "../../common/constants";
import { FormInput } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { createIcons, icons } from "lucide";
import { activateUser, deactivateUser } from "./api";
import { showFailToast, showSuccessToast } from "../../common/toasts";
import { Dialog, Menu } from "../../base-components/Headless";
import { stringToHTML } from "../../utils/helper";

function UsersView() {
  const { t } = useTranslation();
  const ref = useRef<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deactivateConfirmationModal, setDeactivateConfirmationModal] =
    useState(false);
  const [idToDeactivate, setIdToDeactivate] = useState();
  const [activeFilterValue, setActiveFilterValue] = useState(t("global.any"));

  interface Column {
    title: string;
    field: string;
    width?: number;
    minWidth?: number;
    resizable?: boolean;
    vertAlign?: VerticalAlign;
    hozAlign?: ColumnDefinitionAlign;
    headerHozAlign?: ColumnDefinitionAlign;
    headerSort?: boolean;
    formatter?: (
      cell: any,
      formatterParams: any,
      onRendered: any
    ) => HTMLElement;
  }

  const imageFormatter = (
    cell: any,
    formatterParams: any,
    onRendered: any
  ): HTMLElement | any => {
    const imageUrl: string = cell.getValue();
    var fullUrl = BASE_URL + imageUrl;
    if (!imageUrl) {
      const firstName: string = cell.getRow().getData().firstName;
      const avatarUrl = `https://ui-avatars.com/api/?background=random&length=1&name=${firstName}`;
      fullUrl = avatarUrl;
    }
    return `<div class=" h-8 image-fit zoom-in">
                    <img src= ${fullUrl} 
                        class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                        alt="User image">
                    </img>
                </div>`;
  };

  const emailFormatter = (
    cell: any,
    formatterParams: any,
    onRendered: any
  ): HTMLElement | any => {
    const email: string = cell.getRow().getData().email;
    return `<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${email}">
                    ${email}
                </div>`;
  };

  const firstNameFormatter = (
    cell: any,
    formatterParams: any,
    onRendered: any
  ): HTMLElement | any => {
    const firstName: string = cell.getRow().getData().firstName;
    return `<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${firstName}">
                    ${firstName}
                </div>`;
  };

  const lastNameFormatter = (
    cell: any,
    formatterParams: any,
    onRendered: any
  ): HTMLElement | any => {
    const lastName: string = cell.getRow().getData().lastName;
    return `<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${lastName}">
                    ${lastName}
                </div>`;
  };

  const activeFormatter = (
    cell: any,
    formatterParams: any,
    onRendered: any
  ): HTMLElement | any => {
    const active: boolean = cell.getRow().getData().active;
    return `<div class="flex items-center lg:justify-center ${
      active ? "text-success" : "text-danger"
    }">
              <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> ${
                active ? t("global.active") : t("global.inactive")
              }
            </div>`;
  };

  const actionFormatter = (
    cell: any,
    formatterParams: any,
    onRendered: any
  ): HTMLElement | any => {
    const userId = cell.getRow().getData().id;
    const isActive = cell.getRow().getData().active;

    let activeElement;
    if (isActive) {
      activeElement = `<a id="deactivate" class="flex items-center text-danger mr-3">
                        <i data-lucide="user-x" class="w-4 h-4 mr-1"></i>
                        ${t("global.deactivate")}
                      </a>`;
    } else {
      activeElement = `<a id="activate" class="flex items-center text-primary mr-3">
                          <i data-lucide="user-check" class="w-4 h-4 mr-1"></i> 
                          ${t("global.activate")}
                        </a>`;
    }

    const actionsElement = `<div class="flex lg:justify-center items-center">${activeElement}</div>`;
    const a = stringToHTML(actionsElement);

    a.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
        const target = event.currentTarget as HTMLElement;
        const buttonId = target.id;
        switch (buttonId) {
          case "activate":
            handleActivateClick(cell.getRow(), userId);
            break;
          case "deactivate":
            handleDeactivateClick(cell.getRow(), userId);
            break;
          default:
            break;
        }
      });
    });
    return a;
  };

  const events = {
    renderComplete: () => {
      createIcons({
        icons,
        attrs: {
          "stroke-width": 1.5,
        },
        nameAttr: "data-lucide",
      });
    },
  };

  const columns: Column[] = [
    {
      title: "",
      field: "profilePicture",
      hozAlign: "left",
      width: 70,
      resizable: false,
      headerSort: false,
      formatter: imageFormatter,
    },
    {
      title: t("users.view.email"),
      field: "email",
      hozAlign: "left",
      vertAlign: "middle",
      headerHozAlign: "left",
      headerSort: false,
      minWidth: 110,
      formatter: emailFormatter,
    },
    {
      title: t("users.view.firstName"),
      field: "firstName",
      hozAlign: "left",
      vertAlign: "middle",
      headerHozAlign: "left",
      headerSort: false,
      minWidth: 110,
      formatter: firstNameFormatter,
    },
    {
      title: t("users.view.lastName"),
      field: "lastName",
      hozAlign: "left",
      vertAlign: "middle",
      headerHozAlign: "left",
      headerSort: false,
      minWidth: 110,
      formatter: lastNameFormatter,
    },
    {
      title: t("global.active"),
      field: "active",
      hozAlign: "center",
      vertAlign: "middle",
      headerHozAlign: "center",
      headerSort: false,
      width: 110,
      formatter: activeFormatter,
    },
    {
      title: t("global.actions"),
      field: "actions",
      hozAlign: "center",
      vertAlign: "middle",
      headerHozAlign: "center",
      width: 200,
      headerSort: false,
      formatter: actionFormatter,
    },
  ];

  const options = {
    pagination: true,
    paginationMode: "remote",
    paginationSize: 10,
    layout: "fitColumns",
    responsiveLayout: "collapse",
    ajaxURL: "api/private/users/",
    ajaxRequestFunc: fetchTableData,
    filterMode: "remote",
  };

  const handleSearchTermChange = (event: any) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSearch = () => {
    let filters = [];
    if (searchTerm) {
      filters.push({ field: "searchTerm", type: "=", value: searchTerm });
    }
    switch (activeFilterValue) {
      case t("global.true"):
        filters.push({ field: "active", type: "=", value: true });
        break;
      case t("global.false"):
        filters.push({ field: "active", type: "=", value: false });
        break;
      default:
        break;
    }
    ref.current.setFilter(filters);
  };

  const handleActivateClick = async (row: any, id: any) => {
    const response: any = await activateUser(id);
    if (response.status < 300) {
      showSuccessToast(t("users.view.notifications.activateSucceeded"));
      ref.current.replaceData(ref.current.getAjaxUrl(), {
        filter: ref.current.getFilters(),
        page: ref.current.getPage(),
      });
    } else {
      showFailToast(t("users.view.notifications.activateFailed"));
    }
  };

  const handleDeactivateClick = async (row: any, id: any) => {
    setIdToDeactivate(id);
    setDeactivateConfirmationModal(true);
  };

  const handleDeactivateConfirmation = async () => {
    setDeactivateConfirmationModal(false);
    const response: any = await deactivateUser(idToDeactivate);
    if (response.status < 300) {
      showSuccessToast(t("users.view.notifications.deactivateSucceeded"));
      ref.current.replaceData(ref.current.getAjaxUrl(), {
        filter: ref.current.getFilters(),
        page: ref.current.getPage(),
      });
    } else {
      showFailToast(t("users.view.deactivateError"));
    }
    setIdToDeactivate(undefined);
  };

  const handleMenuItemClick = (itemName: string) => {
    switch (itemName) {
      case "True":
        setActiveFilterValue(t("global.true"));
        break;
      case "False":
        setActiveFilterValue(t("global.false"));
        break;
      default:
        setActiveFilterValue(t("global.any"));
        break;
    }
  };

  const resetButton = () => {
    setSearchTerm("");
    setActiveFilterValue(t("global.any"));
    ref.current.setFilter([]);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap justify-between">
          <h2 className=" text-lg font-medium intro-y">{t("pages.users")}</h2>
          <Link to="/users/form">
            <Button variant="primary" className="mr-2 shadow-md">
              {t("users.view.addNew")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-5 mt-5 intro-y box">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start mb-4 mr-1">
          <FormInput
            id="searchTerm"
            type="text"
            className="mt-2 w-full sm:mt-0 sm:w-60 mr-2"
            placeholder={t("users.view.searchPlaceholder")}
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <div className="flex items-center ml-2 mr-2 mt-1">
            <label className="w-12 mr-2 xl:w-auto xl:flex-initial">
              {t("global.active")}
            </label>
            <Menu className="w-full sm:mt-0 sm:w-auto">
              <Menu.Button
                as={Button}
                variant="outline-primary"
                size="sm"
                className="w-full sm:mt-0 sm:w-auto"
              >
                {activeFilterValue}
                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Menu.Items className="w-24" placement="bottom">
                <Menu.Item onClick={() => handleMenuItemClick("Any")}>
                  {t("global.any")}
                </Menu.Item>
                <Menu.Item onClick={() => handleMenuItemClick("True")}>
                  {t("global.true")}
                </Menu.Item>
                <Menu.Item onClick={() => handleMenuItemClick("False")}>
                  {t("global.false")}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col sm:flex-row sm:mt-0 sm:w-auto">
            <Button
              variant="primary"
              type="button"
              className="w-full sm:w-16 mt-1 mr-1"
              size="sm"
              onClick={handleSearch}
            >
              {t("global.go")}
            </Button>
            <Button
              variant="outline-primary"
              type="button"
              className="w-full sm:w-16 mt-1 mr-1"
              size="sm"
              onClick={resetButton}
            >
              {t("global.reset")}
            </Button>
          </div>
        </div>
        <ReactTabulator
          onRef={(r) => {
            ref.current = r.current;
          }}
          columns={columns}
          events={events}
          options={options}
        />

        {/* BEGIN: Deactivation Confirmation Modal */}
        <Dialog
          open={deactivateConfirmationModal}
          onClose={() => {
            setDeactivateConfirmationModal(false);
            setIdToDeactivate(undefined);
          }}
        >
          <Dialog.Panel>
            <div className="p-5 text-center">
              <Lucide
                icon="XCircle"
                className="w-16 h-16 mx-auto mt-3 text-danger"
              />
              <div className="mt-5 text-3xl">
                {t("users.view.deactivateMessage")}
              </div>
              <div className="mt-2 text-slate-500">
                {t("users.view.deactivateWarning")}
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => {
                  setDeactivateConfirmationModal(false);
                }}
                className="w-24 mr-1"
                tabIndex={-1}
              >
                {t("global.cancel")}
              </Button>
              <Button
                variant="danger"
                type="button"
                className="w-24"
                onClick={() => handleDeactivateConfirmation()}
              >
                {t("global.deactivate")}
              </Button>
            </div>
          </Dialog.Panel>
        </Dialog>
        {/* END: Deactivate Confirmation Modal */}
      </div>
    </>
  );
}

export default UsersView;
