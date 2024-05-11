import Router from "./router";
import { Suspense, lazy, useEffect, useState } from "react";
import Notification from "./base-components/Notification";
import Lucide from "./base-components/Lucide";
import LoadingIcon from "./base-components/LoadingIcon";
import authService from "./services/authService";
import { registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

/* These plugins are used for the Filepond component which is used to
upload multiple images, once registering the plugins they are applied to the component.
More on Filepond plugins: https://pqina.nl/filepond/docs/api/plugins/ */
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);

function App() {
  const LoginForm = lazy(() => import("./matjarnaPages/Login"));
  const [isAuth, setIsAuth] = useState(authService.isAuthenticated());
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <LoadingIcon
            icon="spinning-circles"
            className="w-8 h-8"
            color="white"
          />
        </div>
      }
    >
      {isAuth ? <Router /> : <LoginForm setIsAuth={setIsAuth} />}
      {/* BEGIN: Success Notification Content */}
      <Notification id="success-notification-content" className="flex hidden">
        <Lucide icon="CheckCircle" className="text-success" />
        <div className="ml-4 mr-4">
          <div id="success-notification" className="font-medium"></div>
        </div>
      </Notification>
      {/* END: Success Notification Content */}
      {/* BEGIN: Failed Notification Content */}
      <Notification id="failed-notification-content" className="flex hidden">
        <Lucide icon="XCircle" className="text-danger" />
        <div className="ml-4 mr-4">
          <div id="fail-notification" className="font-medium"></div>
        </div>
      </Notification>
      {/* END: Failed Notification Content */}
    </Suspense>
  );
}
export default App;
