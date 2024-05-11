import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import Progress from "../../base-components/Progress";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Progressbar</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Basic Progressbar */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Progressbar
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
                    <Progress>
                      <Progress.Bar
                        className="w-1/2"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                    <Progress className="mt-3">
                      <Progress.Bar
                        className="w-2/3"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                    <Progress className="mt-3">
                      <Progress.Bar
                        className="w-3/4"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <div
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="mt-3">
                <div
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="mt-3">
                <div
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Progressbar */}
          {/* BEGIN: Progressbar With Label */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Progressbar with Label
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
                    <Progress className="h-4">
                      <Progress.Bar
                        className="w-1/2"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        50%
                      </Progress.Bar>
                    </Progress>
                    <Progress className="h-4 mt-3">
                      <Progress.Bar
                        className="w-2/3"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        60%
                      </Progress.Bar>
                    </Progress>
                    <Progress className="h-4 mt-3">
                      <Progress.Bar
                        className="w-3/4"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        70%
                      </Progress.Bar>
                    </Progress>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="h-4">
                <div
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  50%
                </div>
              </div>
              <div className="h-4 mt-3">
                <div
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  60%
                </div>
              </div>
              <div className="h-4 mt-3">
                <div
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  70%
                </div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Progressbar With Label */}
          {/* BEGIN: Progressbar Height */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Progressbar Height
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
                    <Progress className="h-1">
                      <Progress.Bar
                        className="w-1/2"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                    <Progress className="mt-3">
                      <Progress.Bar
                        className="w-2/3"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                    <Progress className="h-3 mt-3">
                      <Progress.Bar
                        className="w-3/4"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="h-1">
                <div
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="mt-3">
                <div
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="h-3 mt-3">
                <div
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Progressbar Height */}
          {/* BEGIN: Progressbar Color */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Progressbar Color
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
                    <Progress>
                      <Progress.Bar
                        className="w-1/2"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                    <Progress className="mt-3">
                      <Progress.Bar
                        className="w-2/3 bg-success"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                    <Progress className="mt-3">
                      <Progress.Bar
                        className="w-3/4 bg-warning"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                    <Progress className="mt-3">
                      <Progress.Bar
                        className="w-3/4 bg-danger"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></Progress.Bar>
                    </Progress>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <div
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="mt-3">
                <div
                  className="w-2/3 bg-success"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="mt-3">
                <div
                  className="w-3/4 bg-warning"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="mt-3">
                <div
                  className="w-3/4 bg-danger"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Progressbar Color */}
        </div>
      </div>
    </>
  );
}

export default Main;
