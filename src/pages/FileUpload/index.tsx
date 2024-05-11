import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import Dropzone, { DropzoneElement } from "../../base-components/Dropzone";
import { useEffect, useRef } from "react";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  const dropzoneSingleRef = useRef<DropzoneElement>();
  const dropzoneMultipleRef = useRef<DropzoneElement>();
  const dropzoneValidationRef = useRef<DropzoneElement>();

  useEffect(() => {
    const elDropzoneSingleRef = dropzoneSingleRef.current;
    if (elDropzoneSingleRef) {
      elDropzoneSingleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneSingleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }

    const elDropzoneMultipleRef = dropzoneMultipleRef.current;
    if (elDropzoneMultipleRef) {
      elDropzoneMultipleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneMultipleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }

    const elDropzoneValidationRef = dropzoneValidationRef.current;
    if (elDropzoneValidationRef) {
      elDropzoneValidationRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneValidationRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }
  }, []);

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Dropzone</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Single File Upload */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Single File Upload
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
                    <Dropzone
                      getRef={(el) => {
                        dropzoneSingleRef.current = el;
                      }}
                      options={{
                        url: "https://httpbin.org/post",
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        maxFiles: 1,
                        headers: { "My-Awesome-Header": "header value" },
                      }}
                      className="dropzone"
                    >
                      <div className="text-lg font-medium">
                        Drop files here or click to upload.
                      </div>
                      <div className="text-gray-600">
                        This is just a demo dropzone. Selected files are
                        <span className="font-medium">not</span> actually
                        uploaded.
                      </div>
                    </Dropzone>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
            <Dropzone
              getRef={(el) => {
                dropzoneSingleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                maxFiles: 1,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Single File Upload */}
          {/* BEGIN: Multiple File Upload */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Multiple File Upload
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
                    <Dropzone
                      getRef={(el) => {
                        dropzoneMultipleRef.current = el;
                      }}
                      options={{
                        url: "https://httpbin.org/post",
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        headers: { "My-Awesome-Header": "header value" },
                      }}
                      className="dropzone"
                    >
                      <div className="text-lg font-medium">
                        Drop files here or click to upload.
                      </div>
                      <div className="text-gray-600">
                        This is just a demo dropzone. Selected files are
                        <span className="font-medium">not</span> actually
                        uploaded.
                      </div>
                    </Dropzone>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
            <Dropzone
              getRef={(el) => {
                dropzoneMultipleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Multiple File Upload */}
          {/* BEGIN: File Type Validation */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    File Type Validation
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
                    <Dropzone
                      getRef={(el) => {
                        dropzoneValidationRef.current = el;
                      }}
                      options={{
                        url: "https://httpbin.org/post",
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        acceptedFiles: "image/jpeg|image/png|image/jpg",
                        headers: { "My-Awesome-Header": "header value" },
                      }}
                      className="dropzone"
                    >
                      <div className="text-lg font-medium">
                        Drop files here or click to upload.
                      </div>
                      <div className="text-gray-600">
                        This is just a demo dropzone. Selected files are
                        <span className="font-medium">not</span> actually
                        uploaded.
                      </div>
                    </Dropzone>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
            <Dropzone
              getRef={(el) => {
                dropzoneValidationRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                acceptedFiles: "image/jpeg|image/png|image/jpg",
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: File Type Validation */}
        </div>
      </div>
    </>
  );
}

export default Main;
