import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Typography</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Heading */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Heading</h2>
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
                    <div>
                      <h1 className="text-4xl font-medium leading-none">
                        h1. Heading 1
                      </h1>
                      <h2 className="mt-3 text-3xl font-medium leading-none">
                        h2. Heading 2
                      </h2>
                      <h3 className="mt-3 text-2xl font-medium leading-none">
                        h3. Heading 3
                      </h3>
                      <h4 className="mt-3 text-xl font-medium leading-none">
                        h4. Heading 4
                      </h4>
                      <h5 className="mt-3 text-lg font-medium leading-none">
                        h5. Heading 5
                      </h5>
                      <h6 className="mt-3 font-medium leading-none">
                        h6. Heading 6
                      </h6>
                    </div>
                    <div className="mt-5">
                      <h1 className="text-4xl font-medium leading-none text-primary">
                        h1. Heading 1
                      </h1>
                      <h2 className="mt-3 text-3xl font-medium leading-none text-slate-600 dark:text-slate-500">
                        h2. Heading 2
                      </h2>
                      <h3 className="mt-3 text-2xl font-medium leading-none text-success">
                        h3. Heading 3
                      </h3>
                      <h4 className="mt-3 text-xl font-medium leading-none text-warning">
                        h4. Heading 4
                      </h4>
                      <h5 className="mt-3 text-lg font-medium leading-none text-danger">
                        h5. Heading 5
                      </h5>
                      <h6 className="mt-3 font-medium leading-none text-slate-500">
                        h6. Heading 6
                      </h6>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <h1 className="text-4xl font-medium leading-none">h1. Heading 1</h1>
                <h2 className="mt-3 text-3xl font-medium leading-none">
                  h2. Heading 2
                </h2>
                <h3 className="mt-3 text-2xl font-medium leading-none">
                  h3. Heading 3
                </h3>
                <h4 className="mt-3 text-xl font-medium leading-none">
                  h4. Heading 4
                </h4>
                <h5 className="mt-3 text-lg font-medium leading-none">
                  h5. Heading 5
                </h5>
                <h6 className="mt-3 font-medium leading-none">h6. Heading 6</h6>
              </div>
              <div className="mt-5">
                <h1 className="text-4xl font-medium leading-none text-primary">
                  h1. Heading 1
                </h1>
                <h2
                  className="mt-3 text-3xl font-medium leading-none text-slate-600 dark:text-slate-500"
                >
                  h2. Heading 2
                </h2>
                <h3 className="mt-3 text-2xl font-medium leading-none text-success">
                  h3. Heading 3
                </h3>
                <h4 className="mt-3 text-xl font-medium leading-none text-warning">
                  h4. Heading 4
                </h4>
                <h5 className="mt-3 text-lg font-medium leading-none text-danger">
                  h5. Heading 5
                </h5>
                <h6 className="mt-3 font-medium leading-none text-slate-500">
                  h6. Heading 6
                </h6>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Heading */}
          {/* BEGIN: Text Settings */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Text Settings
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
                    <div>
                      <div className="font-normal">Example text</div>
                      <div className="font-medium">Example medium text</div>
                      <div className="font-semibold">Example semibold text</div>
                      <div className="font-bold">Example bolder text</div>
                      <div className="font-extrabold">Example boldest text</div>
                    </div>
                    <div className="mt-5">
                      <div className="uppercase">Example uppercase text</div>
                      <div className="lowercase">Example lowercase text</div>
                      <div className="capitalize">Example capitalized text</div>
                      <div className="normal-case">Example cursive text</div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <div className="font-normal">Example text</div>
                <div className="font-medium">Example medium text</div>
                <div className="font-semibold">Example semibold text</div>
                <div className="font-bold">Example bolder text</div>
                <div className="font-extrabold">Example boldest text</div>
              </div>
              <div className="mt-5">
                <div className="uppercase">Example uppercase text</div>
                <div className="lowercase">Example lowercase text</div>
                <div className="capitalize">Example capitalized text</div>
                <div className="normal-case">Example cursive text</div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Text Settings */}
          {/* BEGIN: Common Elements */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Common Elements
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
                    <div>
                      You can use the mark tag to
                      <mark className="p-1 bg-yellow-200">highlight</mark> text.
                    </div>
                    <del className="block mt-1">
                      This line of text is meant to be treated as deleted text.
                    </del>
                    <s className="block mt-1">
                      This line of text is meant to be treated as no longer
                      accurate.
                    </s>
                    <ins className="block mt-1">
                      This line of text is meant to be treated as an addition to
                      the document.
                    </ins>
                    <u className="block mt-1">
                      This line of text will render as underlined
                    </u>
                    <small className="block mt-1">
                      This line of text is meant to be treated as fine print.
                    </small>
                    <strong className="block mt-1">
                      This line rendered as bold text.
                    </strong>
                    <em className="block mt-1">
                      This line rendered as italicized text.
                    </em>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                You can use the mark tag to
                <mark className="p-1 bg-yellow-200">highlight</mark> text.
              </div>
              <del className="block mt-1"
                >This line of text is meant to be treated as deleted text.</del
              >
              <s className="block mt-1"
                >This line of text is meant to be treated as no longer
                accurate.</s
              >
              <ins className="block mt-1"
                >This line of text is meant to be treated as an addition to the
                document.</ins
              >
              <u className="block mt-1"
                >This line of text will render as underlined</u
              >
              <small className="block mt-1"
                >This line of text is meant to be treated as fine print.</small
              >
              <strong className="block mt-1"
                >This line rendered as bold text.</strong
              >
              <em className="block mt-1">This line rendered as italicized text.</em>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Common Elements */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: BADGES */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Badges</h2>
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
                    <div className="font-medium">Basic Badge</div>
                    <div className="mt-2">
                      <span className="px-1 mr-1 text-xs text-white rounded-full bg-primary">
                        1
                      </span>
                      <span className="px-1 mr-1 text-xs border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                        2
                      </span>
                      <span className="px-1 mr-1 text-xs text-white rounded-full bg-success">
                        3
                      </span>
                      <span className="px-1 mr-1 text-xs text-white rounded-full bg-warning">
                        4
                      </span>
                      <span className="px-1 mr-1 text-xs text-white rounded-full bg-danger">
                        5
                      </span>
                      <span className="px-1 mr-1 text-xs rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                        6
                      </span>
                    </div>
                    <div className="mt-6 font-medium">Badge Sizes</div>
                    <div className="mt-3">
                      <span className="px-2 py-1 mr-1 text-white rounded-full bg-primary">
                        1
                      </span>
                      <span className="px-2 py-1 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                        2
                      </span>
                      <span className="px-2 py-1 mr-1 text-white rounded-full bg-success">
                        3
                      </span>
                      <span className="px-2 py-1 mr-1 text-white rounded-full bg-warning">
                        4
                      </span>
                      <span className="px-2 py-1 mr-1 text-white rounded-full bg-danger">
                        5
                      </span>
                      <span className="px-2 py-1 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                        6
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="px-3 py-2 mr-1 text-white rounded-full bg-primary">
                        1
                      </span>
                      <span className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                        2
                      </span>
                      <span className="px-3 py-2 mr-1 text-white rounded-full bg-success">
                        3
                      </span>
                      <span className="px-3 py-2 mr-1 text-white rounded-full bg-warning">
                        4
                      </span>
                      <span className="px-3 py-2 mr-1 text-white rounded-full bg-danger">
                        5
                      </span>
                      <span className="px-3 py-2 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                        6
                      </span>
                    </div>
                    <div className="mt-6">
                      <span className="px-4 py-3 mr-1 text-white rounded-full bg-primary">
                        1
                      </span>
                      <span className="px-4 py-3 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                        2
                      </span>
                      <span className="px-4 py-3 mr-1 text-white rounded-full bg-success">
                        3
                      </span>
                      <span className="px-4 py-3 mr-1 text-white rounded-full bg-warning">
                        4
                      </span>
                      <span className="px-4 py-3 mr-1 text-white rounded-full bg-danger">
                        5
                      </span>
                      <span className="px-4 py-3 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                        6
                      </span>
                    </div>
                    <div className="mt-10 font-medium">Square Badge</div>
                    <div className="mt-2">
                      <span className="px-1 mr-1 text-xs text-white bg-primary">
                        1
                      </span>
                      <span className="px-1 mr-1 text-xs border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                        2
                      </span>
                      <span className="px-1 mr-1 text-xs text-white bg-success">
                        3
                      </span>
                      <span className="px-1 mr-1 text-xs text-white bg-warning">
                        4
                      </span>
                      <span className="px-1 mr-1 text-xs text-white bg-danger">
                        5
                      </span>
                      <span className="px-1 mr-1 text-xs bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                        6
                      </span>
                    </div>
                    <div className="mt-6 font-medium">Outline Badge</div>
                    <div className="mt-4">
                      <span className="px-3 py-2 mr-1 border rounded-full border-primary text-primary dark:border-primary">
                        1
                      </span>
                      <span className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                        2
                      </span>
                      <span className="px-3 py-2 mr-1 border rounded-full border-success text-success dark:border-success">
                        3
                      </span>
                      <span className="px-3 py-2 mr-1 border rounded-full border-warning text-warning dark:border-warning">
                        4
                      </span>
                      <span className="px-3 py-2 mr-1 border rounded-full border-danger text-danger dark:border-danger">
                        5
                      </span>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="font-medium">Basic Badge</div>
              <div className="mt-2">
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-1 mr-1 text-xs border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-success"
                  >3</span
                >
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-warning"
                  >4</span
                >
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-1 mr-1 text-xs rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6 font-medium">Badge Sizes</div>
              <div className="mt-3">
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-2 py-1 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-2 py-1 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-4">
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-3 py-2 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6">
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-4 py-3 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-4 py-3 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-10 font-medium">Square Badge</div>
              <div className="mt-2">
                <span className="px-1 mr-1 text-xs text-white bg-primary">1</span>
                <span
                  className="px-1 mr-1 text-xs border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-1 mr-1 text-xs text-white bg-success">3</span>
                <span className="px-1 mr-1 text-xs text-white bg-warning">4</span>
                <span className="px-1 mr-1 text-xs text-white bg-danger">5</span>
                <span
                  className="px-1 mr-1 text-xs bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6 font-medium">Outline Badge</div>
              <div className="mt-4">
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-primary text-primary dark:border-primary"
                  >1</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-success text-success dark:border-success"
                  >3</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-warning text-warning dark:border-warning"
                  >4</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-danger text-danger dark:border-danger"
                  >5</span
                >
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: BADGES */}
          {/* BEGIN: SEPARATOR */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Separator</h2>
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
                    <div className="w-full border-t border-dashed border-slate-200/60 dark:border-darkmode-400"></div>
                    <div className="w-full mt-5 border-t border-slate-200/60 dark:border-darkmode-400"></div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div
                className="w-full border-t border-dashed border-slate-200/60 dark:border-darkmode-400"
              ></div>
              <div
                className="w-full mt-5 border-t border-slate-200/60 dark:border-darkmode-400"
              ></div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: SEPARATOR */}
          {/* BEGIN: Divider */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Divider</h2>
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
                    <div className="flex justify-center w-full mt-2 border-t border-slate-200/60 dark:border-darkmode-400">
                      <div className="px-5 -mt-3 bg-white dark:bg-darkmode-600 text-slate-500">
                        or
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div
                className="flex justify-center w-full mt-2 border-t border-slate-200/60 dark:border-darkmode-400"
              >
                <div
                  className="px-5 -mt-3 bg-white dark:bg-darkmode-600 text-slate-500"
                >
                  or
                </div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Divider */}
          {/* BEGIN: Links */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Links</h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-7">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-7"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div>
                      <a href="" className="block font-normal text-primary">
                        Example text
                      </a>
                      <a href="" className="block font-medium text-primary">
                        Example medium text
                      </a>
                      <a href="" className="block font-semibold text-primary">
                        Example semibold text
                      </a>
                      <a href="" className="block font-bold text-primary">
                        Example bolder text
                      </a>
                      <a href="" className="block font-extrabold text-primary">
                        Example boldest text
                      </a>
                    </div>
                    <div className="mt-5">
                      <a href="" className="block text-primary">
                        Primary state
                      </a>
                      <a
                        href=""
                        className="block text-slate-600 dark:text-slate-500"
                      >
                        Secondary state
                      </a>
                      <a href="" className="block text-success">
                        Success state
                      </a>
                      <a href="" className="block text-warning">
                        Warning state
                      </a>
                      <a href="" className="block text-danger">
                        Danger state
                      </a>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <a href="" className="block font-normal text-primary"
                  >Example text</a
                >
                <a href="" className="block font-medium text-primary"
                  >Example medium text</a
                >
                <a href="" className="block font-semibold text-primary"
                  >Example semibold text</a
                >
                <a href="" className="block font-bold text-primary"
                  >Example bolder text</a
                >
                <a href="" className="block font-extrabold text-primary"
                  >Example boldest text</a
                >
              </div>
              <div className="mt-5">
                <a href="" className="block text-primary">Primary state</a>
                <a href="" className="block text-slate-600 dark:text-slate-500"
                  >Secondary state</a
                >
                <a href="" className="block text-success">Success state</a>
                <a href="" className="block text-warning">Warning state</a>
                <a href="" className="block text-danger">Danger state</a>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Links */}
        </div>
      </div>
    </>
  );
}

export default Main;
