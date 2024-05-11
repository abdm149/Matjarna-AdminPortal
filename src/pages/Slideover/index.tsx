import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { Menu, Slideover } from "../../base-components/Headless";
import {
  FormLabel,
  FormInput,
  FormSelect,
  FormSwitch,
} from "../../base-components/Form";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useState } from "react";

function Main() {
  const [basicSlideoverPreview, setBasicSlideoverPreview] = useState(false);
  const [smallSlideoverSizePreview, setSmallSlideoverSizePreview] =
    useState(false);
  const [mediumSlideoverSizePreview, setMediumSlideoverSizePreview] =
    useState(false);
  const [largeSlideoverSizePreview, setLargeSlideoverSizePreview] =
    useState(false);
  const [superlargeSlideoverSizePreview, setSuperlargeSlideoverSizePreview] =
    useState(false);
  const [programmaticallySlideover, setProgrammaticallySlideover] =
    useState(false);
  const [buttonSlideoverPreview, setButtonSlideoverPreview] = useState(false);
  const [overlappingSlideoverPreview, setOverlappingSlideoverPreview] =
    useState(false);
  const [nextOverlappingSlideoverPreview, setNextOverlappingSlideoverPreview] =
    useState(false);
  const [headerFooterSlideoverPreview, setHeaderFooterSlideoverPreview] =
    useState(false);

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Slide Over</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Blank Slide Over */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Blank Slide Over
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
                <div id="blank-slideover" className="p-5">
                  <Preview>
                    {/* BEGIN: Slide Over Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setBasicSlideoverPreview(true);
                        }}
                      >
                        Show Slide Over
                      </Button>
                    </div>
                    {/* END: Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Slideover
                      open={basicSlideoverPreview}
                      onClose={() => {
                        setBasicSlideoverPreview(false);
                      }}
                    >
                      <Slideover.Panel>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Blank Slide Over
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description>
                          {" "}
                          This is totally awesome blank slide over!{" "}
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setBasicSlideoverPreview(true);
                    }}
                  >
                    Show Slide Over
                  </Button>
                </div>
                {/* END: Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  open={basicSlideoverPreview}
                  onClose={() => {
                    setBasicSlideoverPreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Blank Slide Over
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      {" "}
                      This is totally awesome blank slide over!{" "}
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Blank Slide Over */}
          {/* BEGIN: Slide Over Size */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Slide Over Size
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
                <div id="slideover-size" className="p-5">
                  <Preview>
                    <div className="text-center">
                      {/* BEGIN: Small Slide Over Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setSmallSlideoverSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Small Slide Over
                      </Button>
                      {/* END: Small Slide Over Toggle */}
                      {/* BEGIN: Medium Slide Over Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setMediumSlideoverSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Medium Slide Over
                      </Button>
                      {/* END: Medium Slide Over Toggle */}
                      {/* BEGIN: Large Slide Over Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setLargeSlideoverSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Large Slide Over
                      </Button>
                      {/* END: Large Slide Over Toggle */}
                      {/* BEGIN: Super Large Slide Over Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setSuperlargeSlideoverSizePreview(true);
                        }}
                        className="mb-2 mr-1"
                      >
                        Show Superlarge Slide Over
                      </Button>
                      {/* END: Super Large Slide Over Toggle */}
                    </div>
                    {/* BEGIN: Small Slide Over Content */}
                    <Slideover
                      size="sm"
                      open={smallSlideoverSizePreview}
                      onClose={() => {
                        setSmallSlideoverSizePreview(false);
                      }}
                    >
                      <Slideover.Panel>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Small Slide Over
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description>
                          This is totally awesome small slide over!
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
                    {/* END: Small Slide Over Content */}
                    {/* BEGIN: Medium Slide Over Content */}
                    <Slideover
                      open={mediumSlideoverSizePreview}
                      onClose={() => {
                        setMediumSlideoverSizePreview(false);
                      }}
                    >
                      <Slideover.Panel>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Medium Slide Over
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description>
                          This is totally awesome medium slide over!
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
                    {/* END: Medium Slide Over Content */}
                    {/* BEGIN: Large Slide Over Content */}
                    <Slideover
                      size="lg"
                      open={largeSlideoverSizePreview}
                      onClose={() => {
                        setLargeSlideoverSizePreview(false);
                      }}
                    >
                      <Slideover.Panel>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Large Slide Over
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description>
                          This is totally awesome large slide over!
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
                    {/* END: Large Slide Over Content */}
                    {/* BEGIN: Super Large Slide Over Content */}
                    <Slideover
                      size="xl"
                      open={superlargeSlideoverSizePreview}
                      onClose={() => {
                        setSuperlargeSlideoverSizePreview(false);
                      }}
                    >
                      <Slideover.Panel>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Superlarge Slide Over
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description>
                          This is totally awesome superlarge slide over!
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
                    {/* END: Super Large Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="text-center">
                  {/* BEGIN: Small Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setSmallSlideoverSizePreview(true);
                    }}
                    className="mb-2 mr-1"
                  >
                    Show Small Slide Over
                  </Button>
                  {/* END: Small Slide Over Toggle */}
                  {/* BEGIN: Medium Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setMediumSlideoverSizePreview(true);
                    }}
                    className="mb-2 mr-1"
                  >
                    Show Medium Slide Over
                  </Button>
                  {/* END: Medium Slide Over Toggle */}
                  {/* BEGIN: Large Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setLargeSlideoverSizePreview(true);
                    }}
                    className="mb-2 mr-1"
                  >
                    Show Large Slide Over
                  </Button>
                  {/* END: Large Slide Over Toggle */}
                  {/* BEGIN: Super Large Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setSuperlargeSlideoverSizePreview(true);
                    }}
                    className="mb-2 mr-1"
                  >
                    Show Superlarge Slide Over
                  </Button>
                  {/* END: Super Large Slide Over Toggle */}
                </div>
                {/* BEGIN: Small Slide Over Content */}
                <Slideover
                  size="sm"
                  open={smallSlideoverSizePreview}
                  onClose={() => {
                    setSmallSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Small Slide Over
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      This is totally awesome small slide over!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Small Slide Over Content */}
                {/* BEGIN: Medium Slide Over Content */}
                <Slideover
                  open={mediumSlideoverSizePreview}
                  onClose={() => {
                    setMediumSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Medium Slide Over
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      This is totally awesome medium slide over!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Medium Slide Over Content */}
                {/* BEGIN: Large Slide Over Content */}
                <Slideover
                  size="lg"
                  open={largeSlideoverSizePreview}
                  onClose={() => {
                    setLargeSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Large Slide Over
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      This is totally awesome large slide over!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Large Slide Over Content */}
                {/* BEGIN: Super Large Slide Over Content */}
                <Slideover
                  size="xl"
                  open={superlargeSlideoverSizePreview}
                  onClose={() => {
                    setSuperlargeSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Superlarge Slide Over
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      This is totally awesome superlarge slide over!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Super Large Slide Over Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Slide Over Size */}
          {/* BEGIN: Slide Over With Close Button */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Slide Over With Close Button
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
                <div id="button-slideover" className="p-5">
                  <Preview>
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setButtonSlideoverPreview(true);
                        }}
                      >
                        Show Slide Over
                      </Button>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Slideover
                      staticBackdrop
                      open={buttonSlideoverPreview}
                      onClose={() => {
                        setButtonSlideoverPreview(false);
                      }}
                    >
                      <Slideover.Panel>
                        <a
                          onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                            setButtonSlideoverPreview(false);
                          }}
                          className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                          href="#"
                        >
                          <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                        </a>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Slide Over With Close Button
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description>
                          This is totally awesome slide over with close button!
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
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
                      setButtonSlideoverPreview(true);
                    }}
                  >
                    Show Slide Over
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Slideover
                  staticBackdrop
                  open={buttonSlideoverPreview}
                  onClose={() => {
                    setButtonSlideoverPreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <a
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setButtonSlideoverPreview(false);
                      }}
                      className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                      href="#"
                    >
                      <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Slide Over With Close Button
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      This is totally awesome slide over with close button!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Modal Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Slide Over With Close Button */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Overlapping Slide Over */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Overlapping Slide Over
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
                <div id="overlapping-slideover" className="p-5">
                  <Preview>
                    {/* BEGIN: Slide Over Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setOverlappingSlideoverPreview(true);
                        }}
                      >
                        Show Slide Over
                      </Button>
                    </div>
                    {/* END: Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Slideover
                      open={overlappingSlideoverPreview}
                      onClose={() => {
                        setOverlappingSlideoverPreview(false);
                      }}
                    >
                      <Slideover.Panel>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Overlapping Slide Over
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description className="px-5 py-10">
                          <div className="text-center">
                            <div className="mb-5">
                              Click button bellow to show overlapping slide
                              over!
                            </div>
                            {/* BEGIN: Overlapping Slide Over Toggle */}
                            <Button
                              as="a"
                              href="#"
                              variant="primary"
                              onClick={(event: React.MouseEvent) => {
                                event.preventDefault();
                                setNextOverlappingSlideoverPreview(true);
                              }}
                            >
                              Show Overlapping Slide Over
                            </Button>
                            {/* END: Overlapping Slide Over Toggle */}
                            {/* BEGIN: Overlapping Slide Over Content */}
                            <Slideover
                              open={nextOverlappingSlideoverPreview}
                              onClose={() => {
                                setNextOverlappingSlideoverPreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="mr-auto text-base font-medium">
                                    Overlapping Slide Over
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description className="text-center">
                                  This is totally awesome overlapping slide
                                  over!
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Overlapping Slide Over Content */}
                          </div>
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setOverlappingSlideoverPreview(true);
                    }}
                  >
                    Show Slide Over
                  </Button>
                </div>
                {/* END: Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  open={overlappingSlideoverPreview}
                  onClose={() => {
                    setOverlappingSlideoverPreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Overlapping Slide Over
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description className="px-5 py-10">
                      <div className="text-center">
                        <div className="mb-5">
                          Click button bellow to show overlapping slide
                          over!
                        </div>
                        {/* BEGIN: Overlapping Slide Over Toggle */}
                        <Button
                          as="a"
                          href="#"
                          variant="primary"
                          onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                            setNextOverlappingSlideoverPreview(true);
                          }}
                        >
                          Show Overlapping Slide Over
                        </Button>
                        {/* END: Overlapping Slide Over Toggle */}
                        {/* BEGIN: Overlapping Slide Over Content */}
                        <Slideover
                          open={nextOverlappingSlideoverPreview}
                          onClose={() => {
                            setNextOverlappingSlideoverPreview(false);
                          }}
                        >
                          <Slideover.Panel>
                            <Slideover.Title className="p-5">
                              <h2 className="mr-auto text-base font-medium">
                                Overlapping Slide Over
                              </h2>
                            </Slideover.Title>
                            <Slideover.Description className="text-center">
                              This is totally awesome overlapping slide
                              over!
                            </Slideover.Description>
                          </Slideover.Panel>
                        </Slideover>
                        {/* END: Overlapping Slide Over Content */}
                      </div>
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Overlapping Slide Over */}
          {/* BEGIN: Header & Footer Slide Over */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Header & Footer Slide Over
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
                <div id="header-footer-slideover" className="p-5">
                  <Preview>
                    {/* BEGIN: Slide Over Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setHeaderFooterSlideoverPreview(true);
                        }}
                      >
                        Show Slide Over
                      </Button>
                    </div>
                    {/* END: Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Slideover
                      staticBackdrop
                      open={headerFooterSlideoverPreview}
                      onClose={() => {
                        setHeaderFooterSlideoverPreview(false);
                      }}
                    >
                      {/* BEGIN: Slide Over Header */}
                      <Slideover.Panel>
                        <a
                          onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                            setHeaderFooterSlideoverPreview(false);
                          }}
                          className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                          href="#"
                        >
                          <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                        </a>
                        <Slideover.Title>
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
                        </Slideover.Title>
                        {/* END: Slide Over Header */}
                        {/* BEGIN: Slide Over Body */}
                        <Slideover.Description>
                          <div>
                            <FormLabel htmlFor="modal-form-1">From</FormLabel>
                            <FormInput
                              id="modal-form-1"
                              type="text"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="mt-3">
                            <FormLabel htmlFor="modal-form-2">To</FormLabel>
                            <FormInput
                              id="modal-form-2"
                              type="text"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="mt-3">
                            <FormLabel htmlFor="modal-form-3">
                              Subject
                            </FormLabel>
                            <FormInput
                              id="modal-form-3"
                              type="text"
                              placeholder="Important Meeting"
                            />
                          </div>
                          <div className="mt-3">
                            <FormLabel htmlFor="modal-form-4">
                              Has the Words
                            </FormLabel>
                            <FormInput
                              id="modal-form-4"
                              type="text"
                              placeholder="Job, Work, Documentation"
                            />
                          </div>
                          <div className="mt-3">
                            <FormLabel htmlFor="modal-form-5">
                              Doesn't Have
                            </FormLabel>
                            <FormInput
                              id="modal-form-5"
                              type="text"
                              placeholder="Job, Work, Documentation"
                            />
                          </div>
                          <div className="mt-3">
                            <FormLabel htmlFor="modal-form-6">Size</FormLabel>
                            <FormSelect id="modal-form-6">
                              <option>10</option>
                              <option>25</option>
                              <option>35</option>
                              <option>50</option>
                            </FormSelect>
                          </div>
                        </Slideover.Description>
                        {/* END: Slide Over Body */}
                        {/* BEGIN: Slide Over Footer */}
                        <Slideover.Footer>
                          <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => {
                              setHeaderFooterSlideoverPreview(false);
                            }}
                            className="w-20 mr-1"
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="primary"
                            type="button"
                            className="w-20"
                          >
                            Send
                          </Button>
                        </Slideover.Footer>
                      </Slideover.Panel>
                      {/* END: Slide Over Footer */}
                    </Slideover>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setHeaderFooterSlideoverPreview(true);
                    }}
                  >
                    Show Slide Over
                  </Button>
                </div>
                {/* END: Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  staticBackdrop
                  open={headerFooterSlideoverPreview}
                  onClose={() => {
                    setHeaderFooterSlideoverPreview(false);
                  }}
                >
                  {/* BEGIN: Slide Over Header */}
                  <Slideover.Panel>
                    <a
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setHeaderFooterSlideoverPreview(false);
                      }}
                      className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                      href="#"
                    >
                      <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <Slideover.Title>
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
                    </Slideover.Title>
                    {/* END: Slide Over Header */}
                    {/* BEGIN: Slide Over Body */}
                    <Slideover.Description>
                      <div>
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
                      <div className="mt-3">
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
                      <div className="mt-3">
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
                      <div className="mt-3">
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
                      <div className="mt-3">
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
                      <div className="mt-3">
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
                    </Slideover.Description>
                    {/* END: Slide Over Body */}
                    {/* BEGIN: Slide Over Footer */}
                    <Slideover.Footer>
                      <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={() => {
                          setHeaderFooterSlideoverPreview(false);
                        }}
                        className="w-20 mr-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        type="button"
                        className="w-20"
                      >
                        Send
                      </Button>
                    </Slideover.Footer>
                  </Slideover.Panel>
                  {/* END: Slide Over Footer */}
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Footer Slide Over */}
          {/* BEGIN: Programmatically Show/Hide Slide Over */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Programmatically Show/Hide Slide Over
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
                <div id="programmatically-show-hide-slideover" className="p-5">
                  <Preview>
                    {/* BEGIN: Show Slide Over Toggle */}
                    <div className="text-center">
                      <Button
                        as="a"
                        id="programmatically-show-slideover"
                        href="#"
                        variant="primary"
                        className="mb-2 mr-1"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallySlideover(true);
                        }}
                      >
                        Show Slide Over
                      </Button>
                    </div>
                    {/* END: Show Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Slideover
                      open={programmaticallySlideover}
                      onClose={() => {
                        setProgrammaticallySlideover(false);
                      }}
                    >
                      <Slideover.Panel>
                        <Slideover.Title className="p-5">
                          <h2 className="mr-auto text-base font-medium">
                            Programmatically Show/Hide Slide Over
                          </h2>
                        </Slideover.Title>
                        <Slideover.Description className="p-10 text-center">
                          {/* BEGIN: Hide Slide Over Toggle */}
                          <Button
                            as="a"
                            id="programmatically-hide-slideover"
                            href="#"
                            variant="primary"
                            className="mr-1"
                            onClick={(event: React.MouseEvent) => {
                              event.preventDefault();
                              setProgrammaticallySlideover(false);
                            }}
                          >
                            Hide Slide Over
                          </Button>
                          {/* END: Hide Slide Over Toggle */}
                          {/* BEGIN: Toggle Slide Over Toggle */}
                          <Button
                            as="a"
                            id="programmatically-toggle-slideover"
                            href="#"
                            variant="primary"
                            className="mt-2 mr-1 sm:mt-0"
                            onClick={(event: React.MouseEvent) => {
                              event.preventDefault();
                              setProgrammaticallySlideover(
                                !programmaticallySlideover
                              );
                            }}
                          >
                            Toggle Slide Over
                          </Button>
                          {/* END: Toggle Slide Over Toggle */}
                        </Slideover.Description>
                      </Slideover.Panel>
                    </Slideover>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                {/* BEGIN: Show Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    id="programmatically-show-slideover"
                    href="#"
                    variant="primary"
                    className="mb-2 mr-1"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setProgrammaticallySlideover(true);
                    }}
                  >
                    Show Slide Over
                  </Button>
                </div>
                {/* END: Show Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  open={programmaticallySlideover}
                  onClose={() => {
                    setProgrammaticallySlideover(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="mr-auto text-base font-medium">
                        Programmatically Show/Hide Slide Over
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description className="p-10 text-center">
                      {/* BEGIN: Hide Slide Over Toggle */}
                      <Button
                        as="a"
                        id="programmatically-hide-slideover"
                        href="#"
                        variant="primary"
                        className="mr-1"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallySlideover(false);
                        }}
                      >
                        Hide Slide Over
                      </Button>
                      {/* END: Hide Slide Over Toggle */}
                      {/* BEGIN: Toggle Slide Over Toggle */}
                      <Button
                        as="a"
                        id="programmatically-toggle-slideover"
                        href="#"
                        variant="primary"
                        className="mt-2 mr-1 sm:mt-0"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallySlideover(
                            !programmaticallySlideover
                          );
                        }}
                      >
                        Toggle Slide Over
                      </Button>
                      {/* END: Toggle Slide Over Toggle */}
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Programmatically Show/Hide Slide Over */}
        </div>
      </div>
    </>
  );
}

export default Main;
