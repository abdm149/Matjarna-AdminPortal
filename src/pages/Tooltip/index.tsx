import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import Button from "../../base-components/Button";
import Tippy from "../../base-components/Tippy";
import TippyContent from "../../base-components/TippyContent";
import { FormSwitch } from "../../base-components/Form";
import fakerData from "../../utils/faker";
import SimpleLineChart1 from "../../components/SimpleLineChart1";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Tooltip</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Basic Tooltip */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Tooltip
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
                    <div className="text-center">
                      <Tippy
                        as={Button}
                        variant="primary"
                        content="This is awesome tooltip example!"
                      >
                        Show Tooltip
                      </Tippy>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                <Tippy
                  as={Button}
                  variant="primary"
                  content="This is awesome tooltip example!"
                >
                  Show Tooltip
                </Tippy>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Tooltip */}
          {/* BEGIN: On CLick Tooltip */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    On Click Tooltip
                  </h2>
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
                    <div className="text-center">
                      <Tippy
                        as={Button}
                        variant="primary"
                        content="This is awesome tooltip example!"
                        options={{
                          trigger: "click",
                        }}
                      >
                        Show Tooltip
                      </Tippy>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                <Tippy
                  as={Button}
                  variant="primary"
                  content="This is awesome tooltip example!"
                  options={{
                    trigger: "click",
                  }}
                >
                  Show Tooltip
                </Tippy>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: On CLick Tooltip */}
          {/* BEGIN: Light Tooltip */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Light Tooltip
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
                    <div className="text-center">
                      <Tippy
                        as={Button}
                        variant="primary"
                        content="This is awesome tooltip example!"
                        options={{
                          theme: "light",
                        }}
                      >
                        Show Tooltip
                      </Tippy>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                <Tippy
                  as={Button}
                  variant="primary"
                  content="This is awesome tooltip example!"
                  options={{
                    theme: "light",
                  }}
                >
                  Show Tooltip
                </Tippy>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Light Tooltip */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Custom Content Tooltip */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Custom Tooltip Content
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
                    {/* BEGIN: Custom Tooltip Toggle */}
                    <div className="text-center">
                      <Button
                        variant="primary"
                        data-tooltip="custom-tooltip-content"
                      >
                        Show Tooltip
                      </Button>
                    </div>
                    {/* END: Custom Tooltip Toggle */}
                    {/* BEGIN: Custom Tooltip Content */}
                    <div className="tooltip-content">
                      <TippyContent to="custom-tooltip-content">
                        <div className="relative flex items-center py-1">
                          <div className="w-12 h-12 image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full"
                              src={fakerData[0].photos[0]}
                            />
                          </div>
                          <div className="ml-4 mr-auto">
                            <div className="font-medium leading-relaxed dark:text-slate-200">
                              {fakerData[0].users[0].name}
                            </div>
                            <div className="text-slate-500 dark:text-slate-400">
                              TailwindCSS 3+ HTML Admin Template
                            </div>
                          </div>
                        </div>
                      </TippyContent>
                    </div>
                    {/* END: Custom Tooltip Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Custom Tooltip Toggle */}
              <div className="text-center">
                <Button
                  variant="primary"
                  data-tooltip="custom-tooltip-content"
                >
                  Show Tooltip
                </Button>
              </div>
              {/* END: Custom Tooltip Toggle */}
              {/* BEGIN: Custom Tooltip Content */}
              <div className="tooltip-content">
                <TippyContent to="custom-tooltip-content">
                  <div
                    className="relative flex items-center py-1"
                  >
                    <div className="w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={fakerData[0].photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium leading-relaxed dark:text-slate-200">
                        {fakerData[0].users[0].name}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400">
                        TailwindCSS 3+ HTML Admin Template
                      </div>
                    </div>
                  </div>
                </TippyContent>
              </div>
              {/* END: Custom Tooltip Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Custom Content Tooltip */}
          {/* BEGIN: Chart Tooltip */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Chart Tooltip
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
                    {/* BEGIN: Custom Tooltip Toggle */}
                    <div className="text-center">
                      <Button variant="primary" data-tooltip="chart-tooltip">
                        Show Tooltip
                      </Button>
                    </div>
                    {/* END: Custom Tooltip Toggle */}
                    {/* BEGIN: Custom Tooltip Content */}
                    <div className="tooltip-content">
                      <TippyContent to="chart-tooltip" className="py-1">
                        <div className="font-medium dark:text-slate-200">
                          Net Worth
                        </div>
                        <div className="flex items-center mt-2 sm:mt-0">
                          <div className="flex w-20 mr-2 dark:text-slate-400">
                            USP:
                            <span className="ml-auto font-medium text-success">
                              +23%
                            </span>
                          </div>
                          <div className="w-24 sm:w-32 lg:w-56">
                            <SimpleLineChart1 height={30} />
                          </div>
                        </div>
                      </TippyContent>
                    </div>
                    {/* END: Custom Tooltip Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Custom Tooltip Toggle */}
              <div className="text-center">
                <Button
                  variant="primary"
                  data-tooltip="chart-tooltip"
                >
                  Show Tooltip
                </Button>
              </div>
              {/* END: Custom Tooltip Toggle */}
              {/* BEGIN: Custom Tooltip Content */}
              <div className="tooltip-content">
                <TippyContent to="chart-tooltip" className="py-1">
                  <div className="font-medium dark:text-slate-200">
                    Net Worth
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <div className="flex w-20 mr-2 dark:text-slate-400">
                      USP:
                      <span className="ml-auto font-medium text-success">
                        +23%
                      </span>
                    </div>
                    <div className="w-24 sm:w-32 lg:w-56">
                      <SimpleLineChart1 height={30} />
                    </div>
                  </div>
                </TippyContent>
              </div>
              {/* END: Custom Tooltip Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Chart Tooltip */}
        </div>
      </div>
    </>
  );
}

export default Main;
