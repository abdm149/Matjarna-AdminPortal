import _ from "lodash";
import clsx from "clsx";
import { useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import ReportDonutChart from "../../components/ReportDonutChart";
import LeafletMap from "../../components/LeafletMap";
import { Tab } from "../../base-components/Headless";
import Table from "../../base-components/Table";

function Main() {
  const importantNotesRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("next");
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: General Report */}
            <div className="col-span-12 mt-8 xl:col-span-9">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">
                  General Report
                </h2>
                <a href="" className="ml-auto truncate text-primary">
                  Show More
                </a>
              </div>
              <div className="mt-5 intro-y">
                <div className="grid grid-cols-12 box">
                  <div className="flex flex-col justify-center col-span-12 px-8 py-12 lg:col-span-4">
                    <Lucide
                      icon="PieChart"
                      className="w-10 h-10 text-pending"
                    />
                    <div className="flex items-center justify-start mt-12 text-slate-600 dark:text-slate-300">
                      My Total Assets
                      <Tippy content="Total value of your sales: $158.409.416">
                        <Lucide icon="AlertCircle" className="w-4 h-4 ml-1.5" />
                      </Tippy>
                    </div>
                    <div className="flex items-center justify-start mt-4">
                      <div className="relative text-2xl font-medium pl-3 ml-0.5">
                        <span className="absolute text-xl font-medium top-0 left-0 -ml-0.5">
                          $
                        </span>
                        1,413,102.02
                      </div>
                      <a className="ml-4 text-slate-500" href="">
                        <Lucide icon="RefreshCcw" className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="mt-4 text-xs text-slate-500">
                      Last updated 1 hour ago
                    </div>
                    <Button
                      variant="outline-secondary"
                      className="relative justify-start mt-12 rounded-full"
                    >
                      Download Reports
                      <span className="w-8 h-8 absolute flex justify-center items-center bg-primary text-white rounded-full right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                        <Lucide icon="ArrowRight" className="w-4 h-4" />
                      </span>
                    </Button>
                  </div>
                  <div className="col-span-12 p-8 border-t border-dashed lg:col-span-8 lg:border-t-0 lg:border-l border-slate-200 dark:border-darkmode-300">
                    <Tab.Group>
                      <Tab.List
                        variant="pills"
                        className="p-1 mx-auto mb-8 border border-dashed rounded-md w-60 border-slate-300 dark:border-darkmode-300"
                      >
                        <Tab>
                          <Tab.Button
                            as="button"
                            className="w-full py-1.5 px-2"
                          >
                            Weekly
                          </Tab.Button>
                        </Tab>
                        <Tab>
                          <Tab.Button
                            as="button"
                            className="w-full py-1.5 px-2"
                          >
                            Monthly
                          </Tab.Button>
                        </Tab>
                      </Tab.List>
                      <Tab.Panels className="px-5 pb-5">
                        <Tab.Panel className="grid grid-cols-12 gap-y-8 gap-x-10">
                          <div className="col-span-6 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Unpaid Loan</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">4.501</div>
                              <Tippy
                                className="flex ml-2 text-xs font-medium cursor-pointer text-danger"
                                content="2% Lower than last month"
                              >
                                2%
                                <Lucide
                                  icon="ChevronDown"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </Tippy>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Active Partner</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">2</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">
                              Paid Installment
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$72.000</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Disbursement</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$54.000</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">
                              Success Payment
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">2.500</div>
                              <Tippy
                                className="flex ml-2 text-xs font-medium cursor-pointer text-success"
                                content="52% Higher than last month"
                              >
                                52%
                                <Lucide
                                  icon="ChevronUp"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </Tippy>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Unpaid Loan</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$72.000</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">
                              Posted Campaign
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">4.501</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Social Media</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">2</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Net Margin</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$72.000</div>
                              <Tippy
                                className="flex ml-2 text-xs font-medium cursor-pointer text-success"
                                content="49% Higher than last month"
                              >
                                49%
                                <Lucide
                                  icon="ChevronUp"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </Tippy>
                            </div>
                          </div>
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
            </div>
            {/* END: General Report */}
            {/* BEGIN: Sales Report */}
            <div className="col-span-12 row-start-4 mt-6 md:col-span-6 lg:col-span-4 xl:col-span-3 lg:row-start-3 xl:row-start-auto xl:mt-8">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Sales Report
                </h2>
                <a href="" className="ml-auto truncate text-primary">
                  Show More
                </a>
              </div>
              <div className="mt-5 before:hidden xl:before:block intro-y">
                <div className="p-5 box">
                  <div className="mt-3">
                    <ReportDonutChart height={196} />
                  </div>
                  <div className="mx-auto mt-8 w-52 sm:w-auto">
                    <div className="flex items-center">
                      <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                      <span className="truncate">17 - 30 Years old</span>
                      <span className="ml-auto font-medium">62%</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                      <span className="truncate">31 - 50 Years old</span>
                      <span className="ml-auto font-medium">33%</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                      <span className="truncate">&gt;= 50 Years old</span>
                      <span className="ml-auto font-medium">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Sales Report */}
            {/* BEGIN: Official Store */}
            <div className="col-span-12 mt-6 xl:col-span-8">
              <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Official Store
                </h2>
                <div className="relative mt-3 sm:ml-auto sm:mt-0 text-slate-500">
                  <Lucide
                    icon="MapPin"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
                  />
                  <FormInput
                    type="text"
                    className="pl-10 sm:w-56 !box"
                    placeholder="Filter by city"
                  />
                </div>
              </div>
              <div className="p-5 mt-12 intro-y box sm:mt-5">
                <div>
                  250 Official stores in 21 countries, click the marker to see
                  location details.
                </div>
                <LeafletMap className="h-[310px] mt-5 rounded-md bg-slate-200" />
              </div>
            </div>
            {/* END: Official Store */}
            {/* BEGIN: Weekly Best Sellers */}
            <div className="col-span-12 mt-6 lg:col-span-8 xl:col-span-4">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Weekly Best Sellers
                </h2>
              </div>
              <div className="mt-5">
                {_.take(fakerData, 4).map((faker, fakerKey) => (
                  <div key={fakerKey} className="intro-y">
                    <div className="flex items-center px-4 py-4 mb-3 box zoom-in">
                      <div className="flex-none w-10 h-10 overflow-hidden rounded-md image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={faker.photos[0]}
                        />
                      </div>
                      <div className="ml-4 mr-auto">
                        <div className="font-medium">{faker.users[0].name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">
                          {faker.dates[0]}
                        </div>
                      </div>
                      <div className="px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success">
                        137 Sales
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href=""
                  className="block w-full py-4 text-center border border-dotted rounded-md intro-y border-slate-400 dark:border-darkmode-300 text-slate-500"
                >
                  View More
                </a>
              </div>
            </div>
            {/* END: Weekly Best Sellers */}
            {/* BEGIN: Visitors */}
            <div className="col-span-12 mt-6 md:col-span-6 lg:col-span-4">
              <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">Visitors</h2>
                <FormSelect className="mt-3 sm:ml-auto sm:mt-0 sm:w-auto !box">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </FormSelect>
              </div>
              <div className="p-5 mt-12 intro-y box sm:mt-5">
                <div className="flex pb-3 mb-3 border-b border-dashed text-slate-500 border-slate-200 dark:border-darkmode-300">
                  <div>Parameters</div>
                  <div className="ml-auto">Report Values</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Site Visits</div>
                    <Tippy
                      className="flex ml-2 text-xs font-medium cursor-pointer text-danger"
                      content="49% Higher than last month"
                    >
                      -2%{" "}
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                    </Tippy>
                  </div>
                  <div className="ml-auto">4.500</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Unique Visitors</div>
                  </div>
                  <div className="ml-auto">21</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Page Views</div>
                    <Tippy
                      className="flex ml-2 text-xs font-medium cursor-pointer text-success"
                      content="49% Higher than last month"
                    >
                      5% <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                    </Tippy>
                  </div>
                  <div className="ml-auto">500</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Bounce Rate</div>
                  </div>
                  <div className="ml-auto">3.420</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>% New Visits</div>
                    <Tippy
                      className="flex ml-2 text-xs font-medium cursor-pointer text-danger"
                      content="49% Higher than last month"
                    >
                      -9%{" "}
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                    </Tippy>
                  </div>
                  <div className="ml-auto">32%</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Average Tim On Site</div>
                  </div>
                  <div className="ml-auto">1.5M</div>
                </div>
                <Button
                  variant="outline-secondary"
                  className="relative justify-start w-full mb-2 border-dashed border-slate-300 dark:border-darkmode-300"
                >
                  <span className="mr-5 truncate">View Full Report</span>
                  <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                    <Lucide icon="ArrowRight" className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
            {/* END: Visitors */}
            {/* BEGIN: Most Viewed Pages */}
            <div className="col-span-12 mt-6 md:col-span-6 lg:col-span-4">
              <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Most Viewed Pages
                </h2>
                <FormSelect className="mt-3 sm:ml-auto sm:mt-0 sm:w-auto !box">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </FormSelect>
              </div>
              <div className="p-5 mt-12 intro-y box sm:mt-5">
                <div className="flex pb-3 mb-3 border-b border-dashed text-slate-500 border-slate-200 dark:border-darkmode-300">
                  <div>Page Names</div>
                  <div className="ml-auto">Page Views</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/letz-lara…review/2653</div>
                  <div className="ml-auto">472</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/midone…review/1674</div>
                  <div className="ml-auto">294</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/profile…review/46789</div>
                  <div className="ml-auto">500</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/profile…review/24357</div>
                  <div className="ml-auto">3.420</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/letz-lara…review/2653</div>
                  <div className="ml-auto">83</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/icewall…review/1674</div>
                  <div className="ml-auto">21</div>
                </div>
                <Button
                  variant="outline-secondary"
                  className="relative justify-start w-full mb-2 border-dashed border-slate-300 dark:border-darkmode-300"
                >
                  <span className="mr-5 truncate">View Full Report</span>
                  <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                    <Lucide icon="ArrowRight" className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
            {/* END: Most Viewed Pages */}
            {/* BEGIN: Top Search Items */}
            <div className="col-span-12 mt-6 md:col-span-6 lg:col-span-4">
              <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Top Search Items
                </h2>
                <FormSelect className="mt-3 sm:ml-auto sm:mt-0 sm:w-auto !box">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </FormSelect>
              </div>
              <div className="p-5 mt-12 intro-y box sm:mt-5">
                <div className="flex pb-3 mb-3 border-b border-dashed text-slate-500 border-slate-200 dark:border-darkmode-300">
                  <div>Keywords</div>
                  <div className="ml-auto">Searched</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Laravel 8</div>
                  <div className="ml-auto">200</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Eloquent</div>
                  <div className="ml-auto">50</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>CKEditor Source Build</div>
                  <div className="ml-auto">31</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Midone Docs</div>
                  <div className="ml-auto">405</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Vue 3 Release Date</div>
                  <div className="ml-auto">201</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Install Vite Vue</div>
                  <div className="ml-auto">42</div>
                </div>
                <Button
                  variant="outline-secondary"
                  className="relative justify-start w-full mb-2 border-dashed border-slate-300 dark:border-darkmode-300"
                >
                  <span className="mr-5 truncate">View Full Report</span>
                  <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                    <Lucide icon="ArrowRight" className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
            {/* END: Top Search Items */}
            {/* BEGIN: Weekly Top Products */}
            <div className="col-span-12 mt-6">
              <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Weekly Top Products
                </h2>
                <div className="flex items-center mt-3 sm:ml-auto sm:mt-0">
                  <Button className="flex items-center !box text-slate-600 dark:text-slate-300">
                    <Lucide
                      icon="FileText"
                      className="hidden w-4 h-4 mr-2 sm:block"
                    />
                    Export to Excel
                  </Button>
                  <Button className="flex items-center ml-3 !box text-slate-600 dark:text-slate-300">
                    <Lucide
                      icon="FileText"
                      className="hidden w-4 h-4 mr-2 sm:block"
                    />
                    Export to PDF
                  </Button>
                </div>
              </div>
              <div className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        IMAGES
                      </Table.Th>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        PRODUCT NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        STOCK
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        STATUS
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        ACTIONS
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {_.take(fakerData, 4).map((faker, fakerKey) => (
                      <Table.Tr key={fakerKey} className="intro-x">
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <div className="flex">
                            <div className="w-10 h-10 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Midone Tailwind HTML Admin Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.images[0]}
                                content={`Uploaded at ${faker.dates[0]}`}
                              />
                            </div>
                            <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Midone Tailwind HTML Admin Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.images[1]}
                                content={`Uploaded at ${faker.dates[1]}`}
                              />
                            </div>
                            <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Midone Tailwind HTML Admin Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.images[2]}
                                content={`Uploaded at ${faker.dates[2]}`}
                              />
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.products[0].name}
                          </a>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            {faker.products[0].category}
                          </div>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {faker.stocks[0]}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <div
                            className={clsx([
                              "flex items-center justify-center",
                              { "text-success": faker.trueFalse[0] },
                              { "text-danger": !faker.trueFalse[0] },
                            ])}
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />
                            {faker.trueFalse[0] ? "Active" : "Inactive"}
                          </div>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                          <div className="flex items-center justify-center">
                            <a className="flex items-center mr-3" href="">
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-1"
                              />
                              Edit
                            </a>
                            <a
                              className="flex items-center text-danger"
                              href=""
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-1" />{" "}
                              Delete
                            </a>
                          </div>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
              <div className="flex flex-wrap items-center mt-3 intro-y sm:flex-row sm:flex-nowrap">
                <Pagination className="w-full sm:w-auto sm:mr-auto">
                  <Pagination.Link>
                    <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>...</Pagination.Link>
                  <Pagination.Link>1</Pagination.Link>
                  <Pagination.Link active>2</Pagination.Link>
                  <Pagination.Link>3</Pagination.Link>
                  <Pagination.Link>...</Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronsRight" className="w-4 h-4" />
                  </Pagination.Link>
                </Pagination>
                <FormSelect className="w-20 mt-3 !box sm:mt-0">
                  <option>10</option>
                  <option>25</option>
                  <option>35</option>
                  <option>50</option>
                </FormSelect>
              </div>
            </div>
            {/* END: Weekly Top Products */}
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-3">
          <div className="pb-10 -mb-10 2xl:border-l">
            <div className="grid grid-cols-12 2xl:pl-6 gap-x-6 2xl:gap-x-0 gap-y-6">
              {/* BEGIN: Important Notes */}
              <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 2xl:mt-8">
                <div className="flex items-center h-10 intro-x">
                  <h2 className="mr-auto text-lg font-medium truncate">
                    Important Notes
                  </h2>
                  <Button
                    data-carousel="important-notes"
                    data-target="prev"
                    className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300"
                    onClick={prevImportantNotes}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Button>
                  <Button
                    data-carousel="important-notes"
                    data-target="next"
                    className="px-2 mr-2 border-slate-300 text-slate-600 dark:text-slate-300"
                    onClick={nextImportantNotes}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-5 intro-x">
                  <div className="box zoom-in">
                    <TinySlider
                      getRef={(el) => {
                        importantNotesRef.current = el;
                      }}
                    >
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="mt-1 text-slate-400">20 Hours ago</div>
                        <div className="mt-1 text-justify text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="flex mt-5 font-medium">
                          <Button
                            variant="secondary"
                            type="button"
                            className="px-2 py-1"
                          >
                            View Notes
                          </Button>
                          <Button
                            variant="outline-secondary"
                            type="button"
                            className="px-2 py-1 ml-auto"
                          >
                            Dismiss
                          </Button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="mt-1 text-slate-400">20 Hours ago</div>
                        <div className="mt-1 text-justify text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="flex mt-5 font-medium">
                          <Button
                            variant="secondary"
                            type="button"
                            className="px-2 py-1"
                          >
                            View Notes
                          </Button>
                          <Button
                            variant="outline-secondary"
                            type="button"
                            className="px-2 py-1 ml-auto"
                          >
                            Dismiss
                          </Button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="mt-1 text-slate-400">20 Hours ago</div>
                        <div className="mt-1 text-justify text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="flex mt-5 font-medium">
                          <Button
                            variant="secondary"
                            type="button"
                            className="px-2 py-1"
                          >
                            View Notes
                          </Button>
                          <Button
                            variant="outline-secondary"
                            type="button"
                            className="px-2 py-1 ml-auto"
                          >
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </TinySlider>
                  </div>
                </div>
              </div>
              {/* END: Important Notes */}
              {/* BEGIN: Recent Activities */}
              <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
                <div className="flex items-center h-10 intro-x">
                  <h2 className="mr-5 text-lg font-medium truncate">
                    Recent Activities
                  </h2>
                  <a href="" className="ml-auto truncate text-primary">
                    Show More
                  </a>
                </div>
                <div className="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                  <div className="relative flex items-center mb-3 intro-x">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={fakerData[9].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {fakerData[9].users[0].name}
                        </div>
                        <div className="ml-auto text-xs text-slate-500">
                          07:00 PM
                        </div>
                      </div>
                      <div className="mt-1 text-slate-500">
                        Has joined the team
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center mb-3 intro-x">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={fakerData[8].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {fakerData[8].users[0].name}
                        </div>
                        <div className="ml-auto text-xs text-slate-500">
                          07:00 PM
                        </div>
                      </div>
                      <div className="text-slate-500">
                        <div className="mt-1">Added 3 new photos</div>
                        <div className="flex mt-2">
                          <Tippy
                            as="div"
                            className="w-8 h-8 mr-1 image-fit zoom-in"
                            content={fakerData[0].products[0].name}
                          >
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="border border-white rounded-md"
                              src={fakerData[8].images[0]}
                            />
                          </Tippy>
                          <Tippy
                            as="div"
                            className="w-8 h-8 mr-1 image-fit zoom-in"
                            content={fakerData[1].products[0].name}
                          >
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="border border-white rounded-md"
                              src={fakerData[8].images[1]}
                            />
                          </Tippy>
                          <Tippy
                            as="div"
                            className="w-8 h-8 mr-1 image-fit zoom-in"
                            content={fakerData[2].products[0].name}
                          >
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="border border-white rounded-md"
                              src={fakerData[8].images[2]}
                            />
                          </Tippy>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 text-xs text-center intro-x text-slate-500">
                    12 November
                  </div>
                  <div className="relative flex items-center mb-3 intro-x">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={fakerData[7].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {fakerData[7].users[0].name}
                        </div>
                        <div className="ml-auto text-xs text-slate-500">
                          07:00 PM
                        </div>
                      </div>
                      <div className="mt-1 text-slate-500">
                        Has changed{" "}
                        <a className="text-primary" href="">
                          {fakerData[7].products[0].name}
                        </a>{" "}
                        price and description
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center mb-3 intro-x">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={fakerData[6].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {fakerData[6].users[0].name}
                        </div>
                        <div className="ml-auto text-xs text-slate-500">
                          07:00 PM
                        </div>
                      </div>
                      <div className="mt-1 text-slate-500">
                        Has changed{" "}
                        <a className="text-primary" href="">
                          {fakerData[6].products[0].name}
                        </a>{" "}
                        description
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Recent Activities */}
              {/* BEGIN: Transactions */}
              <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
                <div className="flex items-center h-10 intro-x">
                  <h2 className="mr-5 text-lg font-medium truncate">
                    Transactions
                  </h2>
                </div>
                <div className="mt-5">
                  {_.take(fakerData, 5).map((faker, fakerKey) => (
                    <div key={fakerKey} className="intro-x">
                      <div className="flex items-center px-5 py-3 mb-3 box zoom-in">
                        <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={faker.photos[0]}
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">
                            {faker.users[0].name}
                          </div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            {faker.dates[0]}
                          </div>
                        </div>
                        <div
                          className={clsx({
                            "text-success": faker.trueFalse[0],
                            "text-danger": !faker.trueFalse[0],
                          })}
                        >
                          {faker.trueFalse[0] ? "+" : "-"}${faker.totals[0]}
                        </div>
                      </div>
                    </div>
                  ))}
                  <a
                    href=""
                    className="block w-full py-3 text-center border border-dotted rounded-md intro-x border-slate-400 dark:border-darkmode-300 text-slate-500"
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* END: Transactions */}
              {/* BEGIN: Schedules */}
              <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto">
                <div className="flex items-center h-10 intro-x">
                  <h2 className="mr-5 text-lg font-medium truncate">
                    Schedules
                  </h2>
                  <a
                    href=""
                    className="flex items-center ml-auto truncate text-primary"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Add New
                    Schedules
                  </a>
                </div>
                <div className="mt-5">
                  <div className="intro-x box">
                    <div className="p-5">
                      <div className="flex">
                        <Lucide
                          icon="ChevronLeft"
                          className="w-5 h-5 text-slate-500"
                        />
                        <div className="mx-auto text-base font-medium">
                          April
                        </div>
                        <Lucide
                          icon="ChevronRight"
                          className="w-5 h-5 text-slate-500"
                        />
                      </div>
                      <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                        <div className="font-medium">Su</div>
                        <div className="font-medium">Mo</div>
                        <div className="font-medium">Tu</div>
                        <div className="font-medium">We</div>
                        <div className="font-medium">Th</div>
                        <div className="font-medium">Fr</div>
                        <div className="font-medium">Sa</div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          29
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          30
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          31
                        </div>
                        <div className="py-0.5 rounded relative">1</div>
                        <div className="py-0.5 rounded relative">2</div>
                        <div className="py-0.5 rounded relative">3</div>
                        <div className="py-0.5 rounded relative">4</div>
                        <div className="py-0.5 rounded relative">5</div>
                        <div className="py-0.5 bg-success/20 dark:bg-success/30 rounded relative">
                          6
                        </div>
                        <div className="py-0.5 rounded relative">7</div>
                        <div className="py-0.5 bg-primary text-white rounded relative">
                          8
                        </div>
                        <div className="py-0.5 rounded relative">9</div>
                        <div className="py-0.5 rounded relative">10</div>
                        <div className="py-0.5 rounded relative">11</div>
                        <div className="py-0.5 rounded relative">12</div>
                        <div className="py-0.5 rounded relative">13</div>
                        <div className="py-0.5 rounded relative">14</div>
                        <div className="py-0.5 rounded relative">15</div>
                        <div className="py-0.5 rounded relative">16</div>
                        <div className="py-0.5 rounded relative">17</div>
                        <div className="py-0.5 rounded relative">18</div>
                        <div className="py-0.5 rounded relative">19</div>
                        <div className="py-0.5 rounded relative">20</div>
                        <div className="py-0.5 rounded relative">21</div>
                        <div className="py-0.5 rounded relative">22</div>
                        <div className="py-0.5 bg-pending/20 dark:bg-pending/30 rounded relative">
                          23
                        </div>
                        <div className="py-0.5 rounded relative">24</div>
                        <div className="py-0.5 rounded relative">25</div>
                        <div className="py-0.5 rounded relative">26</div>
                        <div className="py-0.5 bg-primary/10 dark:bg-primary/50 rounded relative">
                          27
                        </div>
                        <div className="py-0.5 rounded relative">28</div>
                        <div className="py-0.5 rounded relative">29</div>
                        <div className="py-0.5 rounded relative">30</div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          1
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          2
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          3
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          4
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          5
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          6
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          7
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          8
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          9
                        </div>
                      </div>
                    </div>
                    <div className="p-5 border-t border-slate-200/60">
                      <div className="flex items-center">
                        <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                        <span className="truncate">UI/UX Workshop</span>
                        <span className="font-medium xl:ml-auto">23th</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                        <span className="truncate">
                          VueJs Frontend Development
                        </span>
                        <span className="font-medium xl:ml-auto">10th</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                        <span className="truncate">Laravel Rest API</span>
                        <span className="font-medium xl:ml-auto">31th</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Schedules */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
