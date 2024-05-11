import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import ErrorPage from "../pages/ErrorPage";

const LoginForm = lazy(() => import("../matjarnaPages/Login"));

const CategoriesView = lazy(() => import("../matjarnaPages/Categories"));
const CategoriesForm = lazy(() => import("../matjarnaPages/Categories/form"));
const ProductsView = lazy(() => import("../matjarnaPages/Products"));
const ProductsForm = lazy(() => import("../matjarnaPages/Products/form"));
const UsersView = lazy(() => import("../matjarnaPages/Users"));
const UsersForm = lazy(() => import("../matjarnaPages/Users/form"));

const SimpleMenu = lazy(() => import("../layouts/SimpleMenu"));
const TopMenu = lazy(() => import("../layouts/TopMenu"));
const DashboardOverview1 = lazy(() => import("../pages/DashboardOverview1"));
const DashboardOverview2 = lazy(() => import("../pages/DashboardOverview2"));
const DashboardOverview3 = lazy(() => import("../pages/DashboardOverview3"));
const DashboardOverview4 = lazy(() => import("../pages/DashboardOverview4"));
const Categories = lazy(() => import("../pages/Categories"));
const AddProduct = lazy(() => import("../pages/AddProduct"));
const ProductList = lazy(() => import("../pages/ProductList"));
const ProductGrid = lazy(() => import("../pages/ProductGrid"));
const TransactionList = lazy(() => import("../pages/TransactionList"));
const TransactionDetail = lazy(() => import("../pages/TransactionDetail"));
const SellerList = lazy(() => import("../pages/SellerList"));
const SellerDetail = lazy(() => import("../pages/SellerDetail"));
const Reviews = lazy(() => import("../pages/Reviews"));
const Inbox = lazy(() => import("../pages/Inbox"));
const FileManager = lazy(() => import("../pages/FileManager"));
const PointOfSale = lazy(() => import("../pages/PointOfSale"));
const Chat = lazy(() => import("../pages/Chat"));
const Post = lazy(() => import("../pages/Post"));
const Calendar = lazy(() => import("../pages/Calendar"));
const CrudDataList = lazy(() => import("../pages/CrudDataList"));
const CrudForm = lazy(() => import("../pages/CrudForm"));
const UsersLayout1 = lazy(() => import("../pages/UsersLayout1"));
const UsersLayout2 = lazy(() => import("../pages/UsersLayout2"));
const UsersLayout3 = lazy(() => import("../pages/UsersLayout3"));
const ProfileOverview1 = lazy(() => import("../pages/ProfileOverview1"));
const ProfileOverview2 = lazy(() => import("../pages/ProfileOverview2"));
const ProfileOverview3 = lazy(() => import("../pages/ProfileOverview3"));
const WizardLayout1 = lazy(() => import("../pages/WizardLayout1"));
const WizardLayout2 = lazy(() => import("../pages/WizardLayout2"));
const WizardLayout3 = lazy(() => import("../pages/WizardLayout3"));
const BlogLayout1 = lazy(() => import("../pages/BlogLayout1"));
const BlogLayout2 = lazy(() => import("../pages/BlogLayout2"));
const BlogLayout3 = lazy(() => import("../pages/BlogLayout3"));
const PricingLayout1 = lazy(() => import("../pages/PricingLayout1"));
const PricingLayout2 = lazy(() => import("../pages/PricingLayout2"));
const InvoiceLayout1 = lazy(() => import("../pages/InvoiceLayout1"));
const InvoiceLayout2 = lazy(() => import("../pages/InvoiceLayout2"));
const FaqLayout1 = lazy(() => import("../pages/FaqLayout1"));
const FaqLayout2 = lazy(() => import("../pages/FaqLayout2"));
const FaqLayout3 = lazy(() => import("../pages/FaqLayout3"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const UpdateProfile = lazy(() => import("../pages/UpdateProfile"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const RegularTable = lazy(() => import("../pages/RegularTable"));
const Tabulator = lazy(() => import("../pages/Tabulator"));
const Modal = lazy(() => import("../pages/Modal"));
const Slideover = lazy(() => import("../pages/Slideover"));
const Notification = lazy(() => import("../pages/Notification"));
const Tab = lazy(() => import("../pages/Tab"));
const Accordion = lazy(() => import("../pages/Accordion"));
const Button = lazy(() => import("../pages/Button"));
const Alert = lazy(() => import("../pages/Alert"));
const ProgressBar = lazy(() => import("../pages/ProgressBar"));
const Tooltip = lazy(() => import("../pages/Tooltip"));
const Dropdown = lazy(() => import("../pages/Dropdown"));
const Typography = lazy(() => import("../pages/Typography"));
const Icon = lazy(() => import("../pages/Icon"));
const LoadingIcon = lazy(() => import("../pages/LoadingIcon"));
const RegularForm = lazy(() => import("../pages/RegularForm"));
const Datepicker = lazy(() => import("../pages/Datepicker"));
const TomSelect = lazy(() => import("../pages/TomSelect"));
const FileUpload = lazy(() => import("../pages/FileUpload"));
const WysiwygEditor = lazy(() => import("../pages/WysiwygEditor"));
const Validation = lazy(() => import("../pages/Validation"));
const Chart = lazy(() => import("../pages/Chart"));
const Slider = lazy(() => import("../pages/Slider"));
const ImageZoom = lazy(() => import("../pages/ImageZoom"));

function Router() {
  const routes = [
    {
      path: "",
      element: <SideMenu />,
      children: [
        {
          path: "categories/form/:id?",
          element: <CategoriesForm />,
        },
        {
          path: "categories/:id?",
          element: <CategoriesView />,
        },
        { 
          path: "users",
          element: <UsersView />,
        },
        { 
          path: "users/form",
          element: <UsersForm />,
        },
        {
          path: "products",
          element: <ProductsView />,
        },
        {
          path: "products/form/:id?",
          element: <ProductsForm />,
        },
        {
          path: "",
          element: <DashboardOverview1 />,
        },
        {
          path: "dashboard-overview-2",
          element: <DashboardOverview2 />,
        },
        {
          path: "dashboard-overview-3",
          element: <DashboardOverview3 />,
        },
        {
          path: "dashboard-overview-4",
          element: <DashboardOverview4 />,
        },
        {
          path: "categories-template",
          element: <Categories />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "product-list",
          element: <ProductList />,
        },
        {
          path: "product-grid",
          element: <ProductGrid />,
        },
        {
          path: "transaction-list",
          element: <TransactionList />,
        },
        {
          path: "transaction-detail",
          element: <TransactionDetail />,
        },
        {
          path: "seller-list",
          element: <SellerList />,
        },
        {
          path: "seller-detail",
          element: <SellerDetail />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "inbox",
          element: <Inbox />,
        },
        {
          path: "file-manager",
          element: <FileManager />,
        },
        {
          path: "point-of-sale",
          element: <PointOfSale />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "crud-data-list",
          element: <CrudDataList />,
        },
        {
          path: "crud-form",
          element: <CrudForm />,
        },
        {
          path: "users-layout-1",
          element: <UsersLayout1 />,
        },
        {
          path: "users-layout-2",
          element: <UsersLayout2 />,
        },
        {
          path: "users-layout-3",
          element: <UsersLayout3 />,
        },
        {
          path: "profile-overview-1",
          element: <ProfileOverview1 />,
        },
        {
          path: "profile-overview-2",
          element: <ProfileOverview2 />,
        },
        {
          path: "profile-overview-3",
          element: <ProfileOverview3 />,
        },
        {
          path: "wizard-layout-1",
          element: <WizardLayout1 />,
        },
        {
          path: "wizard-layout-2",
          element: <WizardLayout2 />,
        },
        {
          path: "wizard-layout-3",
          element: <WizardLayout3 />,
        },
        {
          path: "blog-layout-1",
          element: <BlogLayout1 />,
        },
        {
          path: "blog-layout-2",
          element: <BlogLayout2 />,
        },
        {
          path: "blog-layout-3",
          element: <BlogLayout3 />,
        },
        {
          path: "pricing-layout-1",
          element: <PricingLayout1 />,
        },
        {
          path: "pricing-layout-2",
          element: <PricingLayout2 />,
        },
        {
          path: "invoice-layout-1",
          element: <InvoiceLayout1 />,
        },
        {
          path: "invoice-layout-2",
          element: <InvoiceLayout2 />,
        },
        {
          path: "faq-layout-1",
          element: <FaqLayout1 />,
        },
        {
          path: "faq-layout-2",
          element: <FaqLayout2 />,
        },
        {
          path: "faq-layout-3",
          element: <FaqLayout3 />,
        },
        {
          path: "update-profile",
          element: <UpdateProfile />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
        {
          path: "regular-table",
          element: <RegularTable />,
        },
        {
          path: "tabulator",
          element: <Tabulator />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "slideover",
          element: <Slideover />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "tab",
          element: <Tab />,
        },
        {
          path: "accordion",
          element: <Accordion />,
        },
        {
          path: "button",
          element: <Button />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "progress-bar",
          element: <ProgressBar />,
        },
        {
          path: "tooltip",
          element: <Tooltip />,
        },
        {
          path: "dropdown",
          element: <Dropdown />,
        },
        {
          path: "typography",
          element: <Typography />,
        },
        {
          path: "icon",
          element: <Icon />,
        },
        {
          path: "loading-icon",
          element: <LoadingIcon />,
        },
        {
          path: "regular-form",
          element: <RegularForm />,
        },
        {
          path: "datepicker",
          element: <Datepicker />,
        },
        {
          path: "tom-select",
          element: <TomSelect />,
        },
        {
          path: "file-upload",
          element: <FileUpload />,
        },
        {
          path: "wysiwyg-editor",
          element: <WysiwygEditor />,
        },
        {
          path: "validation",
          element: <Validation />,
        },
        {
          path: "chart",
          element: <Chart />,
        },
        {
          path: "slider",
          element: <Slider />,
        },
        {
          path: "image-zoom",
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: "/simple-menu",
      element: <SimpleMenu />,
      children: [
        {
          path: "categories/form/:id?",
          element: <CategoriesForm />,
        },
        {
          path: "categories",
          element: <CategoriesView />,
        },
        {
          path: "/simple-menu",
          element: <DashboardOverview1 />,
        },
        {
          path: "dashboard-overview-2",
          element: <DashboardOverview2 />,
        },
        {
          path: "dashboard-overview-3",
          element: <DashboardOverview3 />,
        },
        {
          path: "dashboard-overview-4",
          element: <DashboardOverview4 />,
        },
        {
          path: "categories-template",
          element: <Categories />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "product-list",
          element: <ProductList />,
        },
        {
          path: "product-grid",
          element: <ProductGrid />,
        },
        {
          path: "transaction-list",
          element: <TransactionList />,
        },
        {
          path: "transaction-detail",
          element: <TransactionDetail />,
        },
        {
          path: "seller-list",
          element: <SellerList />,
        },
        {
          path: "seller-detail",
          element: <SellerDetail />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "inbox",
          element: <Inbox />,
        },
        {
          path: "file-manager",
          element: <FileManager />,
        },
        {
          path: "point-of-sale",
          element: <PointOfSale />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "crud-data-list",
          element: <CrudDataList />,
        },
        {
          path: "crud-form",
          element: <CrudForm />,
        },
        {
          path: "users-layout-1",
          element: <UsersLayout1 />,
        },
        {
          path: "users-layout-2",
          element: <UsersLayout2 />,
        },
        {
          path: "users-layout-3",
          element: <UsersLayout3 />,
        },
        {
          path: "profile-overview-1",
          element: <ProfileOverview1 />,
        },
        {
          path: "profile-overview-2",
          element: <ProfileOverview2 />,
        },
        {
          path: "profile-overview-3",
          element: <ProfileOverview3 />,
        },
        {
          path: "wizard-layout-1",
          element: <WizardLayout1 />,
        },
        {
          path: "wizard-layout-2",
          element: <WizardLayout2 />,
        },
        {
          path: "wizard-layout-3",
          element: <WizardLayout3 />,
        },
        {
          path: "blog-layout-1",
          element: <BlogLayout1 />,
        },
        {
          path: "blog-layout-2",
          element: <BlogLayout2 />,
        },
        {
          path: "blog-layout-3",
          element: <BlogLayout3 />,
        },
        {
          path: "pricing-layout-1",
          element: <PricingLayout1 />,
        },
        {
          path: "pricing-layout-2",
          element: <PricingLayout2 />,
        },
        {
          path: "invoice-layout-1",
          element: <InvoiceLayout1 />,
        },
        {
          path: "invoice-layout-2",
          element: <InvoiceLayout2 />,
        },
        {
          path: "faq-layout-1",
          element: <FaqLayout1 />,
        },
        {
          path: "faq-layout-2",
          element: <FaqLayout2 />,
        },
        {
          path: "faq-layout-3",
          element: <FaqLayout3 />,
        },
        {
          path: "update-profile",
          element: <UpdateProfile />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
        {
          path: "regular-table",
          element: <RegularTable />,
        },
        {
          path: "tabulator",
          element: <Tabulator />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "slideover",
          element: <Slideover />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "tab",
          element: <Tab />,
        },
        {
          path: "accordion",
          element: <Accordion />,
        },
        {
          path: "button",
          element: <Button />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "progress-bar",
          element: <ProgressBar />,
        },
        {
          path: "tooltip",
          element: <Tooltip />,
        },
        {
          path: "dropdown",
          element: <Dropdown />,
        },
        {
          path: "typography",
          element: <Typography />,
        },
        {
          path: "icon",
          element: <Icon />,
        },
        {
          path: "loading-icon",
          element: <LoadingIcon />,
        },
        {
          path: "regular-form",
          element: <RegularForm />,
        },
        {
          path: "datepicker",
          element: <Datepicker />,
        },
        {
          path: "tom-select",
          element: <TomSelect />,
        },
        {
          path: "file-upload",
          element: <FileUpload />,
        },
        {
          path: "wysiwyg-editor",
          element: <WysiwygEditor />,
        },
        {
          path: "validation",
          element: <Validation />,
        },
        {
          path: "chart",
          element: <Chart />,
        },
        {
          path: "slider",
          element: <Slider />,
        },
        {
          path: "image-zoom",
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: "/top-menu",
      element: <TopMenu />,
      children: [
        {
          path: "categories/form/:id?",
          element: <CategoriesForm />,
        },
        {
          path: "categories",
          element: <CategoriesView />,
        },
        {
          path: "/top-menu",
          element: <DashboardOverview1 />,
        },
        {
          path: "dashboard-overview-2",
          element: <DashboardOverview2 />,
        },
        {
          path: "dashboard-overview-3",
          element: <DashboardOverview3 />,
        },
        {
          path: "dashboard-overview-4",
          element: <DashboardOverview4 />,
        },
        {
          path: "categories-template",
          element: <Categories />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "product-list",
          element: <ProductList />,
        },
        {
          path: "product-grid",
          element: <ProductGrid />,
        },
        {
          path: "transaction-list",
          element: <TransactionList />,
        },
        {
          path: "transaction-detail",
          element: <TransactionDetail />,
        },
        {
          path: "seller-list",
          element: <SellerList />,
        },
        {
          path: "seller-detail",
          element: <SellerDetail />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "inbox",
          element: <Inbox />,
        },
        {
          path: "file-manager",
          element: <FileManager />,
        },
        {
          path: "point-of-sale",
          element: <PointOfSale />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "crud-data-list",
          element: <CrudDataList />,
        },
        {
          path: "crud-form",
          element: <CrudForm />,
        },
        {
          path: "users-layout-1",
          element: <UsersLayout1 />,
        },
        {
          path: "users-layout-2",
          element: <UsersLayout2 />,
        },
        {
          path: "users-layout-3",
          element: <UsersLayout3 />,
        },
        {
          path: "profile-overview-1",
          element: <ProfileOverview1 />,
        },
        {
          path: "profile-overview-2",
          element: <ProfileOverview2 />,
        },
        {
          path: "profile-overview-3",
          element: <ProfileOverview3 />,
        },
        {
          path: "wizard-layout-1",
          element: <WizardLayout1 />,
        },
        {
          path: "wizard-layout-2",
          element: <WizardLayout2 />,
        },
        {
          path: "wizard-layout-3",
          element: <WizardLayout3 />,
        },
        {
          path: "blog-layout-1",
          element: <BlogLayout1 />,
        },
        {
          path: "blog-layout-2",
          element: <BlogLayout2 />,
        },
        {
          path: "blog-layout-3",
          element: <BlogLayout3 />,
        },
        {
          path: "pricing-layout-1",
          element: <PricingLayout1 />,
        },
        {
          path: "pricing-layout-2",
          element: <PricingLayout2 />,
        },
        {
          path: "invoice-layout-1",
          element: <InvoiceLayout1 />,
        },
        {
          path: "invoice-layout-2",
          element: <InvoiceLayout2 />,
        },
        {
          path: "faq-layout-1",
          element: <FaqLayout1 />,
        },
        {
          path: "faq-layout-2",
          element: <FaqLayout2 />,
        },
        {
          path: "faq-layout-3",
          element: <FaqLayout3 />,
        },
        {
          path: "update-profile",
          element: <UpdateProfile />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
        {
          path: "regular-table",
          element: <RegularTable />,
        },
        {
          path: "tabulator",
          element: <Tabulator />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "slideover",
          element: <Slideover />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "tab",
          element: <Tab />,
        },
        {
          path: "accordion",
          element: <Accordion />,
        },
        {
          path: "button",
          element: <Button />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "progress-bar",
          element: <ProgressBar />,
        },
        {
          path: "tooltip",
          element: <Tooltip />,
        },
        {
          path: "dropdown",
          element: <Dropdown />,
        },
        {
          path: "typography",
          element: <Typography />,
        },
        {
          path: "icon",
          element: <Icon />,
        },
        {
          path: "loading-icon",
          element: <LoadingIcon />,
        },
        {
          path: "regular-form",
          element: <RegularForm />,
        },
        {
          path: "datepicker",
          element: <Datepicker />,
        },
        {
          path: "tom-select",
          element: <TomSelect />,
        },
        {
          path: "file-upload",
          element: <FileUpload />,
        },
        {
          path: "wysiwyg-editor",
          element: <WysiwygEditor />,
        },
        {
          path: "validation",
          element: <Validation />,
        },
        {
          path: "chart",
          element: <Chart />,
        },
        {
          path: "slider",
          element: <Slider />,
        },
        {
          path: "image-zoom",
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
