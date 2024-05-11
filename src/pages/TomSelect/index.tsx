import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import TomSelect from "../../base-components/TomSelect";
import { FormSwitch } from "../../base-components/Form";
import { useState } from "react";

function Main() {
  const [select, setSelect] = useState("1");
  const [selectMultiple, setSelectMultiple] = useState(["1", "3"]);
  const [selectHeader, setSelectHeader] = useState(["2", "3", "5"]);

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Tom Select</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Basic Select */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Select
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
                    {/* BEGIN: Basic Select */}
                    <div>
                      <label>Basic</label>
                      <div className="mt-2">
                        <TomSelect
                          value={select}
                          onChange={setSelect}
                          options={{
                            placeholder: "Select your favorite actors",
                          }}
                          className="w-full"
                        >
                          <option value="1">Leonardo DiCaprio</option>
                          <option value="2">Johnny Deep</option>
                          <option value="3">Robert Downey, Jr</option>
                          <option value="4">Samuel L. Jackson</option>
                          <option value="5">Morgan Freeman</option>
                        </TomSelect>
                      </div>
                    </div>
                    {/* END: Basic Select */}
                    {/* BEGIN: Nested Select */}
                    <div className="mt-3">
                      <label>Nested</label>
                      <div className="mt-2">
                        <TomSelect
                          value={select}
                          onChange={setSelect}
                          options={{
                            placeholder: "Select your favorite actors",
                          }}
                          className="w-full"
                        >
                          <optgroup label="American Actors">
                            <option value="1">Leonardo DiCaprio</option>
                            <option value="2">Johnny Deep</option>
                            <option value="3">Robert Downey, Jr</option>
                            <option value="4">Samuel L. Jackson</option>
                            <option value="5">Morgan Freeman</option>
                          </optgroup>
                          <optgroup label="American Actresses">
                            <option value="6">Scarlett Johansson</option>
                            <option value="7">Jessica Alba</option>
                            <option value="8">Jennifer Lawrence</option>
                            <option value="9">Emma Stone</option>
                            <option value="10">Angelina Jolie</option>
                          </optgroup>
                        </TomSelect>
                      </div>
                    </div>
                    {/* END: Nested Select */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Basic Select */}
              <div>
                <label>Basic</label>
                <div className="mt-2">
                  <TomSelect
                    value={select}
                    onChange={setSelect}
                    options={{
                      placeholder: "Select your favorite actors",
                    }}
                    className="w-full"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
              </div>
              {/* END: Basic Select */}
              {/* BEGIN: Nested Select */}
              <div className="mt-3">
                <label>Nested</label>
                <div className="mt-2">
                  <TomSelect
                    value={select}
                    onChange={setSelect}
                    options={{
                      placeholder: "Select your favorite actors",
                    }}
                    className="w-full"
                  >
                    <optgroup label="American Actors">
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </optgroup>
                    <optgroup label="American Actresses">
                      <option value="6">Scarlett Johansson</option>
                      <option value="7">Jessica Alba</option>
                      <option value="8">Jennifer Lawrence</option>
                      <option value="9">Emma Stone</option>
                      <option value="10">Angelina Jolie</option>
                    </optgroup>
                  </TomSelect>
                </div>
              </div>
              {/* END: Nested Select */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Select */}
          {/* BEGIN: Multiple Select */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Multiple Select
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
                    <TomSelect
                      value={selectMultiple}
                      onChange={setSelectMultiple}
                      options={{
                        placeholder: "Select your favorite actors",
                      }}
                      className="w-full"
                      multiple
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={selectMultiple}
                onChange={setSelectMultiple}
                options={{
                  placeholder: "Select your favorite actors",
                }}
                className="w-full"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Multiple Select */}
          {/* BEGIN: Header */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Header</h2>
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
                    <TomSelect
                      value={selectHeader}
                      onChange={setSelectHeader}
                      options={{
                        placeholder: "Select your favorite actors",
                        plugins: {
                          dropdown_header: {
                            title: "Actors",
                          },
                        },
                      }}
                      className="w-full"
                      multiple
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={selectHeader}
                onChange={setSelectHeader}
                options={{
                  placeholder: "Select your favorite actors",
                  plugins: {
                    dropdown_header: {
                      title: "Actors",
                    },
                  },
                }}
                className="w-full"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Input Group */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Input Group</h2>
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
                    <div className="flex">
                      <div className="z-30 flex items-center justify-center w-10 -mr-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                        @
                      </div>
                      <TomSelect
                        value={select}
                        onChange={setSelect}
                        className="w-full"
                      >
                        <option value="1">Leonardo DiCaprio</option>
                        <option value="2">Johnny Deep</option>
                        <option value="3">Robert Downey, Jr</option>
                        <option value="4">Samuel L. Jackson</option>
                        <option value="5">Morgan Freeman</option>
                      </TomSelect>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="flex">
                <div className="flex">
                  <div
                    className="z-30 flex items-center justify-center w-10 -mr-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                  >
                    @
                  </div>
                  <TomSelect
                    value={select}
                    onChange={setSelect}
                    className="w-full"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Group */}
          {/* BEGIN: Disabled */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Disabled</h2>
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
                    <TomSelect
                      value={select}
                      onChange={setSelect}
                      className="w-full"
                      disabled
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={select}
                onChange={setSelect}
                className="w-full"
                disabled
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Disabled */}
          {/* BEGIN: Disabled Option */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Disabled Option
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
                    <TomSelect
                      value={select}
                      onChange={setSelect}
                      className="w-full"
                    >
                      <option value="1" disabled>
                        Leonardo DiCaprio
                      </option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4" disabled>
                        Samuel L. Jackson
                      </option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={select}
                onChange={setSelect}
                className="w-full"
              >
                <option value="1" disabled>Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4" disabled>Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Disabled Option */}
        </div>
      </div>
    </>
  );
}

export default Main;
