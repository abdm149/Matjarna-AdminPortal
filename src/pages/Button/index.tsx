import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
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
        <h2 className="mr-auto text-lg font-medium">Buttons</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Button */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Buttons
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
                    <Button variant="primary" className="w-24 mb-2 mr-1">
                      Primary
                    </Button>
                    <Button variant="secondary" className="w-24 mb-2 mr-1">
                      Secondary
                    </Button>
                    <Button variant="success" className="w-24 mb-2 mr-1">
                      Success
                    </Button>
                    <Button variant="warning" className="w-24 mb-2 mr-1">
                      Warning
                    </Button>
                    <Button variant="pending" className="w-24 mb-2 mr-1">
                      Pending
                    </Button>
                    <Button variant="danger" className="w-24 mb-2 mr-1">
                      Danger
                    </Button>
                    <Button variant="dark" className="w-24 mb-2 mr-1">
                      Dark
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Button variant="primary" className="w-24 mb-2 mr-1">
                  Primary
                </Button>
                <Button variant="secondary" className="w-24 mb-2 mr-1">
                  Secondary
                </Button>
                <Button variant="success" className="w-24 mb-2 mr-1">
                  Success
                </Button>
                <Button variant="warning" className="w-24 mb-2 mr-1">
                  Warning
                </Button>
                <Button variant="pending" className="w-24 mb-2 mr-1">
                  Pending
                </Button>
                <Button variant="danger" className="w-24 mb-2 mr-1">
                  Danger
                </Button>
                <Button variant="dark" className="w-24 mb-2 mr-1">
                  Dark
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Button */}
          {/* BEGIN: Button Size */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Button Sizes
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
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-24 mb-2 mr-1"
                      >
                        Small
                      </Button>
                      <Button variant="primary" className="w-24 mb-2 mr-1">
                        Medium
                      </Button>
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-24 mb-2 mr-1"
                      >
                        Large
                      </Button>
                    </div>
                    <div className="mt-5">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-24 mb-2 mr-1"
                      >
                        Small
                      </Button>
                      <Button variant="secondary" className="w-24 mb-2 mr-1">
                        Medium
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-24 mb-2 mr-1"
                      >
                        Large
                      </Button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-24 mb-2 mr-1"
                  >
                    Small
                  </Button>
                  <Button variant="primary" className="w-24 mb-2 mr-1">
                    Medium
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-24 mb-2 mr-1"
                  >
                    Large
                  </Button>
                </div>
                <div className="mt-5">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-24 mb-2 mr-1"
                  >
                    Small
                  </Button>
                  <Button variant="secondary" className="w-24 mb-2 mr-1">
                    Medium
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-24 mb-2 mr-1"
                  >
                    Large
                  </Button>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Button Size */}
          {/* BEGIN: Button Link */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Working with Links
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
                    <Button
                      as="a"
                      variant="primary"
                      href=""
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Link
                    </Button>
                    <Button
                      as="a"
                      variant="secondary"
                      href=""
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Button
                    </Button>
                    <Button
                      as="a"
                      variant="success"
                      href=""
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Input
                    </Button>
                    <Button
                      as="a"
                      variant="warning"
                      href=""
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Submit
                    </Button>
                    <Button
                      as="a"
                      variant="pending"
                      href=""
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Pending
                    </Button>
                    <Button
                      as="a"
                      variant="danger"
                      href=""
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Reset
                    </Button>
                    <Button
                      as="a"
                      variant="dark"
                      href=""
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Metal
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Button
                  as="a"
                  variant="primary"
                  href=""
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Link
                </Button>
                <Button
                  as="a"
                  variant="secondary"
                  href=""
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Button
                </Button>
                <Button
                  as="a"
                  variant="success"
                  href=""
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Input
                </Button>
                <Button
                  as="a"
                  variant="warning"
                  href=""
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Submit
                </Button>
                <Button
                  as="a"
                  variant="pending"
                  href=""
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Pending
                </Button>
                <Button
                  as="a"
                  variant="danger"
                  href=""
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Reset
                </Button>
                <Button
                  as="a"
                  variant="dark"
                  href=""
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Metal
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Button Link */}
          {/* BEGIN: Elevated Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Elevated Buttons
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
                    <div>
                      <Button
                        variant="primary"
                        elevated
                        className="w-24 mb-2 mr-1"
                      >
                        Primary
                      </Button>
                      <Button
                        variant="secondary"
                        elevated
                        className="w-24 mb-2 mr-1"
                      >
                        Secondary
                      </Button>
                      <Button
                        variant="success"
                        elevated
                        className="w-24 mb-2 mr-1"
                      >
                        Success
                      </Button>
                      <Button
                        variant="warning"
                        elevated
                        className="w-24 mb-2 mr-1"
                      >
                        Warning
                      </Button>
                      <Button
                        variant="pending"
                        elevated
                        className="w-24 mb-2 mr-1"
                      >
                        Pending
                      </Button>
                      <Button
                        variant="danger"
                        elevated
                        className="w-24 mb-2 mr-1"
                      >
                        Danger
                      </Button>
                      <Button
                        variant="dark"
                        elevated
                        className="w-24 mb-2 mr-1"
                      >
                        Dark
                      </Button>
                    </div>
                    <div className="mt-5">
                      <Button
                        variant="primary"
                        elevated
                        rounded
                        className="w-24 mb-2 mr-1"
                      >
                        Primary
                      </Button>
                      <Button
                        variant="secondary"
                        elevated
                        rounded
                        className="w-24 mb-2 mr-1"
                      >
                        Secondary
                      </Button>
                      <Button
                        variant="success"
                        elevated
                        rounded
                        className="w-24 mb-2 mr-1"
                      >
                        Success
                      </Button>
                      <Button
                        variant="warning"
                        elevated
                        rounded
                        className="w-24 mb-2 mr-1"
                      >
                        Warning
                      </Button>
                      <Button
                        variant="pending"
                        elevated
                        rounded
                        className="w-24 mb-2 mr-1"
                      >
                        Pending
                      </Button>
                      <Button
                        variant="danger"
                        elevated
                        rounded
                        className="w-24 mb-2 mr-1"
                      >
                        Danger
                      </Button>
                      <Button
                        variant="dark"
                        elevated
                        rounded
                        className="w-24 mb-2 mr-1"
                      >
                        Dark
                      </Button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div>
                  <Button
                    variant="primary"
                    elevated
                    className="w-24 mb-2 mr-1"
                  >
                    Primary
                  </Button>
                  <Button
                    variant="secondary"
                    elevated
                    className="w-24 mb-2 mr-1"
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="success"
                    elevated
                    className="w-24 mb-2 mr-1"
                  >
                    Success
                  </Button>
                  <Button
                    variant="warning"
                    elevated
                    className="w-24 mb-2 mr-1"
                  >
                    Warning
                  </Button>
                  <Button
                    variant="pending"
                    elevated
                    className="w-24 mb-2 mr-1"
                  >
                    Pending
                  </Button>
                  <Button
                    variant="danger"
                    elevated
                    className="w-24 mb-2 mr-1"
                  >
                    Danger
                  </Button>
                  <Button
                    variant="dark"
                    elevated
                    className="w-24 mb-2 mr-1"
                  >
                    Dark
                  </Button>
                </div>
                <div className="mt-5">
                  <Button
                    variant="primary"
                    elevated
                    rounded
                    className="w-24 mb-2 mr-1"
                  >
                    Primary
                  </Button>
                  <Button
                    variant="secondary"
                    elevated
                    rounded
                    className="w-24 mb-2 mr-1"
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="success"
                    elevated
                    rounded
                    className="w-24 mb-2 mr-1"
                  >
                    Success
                  </Button>
                  <Button
                    variant="warning"
                    elevated
                    rounded
                    className="w-24 mb-2 mr-1"
                  >
                    Warning
                  </Button>
                  <Button
                    variant="pending"
                    elevated
                    rounded
                    className="w-24 mb-2 mr-1"
                  >
                    Pending
                  </Button>
                  <Button
                    variant="danger"
                    elevated
                    rounded
                    className="w-24 mb-2 mr-1"
                  >
                    Danger
                  </Button>
                  <Button
                    variant="dark"
                    elevated
                    rounded
                    className="w-24 mb-2 mr-1"
                  >
                    Dark
                  </Button>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Elevated Button */}
          {/* BEGIN: Social Media Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Social Media Buttons
                  </h2>
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
                    <div className="flex flex-wrap">
                      <Button variant="facebook" className="w-32 mb-2 mr-2">
                        <Lucide icon="Facebook" className="w-4 h-4 mr-2" />{" "}
                        Facebook
                      </Button>
                      <Button variant="twitter" className="w-32 mb-2 mr-2">
                        <Lucide icon="Twitter" className="w-4 h-4 mr-2" />{" "}
                        Twitter
                      </Button>
                      <Button variant="instagram" className="w-32 mb-2 mr-2">
                        <Lucide icon="Instagram" className="w-4 h-4 mr-2" />{" "}
                        Instagram
                      </Button>
                      <Button variant="linkedin" className="w-32 mb-2 mr-2">
                        <Lucide icon="Linkedin" className="w-4 h-4 mr-2" />{" "}
                        Linkedin
                      </Button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="flex flex-wrap">
                  <Button variant="facebook" className="w-32 mb-2 mr-2">
                    <Lucide icon="Facebook" className="w-4 h-4 mr-2" />{" "}
                    Facebook
                  </Button>
                  <Button variant="twitter" className="w-32 mb-2 mr-2">
                    <Lucide icon="Twitter" className="w-4 h-4 mr-2" />{" "}
                    Twitter
                  </Button>
                  <Button
                    variant="instagram"
                    className="w-32 mb-2 mr-2"
                  >
                    <Lucide icon="Instagram" className="w-4 h-4 mr-2" />{" "}
                    Instagram
                  </Button>
                  <Button variant="linkedin" className="w-32 mb-2 mr-2">
                    <Lucide icon="Linkedin" className="w-4 h-4 mr-2" />{" "}
                    Linkedin
                  </Button>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Social Media Button */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Outline Button */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Outline Buttons
                  </h2>
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
                    <Button
                      variant="outline-primary"
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Primary
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Secondary
                    </Button>
                    <Button
                      variant="outline-success"
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Success
                    </Button>
                    <Button
                      variant="outline-warning"
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Warning
                    </Button>
                    <Button
                      variant="outline-pending"
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Pending
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Danger
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="inline-block w-24 mb-2 mr-1"
                    >
                      Dark
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Button
                  variant="outline-primary"
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Primary
                </Button>
                <Button
                  variant="outline-secondary"
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Secondary
                </Button>
                <Button
                  variant="outline-success"
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Success
                </Button>
                <Button
                  variant="outline-warning"
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Warning
                </Button>
                <Button
                  variant="outline-pending"
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Pending
                </Button>
                <Button
                  variant="outline-danger"
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Danger
                </Button>
                <Button
                  variant="outline-dark"
                  className="inline-block w-24 mb-2 mr-1"
                >
                  Dark
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Outline Button */}
          {/* BEGIN: Loading Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Loading State Buttons
                  </h2>
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
                    <Button variant="primary" className="mb-2 mr-1">
                      Saving
                      <LoadingIcon
                        icon="oval"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    </Button>
                    <Button variant="success" className="mb-2 mr-1">
                      Adding
                      <LoadingIcon
                        icon="spinning-circles"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    </Button>
                    <Button variant="warning" className="mb-2 mr-1">
                      Loading
                      <LoadingIcon
                        icon="three-dots"
                        color="1a202c"
                        className="w-4 h-4 ml-2"
                      />
                    </Button>
                    <Button variant="danger" className="mb-2 mr-1">
                      Deleting
                      <LoadingIcon
                        icon="puff"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Button variant="primary" className="mb-2 mr-1">
                  Saving
                  <LoadingIcon
                    icon="oval"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
                <Button variant="success" className="mb-2 mr-1">
                  Adding
                  <LoadingIcon
                    icon="spinning-circles"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
                <Button variant="warning" className="mb-2 mr-1">
                  Loading
                  <LoadingIcon
                    icon="three-dots"
                    color="1a202c"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
                <Button variant="danger" className="mb-2 mr-1">
                  Deleting
                  <LoadingIcon
                    icon="puff"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Loading Button */}
          {/* BEGIN: Rounded Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Rounded Buttons
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-8">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-8"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Button
                      variant="primary"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Primary
                    </Button>
                    <Button
                      variant="secondary"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Secondary
                    </Button>
                    <Button
                      variant="success"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Success
                    </Button>
                    <Button
                      variant="warning"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Warning
                    </Button>
                    <Button
                      variant="pending"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Pending
                    </Button>
                    <Button variant="danger" rounded className="w-24 mb-2 mr-1">
                      Danger
                    </Button>
                    <Button variant="dark" rounded className="w-24 mb-2 mr-1">
                      Dark
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Button
                  variant="primary"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Primary
                </Button>
                <Button
                  variant="secondary"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Secondary
                </Button>
                <Button
                  variant="success"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Success
                </Button>
                <Button
                  variant="warning"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Warning
                </Button>
                <Button
                  variant="pending"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Pending
                </Button>
                <Button variant="danger" rounded className="w-24 mb-2 mr-1">
                  Danger
                </Button>
                <Button variant="dark" rounded className="w-24 mb-2 mr-1">
                  Dark
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Rounded Button */}
          {/* BEGIN: Soft Color Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Soft Color Buttons
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-9">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-9"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Button
                      variant="soft-primary"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Primary
                    </Button>
                    <Button
                      variant="soft-secondary"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Secondary
                    </Button>
                    <Button
                      variant="soft-success"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Success
                    </Button>
                    <Button
                      variant="soft-warning"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Warning
                    </Button>
                    <Button
                      variant="soft-pending"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Pending
                    </Button>
                    <Button
                      variant="soft-danger"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Danger
                    </Button>
                    <Button
                      variant="soft-dark"
                      rounded
                      className="w-24 mb-2 mr-1"
                    >
                      Dark
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Button
                  variant="soft-primary"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Primary
                </Button>
                <Button
                  variant="soft-secondary"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Secondary
                </Button>
                <Button
                  variant="soft-success"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Success
                </Button>
                <Button
                  variant="soft-warning"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Warning
                </Button>
                <Button
                  variant="soft-pending"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Pending
                </Button>
                <Button
                  variant="soft-danger"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Danger
                </Button>
                <Button
                  variant="soft-dark"
                  rounded
                  className="w-24 mb-2 mr-1"
                >
                  Dark
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Soft Color Button */}
          {/* BEGIN: Icon Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Icon Buttons
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-10">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-10"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="flex flex-wrap">
                      <Button variant="primary" className="w-32 mb-2 mr-2">
                        <Lucide icon="Activity" className="w-4 h-4 mr-2" />{" "}
                        Activity
                      </Button>
                      <Button variant="secondary" className="w-32 mb-2 mr-2">
                        <Lucide icon="HardDrive" className="w-4 h-4 mr-2" />{" "}
                        Hard Drive
                      </Button>
                      <Button variant="success" className="w-32 mb-2 mr-2">
                        <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                        Calendar
                      </Button>
                      <Button variant="warning" className="w-32 mb-2 mr-2">
                        <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share
                      </Button>
                      <Button variant="pending" className="w-32 mb-2 mr-2">
                        <Lucide icon="Download" className="w-4 h-4 mr-2" />{" "}
                        Pending
                      </Button>
                      <Button variant="danger" className="w-32 mb-2 mr-2">
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
                      </Button>
                      <Button variant="dark" className="w-32 mb-2 mr-2">
                        <Lucide icon="Image" className="w-4 h-4 mr-2" /> Image
                      </Button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="flex flex-wrap">
                  <Button variant="primary" className="w-32 mb-2 mr-2">
                    <Lucide icon="Activity" className="w-4 h-4 mr-2" />{" "}
                    Activity
                  </Button>
                  <Button variant="secondary" className="w-32 mb-2 mr-2">
                    <Lucide icon="HardDrive" className="w-4 h-4 mr-2" />{" "}
                    Hard Drive
                  </Button>
                  <Button variant="success" className="w-32 mb-2 mr-2">
                    <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                    Calendar
                  </Button>
                  <Button variant="warning" className="w-32 mb-2 mr-2">
                    <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share
                  </Button>
                  <Button variant="pending" className="w-32 mb-2 mr-2">
                    <Lucide icon="Download" className="w-4 h-4 mr-2" />{" "}
                    Pending
                  </Button>
                  <Button variant="danger" className="w-32 mb-2 mr-2">
                    <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
                  </Button>
                  <Button variant="dark" className="w-32 mb-2 mr-2">
                    <Lucide icon="Image" className="w-4 h-4 mr-2" /> Image
                  </Button>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon Button */}
          {/* BEGIN: Icon Only Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Icon Only Buttons
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-11">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-11"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <Button variant="primary" className="mb-2 mr-1">
                      <Lucide icon="Activity" className="w-5 h-5" />
                    </Button>
                    <Button variant="secondary" className="mb-2 mr-1">
                      <Lucide icon="HardDrive" className="w-5 h-5" />
                    </Button>
                    <Button variant="success" className="mb-2 mr-1">
                      <Lucide icon="Calendar" className="w-5 h-5" />
                    </Button>
                    <Button variant="warning" className="mb-2 mr-1">
                      <Lucide icon="Share2" className="w-5 h-5" />
                    </Button>
                    <Button variant="pending" className="mb-2 mr-1">
                      <Lucide icon="Download" className="w-5 h-5" />
                    </Button>
                    <Button variant="danger" className="mb-2 mr-1">
                      <Lucide icon="Trash" className="w-5 h-5" />
                    </Button>
                    <Button variant="dark" className="mb-2 mr-1">
                      <Lucide icon="Image" className="w-5 h-5" />
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <Button variant="primary" className="mb-2 mr-1">
                  <Lucide icon="Activity" className="w-5 h-5" />
                </Button>
                <Button variant="secondary" className="mb-2 mr-1">
                  <Lucide icon="HardDrive" className="w-5 h-5" />
                </Button>
                <Button variant="success" className="mb-2 mr-1">
                  <Lucide icon="Calendar" className="w-5 h-5" />
                </Button>
                <Button variant="warning" className="mb-2 mr-1">
                  <Lucide icon="Share2" className="w-5 h-5" />
                </Button>
                <Button variant="pending" className="mb-2 mr-1">
                  <Lucide icon="Download" className="w-5 h-5" />
                </Button>
                <Button variant="danger" className="mb-2 mr-1">
                  <Lucide icon="Trash" className="w-5 h-5" />
                </Button>
                <Button variant="dark" className="mb-2 mr-1">
                  <Lucide icon="Image" className="w-5 h-5" />
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon Only Button */}
        </div>
      </div>
    </>
  );
}

export default Main;
