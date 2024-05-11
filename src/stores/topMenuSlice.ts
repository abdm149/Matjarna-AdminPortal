import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface TopMenuState {
  menu: Array<Menu>;
}

const initialState: TopMenuState = {
  menu: [
    {
      icon: "Home",
      title: "Dashboard",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/top-menu/dashboard-overview-1",
          title: "Overview 1",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/dashboard-overview-2",
          title: "Overview 2",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/dashboard-overview-3",
          title: "Overview 3",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/dashboard-overview-4",
          title: "Overview 4",
        },
      ],
    },
    {
      icon: "Box",
      title: "Menu Layout",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/",
          title: "Side Menu",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/simple-menu/dashboard-overview-1",
          title: "Simple Menu",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/top-menu/dashboard-overview-1",
          title: "Top Menu",
          ignore: true,
        },
      ],
    },
    {
      icon: "Activity",
      title: "Apps",
      subMenu: [
        {
          icon: "Users",
          title: "Users",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/users-layout-1",
              title: "Layout 1",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/users-layout-2",
              title: "Layout 2",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/users-layout-3",
              title: "Layout 3",
            },
          ],
        },
        {
          icon: "Trello",
          title: "Profile",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/profile-overview-1",
              title: "Overview 1",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/profile-overview-2",
              title: "Overview 2",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/profile-overview-3",
              title: "Overview 3",
            },
          ],
        },
        {
          icon: "ShoppingBag",
          pathname: "/top-menu/ecommerce",
          title: "E-Commerce",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/categories",
              title: "Categories",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/add-product",
              title: "Add Product",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/product-list",
              title: "Product List",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/product-grid",
              title: "Product Grid",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/transaction-list",
              title: "Transaction List",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/transaction-detail",
              title: "Transaction Detail",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/seller-list",
              title: "Seller List",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/seller-detail",
              title: "Seller Detail",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/reviews",
              title: "Reviews",
            },
          ],
        },
        {
          icon: "Inbox",
          pathname: "/top-menu/inbox",
          title: "Inbox",
        },
        {
          icon: "Folder",
          pathname: "/top-menu/file-manager",
          title: "File Manager",
        },
        {
          icon: "CreditCard",
          pathname: "/top-menu/point-of-sale",
          title: "Point of Sale",
        },
        {
          icon: "MessageSquare",
          pathname: "/top-menu/chat",
          title: "Chat",
        },
        {
          icon: "FileText",
          pathname: "/top-menu/post",
          title: "Post",
        },
        {
          icon: "Calendar",
          pathname: "/top-menu/calendar",
          title: "Calendar",
        },
        {
          icon: "Edit",
          title: "Crud",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/crud-data-list",
              title: "Data List",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/crud-form",
              title: "Form",
            },
          ],
        },
      ],
    },
    {
      icon: "Layout",
      title: "Pages",
      subMenu: [
        {
          icon: "Activity",
          title: "Wizards",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/wizard-layout-1",
              title: "Layout 1",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/wizard-layout-2",
              title: "Layout 2",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/wizard-layout-3",
              title: "Layout 3",
            },
          ],
        },
        {
          icon: "Activity",
          title: "Blog",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/blog-layout-1",
              title: "Layout 1",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/blog-layout-2",
              title: "Layout 2",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/blog-layout-3",
              title: "Layout 3",
            },
          ],
        },
        {
          icon: "Activity",
          title: "Pricing",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/pricing-layout-1",
              title: "Layout 1",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/pricing-layout-2",
              title: "Layout 2",
            },
          ],
        },
        {
          icon: "Activity",
          title: "Invoice",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/invoice-layout-1",
              title: "Layout 1",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/invoice-layout-2",
              title: "Layout 2",
            },
          ],
        },
        {
          icon: "Activity",
          title: "FAQ",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/faq-layout-1",
              title: "Layout 1",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/faq-layout-2",
              title: "Layout 2",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/faq-layout-3",
              title: "Layout 3",
            },
          ],
        },
        {
          icon: "Activity",
          pathname: "login",
          title: "Login",
        },
        {
          icon: "Activity",
          pathname: "register",
          title: "Register",
        },
        {
          icon: "Activity",
          pathname: "error-page",
          title: "Error Page",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/update-profile",
          title: "Update profile",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/change-password",
          title: "Change Password",
        },
      ],
    },
    {
      icon: "Inbox",
      title: "Components",
      subMenu: [
        {
          icon: "Activity",
          title: "Table",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/regular-table",
              title: "Regular Table",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/tabulator",
              title: "Tabulator",
            },
          ],
        },
        {
          icon: "Activity",
          title: "Overlay",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/top-menu/modal",
              title: "Modal",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/slideover",
              title: "Slide Over",
            },
            {
              icon: "Zap",
              pathname: "/top-menu/notification",
              title: "Notification",
            },
          ],
        },
        {
          icon: "Activity",
          pathname: "/top-menu/tab",
          title: "Tab",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/accordion",
          title: "Accordion",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/button",
          title: "Button",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/alert",
          title: "Alert",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/progress-bar",
          title: "Progress Bar",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/tooltip",
          title: "Tooltip",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/dropdown",
          title: "Dropdown",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/typography",
          title: "Typography",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/icon",
          title: "Icon",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/loading-icon",
          title: "Loading Icon",
        },
      ],
    },
    {
      icon: "Sidebar",
      title: "Forms",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/top-menu/regular-form",
          title: "Regular Form",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/datepicker",
          title: "Datepicker",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/tom-select",
          title: "Tom Select",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/file-upload",
          title: "File Upload",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/wysiwyg-editor",
          title: "Wysiwyg Editor",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/validation",
          title: "Validation",
        },
      ],
    },
    {
      icon: "HardDrive",
      title: "Widgets",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/top-menu/chart",
          title: "Chart",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/slider",
          title: "Slider",
        },
        {
          icon: "Activity",
          pathname: "/top-menu/image-zoom",
          title: "Image Zoom",
        },
      ],
    },
  ],
};

export const topMenuSlice = createSlice({
  name: "topMenu",
  initialState,
  reducers: {},
});

export const selectTopMenu = (state: RootState) => state.topMenu.menu;

export default topMenuSlice.reducer;
