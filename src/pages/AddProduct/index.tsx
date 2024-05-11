import _ from "lodash";
import { useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormInline,
  FormSelect,
  FormLabel,
  FormHelp,
  FormCheck,
  InputGroup,
  FormSwitch,
} from "../../base-components/Form";
import TomSelect from "../../base-components/TomSelect";
import { ClassicEditor } from "../../base-components/Ckeditor";
import Alert from "../../base-components/Alert";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import Table from "../../base-components/Table";

function Main() {
  const [subcategory, setSubcategory] = useState(["0"]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Add Product</h2>
      </div>
      <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">
        {/* BEGIN: Notification */}
        <Alert
          variant="primary"
          dismissible
          className="col-span-11 mb-6 intro-y box dark:border-darkmode-600"
        >
          {({ dismiss }) => (
            <>
              <div className="flex items-center">
                <span>
                  <Lucide icon="Info" className="w-4 h-4 mr-2" />
                </span>
                <span>
                  Starting May 10, 2021, there will be changes to the Terms &
                  Conditions regarding the number of products that may be added
                  by the Seller.
                  <a
                    href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                    className="ml-1 underline"
                    target="blank"
                  >
                    Learn More
                  </a>
                </span>
                <Alert.DismissButton
                  className="text-white"
                  onClick={dismiss}
                  aria-label="Close"
                >
                  <Lucide icon="X" className="w-4 h-4" />
                </Alert.DismissButton>
              </div>
            </>
          )}
        </Alert>
        {/* BEGIN: Notification */}
        <div className="col-span-11 intro-y 2xl:col-span-9">
          {/* BEGIN: Uplaod Product */}
          <div className="p-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Upload
                Product
              </div>
              <div className="mt-5">
                <div className="flex items-center text-slate-500">
                  <span>
                    <Lucide icon="Lightbulb" className="w-5 h-5 text-warning" />
                  </span>
                  <div className="ml-2">
                    <span className="mr-1">
                      Avoid selling counterfeit products / violating
                      Intellectual Property Rights, so that your products are
                      not deleted.
                    </span>
                    <a
                      href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                      className="font-medium text-primary"
                      target="blank"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <FormInline className="flex-col items-start mt-10 xl:flex-row">
                  <FormLabel className="w-full xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Photos</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        <div>
                          The image format is .jpg .jpeg .png and a minimum size
                          of 300 x 300 pixels (For optimal images use a minimum
                          size of 700 x 700 pixels).
                        </div>
                        <div className="mt-2">
                          Select product photos or drag and drop up to 5 photos
                          at once here. Include min. 3 attractive photos to make
                          the product more attractive to buyers.
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
                    <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
                      {_.take(fakerData, 5).map((faker, fakerKey) => (
                        <div
                          key={fakerKey}
                          className="relative col-span-5 cursor-pointer md:col-span-2 h-28 image-fit zoom-in"
                        >
                          <img
                            className="rounded-md"
                            alt="Midone - HTML Admin Template"
                            src={faker.photos[0]}
                          />
                          <Tippy
                            content="Remove this image?"
                            className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Tippy>
                        </div>
                      ))}
                    </div>
                    <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
                      <Lucide icon="Image" className="w-4 h-4 mr-2" />
                      <span className="mr-1 text-primary">
                        Upload a file
                      </span>{" "}
                      or drag and drop
                      <FormInput
                        id="horizontal-form-1"
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0"
                      />
                    </div>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Uplaod Product */}
          {/* BEGIN: Product Information */}
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Information
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Name</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput
                      id="product-name"
                      type="text"
                      placeholder="Product name"
                    />
                    <FormHelp className="text-right">
                      Maximum character 0/70
                    </FormHelp>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Category</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormSelect id="category">
                      {_.take(fakerData, 9).map((faker, fakerKey) => (
                        <option key={fakerKey} value={faker.categories[0].name}>
                          {faker.categories[0].name}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Subcategory</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        You can add a new subcategory or choose from the
                        existing subcategory list.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <TomSelect
                      value={subcategory}
                      onChange={setSubcategory}
                      options={{
                        placeholder: "Etalase",
                      }}
                      className="w-full"
                      multiple
                    >
                      {_.take(fakerData, 2).map((faker, fakerKey) => (
                        <option key={fakerKey} value={fakerKey}>
                          {faker.categories[0].name}
                        </option>
                      ))}
                    </TomSelect>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Product Information */}
          {/* BEGIN: Product Detail */}
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Detail
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Condition</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="flex flex-col sm:flex-row">
                      <FormCheck className="mr-4">
                        <FormCheck.Input
                          id="condition-new"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <FormCheck.Label htmlFor="condition-new">
                          New
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className="mt-2 mr-4 sm:mt-0">
                        <FormCheck.Input
                          id="condition-second"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <FormCheck.Label htmlFor="condition-second">
                          Second
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Description</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        <div>
                          Make sure the product description provides a detailed
                          explanation of your product so that it is easy to
                          understand and find your product.
                        </div>
                        <div className="mt-2">
                          It is recommended not to enter info on mobile numbers,
                          e-mails, etc. into the product description to protect
                          your personal data.
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />
                    <FormHelp className="text-right">
                      Maximum character 0/2000
                    </FormHelp>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Video</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Add a video so that buyers are more interested in your
                        product.
                        <a
                          href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                          className="font-medium text-primary"
                          target="blank"
                        >
                          Learn more.
                        </a>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <Button variant="outline-secondary" className="w-40">
                      <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add Video
                      URL
                    </Button>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Product Detail */}
          {/* BEGIN: Product Variant */}
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Variant
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="sm:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Variant</div>
                      </div>
                      <div className="mt-2 text-xs leading-relaxed text-slate-500">
                        Add variants such as color, size, or more. Choose a
                        maximum of 2 variant types.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0 xl:text-right">
                    <Button variant="primary" className="w-44">
                      <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                      Variant
                    </Button>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Product Variant */}
          {/* BEGIN: Product Variant (Details) */}
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Variant (Details)
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant 1</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Add the types of variants and options, you can add up to
                        5 options.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                      <a
                        href=""
                        className="absolute top-0 right-0 mt-4 mr-4 text-slate-500"
                      >
                        <Lucide icon="X" className="w-5 h-5" />
                      </a>
                      <div>
                        <FormInline className="mt-5 first:mt-0">
                          <FormLabel className="sm:w-20">Name</FormLabel>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <InputGroup className="flex-1">
                              <FormInput type="text" placeholder="Size" />
                              <InputGroup.Text>6/14</InputGroup.Text>
                            </InputGroup>
                          </div>
                        </FormInline>
                        <FormInline className="items-start mt-5 first:mt-0">
                          <FormLabel className="mt-2 sm:w-20">
                            Options
                          </FormLabel>
                          <div className="flex-1">
                            <div className="items-center mt-5 xl:flex first:mt-0">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Small" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                              <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="items-center mt-5 xl:flex first:mt-0">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Medium" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                              <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="items-center mt-5 xl:flex first:mt-0">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Large" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                              <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </FormInline>
                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                          <Button
                            variant="outline-primary"
                            className="w-full border-dashed"
                          >
                            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                            New Option
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-2 mt-2 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant 2</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Add the types of variants and options, you can add up to
                        5 options.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                      <a
                        href=""
                        className="absolute top-0 right-0 mt-4 mr-4 text-slate-500"
                      >
                        <Lucide icon="X" className="w-5 h-5" />
                      </a>
                      <div>
                        <FormInline className="mt-5 first:mt-0">
                          <FormLabel className="sm:w-20">Name</FormLabel>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <InputGroup className="flex-1">
                              <FormInput type="text" placeholder="Color" />
                              <InputGroup.Text>6/14</InputGroup.Text>
                            </InputGroup>
                          </div>
                        </FormInline>
                        <FormInline className="items-start mt-5 first:mt-0">
                          <FormLabel className="mt-2 sm:w-20">
                            Options
                          </FormLabel>
                          <div className="flex-1">
                            <div className="items-center mt-5 xl:flex first:mt-0">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Black" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                              <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="items-center mt-5 xl:flex first:mt-0">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="White" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                              <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="items-center mt-5 xl:flex first:mt-0">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Gray" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                              <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </FormInline>
                        <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                          <Button
                            variant="outline-primary"
                            className="w-full border-dashed"
                          >
                            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                            New Option
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FormInline>
                <div className="pt-2 mt-2 xl:ml-64 xl:pl-10 first:mt-0 first:pt-0">
                  <Button
                    variant="outline-secondary"
                    className="w-full py-3 border-dashed"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New
                    Variant
                  </Button>
                </div>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant Information</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Apply price and stock on all variants or based on
                        certain variant codes.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="grid-cols-4 gap-2 sm:grid">
                      <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormInput type="text" placeholder="Price" />
                      </InputGroup>
                      <FormInput
                        type="text"
                        className="mt-2 sm:mt-0"
                        placeholder="Stock"
                      />
                      <FormInput
                        type="text"
                        className="mt-2 sm:mt-0"
                        placeholder="Variant Code"
                      />
                      <Button variant="primary" className="mt-2 sm:mt-0">
                        Apply To All
                      </Button>
                    </div>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant List</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Set the price and stock for each variant.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="overflow-x-auto">
                      <Table className="border">
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Size
                            </Table.Th>
                            <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              <div className="flex items-center">
                                Color{" "}
                                <Lucide
                                  icon="HelpCircle"
                                  className="w-4 h-4 ml-2"
                                />
                              </div>
                            </Table.Th>
                            <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                              Price
                            </Table.Th>
                            <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                              <div className="flex items-center">
                                <div className="relative w-4 h-4 mr-2 -mt-0.5 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-primary/20 before:rounded-full lg:before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:border-4 after:border-white/60 after:dark:border-darkmode-300"></div>
                                Stock{" "}
                                <Lucide
                                  icon="HelpCircle"
                                  className="w-4 h-4 ml-2"
                                />
                              </div>
                            </Table.Th>
                            <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !pl-2">
                              Variant Code
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td rowSpan={3} className="border-r">
                              Small
                            </Table.Td>
                            <Table.Td>Black</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>White</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>Gray</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td rowSpan={3} className="border-r">
                              Medium
                            </Table.Td>
                            <Table.Td>Black</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>White</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>Gray</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td rowSpan={3} className="border-r">
                              Large
                            </Table.Td>
                            <Table.Td>Black</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>White</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>Gray</Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </Table.Td>
                            <Table.Td className="!pl-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormInline className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Wholesale</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Add wholesale price for certain quantity purchases.
                      </div>
                    </div>
                  </FormInline>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="overflow-x-auto">
                      <Table className="border">
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="!pr-2 bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                            <Table.Th className="bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                            <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Min.
                            </Table.Th>
                            <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Max.
                            </Table.Th>
                            <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Unit Price
                            </Table.Th>
                            <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td className="!pr-2">1.</Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Wholesale Price 1
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Min Qty"
                              />
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Max Qty"
                              />
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td className="!pr-2">2.</Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Wholesale Price 2
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Min Qty"
                              />
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Max Qty"
                              />
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td className="!pr-2">3.</Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Wholesale Price 3
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Min Qty"
                              />
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <FormInput
                                type="text"
                                className="min-w-[6rem]"
                                placeholder="Max Qty"
                              />
                            </Table.Td>
                            <Table.Td className="!px-2">
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </InputGroup>
                            </Table.Td>
                            <Table.Td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                    <Button
                      variant="outline-primary"
                      className="w-full mt-4 border-dashed"
                    >
                      <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New
                      Wholesale Price
                    </Button>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Product Variant (Details) */}
          {/* BEGIN: Product Management */}
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Management
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Status</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        If the status is active, your product can be searched
                        for by potential buyers.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormSwitch>
                      <FormSwitch.Input
                        id="product-status-active"
                        type="checkbox"
                      />
                      <FormSwitch.Label htmlFor="product-status-active">
                        Active
                      </FormSwitch.Label>
                    </FormSwitch>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Stock</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput
                      id="product-stock"
                      type="text"
                      placeholder="Input Product Stock"
                    />
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">
                          SKU (Stock Keeping Unit)
                        </div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Use a unique SKU code if you want to mark your product.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput id="sku" type="text" placeholder="Input SKU" />
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Product Management */}
          {/* BEGIN: Weight & Shipping */}
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Weight &
                Shipping
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Weight</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Enter the weight by weighing the product after it is
                        <span className="font-medium text-slate-600 dark:text-slate-300">
                          packaged
                        </span>
                        .
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="grid-cols-4 gap-2 sm:grid">
                      <FormSelect>
                        <option value="Gram (g)">Gram (g)</option>
                        <option value="Kilogram (kg)">Kilogram (kg)</option>
                      </FormSelect>
                      <FormInput
                        type="text"
                        id="product-weight"
                        className="mt-2 sm:mt-0"
                        placeholder="Stock"
                      />
                    </div>
                    <Alert
                      variant="outline-warning"
                      dismissible
                      className="mt-5 bg-warning/20 dark:bg-darkmode-400 dark:border-darkmode-400"
                    >
                      {({ dismiss }) => (
                        <>
                          <div className="flex items-center">
                            <span>
                              <Lucide
                                icon="AlertTriangle"
                                className="w-6 h-6 mr-3"
                              />
                            </span>
                            <span className="text-slate-800 dark:text-slate-500">
                              Pay close attention to the weight of the product
                              so that there is no difference in data with the
                              shipping courier.{" "}
                              <a className="font-medium text-primary" href="">
                                Learn More
                              </a>
                            </span>
                            <Alert.DismissButton
                              className="btn-close dark:text-white"
                              onClick={dismiss}
                            >
                              <Lucide icon="X" className="w-4 h-4" />
                            </Alert.DismissButton>
                          </div>
                        </>
                      )}
                    </Alert>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Size</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Enter the product size after packing to calculate the
                        volume weight.
                        <a className="font-medium text-primary" href="">
                          Learn Volume Weight
                        </a>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="grid-cols-3 gap-2 sm:grid">
                      <InputGroup>
                        <FormInput type="text" placeholder="Width" />
                        <InputGroup.Text>cm</InputGroup.Text>
                      </InputGroup>
                      <InputGroup className="mt-2 sm:mt-0">
                        <FormInput type="text" placeholder="Height" />
                        <InputGroup.Text>cm</InputGroup.Text>
                      </InputGroup>
                      <InputGroup className="mt-2 sm:mt-0">
                        <FormInput type="text" placeholder="Length" />
                        <InputGroup.Text>cm</InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <div className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Shipping Insurance</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Refund product & postage for the seller and buyer in
                        case of damage / loss during shipping.
                        <a className="font-medium text-primary" href="">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="flex flex-col sm:flex-row">
                      <FormCheck className="mr-4">
                        <FormCheck.Input
                          id="shipping-insurance-required"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <FormCheck.Label>
                          <div>Required</div>
                          <div className="w-56 mt-1 text-xs leading-relaxed text-slate-500">
                            You{" "}
                            <span className="font-medium text-slate-600 dark:text-slate-300">
                              require
                            </span>{" "}
                            the buyer to activate shipping insurance
                          </div>
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className="mt-2 mr-4 sm:mt-0">
                        <FormCheck.Input
                          id="shipping-insurance-optional"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <FormCheck.Label>
                          <div>Optional</div>
                          <div className="w-56 mt-1 text-xs leading-relaxed text-slate-500">
                            You{" "}
                            <span className="font-medium text-slate-600 dark:text-slate-300">
                              give the buyer the option
                            </span>{" "}
                            to activate shipping insurance
                          </div>
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Shipping Service</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Configure shipping services according to your product
                        type.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <div className="flex flex-col sm:flex-row">
                      <FormCheck className="mr-4">
                        <FormCheck.Input
                          id="shipping-service-standard"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <FormCheck.Label htmlFor="shipping-service-standard">
                          Standard
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className="mt-2 mr-4 sm:mt-0">
                        <FormCheck.Input
                          id="shipping-service-custom"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <FormCheck.Label htmlFor="shipping-service-custom">
                          Custom
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                    <div className="mt-3 text-xs leading-relaxed text-slate-500">
                      The delivery service for this product will be the same as
                      in the{" "}
                      <a className="font-medium text-primary" href="">
                        Shipping Settings.
                      </a>
                    </div>
                  </div>
                </FormInline>
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">PreOrder</div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormSwitch>
                      <FormSwitch.Input id="preorder-active" type="checkbox" />
                      <FormSwitch.Label
                        className="text-xs leading-relaxed text-slate-500"
                        htmlFor="preorder-active"
                      >
                        Activate PreOrder if you need a longer shipping process.
                        <a className="font-medium text-primary" href="">
                          Learn more.
                        </a>
                      </FormSwitch.Label>
                    </FormSwitch>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Weight & Shipping */}
          <div className="flex flex-col justify-end gap-2 mt-5 md:flex-row">
            <Button
              type="button"
              className="w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
            >
              Save & Add New Product
            </Button>
            <Button
              variant="primary"
              type="button"
              className="w-full py-3 md:w-52"
            >
              Save
            </Button>
          </div>
        </div>
        <div className="hidden col-span-2 intro-y 2xl:block">
          <div className="sticky top-0 pt-10">
            <ul className="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]">
              <li className="pl-5 mb-4 font-medium border-l-2 border-primary dark:border-primary text-primary">
                <a href="">Upload Product</a>
              </li>
              <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                <a href="">Product Information</a>
              </li>
              <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                <a href="">Product Detail</a>
              </li>
              <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                <a href="">Product Variant</a>
              </li>
              <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                <a href="">Product Variant (Details)</a>
              </li>
              <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                <a href="">Product Management</a>
              </li>
              <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                <a href="">Weight & Shipping</a>
              </li>
            </ul>
            <div className="relative p-5 mt-10 border rounded-md bg-warning/20 dark:bg-darkmode-600 border-warning dark:border-0">
              <Lucide
                icon="Lightbulb"
                className="absolute top-0 right-0 w-12 h-12 mt-5 mr-3 text-warning/80"
              />
              <h2 className="text-lg font-medium">Tips</h2>
              <div className="mt-5 font-medium">Price</div>
              <div className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-500">
                <div>
                  The image format is .jpg .jpeg .png and a minimum size of 300
                  x 300 pixels (For optimal images use a minimum size of 700 x
                  700 pixels).
                </div>
                <div className="mt-2">
                  Select product photos or drag and drop up to 5 photos at once
                  here. Include min. 3 attractive photos to make the product
                  more attractive to buyers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
