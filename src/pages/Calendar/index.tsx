import "@fullcalendar/react/dist/vdom";
import Lucide from "../../base-components/Lucide";
import { Menu } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import Calendar from "../../components/Calendar";
import { Draggable as FullCalendarDraggable } from "../../base-components/Calendar";
import { Draggable } from "@fullcalendar/interaction";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  const dragableOptions: Draggable["settings"] = {
    itemSelector: ".event",
    eventData(eventEl) {
      const getDays = () => {
        const days = eventEl.querySelectorAll(".event__days")[0]?.textContent;
        return days ? days : "0";
      };
      return {
        title: eventEl.querySelectorAll(".event__title")[0]?.innerHTML,
        duration: {
          days: parseInt(getDays()),
        },
      };
    },
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Calendar</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            Print Schedule
          </Button>
          <Menu className="ml-auto sm:ml-0">
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Calendar Side Menu */}
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="p-5 box intro-y">
            <Button variant="primary" type="button" className="w-full mt-2">
              <Lucide icon="Edit3" className="w-4 h-4 mr-2" /> Add New Schedule
            </Button>
            <FullCalendarDraggable
              id="calendar-events"
              options={dragableOptions}
              className="py-3 mt-6 mb-5 border-t border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <div className="relative">
                <div className="flex items-center p-3 -mx-3 transition duration-300 ease-in-out rounded-md cursor-pointer event hover:bg-slate-100 dark:hover:bg-darkmode-400">
                  <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                  <div className="pr-10">
                    <div className="truncate event__title">VueJS Amsterdam</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      <span className="event__days">2</span> Days{" "}
                      <span className="mx-1">•</span> 10:00 AM
                    </div>
                  </div>
                </div>
                <a
                  className="absolute top-0 bottom-0 right-0 flex items-center my-auto"
                  href=""
                >
                  <Lucide icon="Edit" className="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div className="relative">
                <div className="flex items-center p-3 -mx-3 transition duration-300 ease-in-out rounded-md cursor-pointer event hover:bg-slate-100 dark:hover:bg-darkmode-400">
                  <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                  <div className="pr-10">
                    <div className="truncate event__title">
                      Vue Fes Japan 2019
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      <span className="event__days">3</span> Days{" "}
                      <span className="mx-1">•</span> 07:00 AM
                    </div>
                  </div>
                </div>
                <a
                  className="absolute top-0 bottom-0 right-0 flex items-center my-auto"
                  href=""
                >
                  <Lucide icon="Edit" className="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div className="relative">
                <div className="flex items-center p-3 -mx-3 transition duration-300 ease-in-out rounded-md cursor-pointer event hover:bg-slate-100 dark:hover:bg-darkmode-400">
                  <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                  <div className="pr-10">
                    <div className="truncate event__title">Laracon 2021</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      <span className="event__days">4</span> Days{" "}
                      <span className="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a
                  className="absolute top-0 bottom-0 right-0 flex items-center my-auto"
                  href=""
                >
                  <Lucide icon="Edit" className="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div
                className="hidden p-3 text-center text-slate-500"
                id="calendar-no-events"
              >
                No events yet
              </div>
            </FullCalendarDraggable>
            <FormSwitch className="flex">
              <FormSwitch.Label htmlFor="checkbox-events">
                Remove after drop
              </FormSwitch.Label>
              <FormSwitch.Input
                className="ml-auto"
                type="checkbox"
                id="checkbox-events"
              />
            </FormSwitch>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex">
              <Lucide icon="ChevronLeft" className="w-5 h-5 text-slate-500" />
              <div className="mx-auto text-base font-medium">April</div>
              <Lucide icon="ChevronRight" className="w-5 h-5 text-slate-500" />
            </div>
            <div className="grid grid-cols-7 gap-4 mt-5 text-center">
              <div className="font-medium">Su</div>
              <div className="font-medium">Mo</div>
              <div className="font-medium">Tu</div>
              <div className="font-medium">We</div>
              <div className="font-medium">Th</div>
              <div className="font-medium">Fr</div>
              <div className="font-medium">Sa</div>
              <div className="py-0.5 rounded relative text-slate-500">29</div>
              <div className="py-0.5 rounded relative text-slate-500">30</div>
              <div className="py-0.5 rounded relative text-slate-500">31</div>
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
              <div className="py-0.5 rounded relative text-slate-500">1</div>
              <div className="py-0.5 rounded relative text-slate-500">2</div>
              <div className="py-0.5 rounded relative text-slate-500">3</div>
              <div className="py-0.5 rounded relative text-slate-500">4</div>
              <div className="py-0.5 rounded relative text-slate-500">5</div>
              <div className="py-0.5 rounded relative text-slate-500">6</div>
              <div className="py-0.5 rounded relative text-slate-500">7</div>
              <div className="py-0.5 rounded relative text-slate-500">8</div>
              <div className="py-0.5 rounded relative text-slate-500">9</div>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center">
                <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                <span className="truncate">Independence Day</span>
                <div className="flex-1 h-px mx-3 border border-r border-dashed border-slate-200 xl:hidden"></div>
                <span className="font-medium xl:ml-auto">23th</span>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                <span className="truncate">Memorial Day</span>
                <div className="flex-1 h-px mx-3 border border-r border-dashed border-slate-200 xl:hidden"></div>
                <span className="font-medium xl:ml-auto">10th</span>
              </div>
            </div>
          </div>
        </div>
        {/* END: Calendar Side Menu */}
        {/* BEGIN: Calendar Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="p-5 box">
            <Calendar />
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </>
  );
}

export default Main;
