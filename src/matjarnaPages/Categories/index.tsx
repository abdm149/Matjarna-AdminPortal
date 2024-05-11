import Button from "../../base-components/Button";
import { deleteCategory } from "./api";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactTabulator } from "react-tabulator";
import { ColumnDefinitionAlign, VerticalAlign } from "tabulator-tables";
import { createIcons, icons } from "lucide";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { stringToHTML } from "../../utils/helper";
import { FormInput } from "../../base-components/Form";
import { useState, useRef, useEffect } from "react";
import { BASE_URL } from "../../common/constants";
import { Dialog, Menu } from "../../base-components/Headless";
import Lucide from "../../base-components/Lucide";
import { showFailToast, showSuccessToast } from "../../common/toasts";
import { fetchTableData } from "../../common/api";

function CategoriesView() {
  const { t } = useTranslation();
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilterValue, setActiveFilterValue] = useState(t("global.any"));
  const navigate = useNavigate();
  const ref = useRef<any>(null);
  const { id } = useParams();
  const location = useLocation();

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
    const fullUrl = BASE_URL + imageUrl;
    return `<div class=" h-8 image-fit zoom-in">
                    <img src= ${fullUrl} 
                        class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                        alt="Category image">
                    </img>
                </div>`;
  };

  const titleFormatter = (
    cell: any,
    formatterParams: any,
    onRendered: any
  ): HTMLElement | any => {
    const title: string = cell.getRow().getData().descriptions[0].title;
    return `<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${title}">
                    ${title}
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
    const { id, numberOfProducts } = cell.getRow().getData();
    const a = stringToHTML(`<div class="flex lg:justify-center items-center">
                                <a id="edit" class="flex items-center text-primary mr-3">
                                    <i data-lucide="pencil" class="w-4 h-4 mr-1"></i> 
                                    ${t("global.edit")}
                                </a>
                                <a id="children" class="flex items-center mr-3">
                                    <i data-lucide="list" class="w-4 h-4 mr-1"></i>
                                    ${t("global.children")}
                                </a>
                                <a id="delete" class="flex items-center text-danger">
                                    <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i>
                                    ${t("global.delete")}
                                </a>
                          </div>`);
  a.querySelectorAll('a').forEach(link =>{
    link.addEventListener("click", function (event) {
      event.stopPropagation();
      const target = event.currentTarget as HTMLElement;
      const buttonId = target.id;
      switch (buttonId) {
        case "edit":
          handleEditClick(event, cell.getRow());
          break;
        case "children":
          handleChildrenClick(event, id, numberOfProducts);
          break;
        case "delete":
          handleDeleteClick(cell.getRow(), id);
          break;
        default:
          break;
         }
      });
    });
    return a;
  };

  const handleEditClick = (e: any, row: any) => {
    const id = row.getData().id;
    navigate(`/categories/form/${id}`);
  };

  const handleChildrenClick = (e: any, id: any, numberOfProducts: any) => {
    if (numberOfProducts) {
      navigate(`/products/?parentId=${id}`);
    } else {
      navigate(`/categories/${id}`);
    }
  };

  useEffect(() => {
    if (ref?.current) {
      resetButton();
    }
  }, [location.pathname]);

  const handleDeleteClick = (row: any, id: any) => {
    if (!row.getData().numberOfChildren && !row.getData().numberOfProducts) {
      setIdToDelete(id);
      setDeleteConfirmationModal(true);
    } else {
      showFailToast(t("categories.view.deleteParentError"));
    }
  };

  const handleDeleteConfirmation = async () => {
    setDeleteConfirmationModal(false);
    const response: any = await deleteCategory(idToDelete);
    if (response.status < 300) {
      showSuccessToast(t("categories.view.deleteCategory"));
      ref.current.replaceData(ref.current.getAjaxUrl(), {
        filter: ref.current.getFilters(),
        page: ref.current.getPage(),
        sort: ref.current.getSorters(),
        size: ref.current.getPageSize(),
      });
    } else {
      showFailToast(t("categories.view.deleteError"));
    }

    setIdToDelete(undefined);
  };

  const columns: Column[] = [
    {
      title: "",
      field: "image",
      hozAlign: "left",
      width: 70,
      resizable: false,
      headerSort: false,
      formatter: imageFormatter,
    },
    {
      title: t("categories.view.code"),
      field: "code",
      hozAlign: "left",
      vertAlign: "middle",
      headerHozAlign: "left",
      minWidth: 110,
    },
    {
      title: t("categories.view.name"),
      field: "d.title",
      hozAlign: "left",
      vertAlign: "middle",
      headerHozAlign: "left",
      minWidth: 100,
      formatter: titleFormatter,
    },
    {
      title: t("categories.view.order"),
      field: "sortOrder",
      hozAlign: "center",
      vertAlign: "middle",
      headerHozAlign: "center",
      width: 110,
    },
    {
      title: t("global.active"),
      field: "active",
      hozAlign: "center",
      headerHozAlign: "center",
      width: 110,
      headerSort: false,
      vertAlign: "middle",
      formatter: activeFormatter,
    },
    {
      title: t("categories.view.numberOfProducts"),
      field: "numberOfProducts",
      hozAlign: "center",
      vertAlign: "middle",
      headerHozAlign: "center",
      width: 110,
      headerSort: false,
    },
    {
      title: t("categories.view.actions"),
      field: "actions",
      hozAlign: "center",
      vertAlign: "middle",
      headerHozAlign: "center",
      width: 250,
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
    ajaxURL: "api/category/",
    ajaxRequestFunc: fetchTableData,
    sortMode: "remote",
    initialSort: [{ column: "sortOrder", dir: "desc" }],
    filterMode: "remote",
    // To handle the parentId filter on page initialization where the location useEffect works but the table is not initialized yet
    initialFilter: [{ field: "parentId", type: "=", value: id }],
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
    rowClick: handleEditClick,
  };

  const handleSearchTermChange = (event: any) => {
    setSearchTerm(event.target.value.toLowerCase());
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

  // This method should be used to clear filters, since parentId filter is added as hidden filter
  const resetFilters = () => {
    ref.current.setFilter([{ field: "parentId", type: "=", value: id }]);
  };

  const handleSearch = () => {
    let filters = [];
    filters.push({ field: "parentId", type: "=", value: id });
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

  const resetButton = () => {
    setSearchTerm("");
    setActiveFilterValue(t("global.any"));
    resetFilters();
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap justify-between">
          <h2 className=" text-lg font-medium intro-y">
            {t("pages.categories")}
          </h2>
          {id !== undefined ? (
            <Link to={`/categories/form?parentId=${id}`}>
              <Button variant="primary" className="mr-2 shadow-md">
                {t("categories.view.addNewSubCategory")}
              </Button>
            </Link>
          ) : (
            <Link to="/categories/form">
              <Button variant="primary" className="mr-2 shadow-md">
                {t("categories.view.addNew")}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="p-5 mt-5 intro-y box">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start mb-4 mr-1">
          <FormInput
            id="searchTerm"
            type="text"
            className="mt-2 w-full sm:mt-0 sm:w-60"
            placeholder={t("categories.view.searchPlaceholder")}
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
          events={events}
          columns={columns}
          options={options}
        />

        {/* BEGIN: Delete Confirmation Modal */}
        <Dialog
          open={deleteConfirmationModal}
          onClose={() => {
            setDeleteConfirmationModal(false);
            setIdToDelete(undefined);
          }}
        >
          <Dialog.Panel>
            <div className="p-5 text-center">
              <Lucide
                icon="XCircle"
                className="w-16 h-16 mx-auto mt-3 text-danger"
              />
              <div className="mt-5 text-3xl">
                {t("categories.view.deleteMessage")}
              </div>
              <div className="mt-2 text-slate-500">
                {t("global.deleteWarning")}
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => {
                  setDeleteConfirmationModal(false);
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
                onClick={() => handleDeleteConfirmation()}
              >
                {t("global.delete")}
              </Button>
            </div>
          </Dialog.Panel>
        </Dialog>
        {/* END: Delete Confirmation Modal */}
      </div>
    </>
  );
}

export default CategoriesView;
