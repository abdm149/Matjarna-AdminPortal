import { useState } from "react";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { ClassicEditor } from "../../base-components/Ckeditor";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="flex items-center mt-8">
        <h2 className="mr-auto text-lg font-medium">CKEditor</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Classic Editor */}
        <div className="col-span-12">
          <PreviewComponent className="box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Classic Editor
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
                    <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <ClassicEditor
                value={editorData}
                onChange={setEditorData}
              />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
        </div>
        {/* END: Classic Editor */}
      </div>
    </>
  );
}

export default Main;
