import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import {
  FormLabel,
  FormSwitch,
  FormInput,
  FormSelect,
} from "../../base-components/Form";
import { Menu, Dialog } from "../../base-components/Headless";
import TinySlider from "../../base-components/TinySlider";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import fakerData from "../../utils/faker";
import React, { useState, useRef } from "react";

function Main() {
  const [basicModalPreview, setBasicModalPreview] = useState(false);
  const [smallModalSizePreview, setSmallModalSizePreview] = useState(false);
  const [mediumModalSizePreview, setMediumModalSizePreview] = useState(false);
  const [largeModalSizePreview, setLargeModalSizePreview] = useState(false);
  const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
    useState(false);
  const [programmaticallyModal, setProgrammaticallyModal] = useState(false);
  const [warningModalPreview, setWarningModalPreview] = useState(false);
  const [buttonModalPreview, setButtonModalPreview] = useState(false);
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false);
  const [overlappingModalPreview, setOverlappingModalPreview] = useState(false);
  const [nextOverlappingModalPreview, setNextOverlappingModalPreview] =
    useState(false);
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
    useState(false);
  const [deleteModalPreview, setDeleteModalPreview] = useState(false);
  const [successModalPreview, setSuccessModalPreview] = useState(false);
  const [tinySliderModalPreview, setTinySliderModalPreview] = useState(false);
  const sendButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Modal</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Blank Modal */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Blank Modal</h2>
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        variant="primary"
                        onClick={() => {
                          setBasicModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={basicModalPreview}
                      onClose={() => {
                        setBasicModalPreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-10 text-center">
                        This is totally awesome blank modal!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    variant="primary"
                    onClick={() => {
                      setBasicModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={basicModalPreview}
                  onClose={() => {
                    setBasicModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="p-10 text-center">
                    This is totally awesome blank modal!
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Blank Modal */}
          {/* BEGIN: Modal Size */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Modal Size</h2>
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
                    <div className="text-center">
                      {/* BEGIN: Small Modal Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setSmallModalSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Small Modal
                      </Button>
                      {/* END: Small Modal Toggle */}
                      {/* BEGIN: Medium Modal Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setMediumModalSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Medium Modal
                      </Button>
                      {/* END: Medium Modal Toggle */}
                      {/* BEGIN: Large Modal Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setLargeModalSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Large Modal
                      </Button>
                      {/* END: Large Modal Toggle */}
                      {/* BEGIN: Super Large Modal Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setSuperlargeModalSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Superlarge Modal
                      </Button>
                      {/* END: Super Large Modal Toggle */}
                    </div>
                    {/* BEGIN: Small Modal Content */}
                    <Dialog
                      size="sm"
                      open={smallModalSizePreview}
                      onClose={() => {
                        setSmallModalSizePreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-10 text-center">
                        This is totally awesome small modal!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Small Modal Content */}
                    {/* BEGIN: Medium Modal Content */}
                    <Dialog
                      open={mediumModalSizePreview}
                      onClose={() => {
                        setMediumModalSizePreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-10 text-center">
                        This is totally awesome medium modal!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Medium Modal Content */}
                    {/* BEGIN: Large Modal Content */}
                    <Dialog
                      size="lg"
                      open={largeModalSizePreview}
                      onClose={() => {
                        setLargeModalSizePreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-10 text-center">
                        This is totally awesome large modal!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Large Modal Content */}
                    {/* BEGIN: Super Large Modal Content */}
                    <Dialog
                      size="xl"
                      open={superlargeModalSizePreview}
                      onClose={() => {
                        setSuperlargeModalSizePreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-10 text-center">
                        This is totally awesome superlarge modal!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Super Large Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="text-center">
                {/* BEGIN: Small Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setSmallModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Small Modal
                </Button>
                {/* END: Small Modal Toggle */}
                {/* BEGIN: Medium Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setMediumModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Medium Modal
                </Button>
                {/* END: Medium Modal Toggle */}
                {/* BEGIN: Large Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setLargeModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Large Modal
                </Button>
                {/* END: Large Modal Toggle */}
                {/* BEGIN: Super Large Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setSuperlargeModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Superlarge Modal
                </Button>
                {/* END: Super Large Modal Toggle */}
              </div>
              {/* BEGIN: Small Modal Content */}
              <Dialog
                size="sm"
                open={smallModalSizePreview}
                onClose={() => {
                  setSmallModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome small modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Small Modal Content */}
              {/* BEGIN: Medium Modal Content */}
              <Dialog
                open={mediumModalSizePreview}
                onClose={() => {
                  setMediumModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome medium modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Medium Modal Content */}
              {/* BEGIN: Large Modal Content */}
              <Dialog
                size="lg"
                open={largeModalSizePreview}
                onClose={() => {
                  setLargeModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome large modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Large Modal Content */}
              {/* BEGIN: Super Large Modal Content */}
              <Dialog
                size="xl"
                open={superlargeModalSizePreview}
                onClose={() => {
                  setSuperlargeModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome superlarge modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Super Large Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Modal Size */}
          {/* BEGIN: Warning Modal */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Warning Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setWarningModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={warningModalPreview}
                      onClose={() => {
                        setWarningModalPreview(false);
                      }}
                    >
                      <Dialog.Panel>
                        <div className="p-5 text-center">
                          <Lucide
                            icon="XCircle"
                            className="w-16 h-16 mx-auto mt-3 text-warning"
                          />
                          <div className="mt-5 text-3xl">Oops...</div>
                          <div className="mt-2 text-slate-500">
                            Something went wrong!
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <Button
                            type="button"
                            variant="primary"
                            onClick={() => {
                              setWarningModalPreview(false);
                            }}
                            className="w-24"
                          >
                            Ok
                          </Button>
                        </div>
                        <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                          <a href="" className="text-primary">
                            Why do I have this issue?
                          </a>
                        </div>
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setWarningModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={warningModalPreview}
                  onClose={() => {
                    setWarningModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="XCircle"
                        className="w-16 h-16 mx-auto mt-3 text-warning"
                      />
                      <div className="mt-5 text-3xl">Oops...</div>
                      <div className="mt-2 text-slate-500">
                        Something went wrong!
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setWarningModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                    <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                      <a href="" className="text-primary">
                        Why do I have this issue?
                      </a>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Warning Modal */}
          {/* BEGIN: Modal With Close Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Modal With Close Button
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setButtonModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={buttonModalPreview}
                      onClose={() => {
                        setButtonModalPreview(false);
                      }}
                    >
                      <Dialog.Panel>
                        <a
                          onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                            setButtonModalPreview(false);
                          }}
                          className="absolute top-0 right-0 mt-3 mr-3"
                          href="#"
                        >
                          <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                        </a>
                        <div className="p-5 text-center">
                          <Lucide
                            icon="CheckCircle"
                            className="w-16 h-16 mx-auto mt-3 text-success"
                          />
                          <div className="mt-5 text-3xl">Modal Example</div>
                          <div className="mt-2 text-slate-500">
                            Modal with close button
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <Button
                            type="button"
                            variant="primary"
                            onClick={() => {
                              setButtonModalPreview(false);
                            }}
                            className="w-24"
                          >
                            Ok
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setButtonModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={buttonModalPreview}
                  onClose={() => {
                    setButtonModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <a
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setButtonModalPreview(false);
                      }}
                      className="absolute top-0 right-0 mt-3 mr-3"
                      href="#"
                    >
                      <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="CheckCircle"
                        className="w-16 h-16 mx-auto mt-3 text-success"
                      />
                      <div className="mt-5 text-3xl">Modal Example</div>
                      <div className="mt-2 text-slate-500">
                        Modal with close button
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setButtonModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Modal With Close Button */}
          {/* BEGIN: Static Backdrop Modal */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Static Backdrop Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setStaticBackdropModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      staticBackdrop
                      open={staticBackdropModalPreview}
                      onClose={() => {
                        setStaticBackdropModalPreview(false);
                      }}
                    >
                      <Dialog.Panel className="px-5 py-10">
                        <div className="text-center">
                          <div className="mb-5">
                            I will not close if you click outside me. Don't even
                            try to press escape key.
                          </div>
                          <Button
                            type="button"
                            variant="primary"
                            onClick={() => {
                              setStaticBackdropModalPreview(false);
                            }}
                            className="w-24"
                          >
                            Ok
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStaticBackdropModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  staticBackdrop
                  open={staticBackdropModalPreview}
                  onClose={() => {
                    setStaticBackdropModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="px-5 py-10">
                    <div className="text-center">
                      <div className="mb-5">
                        I will not close if you click outside me. Don't even
                        try to press escape key.
                      </div>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setStaticBackdropModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Static Backdrop Modal */}
          {/* BEGIN: Overlapping Modal */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Overlapping Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setOverlappingModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={overlappingModalPreview}
                      onClose={() => {
                        setOverlappingModalPreview(false);
                      }}
                    >
                      <Dialog.Panel className="px-5 py-10">
                        <div className="text-center">
                          <div className="mb-5">
                            Click button bellow to show overlapping modal!
                          </div>
                          {/* BEGIN: Overlapping Modal Toggle */}
                          <Button
                            as="a"
                            href="#"
                            variant="primary"
                            onClick={(event: React.MouseEvent) => {
                              event.preventDefault();
                              setNextOverlappingModalPreview(true);
                            }}
                          >
                            Show Overlapping Modal
                          </Button>
                          {/* END: Overlapping Modal Toggle */}
                        </div>
                        {/* BEGIN: Overlapping Modal Content */}
                        <Dialog
                          open={nextOverlappingModalPreview}
                          onClose={() => {
                            setNextOverlappingModalPreview(false);
                          }}
                        >
                          <Dialog.Panel className="p-5 text-center">
                            This is totally awesome overlapping modal!
                          </Dialog.Panel>
                        </Dialog>
                        {/* END: Overlapping Modal Content */}
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setOverlappingModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={overlappingModalPreview}
                  onClose={() => {
                    setOverlappingModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="px-5 py-10">
                    <div className="text-center">
                      <div className="mb-5">
                        Click button bellow to show overlapping modal!
                      </div>
                      {/* BEGIN: Overlapping Modal Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setNextOverlappingModalPreview(true);
                        }}
                      >
                        Show Overlapping Modal
                      </Button>
                      {/* END: Overlapping Modal Toggle */}
                    </div>
                    {/* BEGIN: Overlapping Modal Content */}
                    <Dialog
                      open={nextOverlappingModalPreview}
                      onClose={() => {
                        setNextOverlappingModalPreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-5 text-center">
                        This is totally awesome overlapping modal!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Overlapping Modal Content */}
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Overlapping Modal */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Header & Footer Modal */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Header & Footer Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setHeaderFooterModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={headerFooterModalPreview}
                      onClose={() => {
                        setHeaderFooterModalPreview(false);
                      }}
                      initialFocus={sendButtonRef}
                    >
                      <Dialog.Panel>
                        <Dialog.Title>
                          <h2 className="mr-auto text-base font-medium">
                            Broadcast Message
                          </h2>
                          <Button
                            variant="outline-secondary"
                            className="hidden sm:flex"
                          >
                            <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                            Download Docs
                          </Button>
                          <Menu className="sm:hidden">
                            <Menu.Button
                              as="a"
                              className="block w-5 h-5"
                              href="#"
                            >
                              <Lucide
                                icon="MoreHorizontal"
                                className="w-5 h-5 text-slate-500"
                              />
                            </Menu.Button>
                            <Menu.Items className="w-40">
                              <Menu.Item>
                                <Lucide icon="File" className="w-4 h-4 mr-2" />
                                Download Docs
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                        </Dialog.Title>
                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-form-1">From</FormLabel>
                            <FormInput
                              id="modal-form-1"
                              type="text"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-form-2">To</FormLabel>
                            <FormInput
                              id="modal-form-2"
                              type="text"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-form-3">
                              Subject
                            </FormLabel>
                            <FormInput
                              id="modal-form-3"
                              type="text"
                              placeholder="Important Meeting"
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-form-4">
                              Has the Words
                            </FormLabel>
                            <FormInput
                              id="modal-form-4"
                              type="text"
                              placeholder="Job, Work, Documentation"
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-form-5">
                              Doesn't Have
                            </FormLabel>
                            <FormInput
                              id="modal-form-5"
                              type="text"
                              placeholder="Job, Work, Documentation"
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormLabel htmlFor="modal-form-6">Size</FormLabel>
                            <FormSelect id="modal-form-6">
                              <option>10</option>
                              <option>25</option>
                              <option>35</option>
                              <option>50</option>
                            </FormSelect>
                          </div>
                        </Dialog.Description>
                        <Dialog.Footer>
                          <Button
                            type="button"
                            variant="outline-secondary"
                            onClick={() => {
                              setHeaderFooterModalPreview(false);
                            }}
                            className="w-20 mr-1"
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="primary"
                            type="button"
                            className="w-20"
                            ref={sendButtonRef}
                          >
                            Send
                          </Button>
                        </Dialog.Footer>
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setHeaderFooterModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={headerFooterModalPreview}
                  onClose={() => {
                    setHeaderFooterModalPreview(false);
                  }}
                  initialFocus={sendButtonRef}
                >
                  <Dialog.Panel>
                    <Dialog.Title>
                      <h2 className="mr-auto text-base font-medium">
                        Broadcast Message
                      </h2>
                      <Button
                        variant="outline-secondary"
                        className="hidden sm:flex"
                      >
                        <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                        Download Docs
                      </Button>
                      <Menu className="sm:hidden">
                        <Menu.Button className="block w-5 h-5" href="#">
                          <Lucide
                            icon="MoreHorizontal"
                            className="w-5 h-5 text-slate-500"
                          />
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item>
                            <Lucide icon="File" className="w-4 h-4 mr-2" />
                            Download Docs
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </Dialog.Title>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-1"
                        >
                          From
                        </FormLabel>
                        <FormInput
                          id="modal-form-1"
                          type="text"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-2"
                        >
                          To
                        </FormLabel>
                        <FormInput
                          id="modal-form-2"
                          type="text"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-3"
                        >
                          Subject
                        </FormLabel>
                        <FormInput
                          id="modal-form-3"
                          type="text"
                          placeholder="Important Meeting"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-4"
                        >
                          Has the Words
                        </FormLabel>
                        <FormInput
                          id="modal-form-4"
                          type="text"
                          placeholder="Job, Work, Documentation"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-5"
                        >
                          Doesn't Have
                        </FormLabel>
                        <FormInput
                          id="modal-form-5"
                          type="text"
                          placeholder="Job, Work, Documentation"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-6"
                        >
                          Size
                        </FormLabel>
                        <FormSelect
                          id="modal-form-6"
                        >
                          <option>10</option>
                          <option>25</option>
                          <option>35</option>
                          <option>50</option>
                        </FormSelect>
                      </div>
                    </Dialog.Description>
                    <Dialog.Footer>
                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => {
                          setHeaderFooterModalPreview(false);
                        }}
                        className="w-20 mr-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        type="button"
                        className="w-20"
                        ref={sendButtonRef}
                      >
                        Send
                      </Button>
                    </Dialog.Footer>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Footer Modal */}
          {/* BEGIN: Delete Modal */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Delete Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setDeleteModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={deleteModalPreview}
                      onClose={() => {
                        setDeleteModalPreview(false);
                      }}
                      initialFocus={deleteButtonRef}
                    >
                      <Dialog.Panel>
                        <div className="p-5 text-center">
                          <Lucide
                            icon="XCircle"
                            className="w-16 h-16 mx-auto mt-3 text-danger"
                          />
                          <div className="mt-5 text-3xl">Are you sure?</div>
                          <div className="mt-2 text-slate-500">
                            Do you really want to delete these records? <br />
                            This process cannot be undone.
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <Button
                            type="button"
                            variant="outline-secondary"
                            onClick={() => {
                              setDeleteModalPreview(false);
                            }}
                            className="w-24 mr-1"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="button"
                            variant="danger"
                            className="w-24"
                            ref={deleteButtonRef}
                          >
                            Delete
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setDeleteModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={deleteModalPreview}
                  onClose={() => {
                    setDeleteModalPreview(false);
                  }}
                  initialFocus={deleteButtonRef}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="XCircle"
                        className="w-16 h-16 mx-auto mt-3 text-danger"
                      />
                      <div className="mt-5 text-3xl">Are you sure?</div>
                      <div className="mt-2 text-slate-500">
                        Do you really want to delete these records? <br />
                        This process cannot be undone.
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => {
                          setDeleteModalPreview(false);
                        }}
                        className="w-24 mr-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        variant="danger"
                        className="w-24"
                        ref={deleteButtonRef}
                      >
                        Delete
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Delete Modal */}
          {/* BEGIN: Success Modal */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Success Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setSuccessModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={successModalPreview}
                      onClose={() => {
                        setSuccessModalPreview(false);
                      }}
                    >
                      <Dialog.Panel>
                        <div className="p-5 text-center">
                          <Lucide
                            icon="CheckCircle"
                            className="w-16 h-16 mx-auto mt-3 text-success"
                          />
                          <div className="mt-5 text-3xl">Good job!</div>
                          <div className="mt-2 text-slate-500">
                            You clicked the button!
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <Button
                            type="button"
                            variant="primary"
                            onClick={() => {
                              setSuccessModalPreview(false);
                            }}
                            className="w-24"
                          >
                            Ok
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setSuccessModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={successModalPreview}
                  onClose={() => {
                    setSuccessModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="CheckCircle"
                        className="w-16 h-16 mx-auto mt-3 text-success"
                      />
                      <div className="mt-5 text-3xl">Good job!</div>
                      <div className="mt-2 text-slate-500">
                        You clicked the button!
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setSuccessModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Success Modal */}
          {/* BEGIN: Tiny Slider Modal */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Tiny Slider Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setTinySliderModalPreview(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={tinySliderModalPreview}
                      onClose={() => {
                        setTinySliderModalPreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-5">
                        <div className="mx-6">
                          <TinySlider
                            options={{
                              mouseDrag: true,
                              autoplay: false,
                              controls: true,
                              center: true,
                              items: 1,
                              nav: false,
                              speed: 500,
                              responsive: {
                                600: {
                                  items: 2,
                                },
                              },
                            }}
                          >
                            <div className="h-56 px-2">
                              <div className="h-full overflow-hidden rounded-md image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={fakerData[0].images[0]}
                                />
                              </div>
                            </div>
                            <div className="h-56 px-2">
                              <div className="h-full overflow-hidden rounded-md image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={fakerData[0].images[1]}
                                />
                              </div>
                            </div>
                            <div className="h-56 px-2">
                              <div className="h-full overflow-hidden rounded-md image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={fakerData[0].images[2]}
                                />
                              </div>
                            </div>
                            <div className="h-56 px-2">
                              <div className="h-full overflow-hidden rounded-md image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={fakerData[0].images[3]}
                                />
                              </div>
                            </div>
                          </TinySlider>
                        </div>
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setTinySliderModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={tinySliderModalPreview}
                  onClose={() => {
                    setTinySliderModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="p-5">
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          mouseDrag: true,
                          autoplay: false,
                          controls: true,
                          center: true,
                          items: 1,
                          nav: false,
                          speed: 500,
                          responsive: {
                            600: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={fakerData[0].images[0]}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={fakerData[0].images[1]}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={fakerData[0].images[2]}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={fakerData[0].images[3]}
                            />
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Tiny Slider Modal */}
          {/* BEGIN: Programmatically Show/Hide Modal */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Programmatically Show/Hide Modal
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-12">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-12"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    {/* BEGIN: Show Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        className="mb-2 mr-1"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallyModal(true);
                        }}
                      >
                        Show Modal
                      </Button>
                    </div>
                    {/* END: Show Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Dialog
                      open={programmaticallyModal}
                      onClose={() => {
                        setProgrammaticallyModal(false);
                      }}
                    >
                      <Dialog.Panel className="p-10 text-center">
                        {/* BEGIN: Hide Modal Toggle */}
                        <Button
                          as="a"
                          href="#"
                          variant="primary"
                          className="mr-1"
                          onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                            setProgrammaticallyModal(false);
                          }}
                        >
                          Hide Modal
                        </Button>
                        {/* END: Hide Modal Toggle */}
                        {/* BEGIN: Toggle Modal Toggle */}
                        <Button
                          as="a"
                          href="#"
                          variant="primary"
                          className="mr-1"
                          onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                            setProgrammaticallyModal(!programmaticallyModal);
                          }}
                        >
                          Toggle Modal
                        </Button>
                        {/* END: Toggle Modal Toggle */}
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Show Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    className="mb-2 mr-1"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setProgrammaticallyModal(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Show Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={programmaticallyModal}
                  onClose={() => {
                    setProgrammaticallyModal(false);
                  }}
                >
                  <Dialog.Panel className="p-10 text-center">
                    {/* BEGIN: Hide Modal Toggle */}
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      className="mr-1"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setProgrammaticallyModal(false);
                      }}
                    >
                      Hide Modal
                    </Button>
                    {/* END: Hide Modal Toggle */}
                    {/* BEGIN: Toggle Modal Toggle */}
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      className="mr-1"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setProgrammaticallyModal(!programmaticallyModal);
                      }}
                    >
                      Toggle Modal
                    </Button>
                    {/* END: Toggle Modal Toggle */}
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Programmatically Show/Hide Modal */}
        </div>
      </div>
    </>
  );
}

export default Main;
