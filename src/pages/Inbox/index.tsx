import _ from "lodash";
import clsx from "clsx";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
  FormCheck,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Menu } from "../../base-components/Headless";

function Main() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
          <h2 className="mt-2 mr-auto text-lg font-medium intro-y">Inbox</h2>
          {/* BEGIN: Inbox Menu */}
          <div className="p-5 mt-6 intro-y box bg-primary">
            <Button
              type="button"
              className="w-full mt-1 bg-white text-slate-600 dark:text-slate-300 dark:bg-darkmode-300 dark:border-darkmode-300"
            >
              <Lucide icon="Edit3" className="w-4 h-4 mr-2" /> Compose
            </Button>
            <div className="pt-6 mt-6 text-white border-t border-white/10 dark:border-darkmode-400">
              <a
                href=""
                className="flex items-center px-3 py-2 font-medium rounded-md bg-white/10 dark:bg-darkmode-700"
              >
                <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Inbox
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Star" className="w-4 h-4 mr-2" /> Marked
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Inbox" className="w-4 h-4 mr-2" /> Draft
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Send" className="w-4 h-4 mr-2" /> Sent
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
              </a>
            </div>
            <div className="pt-4 mt-4 text-white border-t border-white/10 dark:border-darkmode-400">
              <a href="" className="flex items-center px-3 py-2 truncate">
                <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                Custom Work
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-success"></div>
                Important Meetings
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                Work
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                Design
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-danger"></div>
                Next Week
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
              >
                <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Label
              </a>
            </div>
          </div>
          {/* END: Inbox Menu */}
        </div>
        <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
          {/* BEGIN: Inbox Filter */}
          <div className="flex flex-col-reverse items-center intro-y sm:flex-row">
            <div className="relative w-full mt-3 mr-auto sm:w-auto sm:mt-0">
              <Lucide
                icon="Search"
                className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 text-slate-500"
              />
              <FormInput
                type="text"
                className="w-full px-10 sm:w-64 !box"
                placeholder="Search mail"
              />
              <Menu className="absolute inset-y-0 right-0 flex items-center mr-3">
                <Menu.Button
                  as="a"
                  role="button"
                  className="block w-4 h-4"
                  href="#"
                >
                  <Lucide
                    icon="ChevronDown"
                    className="w-4 h-4 cursor-pointer text-slate-500"
                  />
                </Menu.Button>
                <Menu.Items
                  placement="bottom-start"
                  className="pt-2 w-[478px] -ml-[228px] -mt-0.5"
                >
                  <div className="grid grid-cols-12 gap-4 p-3 gap-y-3">
                    <div className="col-span-6">
                      <FormLabel htmlFor="input-filter-1" className="text-xs">
                        From
                      </FormLabel>
                      <FormInput
                        id="input-filter-1"
                        type="text"
                        className="flex-1"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="col-span-6">
                      <FormLabel htmlFor="input-filter-2" className="text-xs">
                        To
                      </FormLabel>
                      <FormInput
                        id="input-filter-2"
                        type="text"
                        className="flex-1"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="col-span-6">
                      <FormLabel htmlFor="input-filter-3" className="text-xs">
                        Subject
                      </FormLabel>
                      <FormInput
                        id="input-filter-3"
                        type="text"
                        className="flex-1"
                        placeholder="Important Meeting"
                      />
                    </div>
                    <div className="col-span-6">
                      <FormLabel htmlFor="input-filter-4" className="text-xs">
                        Has the Words
                      </FormLabel>
                      <FormInput
                        id="input-filter-4"
                        type="text"
                        className="flex-1"
                        placeholder="Job, Work, Documentation"
                      />
                    </div>
                    <div className="col-span-6">
                      <FormLabel htmlFor="input-filter-5" className="text-xs">
                        Doesn't Have
                      </FormLabel>
                      <FormInput
                        id="input-filter-5"
                        type="text"
                        className="flex-1"
                        placeholder="Job, Work, Documentation"
                      />
                    </div>
                    <div className="col-span-6">
                      <FormLabel htmlFor="input-filter-6" className="text-xs">
                        Size
                      </FormLabel>
                      <FormSelect id="input-filter-6" className="flex-1">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                      </FormSelect>
                    </div>
                    <div className="flex items-center col-span-12 mt-3">
                      <Button variant="secondary" className="w-32 ml-auto">
                        Create Filter
                      </Button>
                      <Button variant="primary" className="w-32 ml-2">
                        Search
                      </Button>
                    </div>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
            <div className="flex w-full sm:w-auto">
              <Button variant="primary" className="mr-2 shadow-md">
                Start a Video Call
              </Button>
              <Menu>
                <Menu.Button as={Button} className="px-2 box">
                  <span className="flex items-center justify-center w-5 h-5">
                    <Lucide icon="Plus" className="w-4 h-4" />
                  </span>
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="User" className="w-4 h-4 mr-2" /> Contacts
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          {/* END: Inbox Filter */}
          {/* BEGIN: Inbox Content */}
          <div className="mt-5 intro-y box">
            <div className="flex flex-col-reverse p-5 border-b sm:flex-row text-slate-500 border-slate-200/60">
              <div className="flex items-center px-5 pt-5 mt-3 -mx-5 border-t sm:mt-0 sm:border-0 border-slate-200/60 sm:pt-0 sm:mx-0 sm:px-0">
                <FormCheck.Input
                  className="border-slate-400 checked:border-primary"
                  type="checkbox"
                />
                <Menu className="ml-1">
                  <Menu.Button as="a" className="block w-5 h-5" href="#">
                    <Lucide icon="ChevronDown" className="w-5 h-5" />
                  </Menu.Button>
                  <Menu.Items
                    placement="bottom-start"
                    className="w-32 text-slate-800 dark:text-slate-300"
                  >
                    <Menu.Item>All</Menu.Item>
                    <Menu.Item>None</Menu.Item>
                    <Menu.Item>Read</Menu.Item>
                    <Menu.Item>Unread</Menu.Item>
                    <Menu.Item>Starred</Menu.Item>
                    <Menu.Item>Unstarred</Menu.Item>
                  </Menu.Items>
                </Menu>
                <a
                  href="#"
                  className="flex items-center justify-center w-5 h-5 ml-5"
                >
                  <Lucide icon="RefreshCw" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-5 h-5 ml-5"
                >
                  <Lucide icon="MoreHorizontal" className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center sm:ml-auto">
                <div className="">1 - 50 of 5,238</div>
                <a
                  href="#"
                  className="flex items-center justify-center w-5 h-5 ml-5"
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-5 h-5 ml-5"
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-5 h-5 ml-5"
                >
                  <Lucide icon="Settings" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="overflow-x-auto sm:overflow-x-visible">
              {fakerData.map((faker, fakerKey) => (
                <div key={fakerKey} className="intro-y">
                  <div
                    className={clsx([
                      "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                      "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                      !faker.trueFalse[0] &&
                        "bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70",
                      faker.trueFalse[0] &&
                        "bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600",
                    ])}
                  >
                    <div className="flex px-5 py-3">
                      <div className="flex items-center flex-none mr-5 w-72">
                        <FormCheck.Input
                          className="flex-none border-slate-400 checked:border-primary"
                          type="checkbox"
                          checked={faker.trueFalse[0]}
                          onChange={() => {}}
                        />
                        <a
                          href="#"
                          className="flex items-center justify-center flex-none w-5 h-5 ml-4 text-slate-400"
                        >
                          <Lucide icon="Star" className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center flex-none w-5 h-5 ml-2 text-slate-400"
                        >
                          <Lucide icon="Bookmark" className="w-4 h-4" />
                        </a>
                        <div className="relative flex-none w-6 h-6 ml-5 image-fit">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={faker.photos[0]}
                          />
                        </div>
                        <div
                          className={clsx([
                            "ml-3 truncate",
                            faker.trueFalse[0] && "font-medium",
                          ])}
                        >
                          {faker.users[0].name}
                        </div>
                      </div>
                      <div className="w-64 truncate sm:w-auto">
                        <span
                          className={clsx([
                            "ml-3 truncate",
                            faker.trueFalse[0] && "font-medium",
                          ])}
                        >
                          {faker.news[0].superShortContent}
                        </span>
                        {faker.news[0].shortContent}
                      </div>
                      <div
                        className={clsx([
                          "pl-10 ml-auto whitespace-nowrap",
                          faker.trueFalse[0] && "font-medium",
                        ])}
                      >
                        {faker.times[0]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center p-5 text-center sm:flex-row sm:text-left text-slate-500">
              <div>4.41 GB (25%) of 17 GB used Manage</div>
              <div className="mt-2 sm:ml-auto sm:mt-0">
                Last account activity: 36 minutes ago
              </div>
            </div>
          </div>
          {/* END: Inbox Content */}
        </div>
      </div>
    </>
  );
}

export default Main;
