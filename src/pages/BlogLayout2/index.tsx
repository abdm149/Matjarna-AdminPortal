import _ from "lodash";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Menu } from "../../base-components/Headless";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Blog Layout</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            Add New Post
          </Button>
          <Menu className="ml-auto sm:ml-0">
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share Post
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download
                Post
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        {/* BEGIN: Blog Layout */}
        {_.take(fakerData, 6).map((faker, fakerKey) => (
          <div key={fakerKey} className="col-span-12 intro-y md:col-span-6 box">
            <div className="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-t-md"
                src={faker.images[0]}
              />
              <div className="absolute z-10 flex items-center w-full px-5 pt-6">
                <div className="flex-none w-10 h-10 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                </div>
                <div className="ml-3 mr-auto text-white">
                  <a href="" className="font-medium">
                    {faker.users[0].name}
                  </a>
                  <div className="text-xs mt-0.5">
                    {faker.formattedTimes[0]}
                  </div>
                </div>
                <Menu className="ml-3">
                  <Menu.Button
                    as="a"
                    href="#"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20"
                  >
                    <Lucide
                      icon="MoreVertical"
                      className="w-4 h-4 text-white"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> Edit Post
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      Post
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
              <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                <span className="px-2 py-1 rounded bg-white/20">
                  {faker.products[0].category}
                </span>
                <a href="" className="block mt-3 text-xl font-medium">
                  {faker.news[0].title}
                </a>
              </div>
            </div>
            <div className="p-5 text-slate-600 dark:text-slate-500">
              {faker.news[0].shortContent}
            </div>
            <div className="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
              <Tippy
                as="a"
                href=""
                className="flex items-center justify-center w-8 h-8 mr-2 border rounded-full intro-x border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500"
                content="Bookmark"
              >
                <Lucide icon="Bookmark" className="w-3 h-3" />
              </Tippy>
              <div className="flex mr-2 intro-x">
                <div className="w-8 h-8 intro-x image-fit">
                  <Tippy
                    as="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="border border-white rounded-full zoom-in"
                    src={faker.photos[0]}
                    content={faker.users[0].name}
                  />
                </div>
                <div className="w-8 h-8 -ml-4 intro-x image-fit">
                  <Tippy
                    as="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="border border-white rounded-full zoom-in"
                    src={faker.photos[1]}
                    content={faker.users[1].name}
                  />
                </div>
                <div className="w-8 h-8 -ml-4 intro-x image-fit">
                  <Tippy
                    as="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="border border-white rounded-full zoom-in"
                    src={faker.photos[2]}
                    content={faker.users[2].name}
                  />
                </div>
              </div>
              <Tippy
                as="a"
                href=""
                className="flex items-center justify-center w-8 h-8 ml-auto rounded-full intro-x text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300"
                content="Share"
              >
                <Lucide icon="Share2" className="w-3 h-3" />
              </Tippy>
              <Tippy
                as="a"
                href=""
                className="flex items-center justify-center w-8 h-8 ml-2 text-white rounded-full intro-x bg-primary"
                content="Download PDF"
              >
                <Lucide icon="Share" className="w-3 h-3" />
              </Tippy>
            </div>
            <div className="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                <div className="mr-2">
                  Comments:{" "}
                  <span className="font-medium">{faker.totals[0]}</span>
                </div>
                <div className="mr-2">
                  Views: <span className="font-medium">{faker.totals[1]}k</span>
                </div>
                <div className="ml-auto">
                  Likes: <span className="font-medium">{faker.totals[2]}k</span>
                </div>
              </div>
              <div className="flex items-center w-full mt-3">
                <div className="flex-none w-8 h-8 mr-3 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                </div>
                <div className="relative flex-1 text-slate-600 dark:text-slate-200">
                  <FormInput
                    rounded
                    type="text"
                    className="pr-10 border-transparent bg-slate-100"
                    placeholder="Post a comment..."
                  />
                  <Lucide
                    icon="Smile"
                    className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* END: Blog Layout */}
        {/* BEGIN: Pagiantion */}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
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
        {/* END: Pagiantion */}
      </div>
    </>
  );
}

export default Main;
