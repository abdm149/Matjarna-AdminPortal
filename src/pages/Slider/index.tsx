import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import TinySlider from "../../base-components/TinySlider";
import { FormSwitch } from "../../base-components/Form";
import fakerData from "../../utils/faker";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Slider</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Single Item */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Single Item</h2>
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
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          controls: true,
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              6
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    controls: true,
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Single Item */}
          {/* BEGIN: Multiple Item */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Multiple Item
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
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          autoplay: false,
                          controls: true,
                          items: 1,
                          responsive: {
                            600: {
                              items: 3,
                            },
                            480: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              6
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              7
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              8
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              9
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        9
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Multiple Item */}
          {/* BEGIN: Responsive Display */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Responsive Display
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
                    <div className="pb-8 mx-6">
                      <TinySlider
                        options={{
                          autoplay: false,
                          controls: true,
                          items: 1,
                          nav: true,
                          responsive: {
                            600: {
                              items: 3,
                            },
                            480: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              6
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              7
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              8
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="pb-8 mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    nav: true,
                    responsive: {
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Responsive Display */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Center Mode */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Center Mode</h2>
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
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          autoplay: false,
                          controls: true,
                          center: true,
                          items: 1,
                          responsive: {
                            600: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                            <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                              6
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    center: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Center Mode */}
          {/* BEGIN: Fade Animation */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Fade Animation
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
                    <div className="pb-8 mx-6">
                      <TinySlider
                        options={{
                          mode: "gallery",
                          controls: true,
                          nav: true,
                          speed: 500,
                        }}
                      >
                        <div className="h-64 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={fakerData[0].images[0]}
                            />
                          </div>
                        </div>
                        <div className="h-64 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={fakerData[1].images[1]}
                            />
                          </div>
                        </div>
                        <div className="h-64 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={fakerData[2].images[2]}
                            />
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="pb-8 mx-6">
                <TinySlider
                  options={{
                    mode: 'gallery',
                    controls: true,
                    nav: true,
                    speed: 500,
                  }}
                >
                  <div className="h-64 px-2">
                    <div className="h-full overflow-hidden rounded-md image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[0].images[0]}
                      />
                    </div>
                  </div>
                  <div className="h-64 px-2">
                    <div className="h-full overflow-hidden rounded-md image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[1].images[1]}
                      />
                    </div>
                  </div>
                  <div className="h-64 px-2">
                    <div className="h-full overflow-hidden rounded-md image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[2].images[2]}
                      />
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Fade Animation */}
        </div>
      </div>
    </>
  );
}

export default Main;
