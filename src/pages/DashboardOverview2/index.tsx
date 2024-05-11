import _ from "lodash";
import clsx from "clsx";
import { useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import Alert from "../../base-components/Alert";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import ReportDonutChart from "../../components/ReportDonutChart";
import ReportBarChart from "../../components/ReportBarChart";
import LeafletMap from "../../components/LeafletMap";
import { Menu, Tab } from "../../base-components/Headless";
import Table from "../../base-components/Table";
import womanIllustrationUrl from "../../assets/images/woman-illustration.svg";
import phoneIllustrationUrl from "../../assets/images/phone-illustration.svg";

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
            {/* BEGIN: Notification */}
            <div className="col-span-12 mt-6 -mb-6 intro-y">
              <Alert
                variant="primary"
                dismissible
                className="flex items-center mb-6 box dark:border-darkmode-600"
              >
                {({ dismiss }) => (
                  <>
                    <span>
                      Introducing new dashboard! Download now at
                      <a
                        href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                        className="ml-1 underline"
                        target="blank"
                      >
                        themeforest.net
                      </a>
                      .
                    </span>
                    <Alert.DismissButton
                      className="text-white"
                      onClick={dismiss}
                    >
                      <Lucide icon="X" className="w-4 h-4" />
                    </Alert.DismissButton>
                  </>
                )}
              </Alert>
            </div>
            {/* BEGIN: Notification */}
            {/* BEGIN: General Report */}
            <div className="col-span-12 mt-2 lg:col-span-8 xl:col-span-6">
              <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">
                  General Report
                </h2>
                <FormSelect className="mt-3 sm:ml-auto sm:mt-0 sm:w-auto !box">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </FormSelect>
              </div>
              <div className="relative mt-12 intro-y sm:mt-5 before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
                <div className="box sm:flex">
                  <div className="flex flex-col justify-center flex-1 px-8 py-12">
                    <Lucide
                      icon="ShoppingBag"
                      className="w-10 h-10 text-warning"
                    />
                    <div className="relative text-3xl font-medium mt-12 pl-4 ml-0.5">
                      <span className="absolute text-2xl font-medium top-0 left-0 -ml-0.5">
                        $
                      </span>
                      54.143
                    </div>
                    <Tippy
                      as="div"
                      className="cursor-pointer py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 mt-3 mr-auto items-center font-medium bg-success"
                      content="47% Higher than last month"
                    >
                      47% <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                    </Tippy>
                    <div className="mt-4 text-slate-500">
                      Sales earnings this month after associated author fees, &
                      before taxes.
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
                  <div className="flex flex-col justify-center flex-1 px-8 py-12 border-t border-dashed sm:border-t-0 sm:border-l border-slate-200 dark:border-darkmode-300">
                    <div className="text-xs text-slate-500">
                      TOTAL TRANSACTION
                    </div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">4.501</div>
                      <Tippy
                        as="div"
                        className="flex ml-2 text-xs font-medium cursor-pointer text-danger"
                        content="2% Lower than last month"
                      >
                        2%
                        <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                    <div className="mt-5 text-xs text-slate-500">
                      CANCELATION CASE
                    </div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">2</div>
                      <Tippy
                        as="div"
                        className="flex ml-2 text-xs font-medium cursor-pointer text-danger"
                        content="0.1% Lower than last month"
                      >
                        0.1%
                        <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                    <div className="mt-5 text-xs text-slate-500">
                      GROSS RENTAL VALUE
                    </div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">$72.000</div>
                      <Tippy
                        as="div"
                        className="flex ml-2 text-xs font-medium cursor-pointer text-success"
                        content="49% Higher than last month"
                      >
                        49%{" "}
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                    <div className="mt-5 text-xs text-slate-500">
                      GROSS RENTAL PROFIT
                    </div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">$54.000</div>
                      <Tippy
                        as="div"
                        className="flex ml-2 text-xs font-medium cursor-pointer text-success"
                        content="52% Higher than last month"
                      >
                        52%{" "}
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                    <div className="mt-5 text-xs text-slate-500">NEW USERS</div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">2.500</div>
                      <Tippy
                        as="div"
                        className="flex ml-2 text-xs font-medium cursor-pointer text-success"
                        content="52% Higher than last month"
                      >
                        52%{" "}
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: General Report */}
            {/* BEGIN: Visitors */}
            <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">Visitors</h2>
                <a href="" className="ml-auto truncate text-primary">
                  View on Map
                </a>
              </div>
              <div className="mt-5 intro-y relative before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
                <div className="p-5 box">
                  <div className="flex items-center">
                    Realtime active users
                    <Menu className="ml-auto">
                      <Menu.Button
                        as="a"
                        className="block w-5 h-5 -mr-2"
                        href="#"
                      >
                        <Lucide
                          icon="MoreVertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                          Export
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Settings" className="w-4 h-4 mr-2" />
                          Settings
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className="mt-2 text-2xl font-medium">214</div>
                  <div className="flex pb-2 mt-4 border-b border-slate-200">
                    <div className="text-xs text-slate-500">
                      Page views per second
                    </div>
                    <Tippy
                      as="div"
                      className="flex ml-auto text-xs font-medium cursor-pointer text-success"
                      content="49% Lower than last month"
                    >
                      49% <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                    </Tippy>
                  </div>
                  <div className="mt-2 border-b broder-slate-200">
                    <div className="-mb-1.5 -ml-2.5">
                      <ReportBarChart height={79} />
                    </div>
                  </div>
                  <div className="flex pb-2 mt-4 mb-2 text-xs border-b text-slate-500 border-slate-200">
                    <div>Top Active Pages</div>
                    <div className="ml-auto">Active Users</div>
                  </div>
                  <div className="flex">
                    <div>/letz-lara…review/2653</div>
                    <div className="ml-auto">472</div>
                  </div>
                  <div className="flex mt-1.5">
                    <div>/midone…review/1674</div>
                    <div className="ml-auto">294</div>
                  </div>
                  <div className="flex mt-1.5">
                    <div>/profile…review/46789</div>
                    <div className="ml-auto">83</div>
                  </div>
                  <div className="flex mt-1.5">
                    <div>/profile…review/24357</div>
                    <div className="ml-auto">21</div>
                  </div>
                  <Button
                    variant="outline-secondary"
                    className="w-full px-2 py-1 mt-4 border-dashed"
                  >
                    Real-Time Report
                  </Button>
                </div>
              </div>
            </div>
            {/* END: Visitors */}
            {/* BEGIN: Users By Age */}
            <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-4 xl:col-span-3 lg:mt-6 xl:mt-2">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Users By Age
                </h2>
                <a href="" className="ml-auto truncate text-primary">
                  Show More
                </a>
              </div>
              <div className="mt-5 intro-y relative before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
                <Tab.Group className="p-5 box">
                  <Tab.List
                    variant="pills"
                    className="w-4/5 mx-auto rounded-md bg-slate-100 dark:bg-black/20"
                  >
                    <Tab>
                      <Tab.Button as="button" className="w-full py-1.5 px-2">
                        Active
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button as="button" className="w-full py-1.5 px-2">
                        Inactive
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-6">
                    <Tab.Panel>
                      <div className="relative">
                        <ReportDonutChart height={208} className="mt-3" />
                        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                          <div className="text-2xl font-medium">2.501</div>
                          <div className="text-slate-500 mt-0.5">
                            Active Users
                          </div>
                        </div>
                      </div>
                      <div className="mx-auto mt-5 w-52 sm:w-auto">
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
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
            {/* END: Users By Age */}
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
            <div className="col-span-12 mt-6 xl:col-span-4">
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
            {/* BEGIN: Ads 1 */}
            <div className="col-span-12 mt-6 lg:col-span-6">
              <div className="relative p-8 overflow-hidden box bg-primary intro-y">
                <div className="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3">
                  Transact safely with Lender’s Fund Account (RDL)
                </div>
                <div className="w-full mt-3 leading-relaxed sm:w-72 text-white/70 dark:text-slate-500">
                  Apply now, quick registration.
                </div>
                <Button className="w-32 mt-6 bg-white dark:bg-darkmode-800 dark:text-white sm:mt-10">
                  Start Now
                </Button>
                <img
                  className="absolute top-0 right-0 hidden w-2/5 mr-2 -mt-3 sm:block"
                  alt="Midone Tailwind HTML Admin Template"
                  src={womanIllustrationUrl}
                />
              </div>
            </div>
            {/* END: Ads 1 */}
            {/* BEGIN: Ads 2 */}
            <div className="col-span-12 mt-6 lg:col-span-6">
              <div className="relative p-8 overflow-hidden box intro-y">
                <div className="leading-[2.15rem] w-full sm:w-52 text-primary dark:text-white text-xl -mt-3">
                  Invite friends to get{" "}
                  <span className="font-medium">FREE</span> bonuses!
                </div>
                <div className="w-full mt-2 leading-relaxed sm:w-60 text-slate-500">
                  Get a IDR 100,000 voucher by inviting your friends to fund
                  #BecomeMember
                </div>
                <Tippy
                  as="div"
                  className="relative w-48 mt-6 cursor-pointer"
                  content="Copy referral link"
                >
                  <FormInput
                    type="text"
                    value="https://dashboard.in"
                    onChange={() => {}}
                  />
                  <Lucide
                    icon="Copy"
                    className="absolute top-0 bottom-0 right-0 w-4 h-4 my-auto mr-4"
                  />
                </Tippy>
                <img
                  className="absolute top-0 right-0 hidden w-1/2 mt-1 -mr-12 sm:block"
                  alt="Midone Tailwind HTML Admin Template"
                  src={phoneIllustrationUrl}
                />
              </div>
            </div>
            {/* END: Ads 2 */}
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
