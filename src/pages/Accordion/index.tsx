import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { Disclosure } from "../../base-components/Headless";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Accordion</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Accordion */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Accordion
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
                    <Disclosure.Group>
                      <Disclosure>
                        <Disclosure.Button>
                          OpenSSL Essentials: Working with SSL Certificates,
                          Private Keys
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                      <Disclosure>
                        <Disclosure.Button>
                          Understanding IP Addresses, Subnets, and CIDR Notation
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                      <Disclosure>
                        <Disclosure.Button>
                          How To Troubleshoot Common HTTP Error Codes
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                      <Disclosure>
                        <Disclosure.Button>
                          An Introduction to Securing your Linux VPS
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                    </Disclosure.Group>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Disclosure.Group>
              <Disclosure>
                <Disclosure.Button>
                  OpenSSL Essentials: Working with SSL Certificates,
                  Private Keys
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  How To Troubleshoot Common HTTP Error Codes
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  An Introduction to Securing your Linux VPS
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
            </Disclosure.Group>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Accordion */}
          {/* BEGIN: Boxed Accordion */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Boxed Accordion
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
                    <Disclosure.Group variant="boxed">
                      <Disclosure>
                        <Disclosure.Button>
                          OpenSSL Essentials: Working with SSL Certificates,
                          Private Keys
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                      <Disclosure>
                        <Disclosure.Button>
                          Understanding IP Addresses, Subnets, and CIDR Notation
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                      <Disclosure>
                        <Disclosure.Button>
                          How To Troubleshoot Common HTTP Error Codes
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                      <Disclosure>
                        <Disclosure.Button>
                          An Introduction to Securing your Linux VPS
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </Disclosure.Panel>
                      </Disclosure>
                    </Disclosure.Group>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Disclosure.Group variant="boxed">
                <Disclosure>
                  <Disclosure.Button>
                    OpenSSL Essentials: Working with SSL Certificates,
                    Private Keys
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    Understanding IP Addresses, Subnets, and CIDR Notation
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    How To Troubleshoot Common HTTP Error Codes
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    An Introduction to Securing your Linux VPS
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
              </Disclosure.Group>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Boxed Accordion */}
        </div>
      </div>
    </>
  );
}

export default Main;
