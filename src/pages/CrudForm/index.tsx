import { ClassicEditor } from "../../base-components/Ckeditor";
import TomSelect from "../../base-components/TomSelect";
import { useState } from "react";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSwitch,
  InputGroup,
} from "../../base-components/Form";

function Main() {
  const [categories, setCategories] = useState(["1", "3"]);
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Form Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Form Layout */}
          <div className="p-5 intro-y box">
            <div>
              <FormLabel htmlFor="crud-form-1">Product Name</FormLabel>
              <FormInput
                id="crud-form-1"
                type="text"
                className="w-full"
                placeholder="Input text"
              />
            </div>
            <div className="mt-3">
              <FormLabel htmlFor="crud-form-2">Category</FormLabel>
              <TomSelect
                id="crud-form-2"
                value={categories}
                onChange={setCategories}
                className="w-full"
                multiple
              >
                <option value="1">Sport & Outdoor</option>
                <option value="2">PC & Laptop</option>
                <option value="3">Smartphone & Tablet</option>
                <option value="4">Photography</option>
              </TomSelect>
            </div>
            <div className="mt-3">
              <FormLabel htmlFor="crud-form-3">Quantity</FormLabel>
              <InputGroup>
                <FormInput
                  id="crud-form-3"
                  type="text"
                  placeholder="Quantity"
                  aria-describedby="input-group-1"
                />
                <InputGroup.Text id="input-group-1">pcs</InputGroup.Text>
              </InputGroup>
            </div>
            <div className="mt-3">
              <FormLabel htmlFor="crud-form-4">Weight</FormLabel>
              <InputGroup>
                <FormInput
                  id="crud-form-4"
                  type="text"
                  placeholder="Weight"
                  aria-describedby="input-group-2"
                />
                <InputGroup.Text id="input-group-2">grams</InputGroup.Text>
              </InputGroup>
            </div>
            <div className="mt-3">
              <FormLabel>Price</FormLabel>
              <div className="grid-cols-3 gap-2 sm:grid">
                <InputGroup>
                  <InputGroup.Text id="input-group-3">Unit</InputGroup.Text>
                  <FormInput
                    type="text"
                    placeholder="Unit"
                    aria-describedby="input-group-3"
                  />
                </InputGroup>
                <InputGroup className="mt-2 sm:mt-0">
                  <InputGroup.Text id="input-group-4">
                    Wholesale
                  </InputGroup.Text>
                  <FormInput
                    type="text"
                    placeholder="Wholesale"
                    aria-describedby="input-group-4"
                  />
                </InputGroup>
                <InputGroup className="mt-2 sm:mt-0">
                  <InputGroup.Text id="input-group-5">Bulk</InputGroup.Text>
                  <FormInput
                    type="text"
                    placeholder="Bulk"
                    aria-describedby="input-group-5"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-3">
              <label>Active Status</label>
              <FormSwitch className="mt-2">
                <FormSwitch.Input type="checkbox" />
              </FormSwitch>
            </div>
            <div className="mt-3">
              <label>Description</label>
              <div className="mt-2">
                <ClassicEditor
                  value={editorData}
                  onChange={setEditorData}
                  config={editorConfig}
                />
              </div>
            </div>
            <div className="mt-5 text-right">
              <Button
                type="button"
                variant="outline-secondary"
                className="w-24 mr-1"
              >
                Cancel
              </Button>
              <Button type="button" variant="primary" className="w-24">
                Save
              </Button>
            </div>
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </>
  );
}

export default Main;
