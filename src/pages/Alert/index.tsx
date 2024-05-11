import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import Alert from "../../base-components/Alert";
import Lucide from "../../base-components/Lucide";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Alert</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Alert */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Alerts
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-1">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-1"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Alert variant="primary" className="mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert variant="secondary" className="mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert variant="success" className="mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert variant="warning" className="mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert variant="pending" className="mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert variant="danger" className="mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert variant="dark" className="mb-2">
                      Awesome simple alert
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Alert variant="primary" className="mb-2">
                  Awesome simple alert
                </Alert>
                <Alert variant="secondary" className="mb-2">
                  Awesome simple alert
                </Alert>
                <Alert variant="success" className="mb-2">
                  Awesome simple alert
                </Alert>
                <Alert variant="warning" className="mb-2">
                  Awesome simple alert
                </Alert>
                <Alert variant="pending" className="mb-2">
                  Awesome simple alert
                </Alert>
                <Alert variant="danger" className="mb-2">
                  Awesome simple alert
                </Alert>
                <Alert variant="dark" className="mb-2">
                  Awesome simple alert
                </Alert>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Alert */}
          {/* BEGIN: Icon's Alert */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Icon Alerts</h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-2">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-2"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Alert variant="primary" className="flex items-center mb-2">
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert
                      variant="secondary"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert variant="success" className="flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert variant="warning" className="flex items-center mb-2">
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert variant="pending" className="flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert variant="danger" className="flex items-center mb-2">
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert variant="dark" className="flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Alert variant="primary" className="flex items-center mb-2">
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert
                  variant="secondary"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert variant="success" className="flex items-center mb-2">
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert variant="warning" className="flex items-center mb-2">
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert variant="pending" className="flex items-center mb-2">
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert variant="danger" className="flex items-center mb-2">
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert variant="dark" className="flex items-center mb-2">
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon's Alert */}
          {/* BEGIN: Additional Content Alert */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Additional Content Alerts
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-3">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-3"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Alert variant="primary" className="mb-2">
                      <div className="flex items-center">
                        <div className="text-lg font-medium">
                          Awesome alert with additional info
                        </div>
                        <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert variant="secondary" className="mb-2">
                      <div className="flex items-center">
                        <div className="text-lg font-medium">
                          Awesome alert with additional info
                        </div>
                        <div className="px-1 ml-auto text-xs text-white rounded-md bg-slate-500">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert variant="success" className="mb-2">
                      <div className="flex items-center">
                        <div className="text-lg font-medium">
                          Awesome alert with additional info
                        </div>
                        <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert variant="warning" className="mb-2">
                      <div className="flex items-center">
                        <div className="text-lg font-medium">
                          Awesome alert with additional info
                        </div>
                        <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert variant="pending" className="mb-2">
                      <div className="flex items-center">
                        <div className="text-lg font-medium">
                          Awesome alert with additional info
                        </div>
                        <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert variant="danger" className="mb-2">
                      <div className="flex items-center">
                        <div className="text-lg font-medium">
                          Awesome alert with additional info
                        </div>
                        <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert variant="dark" className="mb-2">
                      <div className="flex items-center">
                        <div className="text-lg font-medium">
                          Awesome alert with additional info
                        </div>
                        <div className="px-1 ml-auto text-xs text-white rounded-md bg-slate-500">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Alert variant="primary" className="mb-2">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      Awesome alert with additional info
                    </div>
                    <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </div>
                </Alert>
                <Alert variant="secondary" className="mb-2">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      Awesome alert with additional info
                    </div>
                    <div className="px-1 ml-auto text-xs text-white rounded-md bg-slate-500">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </div>
                </Alert>
                <Alert variant="success" className="mb-2">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      Awesome alert with additional info
                    </div>
                    <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </div>
                </Alert>
                <Alert variant="warning" className="mb-2">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      Awesome alert with additional info
                    </div>
                    <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </div>
                </Alert>
                <Alert variant="pending" className="mb-2">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      Awesome alert with additional info
                    </div>
                    <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </div>
                </Alert>
                <Alert variant="danger" className="mb-2">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      Awesome alert with additional info
                    </div>
                    <div className="px-1 ml-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </div>
                </Alert>
                <Alert variant="dark" className="mb-2">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      Awesome alert with additional info
                    </div>
                    <div className="px-1 ml-auto text-xs text-white rounded-md bg-slate-500">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </div>
                </Alert>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Additional Content Alert */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Icon & Dismiss Alert */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Icon & Dismiss Alerts
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-4">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-4"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Alert variant="primary" className="flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="text-white"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert
                      variant="secondary"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert variant="success" className="flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert variant="warning" className="flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert variant="pending" className="flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert variant="danger" className="flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="text-white"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert variant="dark" className="flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="text-white"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Alert variant="primary" className="flex items-center mb-2">
                  {({ dismiss }) => (
                    <>
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="text-white"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="secondary"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert variant="success" className="flex items-center mb-2">
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert variant="warning" className="flex items-center mb-2">
                  {({ dismiss }) => (
                    <>
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert variant="pending" className="flex items-center mb-2">
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert variant="danger" className="flex items-center mb-2">
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="text-white"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert variant="dark" className="flex items-center mb-2">
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="text-white"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon & Dismiss Alert */}
          {/* BEGIN: Outline Alert */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Outline Alerts
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-5">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-5"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Alert
                      variant="outline-primary"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert
                      variant="outline-secondary"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert
                      variant="outline-success"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert
                      variant="outline-warning"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert
                      variant="outline-pending"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert
                      variant="outline-danger"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                    <Alert
                      variant="outline-dark"
                      className="flex items-center mb-2"
                    >
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <Alert.DismissButton
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </>
                      )}
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Alert
                  variant="outline-primary"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-secondary"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-success"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-warning"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-pending"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-danger"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-dark"
                  className="flex items-center mb-2"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 mr-2"
                      />{" "}
                      Awesome alert with icon
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Outline Alert */}
          {/* BEGIN: Soft Color Alert */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Soft Color Alerts
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-6">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-6"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Alert
                      variant="soft-primary"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert
                      variant="soft-secondary"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert
                      variant="soft-success"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert
                      variant="soft-warning"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert
                      variant="soft-pending"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert
                      variant="soft-danger"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert
                      variant="soft-dark"
                      className="flex items-center mb-2"
                    >
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Alert
                  variant="soft-primary"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert
                  variant="soft-secondary"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert
                  variant="soft-success"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert
                  variant="soft-warning"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert
                  variant="soft-pending"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert
                  variant="soft-danger"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                <Alert
                  variant="soft-dark"
                  className="flex items-center mb-2"
                >
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                  Awesome alert with icon
                </Alert>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Soft Color Alert */}
        </div>
      </div>
    </>
  );
}

export default Main;
