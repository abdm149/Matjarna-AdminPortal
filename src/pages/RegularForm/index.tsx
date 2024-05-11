import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import {
  FormSelect,
  FormInput,
  FormLabel,
  FormHelp,
  FormCheck,
  FormSwitch,
  FormInline,
  InputGroup,
} from "../../base-components/Form";
import Button from "../../base-components/Button";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Regular Form</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Input */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Input</h2>
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
                      <FormLabel htmlFor="regular-form-1">Input Text</FormLabel>
                      <FormInput
                        id="regular-form-1"
                        type="text"
                        placeholder="Input text"
                      />
                    </div>
                    <div className="mt-3">
                      <FormLabel htmlFor="regular-form-2">Rounded</FormLabel>
                      <FormInput
                        id="regular-form-2"
                        type="text"
                        rounded
                        placeholder="Rounded"
                      />
                    </div>
                    <div className="mt-3">
                      <FormLabel htmlFor="regular-form-3">With Help</FormLabel>
                      <FormInput
                        id="regular-form-3"
                        type="text"
                        placeholder="With help"
                      />
                      <FormHelp>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </FormHelp>
                    </div>
                    <div className="mt-3">
                      <FormLabel htmlFor="regular-form-4">Password</FormLabel>
                      <FormInput
                        id="regular-form-4"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-3">
                      <FormLabel htmlFor="regular-form-5">Disabled</FormLabel>
                      <FormInput
                        id="regular-form-5"
                        type="text"
                        placeholder="Disabled"
                        disabled
                      />
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div>
                  <FormLabel htmlFor="regular-form-1">Input Text</FormLabel>
                  <FormInput
                    id="regular-form-1"
                    type="text"
                    placeholder="Input text"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-2">Rounded</FormLabel>
                  <FormInput
                    id="regular-form-2"
                    type="text"
                    rounded
                    placeholder="Rounded"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-3">With Help</FormLabel>
                  <FormInput
                    id="regular-form-3"
                    type="text"
                    placeholder="With help"
                  />
                  <FormHelp>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </FormHelp>
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-4">Password</FormLabel>
                  <FormInput
                    id="regular-form-4"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-5">Disabled</FormLabel>
                  <FormInput
                    id="regular-form-5"
                    type="text"
                    placeholder="Disabled"
                    disabled
                  />
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input */}
          {/* BEGIN: Input Sizing */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Input Sizing
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
                    <FormInput
                      type="text"
                      formInputSize="lg"
                      placeholder=".form-control-lg"
                      aria-label=".form-control-lg example"
                    />
                    <FormInput
                      type="text"
                      className="mt-2"
                      placeholder="Default input"
                      aria-label="default input example"
                    />
                    <FormInput
                      type="text"
                      formInputSize="sm"
                      className="mt-2"
                      placeholder=".form-control-sm"
                      aria-label=".form-control-sm example"
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <FormInput
                  type="text"
                  formInputSize="lg"
                  placeholder=".form-control-lg"
                  aria-label=".form-control-lg example"
                />
                <FormInput
                  type="text"
                  className="mt-2"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <FormInput
                  type="text"
                  formInputSize="sm"
                  className="mt-2"
                  placeholder=".form-control-sm"
                  aria-label=".form-control-sm example"
                />
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Sizing */}
          {/* BEGIN: Input Groups */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Input Groups
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
                    <InputGroup>
                      <InputGroup.Text id="input-group-email">
                        @
                      </InputGroup.Text>
                      <FormInput
                        type="text"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="input-group-email"
                      />
                    </InputGroup>
                    <InputGroup className="mt-2">
                      <FormInput
                        type="text"
                        placeholder="Price"
                        aria-label="Price"
                        aria-describedby="input-group-price"
                      />
                      <InputGroup.Text id="input-group-price">
                        .00
                      </InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mt-2">
                      <InputGroup.Text>@</InputGroup.Text>
                      <FormInput
                        type="text"
                        placeholder="Price"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <InputGroup>
                  <InputGroup.Text id="input-group-email">
                    @
                  </InputGroup.Text>
                  <FormInput
                    type="text"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="input-group-email"
                  />
                </InputGroup>
                <InputGroup className="mt-2">
                  <FormInput
                    type="text"
                    placeholder="Price"
                    aria-label="Price"
                    aria-describedby="input-group-price"
                  />
                  <InputGroup.Text id="input-group-price">
                    .00
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mt-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormInput
                    type="text"
                    placeholder="Price"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Groups */}
          {/* BEGIN: Input State */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Input State</h2>
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
                      <FormLabel htmlFor="input-state-1">
                        Input Success
                      </FormLabel>
                      <FormInput
                        id="input-state-1"
                        type="text"
                        className="border-success"
                        placeholder="Input text"
                      />
                      <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                        <div className="h-full col-span-3 rounded bg-success"></div>
                        <div className="h-full col-span-3 rounded bg-success"></div>
                        <div className="h-full col-span-3 rounded bg-success"></div>
                        <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                      </div>
                      <div className="mt-2 text-success">Strong password</div>
                    </div>
                    <div className="mt-3">
                      <FormLabel htmlFor="input-state-2">
                        Input Warning
                      </FormLabel>
                      <FormInput
                        id="input-state-2"
                        type="text"
                        className="border-warning"
                        placeholder="Input text"
                      />
                      <div className="mt-2 text-warning">
                        Attempting to reconnect to server...
                      </div>
                    </div>
                    <div className="mt-3">
                      <FormLabel htmlFor="input-state-3">Input Error</FormLabel>
                      <FormInput
                        id="input-state-3"
                        type="text"
                        className="border-danger"
                        placeholder="Input text"
                      />
                      <div className="mt-2 text-danger">
                        This field is required
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div>
                  <FormLabel htmlFor="input-state-1">
                    Input Success
                  </FormLabel>
                  <FormInput
                    id="input-state-1"
                    type="text"
                    className="border-success"
                    placeholder="Input text"
                  />
                  <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                  </div>
                  <div className="mt-2 text-success">Strong password</div>
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="input-state-2">
                    Input Warning
                  </FormLabel>
                  <FormInput
                    id="input-state-2"
                    type="text"
                    className="border-warning"
                    placeholder="Input text"
                  />
                  <div className="mt-2 text-warning">
                    Attempting to reconnect to server...
                  </div>
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="input-state-3">Input Error</FormLabel>
                  <FormInput
                    id="input-state-3"
                    type="text"
                    className="border-danger"
                    placeholder="Input text"
                  />
                  <div className="mt-2 text-danger">
                    This field is required
                  </div>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input State */}
          {/* BEGIN: Select Options */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Select Options
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
                    <div className="flex flex-col items-center sm:flex-row">
                      <FormSelect
                        formSelectSize="lg"
                        className="sm:mt-2 sm:mr-2"
                        aria-label=".form-select-lg example"
                      >
                        <option>Chris Evans</option>
                        <option>Liam Neeson</option>
                        <option>Daniel Craig</option>
                      </FormSelect>
                      <FormSelect
                        className="mt-2 sm:mr-2"
                        aria-label="Default select example"
                      >
                        <option>Chris Evans</option>
                        <option>Liam Neeson</option>
                        <option>Daniel Craig</option>
                      </FormSelect>
                      <FormSelect
                        formSelectSize="sm"
                        className="mt-2"
                        aria-label=".form-select-sm example"
                      >
                        <option>Chris Evans</option>
                        <option>Liam Neeson</option>
                        <option>Daniel Craig</option>
                      </FormSelect>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="flex flex-col items-center sm:flex-row">
                  <FormSelect
                    formSelectSize="lg"
                    className="sm:mt-2 sm:mr-2"
                    aria-label=".form-select-lg example"
                  >
                    <option>Chris Evans</option>
                    <option>Liam Neeson</option>
                    <option>Daniel Craig</option>
                  </FormSelect>
                  <FormSelect
                    className="mt-2 sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>Chris Evans</option>
                    <option>Liam Neeson</option>
                    <option>Daniel Craig</option>
                  </FormSelect>
                  <FormSelect
                    formSelectSize="sm"
                    className="mt-2"
                    aria-label=".form-select-sm example"
                  >
                    <option>Chris Evans</option>
                    <option>Liam Neeson</option>
                    <option>Daniel Craig</option>
                  </FormSelect>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Select Options */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Vertical Form */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Vertical Form
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
                    <div>
                      <FormLabel htmlFor="vertical-form-1">Email</FormLabel>
                      <FormInput
                        id="vertical-form-1"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="mt-3">
                      <FormLabel htmlFor="vertical-form-2">Password</FormLabel>
                      <FormInput
                        id="vertical-form-2"
                        type="text"
                        placeholder="secret"
                      />
                    </div>
                    <FormCheck className="mt-5">
                      <FormCheck.Input
                        id="vertical-form-3"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="vertical-form-3">
                        Remember me
                      </FormCheck.Label>
                    </FormCheck>
                    <Button variant="primary" className="mt-5">
                      Login
                    </Button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div>
                  <FormLabel htmlFor="vertical-form-1">Email</FormLabel>
                  <FormInput
                    id="vertical-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="vertical-form-2">Password</FormLabel>
                  <FormInput
                    id="vertical-form-2"
                    type="text"
                    placeholder="secret"
                  />
                </div>
                <FormCheck className="mt-5">
                  <FormCheck.Input
                    id="vertical-form-3"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="vertical-form-3">
                    Remember me
                  </FormCheck.Label>
                </FormCheck>
                <Button variant="primary" className="mt-5">
                  Login
                </Button>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Vertical Form */}
          {/* BEGIN: Horizontal Form */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Horizontal Form
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
                    <FormInline>
                      <FormLabel
                        htmlFor="horizontal-form-1"
                        className="sm:w-20"
                      >
                        Email
                      </FormLabel>
                      <FormInput
                        id="horizontal-form-1"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </FormInline>
                    <FormInline className="mt-5">
                      <FormLabel
                        htmlFor="horizontal-form-2"
                        className="sm:w-20"
                      >
                        Password
                      </FormLabel>
                      <FormInput
                        id="horizontal-form-2"
                        type="password"
                        placeholder="secret"
                      />
                    </FormInline>
                    <FormCheck className="mt-5 sm:ml-20 sm:pl-5">
                      <FormCheck.Input
                        id="horizontal-form-3"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="horizontal-form-3">
                        Remember me
                      </FormCheck.Label>
                    </FormCheck>
                    <div className="mt-5 sm:ml-20 sm:pl-5">
                      <Button variant="primary">Login</Button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <FormInline>
                  <FormLabel
                    htmlFor="horizontal-form-1"
                    className="sm:w-20"
                  >
                    Email
                  </FormLabel>
                  <FormInput
                    id="horizontal-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </FormInline>
                <FormInline className="mt-5">
                  <FormLabel
                    htmlFor="horizontal-form-2"
                    className="sm:w-20"
                  >
                    Password
                  </FormLabel>
                  <FormInput
                    id="horizontal-form-2"
                    type="password"
                    placeholder="secret"
                  />
                </FormInline>
                <FormCheck className="mt-5 sm:ml-20 sm:pl-5">
                  <FormCheck.Input
                    id="horizontal-form-3"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="horizontal-form-3">
                    Remember me
                  </FormCheck.Label>
                </FormCheck>
                <div className="mt-5 sm:ml-20 sm:pl-5">
                  <Button variant="primary">Login</Button>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Horizontal Form */}
          {/* BEGIN: Inline Form */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Inline Form</h2>
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
                    <div className="grid grid-cols-12 gap-2">
                      <FormInput
                        type="text"
                        className="col-span-4"
                        placeholder="Input inline 1"
                        aria-label="default input inline 1"
                      />
                      <FormInput
                        type="text"
                        className="col-span-4"
                        placeholder="Input inline 2"
                        aria-label="default input inline 2"
                      />
                      <FormInput
                        type="text"
                        className="col-span-4"
                        placeholder="Input inline 3"
                        aria-label="default input inline 3"
                      />
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="grid grid-cols-12 gap-2">
                  <FormInput
                    type="text"
                    className="col-span-4"
                    placeholder="Input inline 1"
                    aria-label="default input inline 1"
                  />
                  <FormInput
                    type="text"
                    className="col-span-4"
                    placeholder="Input inline 2"
                    aria-label="default input inline 2"
                  />
                  <FormInput
                    type="text"
                    className="col-span-4"
                    placeholder="Input inline 3"
                    aria-label="default input inline 3"
                  />
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Inline Form */}
          {/* BEGIN: Checkbox & Switch */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Checkbox & Switch
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
                    <div>
                      <label>Vertical Checkbox</label>
                      <FormCheck className="mt-2">
                        <FormCheck.Input
                          id="checkbox-switch-1"
                          type="checkbox"
                          value=""
                        />
                        <FormCheck.Label htmlFor="checkbox-switch-1">
                          Chris Evans
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className="mt-2">
                        <FormCheck.Input
                          id="checkbox-switch-2"
                          type="checkbox"
                          value=""
                        />
                        <FormCheck.Label htmlFor="checkbox-switch-2">
                          Liam Neeson
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className="mt-2">
                        <FormCheck.Input
                          id="checkbox-switch-3"
                          type="checkbox"
                          value=""
                        />
                        <FormCheck.Label htmlFor="checkbox-switch-3">
                          Daniel Craig
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                    <div className="mt-3">
                      <label>Horizontal Checkbox</label>
                      <div className="flex flex-col mt-2 sm:flex-row">
                        <FormCheck className="mr-2">
                          <FormCheck.Input
                            id="checkbox-switch-4"
                            type="checkbox"
                            value=""
                          />
                          <FormCheck.Label htmlFor="checkbox-switch-4">
                            Chris Evans
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 mr-2 sm:mt-0">
                          <FormCheck.Input
                            id="checkbox-switch-5"
                            type="checkbox"
                            value=""
                          />
                          <FormCheck.Label htmlFor="checkbox-switch-5">
                            Liam Neeson
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 mr-2 sm:mt-0">
                          <FormCheck.Input
                            id="checkbox-switch-6"
                            type="checkbox"
                            value=""
                          />
                          <FormCheck.Label htmlFor="checkbox-switch-6">
                            Daniel Craig
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label>Switch</label>
                      <div className="mt-2">
                        <FormSwitch>
                          <FormSwitch.Input
                            id="checkbox-switch-7"
                            type="checkbox"
                          />
                          <FormSwitch.Label htmlFor="checkbox-switch-7">
                            Default switch checkbox input
                          </FormSwitch.Label>
                        </FormSwitch>
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div>
                  <label>Vertical Checkbox</label>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="checkbox-switch-1"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-1">
                      Chris Evans
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="checkbox-switch-2"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-2">
                      Liam Neeson
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="checkbox-switch-3"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-3">
                      Daniel Craig
                    </FormCheck.Label>
                  </FormCheck>
                </div>
                <div className="mt-3">
                  <label>Horizontal Checkbox</label>
                  <div className="flex flex-col mt-2 sm:flex-row">
                    <FormCheck className="mr-2">
                      <FormCheck.Input
                        id="checkbox-switch-4"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="checkbox-switch-4">
                        Chris Evans
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="checkbox-switch-5"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="checkbox-switch-5">
                        Liam Neeson
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="checkbox-switch-6"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="checkbox-switch-6">
                        Daniel Craig
                      </FormCheck.Label>
                    </FormCheck>
                  </div>
                </div>
                <div className="mt-3">
                  <label>Switch</label>
                  <div className="mt-2">
                    <FormSwitch>
                      <FormSwitch.Input
                        id="checkbox-switch-7"
                        type="checkbox"
                      />
                      <FormSwitch.Label htmlFor="checkbox-switch-7">
                        Default switch checkbox input
                      </FormSwitch.Label>
                    </FormSwitch>
                  </div>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Checkbox & Switch */}
          {/* BEGIN: Radio Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Radio</h2>
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
                    <div>
                      <label>Vertical Radio Button</label>
                      <FormCheck className="mt-2">
                        <FormCheck.Input
                          id="radio-switch-1"
                          type="radio"
                          name="vertical_radio_button"
                          value="vertical-radio-chris-evans"
                        />
                        <FormCheck.Label htmlFor="radio-switch-1">
                          Chris Evans
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className="mt-2">
                        <FormCheck.Input
                          id="radio-switch-2"
                          type="radio"
                          name="vertical_radio_button"
                          value="vertical-radio-liam-neeson"
                        />
                        <FormCheck.Label htmlFor="radio-switch-2">
                          Liam Neeson
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className="mt-2">
                        <FormCheck.Input
                          id="radio-switch-3"
                          type="radio"
                          name="vertical_radio_button"
                          value="vertical-radio-daniel-craig"
                        />
                        <FormCheck.Label htmlFor="radio-switch-3">
                          Daniel Craig
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                    <div className="mt-3">
                      <label>Horizontal Radio Button</label>
                      <div className="flex flex-col mt-2 sm:flex-row">
                        <FormCheck className="mr-2">
                          <FormCheck.Input
                            id="radio-switch-4"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <FormCheck.Label htmlFor="radio-switch-4">
                            Chris Evans
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 mr-2 sm:mt-0">
                          <FormCheck.Input
                            id="radio-switch-5"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <FormCheck.Label htmlFor="radio-switch-5">
                            Liam Neeson
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 mr-2 sm:mt-0">
                          <FormCheck.Input
                            id="radio-switch-6"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-daniel-craig"
                          />
                          <FormCheck.Label htmlFor="radio-switch-6">
                            Daniel Craig
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div>
                  <label>Vertical Radio Button</label>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="radio-switch-1"
                      type="radio"
                      name="vertical_radio_button"
                      value="vertical-radio-chris-evans"
                    />
                    <FormCheck.Label htmlFor="radio-switch-1">
                      Chris Evans
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="radio-switch-2"
                      type="radio"
                      name="vertical_radio_button"
                      value="vertical-radio-liam-neeson"
                    />
                    <FormCheck.Label htmlFor="radio-switch-2">
                      Liam Neeson
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="radio-switch-3"
                      type="radio"
                      name="vertical_radio_button"
                      value="vertical-radio-daniel-craig"
                    />
                    <FormCheck.Label htmlFor="radio-switch-3">
                      Daniel Craig
                    </FormCheck.Label>
                  </FormCheck>
                </div>
                <div className="mt-3">
                  <label>Horizontal Radio Button</label>
                  <div className="flex flex-col mt-2 sm:flex-row">
                    <FormCheck className="mr-2">
                      <FormCheck.Input
                        id="radio-switch-4"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-chris-evans"
                      />
                      <FormCheck.Label htmlFor="radio-switch-4">
                        Chris Evans
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-switch-5"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-liam-neeson"
                      />
                      <FormCheck.Label htmlFor="radio-switch-5">
                        Liam Neeson
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 mr-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-switch-6"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-daniel-craig"
                      />
                      <FormCheck.Label htmlFor="radio-switch-6">
                        Daniel Craig
                      </FormCheck.Label>
                    </FormCheck>
                  </div>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Radio Button */}
        </div>
      </div>
    </>
  );
}

export default Main;
