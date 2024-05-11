import i18n from "i18next";
import "./i18n/config";
import ScrollToTop from "./base-components/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import "./assets/css/app.css";
import App from "./app";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "./assets/css/filepond.css";
import "./assets/css/tomSelect.css";

i18n.init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <ScrollToTop />
  </BrowserRouter>
);
