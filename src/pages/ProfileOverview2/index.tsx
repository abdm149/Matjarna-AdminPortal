import _ from "lodash";
import { useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import { FormSwitch } from "../../base-components/Form";
import Progress from "../../base-components/Progress";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import FileIcon from "../../base-components/FileIcon";
import { Menu, Tab } from "../../base-components/Headless";
import { Tab as HeadlessTab } from "@headlessui/react";

function Main() {
  const newProductsRef = useRef<TinySliderElement>();
  const newAuthorsRef = useRef<TinySliderElement>();

  const prevNewProducts = () => {
    newProductsRef.current?.tns.goTo("prev");
  };
  const nextNewProducts = () => {
    newProductsRef.current?.tns.goTo("next");
  };
  const prevNewAuthors = () => {
    newAuthorsRef.current?.tns.goTo("prev");
  };
  const nextNewAuthors = () => {
    newAuthorsRef.current?.tns.goTo("next");
  };

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Profile Layout</h2>
      </div>
      <Tab.Group>
        {/* BEGIN: Profile Info */}
        <div className="px-5 pt-5 mt-5 intro-y box">
          <div className="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center justify-center flex-1 px-5 lg:justify-start">
              <div className="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={fakerData[0].photos[0]}
                />
              </div>
              <div className="ml-5">
                <div className="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
                  {fakerData[0].users[0].name}
                </div>
                <div className="text-slate-500">{fakerData[0].jobs[0]}</div>
              </div>
            </div>
            <div className="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-3">
                Contact Details
              </div>
              <div className="flex flex-col items-center justify-center mt-4 lg:items-start">
                <div className="flex items-center truncate sm:whitespace-normal">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  {fakerData[0].users[0].email}
                </div>
                <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                  <Lucide icon="Instagram" className="w-4 h-4 mr-2" /> Instagram
                  {fakerData[0].users[0].name}
                </div>
                <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                  <Lucide icon="Twitter" className="w-4 h-4 mr-2" /> Twitter
                  {fakerData[0].users[0].name}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0">
              <div className="w-20 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">201</div>
                <div className="text-slate-500">Orders</div>
              </div>
              <div className="w-20 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">1k</div>
                <div className="text-slate-500">Purchases</div>
              </div>
              <div className="w-20 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">492</div>
                <div className="text-slate-500">Reviews</div>
              </div>
            </div>
          </div>
          <Tab.List
            variant="link-tabs"
            className="flex-col justify-center text-center sm:flex-row lg:justify-start"
          >
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </Tab.Button>
            </Tab>
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="Shield" className="w-4 h-4 mr-2" /> Account
              </Tab.Button>
            </Tab>
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
              </Tab.Button>
            </Tab>
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
              </Tab.Button>
            </Tab>
          </Tab.List>
        </div>
        {/* END: Profile Info */}
        <Tab.Panels className="mt-5">
          <Tab.Panel>
            <div className="grid grid-cols-12 gap-6">
              {/* BEGIN: Latest Uploads */}
              <div className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Latest Uploads
                  </h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>All Files</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Button
                    variant="outline-secondary"
                    className="hidden sm:flex"
                  >
                    All Files
                  </Button>
                </div>
                <div className="p-5">
                  <div className="flex items-center">
                    <FileIcon className="w-12 file" variant="directory" />
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Documentation
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">40 KB</div>
                    </div>
                    <Menu className="ml-auto">
                      <Menu.Button as="a" className="block w-5 h-5">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                          File
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className="flex items-center mt-5">
                    <FileIcon
                      className="w-12 text-xs file"
                      variant="file"
                      type="MP3"
                    />
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Celine Dion - Ashes
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">40 KB</div>
                    </div>
                    <Menu className="ml-auto">
                      <Menu.Button as="a" className="block w-5 h-5">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                          File
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className="flex items-center mt-5">
                    <FileIcon className="w-12 file" variant="empty-directory" />
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Resources
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">0 KB</div>
                    </div>
                    <Menu className="ml-auto">
                      <Menu.Button as="a" className="block w-5 h-5">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                          File
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>
              </div>
              {/* END: Latest Uploads */}
              {/* BEGIN: Work In Progress */}
              <Tab.Group className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Work In Progress
                  </h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        New
                      </Menu.Item>
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        Last Week
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Tab.List
                    variant="link-tabs"
                    className="hidden w-auto ml-auto sm:flex"
                  >
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        New
                      </Tab.Button>
                    </Tab>
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        Last Week
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                </div>
                <div className="p-5">
                  <Tab.Panels>
                    <Tab.Panel>
                      <div>
                        <div className="flex">
                          <div className="mr-auto">Pending Tasks</div>
                          <div>20%</div>
                        </div>
                        <Progress className="h-1 mt-2">
                          <Progress.Bar
                            className="w-1/2 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                      <div className="mt-5">
                        <div className="flex">
                          <div className="mr-auto">Completed Tasks</div>
                          <div>2 / 20</div>
                        </div>
                        <Progress className="h-1 mt-2">
                          <Progress.Bar
                            className="w-1/4 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                      <div className="mt-5">
                        <div className="flex">
                          <div className="mr-auto">Tasks In Progress</div>
                          <div>42</div>
                        </div>
                        <Progress className="h-1 mt-2">
                          <Progress.Bar
                            className="w-3/4 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                      <Button
                        as="a"
                        variant="secondary"
                        href=""
                        className="block w-40 mx-auto mt-5"
                      >
                        View More Details
                      </Button>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
              {/* END: Work In Progress */}
              {/* BEGIN: Daily Sales */}
              <div className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Daily Sales</h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="File" className="w-4 h-4 mr-2" /> Download
                        Excel
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Button
                    variant="outline-secondary"
                    className="hidden sm:flex"
                  >
                    <Lucide icon="File" className="w-4 h-4 mr-2" /> Download
                    Excel
                  </Button>
                </div>
                <div className="p-5">
                  <div className="relative flex items-center">
                    <div className="flex-none w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={fakerData[0].photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <a href="" className="font-medium">
                        {fakerData[0].users[0].name}
                      </a>
                      <div className="mr-5 text-slate-500 sm:mr-5">
                        Bootstrap 4 HTML Admin Template
                      </div>
                    </div>
                    <div className="font-medium text-slate-600 dark:text-slate-500">
                      +$19
                    </div>
                  </div>
                  <div className="relative flex items-center mt-5">
                    <div className="flex-none w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={fakerData[1].photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <a href="" className="font-medium">
                        {fakerData[1].users[0].name}
                      </a>
                      <div className="mr-5 text-slate-500 sm:mr-5">
                        Tailwind HTML Admin Template
                      </div>
                    </div>
                    <div className="font-medium text-slate-600 dark:text-slate-500">
                      +$25
                    </div>
                  </div>
                  <div className="relative flex items-center mt-5">
                    <div className="flex-none w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={fakerData[2].photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <a href="" className="font-medium">
                        {fakerData[2].users[0].name}
                      </a>
                      <div className="mr-5 text-slate-500 sm:mr-5">
                        Vuejs HTML Admin Template
                      </div>
                    </div>
                    <div className="font-medium text-slate-600 dark:text-slate-500">
                      +$21
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Daily Sales */}
              {/* BEGIN: Latest Tasks */}
              <Tab.Group className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Latest Tasks
                  </h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        New
                      </Menu.Item>
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        Last Week
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Tab.List
                    variant="link-tabs"
                    className="hidden w-auto ml-auto sm:flex"
                  >
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        New
                      </Tab.Button>
                    </Tab>
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        Last Week
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                </div>
                <div className="p-5">
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="flex items-center">
                        <div className="pl-4 border-l-2 border-primary dark:border-primary">
                          <a href="" className="font-medium">
                            Create New Campaign
                          </a>
                          <div className="text-slate-500">10:00 AM</div>
                        </div>
                        <FormSwitch className="ml-auto">
                          <FormSwitch.Input type="checkbox" />
                        </FormSwitch>
                      </div>
                      <div className="flex items-center mt-5">
                        <div className="pl-4 border-l-2 border-primary dark:border-primary">
                          <a href="" className="font-medium">
                            Meeting With Client
                          </a>
                          <div className="text-slate-500">02:00 PM</div>
                        </div>
                        <FormSwitch className="ml-auto">
                          <FormSwitch.Input type="checkbox" />
                        </FormSwitch>
                      </div>
                      <div className="flex items-center mt-5">
                        <div className="pl-4 border-l-2 border-primary dark:border-primary">
                          <a href="" className="font-medium">
                            Create New Repository
                          </a>
                          <div className="text-slate-500">04:00 PM</div>
                        </div>
                        <FormSwitch className="ml-auto">
                          <FormSwitch.Input type="checkbox" />
                        </FormSwitch>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
              {/* END: Latest Tasks */}
              {/* BEGIN: New Products */}
              <div className="col-span-12 intro-y box">
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    New Products
                  </h2>
                  <Button
                    variant="outline-secondary"
                    className="px-2 mr-2"
                    onClick={prevNewProducts}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="px-2"
                    onClick={nextNewProducts}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Button>
                </div>
                <div id="new-products" className="py-5 tiny-slider">
                  <TinySlider
                    getRef={(el) => {
                      newProductsRef.current = el;
                    }}
                  >
                    {_.take(fakerData, 5).map((faker, fakerKey) => (
                      <div key={fakerKey} className="px-5">
                        <div className="flex flex-col items-center pb-5 lg:flex-row">
                          <div className="flex flex-col items-center pr-5 sm:flex-row lg:border-r border-slate-200/60 dark:border-darkmode-400">
                            <div className="sm:mr-5">
                              <div className="w-20 h-20 image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  className="rounded-full"
                                  src={faker.images[0]}
                                />
                              </div>
                            </div>
                            <div className="mt-3 mr-auto text-center sm:text-left sm:mt-0">
                              <a href="" className="text-lg font-medium">
                                {faker.products[0].name}
                              </a>
                              <div className="mt-1 text-slate-500 sm:mt-0">
                                {faker.news[0].shortContent}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center flex-1 w-full px-5 pt-4 mt-6 border-t lg:w-auto lg:mt-0 lg:pt-0 lg:border-t-0 border-slate-200/60 dark:border-darkmode-400">
                            <div className="w-20 py-3 text-center rounded-md">
                              <div className="text-xl font-medium text-primary">
                                {faker.totals[0]}
                              </div>
                              <div className="text-slate-500">Orders</div>
                            </div>
                            <div className="w-20 py-3 text-center rounded-md">
                              <div className="text-xl font-medium text-primary">
                                {faker.totals[1]}k
                              </div>
                              <div className="text-slate-500">Purchases</div>
                            </div>
                            <div className="w-20 py-3 text-center rounded-md">
                              <div className="text-xl font-medium text-primary">
                                {faker.totals[0]}
                              </div>
                              <div className="text-slate-500">Reviews</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pt-5 border-t sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                          <div className="flex items-center justify-center w-full pb-5 border-b sm:w-auto sm:justify-start sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 sm:pb-0">
                            <div className="px-3 py-2 mr-3 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300">
                              {faker.dates[0]}
                            </div>
                            <div className="text-slate-500">
                              Date of Release
                            </div>
                          </div>
                          <div className="flex mt-5 sm:ml-auto sm:mt-0">
                            <Button
                              variant="secondary"
                              className="w-20 ml-auto"
                            >
                              Preview
                            </Button>
                            <Button variant="secondary" className="w-20 ml-2">
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TinySlider>
                </div>
              </div>
              {/* END: New Products */}
              {/* BEGIN: New Authors */}
              <div className="col-span-12 intro-y box">
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">New Authors</h2>
                  <Button
                    variant="outline-secondary"
                    className="px-2 mr-2"
                    onClick={prevNewAuthors}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="px-2"
                    onClick={nextNewAuthors}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Button>
                </div>
                <div id="new-authors" className="py-5 tiny-slider">
                  <TinySlider
                    getRef={(el) => {
                      newAuthorsRef.current = el;
                    }}
                  >
                    {_.take(fakerData, 5).map((faker, fakerKey) => (
                      <div key={fakerKey} className="px-5">
                        <div className="flex flex-col items-center pb-5 lg:flex-row">
                          <div className="flex flex-col items-center flex-1 pr-5 sm:flex-row lg:border-r border-slate-200/60 dark:border-darkmode-400">
                            <div className="sm:mr-5">
                              <div className="w-20 h-20 image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  className="rounded-full"
                                  src={faker.photos[0]}
                                />
                              </div>
                            </div>
                            <div className="mt-3 mr-auto text-center sm:text-left sm:mt-0">
                              <a href="" className="text-lg font-medium">
                                {faker.users[0].name}
                              </a>
                              <div className="mt-1 text-slate-500 sm:mt-0">
                                {faker.jobs[0]}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center flex-1 w-full px-5 pt-4 mt-6 border-t lg:w-auto lg:mt-0 lg:pt-0 lg:items-start lg:border-t-0 border-slate-200/60 dark:border-darkmode-400">
                            <div className="flex items-center">
                              <a
                                href=""
                                className="flex items-center justify-center w-8 h-8 mr-2 border rounded-full text-slate-400"
                              >
                                <Lucide
                                  icon="Facebook"
                                  className="w-3 h-3 fill-current"
                                />
                              </a>
                              {faker.users[0].email}
                            </div>
                            <div className="flex items-center mt-2">
                              <a
                                href=""
                                className="flex items-center justify-center w-8 h-8 mr-2 border rounded-full text-slate-400"
                              >
                                <Lucide
                                  icon="Twitter"
                                  className="w-3 h-3 fill-current"
                                />
                              </a>
                              {faker.users[0].name}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pt-5 border-t sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                          <div className="flex items-center justify-center w-full pb-5 border-b sm:w-auto sm:justify-start sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 sm:pb-0">
                            <div className="px-3 py-2 mr-3 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300">
                              {faker.dates[0]}
                            </div>
                            <div className="text-slate-500">Joined Date</div>
                          </div>
                          <div className="flex mt-5 sm:ml-auto sm:mt-0">
                            <Button
                              variant="secondary"
                              className="w-20 ml-auto"
                            >
                              Message
                            </Button>
                            <Button variant="secondary" className="w-20 ml-2">
                              Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TinySlider>
                </div>
              </div>
              {/* END: New Authors */}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default Main;
