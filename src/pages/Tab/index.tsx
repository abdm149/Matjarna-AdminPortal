import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { Tab } from "../../base-components/Headless";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Tab</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Tab */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Basic Tab</h2>
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
                    <Tab.Group>
                      <Tab.List variant="tabs">
                        <Tab>
                          <Tab.Button className="w-full py-2" as="button">
                            Example Tab 1
                          </Tab.Button>
                        </Tab>
                        <Tab>
                          <Tab.Button className="w-full py-2" as="button">
                            Example Tab 2
                          </Tab.Button>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels className="border-b border-l border-r">
                        <Tab.Panel className="p-5 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </Tab.Panel>
                        <Tab.Panel className="p-5 leading-relaxed">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Tab.Group>
                  <Tab.List variant="tabs">
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Example Tab 1
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Example Tab 2
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="border-b border-l border-r">
                    <Tab.Panel className="p-5 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of
                      Lorem Ipsum.
                    </Tab.Panel>
                    <Tab.Panel className="p-5 leading-relaxed">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content
                      here', making it look like readable English. Many
                      desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a
                      search for 'lorem ipsum' will uncover many web sites
                      still in their infancy. Various versions have evolved
                      over the years, sometimes by accident, sometimes on
                      purpose (injected humour and the like).
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Tab */}
          {/* BEGIN: Boxed Tab */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Boxed Tab</h2>
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
                    <Tab.Group>
                      <Tab.List variant="boxed-tabs">
                        <Tab>
                          <Tab.Button className="w-full py-2" as="button">
                            Example Tab 1
                          </Tab.Button>
                        </Tab>
                        <Tab>
                          <Tab.Button className="w-full py-2" as="button">
                            Example Tab 2
                          </Tab.Button>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels className="mt-5">
                        <Tab.Panel className="leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </Tab.Panel>
                        <Tab.Panel className="leading-relaxed">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Tab.Group>
                  <Tab.List variant="boxed-tabs">
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Example Tab 1
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Example Tab 2
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-5">
                    <Tab.Panel className="leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of
                      Lorem Ipsum.
                    </Tab.Panel>
                    <Tab.Panel className="leading-relaxed">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content
                      here', making it look like readable English. Many
                      desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a
                      search for 'lorem ipsum' will uncover many web sites
                      still in their infancy. Various versions have evolved
                      over the years, sometimes by accident, sometimes on
                      purpose (injected humour and the like).
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Boxed Tab */}
          {/* BEGIN: Link Tab */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Link Tab</h2>
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
                    <Tab.Group>
                      <Tab.List variant="link-tabs">
                        <Tab>
                          <Tab.Button className="w-full py-2" as="button">
                            Example Tab 1
                          </Tab.Button>
                        </Tab>
                        <Tab>
                          <Tab.Button className="w-full py-2" as="button">
                            Example Tab 2
                          </Tab.Button>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels className="mt-5">
                        <Tab.Panel className="leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </Tab.Panel>
                        <Tab.Panel className="leading-relaxed">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Tab.Group>
                  <Tab.List variant="link-tabs">
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Example Tab 1
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        Example Tab 2
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-5">
                    <Tab.Panel className="leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of
                      Lorem Ipsum.
                    </Tab.Panel>
                    <Tab.Panel className="leading-relaxed">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content
                      here', making it look like readable English. Many
                      desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a
                      search for 'lorem ipsum' will uncover many web sites
                      still in their infancy. Various versions have evolved
                      over the years, sometimes by accident, sometimes on
                      purpose (injected humour and the like).
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Tab */}
        </div>
      </div>
    </>
  );
}

export default Main;
