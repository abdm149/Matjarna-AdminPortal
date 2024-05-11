import _ from "lodash";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import {
  FormCheck,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { Menu } from "../../base-components/Headless";
import FileIcon from "../../base-components/FileIcon";

function Main() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
          <h2 className="mt-2 mr-auto text-lg font-medium intro-y">
            File Manager
          </h2>
          {/* BEGIN: File Manager Menu */}
          <div className="p-5 mt-6 intro-y box">
            <div className="mt-1">
              <a
                href=""
                className="flex items-center px-3 py-2 font-medium text-white rounded-md bg-primary"
              >
                <Lucide icon="Image" className="w-4 h-4 mr-2" /> Images
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Video" className="w-4 h-4 mr-2" /> Videos
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="File" className="w-4 h-4 mr-2" /> Documents
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Users" className="w-4 h-4 mr-2" /> Shared
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-darkmode-400">
              <a href="" className="flex items-center px-3 py-2 rounded-md">
                <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                Custom Work
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-success"></div>
                Important Meetings
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                Work
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                Design
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 mr-3 rounded-full bg-danger"></div>
                Next Week
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Label
              </a>
            </div>
          </div>
          {/* END: File Manager Menu */}
        </div>
        <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
          {/* BEGIN: File Manager Filter */}
          <div className="flex flex-col-reverse items-center intro-y sm:flex-row">
            <div className="relative w-full mt-3 mr-auto sm:w-auto sm:mt-0">
              <Lucide
                icon="Search"
                className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 text-slate-500"
              />
              <FormInput
                type="text"
                className="w-full px-10 sm:w-64 !box"
                placeholder="Search files"
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
                        File Name
                      </FormLabel>
                      <FormInput
                        id="input-filter-1"
                        type="text"
                        className="flex-1"
                        placeholder="Type the file name"
                      />
                    </div>
                    <div className="col-span-6">
                      <FormLabel htmlFor="input-filter-2" className="text-xs">
                        Shared With
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
                        Created At
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
                        Size
                      </FormLabel>
                      <FormSelect id="input-filter-4" className="flex-1">
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
                Upload New Files
              </Button>
              <Menu>
                <Menu.Button as={Button} className="px-2 !box">
                  <span className="flex items-center justify-center w-5 h-5">
                    <Lucide icon="Plus" className="w-4 h-4" />
                  </span>
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="File" className="w-4 h-4 mr-2" /> Share Files
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          {/* END: File Manager Filter */}
          {/* BEGIN: Directory & Files */}
          <div className="grid grid-cols-12 gap-3 mt-5 intro-y sm:gap-6">
            {fakerData.map((faker, fakerKey) => (
              <div
                key={fakerKey}
                className="col-span-6 intro-y sm:col-span-4 md:col-span-3 2xl:col-span-2"
              >
                <div className="relative px-3 pt-8 pb-5 rounded-md file box sm:px-5 zoom-in">
                  <div className="absolute top-0 left-0 mt-3 ml-3">
                    <FormCheck.Input
                      className="border"
                      type="checkbox"
                      checked={faker.trueFalse[0]}
                      onChange={() => {}}
                    />
                  </div>
                  {(() => {
                    if (faker.files[0].type == "Empty Folder")
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="empty-directory"
                        />
                      );
                    else if (faker.files[0].type == "Folder")
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="directory"
                        />
                      );
                    else if (faker.files[0].type == "Image")
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="image"
                          src={_.toLower(faker.files[0]["fileName"])}
                        />
                      );
                    else
                      return (
                        <FileIcon
                          className="w-3/5 mx-auto"
                          variant="file"
                          type={faker.files[0].type}
                        />
                      );
                  })()}
                  <a
                    href=""
                    className="block mt-4 font-medium text-center truncate"
                  >
                    {
                      faker.files[0].fileName.split("/")[
                        faker.files[0].fileName.split("/").length - 1
                      ]
                    }
                  </a>
                  <div className="text-slate-500 text-xs text-center mt-0.5">
                    {faker.files[0].size}
                  </div>
                  <Menu className="absolute top-0 right-0 mt-3 ml-auto mr-2">
                    <Menu.Button as="a" className="block w-5 h-5" href="#">
                      <Lucide
                        icon="MoreVertical"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                        File
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
            ))}
          </div>
          {/* END: Directory & Files */}
          {/* BEGIN: Pagination */}
          <div className="flex flex-wrap items-center mt-6 intro-y sm:flex-row sm:flex-nowrap">
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
          {/* END: Pagination */}
        </div>
      </div>
    </>
  );
}

export default Main;
