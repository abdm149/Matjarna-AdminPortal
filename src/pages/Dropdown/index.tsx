import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { FormInput, FormSwitch } from "../../base-components/Form";
import _ from "lodash";
import { useState } from "react";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Menu, Popover } from "../../base-components/Headless";

function Main() {
  const [programmaticDropdown, setProgrammaticDropdown] = useState(false);

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Dropdown</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Dropdown */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Dropdown
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
                    <div className="flex justify-center">
                      <Menu>
                        <Menu.Button as={Button} variant="primary">
                          Show Dropdown
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>New Dropdown</Menu.Item>
                    <Menu.Item>Delete Dropdown</Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Dropdown */}
          {/* BEGIN: Header & Footer Dropdown */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Header & Footer Dropdown
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
                    <div className="flex justify-center">
                      <Menu>
                        <Menu.Button as={Button} variant="primary">
                          Show Dropdown
                        </Menu.Button>
                        <Menu.Items className="w-56">
                          <Menu.Header>Export Options</Menu.Header>
                          <Menu.Divider />
                          <Menu.Item>
                            <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                            English
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Box" className="w-4 h-4 mr-2" />
                            Indonesia
                            <div className="px-1 ml-auto text-xs text-white rounded-full bg-danger">
                              10
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Layout" className="w-4 h-4 mr-2" />
                            English
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Sidebar" className="w-4 h-4 mr-2" />
                            Indonesia
                          </Menu.Item>
                          <Menu.Divider />
                          <Menu.Footer>
                            <Button
                              type="button"
                              variant="primary"
                              className="px-2 py-1"
                            >
                              Settings
                            </Button>
                            <Button
                              type="button"
                              variant="secondary"
                              className="px-2 py-1 ml-auto"
                            >
                              View Profile
                            </Button>
                          </Menu.Footer>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-56">
                    <Menu.Header>Export Options</Menu.Header>
                    <Menu.Divider />
                    <Menu.Item>
                      <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                      English
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Box" className="w-4 h-4 mr-2" />
                      Indonesia
                      <div className="px-1 ml-auto text-xs text-white rounded-full bg-danger">
                        10
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Layout" className="w-4 h-4 mr-2" />
                      English
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Sidebar" className="w-4 h-4 mr-2" />
                      Indonesia
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Footer>
                      <Button
                        type="button"
                        variant="primary"
                        className="px-2 py-1"
                      >
                        Settings
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        className="px-2 py-1 ml-auto"
                      >
                        View Profile
                      </Button>
                    </Menu.Footer>
                  </Menu.Items>
                </Menu>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Footer Dropdown */}
          {/* BEGIN: Icon Dropdown */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Icon Dropdown
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
                    <div className="flex justify-center">
                      <Menu>
                        <Menu.Button as={Button} variant="primary">
                          Show Dropdown
                        </Menu.Button>
                        <Menu.Items className="w-48">
                          <Menu.Item>
                            <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> New
                            Dropdown
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                            Delete Dropdown
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-48">
                    <Menu.Item>
                      <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> New
                      Dropdown
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                      Delete Dropdown
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon Dropdown */}
          {/* BEGIN: Dropdown with close button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Dropdown with close button
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
                    <div className="text-center">
                      <Popover className="inline-block">
                        {({ close }) => (
                          <>
                            <Popover.Button as={Button} variant="primary">
                              Filter Dropdown
                              <Lucide
                                icon="ChevronDown"
                                className="w-4 h-4 ml-2"
                              />
                            </Popover.Button>
                            <Popover.Panel placement="bottom-start">
                              <div className="p-2">
                                <div>
                                  <div className="text-xs text-left">From</div>
                                  <FormInput
                                    type="text"
                                    className="flex-1 mt-2"
                                    placeholder="example@gmail.com"
                                  />
                                </div>
                                <div className="mt-3">
                                  <div className="text-xs text-left">To</div>
                                  <FormInput
                                    type="text"
                                    className="flex-1 mt-2"
                                    placeholder="example@gmail.com"
                                  />
                                </div>
                                <div className="flex items-center mt-3">
                                  <Button
                                    variant="secondary"
                                    onClick={() => {
                                      close();
                                    }}
                                    className="w-32 ml-auto"
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="primary"
                                    className="w-32 ml-2"
                                  >
                                    Search
                                  </Button>
                                </div>
                              </div>
                            </Popover.Panel>
                          </>
                        )}
                      </Popover>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                <Popover className="inline-block">
                  {({ close }) => (
                    <>
                      <Popover.Button
                        as={Button}
                        variant="primary"
                      >
                        Filter Dropdown
                        <Lucide
                          icon="ChevronDown"
                          className="w-4 h-4 ml-2"
                        />
                      </Popover.Button>
                      <Popover.Panel placement="bottom-start">
                        <div className="p-2">
                          <div>
                            <div className="text-xs text-left">From</div>
                            <FormInput
                              type="text"
                              className="flex-1 mt-2"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="mt-3">
                            <div className="text-xs text-left">To</div>
                            <FormInput
                              type="text"
                              className="flex-1 mt-2"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="flex items-center mt-3">
                            <Button
                              variant="secondary"
                              onClick={() => {
                                close();
                              }}
                              className="w-32 ml-auto"
                            >
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              className="w-32 ml-2"
                            >
                              Search
                            </Button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Dropdown with close button */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Scrolled Dropdown */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Scrolled Dropdown
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
                    <div className="flex justify-center">
                      <Menu>
                        <Menu.Button as={Button} variant="primary">
                          Show Dropdown
                        </Menu.Button>
                        <Menu.Items className="w-40 h-32 overflow-y-auto">
                          <Menu.Item>January</Menu.Item>
                          <Menu.Item>February</Menu.Item>
                          <Menu.Item>March</Menu.Item>
                          <Menu.Item>June</Menu.Item>
                          <Menu.Item>July</Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-40 h-32 overflow-y-auto">
                    <Menu.Item>January</Menu.Item>
                    <Menu.Item>February</Menu.Item>
                    <Menu.Item>March</Menu.Item>
                    <Menu.Item>June</Menu.Item>
                    <Menu.Item>July</Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Scrolled Dropdown */}
          {/* BEGIN: Header & Icon Dropdown */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Header & Icon Dropdown
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
                    <div className="flex justify-center">
                      <Menu>
                        <Menu.Button as={Button} variant="primary">
                          Show Dropdown
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Header>Export Tools</Menu.Header>
                          <Menu.Divider />
                          <Menu.Item>
                            <Lucide icon="Printer" className="w-4 h-4 mr-2" />
                            Print
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide
                              icon="ExternalLink"
                              className="w-4 h-4 mr-2"
                            />
                            Excel
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                            CSV
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Archive" className="w-4 h-4 mr-2" />
                            PDF
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Header>Export Tools</Menu.Header>
                    <Menu.Divider />
                    <Menu.Item>
                      <Lucide icon="Printer" className="w-4 h-4 mr-2" />
                      Print
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide
                        icon="ExternalLink"
                        className="w-4 h-4 mr-2"
                      />
                      Excel
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                      CSV
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Archive" className="w-4 h-4 mr-2" />
                      PDF
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Icon Dropdown */}
          {/* BEGIN: Dropdown Placement */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Dropdown Placement
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-7">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-7"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="text-center">
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Top Start
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="top-start">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Top
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="top">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Top End
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="top-end">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Right Start
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="right-start">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Right
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="right">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Right End
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="right-end">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Bottom End
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="bottom-end">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Bottom
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="bottom">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Bottom Start
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="bottom-start">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Left Start
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="left-start">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Left
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="left">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <Menu className="inline-block mb-2 mr-1">
                        <Menu.Button
                          as={Button}
                          variant="primary"
                          className="w-32"
                        >
                          Left End
                        </Menu.Button>
                        <Menu.Items className="w-40" placement="left-end">
                          <Menu.Item>New Dropdown</Menu.Item>
                          <Menu.Item>Delete Dropdown</Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="text-center">
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Top Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Top
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Top End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Right Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Right
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Right End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Bottom End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Bottom
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Bottom Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Left Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Left
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Left End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Dropdown Placement */}
        </div>
      </div>
    </>
  );
}

export default Main;
