import _ from "lodash";
import clsx from "clsx";
import { useRef } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import { FormSwitch } from "../../base-components/Form";
import Progress from "../../base-components/Progress";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import ReportLineChart from "../../components/ReportLineChart";
import { Menu, Tab } from "../../base-components/Headless";
import { Tab as HeadlessTab } from "@headlessui/react";

function Main() {
  const announcementRef = useRef<TinySliderElement>();
  const newProjectsRef = useRef<TinySliderElement>();
  const todaySchedulesRef = useRef<TinySliderElement>();

  const prevAnnouncement = () => {
    announcementRef.current?.tns.goTo("prev");
  };
  const nextAnnouncement = () => {
    announcementRef.current?.tns.goTo("next");
  };
  const prevNewProjects = () => {
    newProjectsRef.current?.tns.goTo("prev");
  };
  const nextNewProjects = () => {
    newProjectsRef.current?.tns.goTo("next");
  };
  const prevTodaySchedules = () => {
    todaySchedulesRef.current?.tns.goTo("prev");
  };
  const nextTodaySchedules = () => {
    todaySchedulesRef.current?.tns.goTo("next");
  };

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Profile Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Profile Menu */}
        <div className="flex flex-col-reverse col-span-12 lg:col-span-4 2xl:col-span-3 lg:block">
          <div className="mt-5 intro-y box lg:mt-0">
            <div className="relative flex items-center p-5">
              <div className="w-12 h-12 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={fakerData[0].photos[0]}
                />
              </div>
              <div className="ml-4 mr-auto">
                <div className="text-base font-medium">
                  {fakerData[0].users[0].name}
                </div>
                <div className="text-slate-500">{fakerData[0].jobs[0]}</div>
              </div>
              <Menu>
                <Menu.Button as="a" className="block w-5 h-5">
                  <Lucide
                    icon="MoreHorizontal"
                    className="w-5 h-5 text-slate-500"
                  />
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
                      variant="primary"
                      type="button"
                      className="px-2 py-1"
                    >
                      Settings
                    </Button>
                    <Button
                      variant="secondary"
                      type="button"
                      className="px-2 py-1 ml-auto"
                    >
                      View Profile
                    </Button>
                  </Menu.Footer>
                </Menu.Items>
              </Menu>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center font-medium text-primary" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Personal
                Information
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Account Settings
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> User
                Settings
              </a>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Email
                Settings
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Saved Credit
                Cards
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Social Networks
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Tax
                Information
              </a>
            </div>
            <div className="flex p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <Button variant="primary" type="button" className="px-2 py-1">
                New Group
              </Button>
              <Button
                variant="outline-secondary"
                type="button"
                className="px-2 py-1 ml-auto"
              >
                New Quick Link
              </Button>
            </div>
          </div>
          <div className="p-5 mt-5 text-white intro-y box bg-primary">
            <div className="flex items-center">
              <div className="text-lg font-medium">Important Update</div>
              <div className="px-1 ml-auto text-xs bg-white rounded-md dark:bg-primary dark:text-white text-slate-700">
                New
              </div>
            </div>
            <div className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            <div className="flex mt-5 font-medium">
              <Button
                type="button"
                className="px-2 py-1 text-white border-white dark:text-slate-300 dark:bg-darkmode-400 dark:border-darkmode-400"
              >
                Take Action
              </Button>
              <Button
                type="button"
                className="px-2 py-1 ml-auto text-white border-transparent dark:border-transparent"
              >
                Dismiss
              </Button>
            </div>
          </div>
        </div>
        {/* END: Profile Menu */}
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: Daily Sales */}
            <div className="col-span-12 intro-y box 2xl:col-span-6">
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
                <Button variant="outline-secondary" className="hidden sm:flex">
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Download Excel
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
            {/* BEGIN: Announcement */}
            <div className="col-span-12 intro-y box 2xl:col-span-6">
              <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">Announcement</h2>
                <Button
                  variant="outline-secondary"
                  className="px-2 mr-2"
                  onClick={prevAnnouncement}
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline-secondary"
                  className="px-2"
                  onClick={nextAnnouncement}
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Button>
              </div>
              <TinySlider
                getRef={(el) => {
                  announcementRef.current = el;
                }}
                className="py-5"
              >
                <div className="px-5">
                  <div className="text-lg font-medium">
                    Midone Admin Template
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry since the 1500s.
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="px-3 py-2 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300">
                      02 June 2021
                    </div>
                    <Button variant="outline-secondary" className="ml-auto">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="px-5">
                  <div className="text-lg font-medium">
                    Midone Admin Template
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry since the 1500s.
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="px-3 py-2 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300">
                      02 June 2021
                    </div>
                    <Button variant="outline-secondary" className="ml-auto">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="px-5">
                  <div className="text-lg font-medium">
                    Midone Admin Template
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry since the 1500s.
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="px-3 py-2 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300">
                      02 June 2021
                    </div>
                    <Button variant="secondary" className="ml-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </TinySlider>
            </div>
            {/* END: Announcement */}
            {/* BEGIN: Projects */}
            <div className="col-span-12 intro-y box 2xl:col-span-6">
              <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">Projects</h2>
                <Button
                  variant="outline-secondary"
                  className="px-2 mr-2"
                  onClick={prevNewProjects}
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline-secondary"
                  className="px-2"
                  onClick={nextNewProjects}
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Button>
              </div>
              <TinySlider
                getRef={(el) => {
                  newProjectsRef.current = el;
                }}
                className="py-5"
              >
                <div className="px-5">
                  <div className="text-lg font-medium">
                    Midone Admin Template
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="mt-5">
                    <div className="flex text-slate-500">
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
                </div>
                <div className="px-5">
                  <div className="text-lg font-medium">
                    Midone Admin Template
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="mt-5">
                    <div className="flex text-slate-500">
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
                </div>
                <div className="px-5">
                  <div className="text-lg font-medium">
                    Midone Admin Template
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="mt-5">
                    <div className="flex text-slate-500">
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
                </div>
              </TinySlider>
            </div>
            {/* END: Projects */}
            {/* BEGIN: Today Schedules */}
            <div className="col-span-12 intro-y box 2xl:col-span-6">
              <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">
                  Today Schedules
                </h2>
                <Button
                  variant="outline-secondary"
                  className="px-2 mr-2"
                  onClick={prevTodaySchedules}
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline-secondary"
                  className="px-2"
                  onClick={nextTodaySchedules}
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Button>
              </div>
              <TinySlider
                getRef={(el) => {
                  todaySchedulesRef.current = el;
                }}
                className="py-5"
              >
                <div className="px-5 text-center sm:text-left">
                  <div className="text-lg font-medium">
                    Developing rest API with Laravel 7
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </div>
                  <div className="mt-2">11:15AM - 12:30PM</div>
                  <div className="flex flex-col items-center mt-5 sm:flex-row">
                    <div className="flex items-center text-slate-500">
                      <Lucide
                        icon="MapPin"
                        className="hidden w-4 h-4 mr-2 sm:block"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                    <Button
                      variant="secondary"
                      className="px-2 py-1 mt-3 sm:ml-auto sm:mt-0sm:ml-auto sm:mt-0"
                    >
                      View On Map
                    </Button>
                  </div>
                </div>
                <div className="px-5 text-center sm:text-left">
                  <div className="text-lg font-medium">
                    Developing rest API with Laravel 7
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </div>
                  <div className="mt-2">11:15AM - 12:30PM</div>
                  <div className="flex flex-col items-center mt-5 sm:flex-row">
                    <div className="flex items-center text-slate-500">
                      <Lucide
                        icon="MapPin"
                        className="hidden w-4 h-4 mr-2 sm:block"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                    <Button
                      variant="secondary"
                      className="px-2 py-1 mt-3 sm:ml-auto sm:mt-0sm:ml-auto sm:mt-0"
                    >
                      View On Map
                    </Button>
                  </div>
                </div>
                <div className="px-5 text-center sm:text-left">
                  <div className="text-lg font-medium">
                    Developing rest API with Laravel 7
                  </div>
                  <div className="mt-2 text-slate-600 dark:text-slate-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </div>
                  <div className="mt-2">11:15AM - 12:30PM</div>
                  <div className="flex flex-col items-center mt-5 sm:flex-row">
                    <div className="flex items-center text-slate-500">
                      <Lucide
                        icon="MapPin"
                        className="hidden w-4 h-4 mr-2 sm:block"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                    <Button
                      variant="secondary"
                      className="px-2 py-1 mt-3 sm:ml-auto sm:mt-0sm:ml-auto sm:mt-0"
                    >
                      View On Map
                    </Button>
                  </div>
                </div>
              </TinySlider>
            </div>
            {/* END: Today Schedules */}
            {/* BEGIN: Top Products */}
            <Tab.Group className="col-span-12 intro-y box 2xl:col-span-6">
              <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">Top Products</h2>
                <Menu className="ml-auto">
                  <Menu.Button as="a" className="block w-5 h-5">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> New Chat
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
              <div className="p-5">
                <Tab.List
                  variant="boxed-tabs"
                  className="flex-col justify-center sm:flex-row"
                >
                  <Tab fullWidth={false}>
                    <Tab.Button className="w-full px-0 py-2 mb-2 text-center cursor-pointer sm:w-20 sm:mb-0 sm:mx-2">
                      <Lucide
                        icon="Box"
                        className="block w-6 h-6 mx-auto mb-2"
                      />{" "}
                      Laravel
                    </Tab.Button>
                  </Tab>
                  <Tab fullWidth={false}>
                    <Tab.Button className="w-full px-0 py-2 mb-2 text-center cursor-pointer sm:w-20 sm:mb-0 sm:mx-2">
                      <Lucide
                        icon="Inbox"
                        className="block w-6 h-6 mx-auto mb-2"
                      />
                      Symfony
                    </Tab.Button>
                  </Tab>
                  <Tab fullWidth={false}>
                    <Tab.Button className="w-full px-0 py-2 mb-2 text-center cursor-pointer sm:w-20 sm:mb-0 sm:mx-2">
                      <Lucide
                        icon="Activity"
                        className="block w-6 h-6 mx-auto mb-2"
                      />
                      Bootstrap
                    </Tab.Button>
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-8">
                  <Tab.Panel>
                    <div className="flex flex-col items-center sm:flex-row">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Wordpress Template
                        </a>
                        <div className="mt-1 text-slate-500">
                          HTML, PHP, Mysql
                        </div>
                      </div>
                      <div className="flex items-center w-full mt-3 sm:w-auto sm:mt-0">
                        <div className="px-2 mr-5 rounded bg-success/20 text-success">
                          +20%
                        </div>
                        <Progress className="h-1 mt-2 sm:w-40">
                          <Progress.Bar
                            className="w-1/2 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-5 sm:flex-row">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Laravel Template
                        </a>
                        <div className="mt-1 text-slate-500">PHP, Mysql</div>
                      </div>
                      <div className="flex items-center w-full mt-3 sm:w-auto sm:mt-0">
                        <div className="px-2 mr-5 rounded bg-success/20 text-success">
                          +55%
                        </div>
                        <Progress className="h-1 mt-2 sm:w-40">
                          <Progress.Bar
                            className="w-2/3 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-5 sm:flex-row">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Tailwind HTML Template
                        </a>
                        <div className="mt-1 text-slate-500">HTML, CSS, JS</div>
                      </div>
                      <div className="flex items-center w-full mt-3 sm:w-auto sm:mt-0">
                        <div className="px-2 mr-5 rounded bg-success/20 text-success">
                          +40%
                        </div>
                        <Progress className="h-1 mt-2 sm:w-40">
                          <Progress.Bar
                            className="w-3/4 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
            {/* END: Top Products */}
            {/* BEGIN: Work In Progress */}
            <Tab.Group className="col-span-12 intro-y box 2xl:col-span-6">
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
                    <Tab.Button className="py-5 cursor-pointer">New</Tab.Button>
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
                    <div className="mt-5">
                      <div className="flex">
                        <div className="mr-auto">Tasks In Review</div>
                        <div>70%</div>
                      </div>
                      <Progress className="h-1 mt-2">
                        <Progress.Bar
                          className="w-4/5 bg-primary"
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
            {/* BEGIN: Latest Tasks */}
            <Tab.Group className="col-span-12 intro-y box 2xl:col-span-6">
              <div className="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">Latest Tasks</h2>
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
                    <Tab.Button className="py-5 cursor-pointer">New</Tab.Button>
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
                    <div className="flex items-center mt-5">
                      <div className="pl-4 border-l-2 border-primary dark:border-primary">
                        <a href="" className="font-medium">
                          Meeting With Client
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
                          Create New Repository
                        </a>
                        <div className="text-slate-500">11:00 PM</div>
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
            {/* BEGIN: General Statistics */}
            <div className="col-span-12 intro-y box 2xl:col-span-6">
              <div className="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">
                  General Statistics
                </h2>
                <Menu className="ml-auto">
                  <Menu.Button as="a" className="block w-5 h-5 sm:hidden">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </Menu.Button>
                  <Menu.Button
                    as={Button}
                    variant="outline-secondary"
                    className="hidden font-normal sm:flex"
                  >
                    Export{" "}
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Header>Export Tools</Menu.Header>
                    <Menu.Divider />
                    <Menu.Item>
                      <Lucide icon="Printer" className="w-4 h-4 mr-2" />
                      Print
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" />
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
              <div className="p-5">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex flex-wrap mr-auto sm:flex-nowrap">
                    <div className="flex items-center mb-1 mr-5 sm:mb-0">
                      <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                      <span>Author Sales</span>
                    </div>
                    <div className="flex items-center mb-1 mr-5 sm:mb-0">
                      <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                      <span>Product Profit</span>
                    </div>
                  </div>
                  <Menu className="mt-3 mr-auto sm:mt-0 sm:mr-0">
                    <Menu.Button
                      as={Button}
                      variant="outline-secondary"
                      className="font-normal"
                    >
                      Filter by Month
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
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
                <div
                  className={clsx([
                    "mt-8 relative",
                    "before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600",
                    "after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600",
                  ])}
                >
                  <ReportLineChart height={212} />
                </div>
              </div>
            </div>
            {/* END: General Statistics */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
