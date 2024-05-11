import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { FormLabel, FormSwitch } from "../../base-components/Form";
import { Menu, Dialog } from "../../base-components/Headless";
import Litepicker from "../../base-components/Litepicker";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState, useRef } from "react";

function Main() {
  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");
  const [datepickerModalPreview, setDatepickerModalPreview] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Datepicker</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Datepicker */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Date Picker
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
                    <Litepicker
                      value={date}
                      onChange={setDate}
                      options={{
                        autoApply: false,
                        showWeekNumbers: true,
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true,
                        },
                      }}
                      className="block w-56 mx-auto"
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Litepicker
                value={date}
                onChange={setDate}
                options={{
                  autoApply: false,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
                className="block w-56 mx-auto"
              />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Datepicker */}
          {/* BEGIN: Input Group */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Input Group</h2>
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
                    <div className="relative w-56 mx-auto">
                      <div className="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                        <Lucide icon="Calendar" className="w-4 h-4" />
                      </div>
                      <Litepicker
                        value={date}
                        onChange={setDate}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="pl-12"
                      />
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="relative w-56 mx-auto">
                <div className="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                  <Lucide icon="Calendar" className="w-4 h-4" />
                </div>
                <Litepicker
                  value={date}
                  onChange={setDate}
                  options={{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="pl-12"
                />
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Group */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Daterange Picker */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Date Range Picker
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
                    <Litepicker
                      value={daterange}
                      onChange={setDaterange}
                      options={{
                        autoApply: false,
                        singleMode: false,
                        numberOfColumns: 2,
                        numberOfMonths: 2,
                        showWeekNumbers: true,
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true,
                        },
                      }}
                      className="block w-56 mx-auto"
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Litepicker
                value={daterange}
                onChange={setDaterange}
                options={{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
                className="block w-56 mx-auto"
              />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Daterange Picker */}
          {/* BEGIN: Modal Datepicker */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Modal Date Picker
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
                    {/* BEGIN: Show Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setDatepickerModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Show Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={datepickerModalPreview}
                      onClose={() => {
                        setDatepickerModalPreview(false);
                      }}
                      initialFocus={cancelButtonRef}
                    >
                      <Dialog.Panel>
                        {/* BEGIN: Modal Header */}
                        <Dialog.Title>
                          <h2 className="mr-auto text-base font-medium">
                            Filter by Date
                          </h2>
                          <Button
                            variant="outline-secondary"
                            className="hidden sm:flex"
                          >
                            <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                            Download Docs
                          </Button>
                          <Menu className="sm:hidden">
                            <Menu.Button
                              as="a"
                              className="block w-5 h-5"
                              href="#"
                            >
                              <Lucide
                                icon="MoreHorizontal"
                                className="w-5 h-5 text-slate-500"
                              />
                            </Menu.Button>
                            <Menu.Items className="w-40">
                              <Menu.Item>
                                <Lucide icon="File" className="w-4 h-4 mr-2" />
                                Download Docs
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                        </Dialog.Title>
                        {/* END: Modal Header */}
                        {/* BEGIN: Modal Body */}
                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-datepicker-1">
                              From
                            </FormLabel>
                            <Litepicker
                              id="modal-datepicker-1"
                              value={date}
                              onChange={setDate}
                              options={{
                                autoApply: false,
                                showWeekNumbers: true,
                                dropdowns: {
                                  minYear: 1990,
                                  maxYear: null,
                                  months: true,
                                  years: true,
                                },
                              }}
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-datepicker-2">
                              To
                            </FormLabel>
                            <Litepicker
                              id="modal-datepicker-2"
                              value={date}
                              onChange={setDate}
                              options={{
                                autoApply: false,
                                showWeekNumbers: true,
                                dropdowns: {
                                  minYear: 1990,
                                  maxYear: null,
                                  months: true,
                                  years: true,
                                },
                              }}
                            />
                          </div>
                        </Dialog.Description>
                        {/* END: Modal Body */}
                        {/* BEGIN: Modal Footer */}
                        <Dialog.Footer className="text-right">
                          <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => {
                              setDatepickerModalPreview(false);
                            }}
                            className="w-20 mr-1"
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="primary"
                            type="button"
                            className="w-20"
                            ref={cancelButtonRef}
                          >
                            Submit
                          </Button>
                        </Dialog.Footer>
                        {/* END: Modal Footer */}
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Show Modal Toggle */}
              <div className="text-center">
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setDatepickerModalPreview(true);
                  }}
                >
                  Show Modal
                </Button>
              </div>
              {/* END: Show Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Dialog
                open={datepickerModalPreview}
                onClose={() => {
                  setDatepickerModalPreview(false);
                }}
                initialFocus={cancelButtonRef}
              >
                <Dialog.Panel>
                  {/* BEGIN: Modal Header */}
                  <Dialog.Title>
                    <h2 className="mr-auto text-base font-medium">
                      Filter by Date
                    </h2>
                    <Button
                      variant="outline-secondary"
                      className="hidden sm:flex"
                    >
                      <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                      Download Docs
                    </Button>
                    <Menu className="sm:hidden">
                      <Menu.Button
                        as="a"
                        className="block w-5 h-5"
                        href="#"
                      >
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="File" className="w-4 h-4 mr-2" />
                          Download Docs
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </Dialog.Title>
                  {/* END: Modal Header */}
                  {/* BEGIN: Modal Body */}
                  <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                    <div className="col-span-12 sm:col-span-6">
                      <FormLabel
                        htmlFor="modal-datepicker-1"
                      >
                        From
                      </FormLabel>
                      <Litepicker
                        id="modal-datepicker-1"
                        value={date}
                        onChange={setDate}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <FormLabel
                        htmlFor="modal-datepicker-2"
                      >
                        To
                      </FormLabel>
                      <Litepicker
                        id="modal-datepicker-2"
                        value={date}
                        onChange={setDate}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                      />
                    </div>
                  </Dialog.Description>
                  {/* END: Modal Body */}
                  {/* BEGIN: Modal Footer */}
                  <Dialog.Footer className="text-right">
                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={() => {
                        setDatepickerModalPreview(false);
                      }}
                      className="w-20 mr-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      className="w-20"
                      ref={cancelButtonRef}
                    >
                      Submit
                    </Button>
                  </Dialog.Footer>
                  {/* END: Modal Footer */}
                </Dialog.Panel>
              </Dialog>
              {/* END: Modal Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Modal Datepicker */}
        </div>
      </div>
    </>
  );
}

export default Main;
