import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { FormSwitch } from "../../base-components/Form";
import VerticalBarChart from "../../components/VerticalBarChart";
import StackedBarChart from "../../components/StackedBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import LineChart from "../../components/LineChart";
import DonutChart from "../../components/DonutChart";
import PieChart from "../../components/PieChart";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Chart</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Vertical Bar Chart */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Vertical Bar Chart
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
                    <VerticalBarChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <VerticalBarChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Vertical Bar Chart */}
          {/* BEGIN: Horizontal Bar Chart */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Horizontal Bar Chart
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
                    <HorizontalBarChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <HorizontalBarChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Horizontal Bar Chart */}
          {/* BEGIN: Donut Chart */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Donut Chart</h2>
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
                    <DonutChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <DonutChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Donut Chart */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Stacked Bar Chart */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Stacked Bar Chart
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
                    <StackedBarChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <StackedBarChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Stacked Bar Chart */}
          {/* BEGIN: Line Chart */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Line Chart</h2>
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
                    <LineChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <LineChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Line Chart */}
          {/* BEGIN: Pie Chart */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Pie Chart</h2>
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
                    <PieChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <PieChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Pie Chart */}
        </div>
      </div>
    </>
  );
}

export default Main;
