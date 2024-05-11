import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import Lucide from "../../base-components/Lucide";
import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";
import { FormSwitch } from "../../base-components/Form";
import Button from "../../base-components/Button";
import fakerData from "../../utils/faker";
import { useRef } from "react";

function Main() {
  // Basic non sticky notification
  const basicNonStickyNotification = useRef<NotificationElement>();
  const basicNonStickyNotificationToggle = () => {
    // Show notification
    basicNonStickyNotification.current?.showToast();
  };

  // Basic sticky notification
  const basicStickyNotification = useRef<NotificationElement>();
  const basicStickyNotificationToggle = () => {
    // Show notification
    basicStickyNotification.current?.showToast();
  };

  // Success notification
  const successNotification = useRef<NotificationElement>();
  const successNotificationToggle = () => {
    // Show notification
    successNotification.current?.showToast();
  };

  // Notification with actions
  const notificationWithActions = useRef<NotificationElement>();
  const notificationWithActionsToggle = () => {
    // Show notification
    notificationWithActions.current?.showToast();
  };

  // Notification with avatar
  const notificationWithAvatar = useRef<NotificationElement>();
  const notificationWithAvatarToggle = () => {
    // Show notification
    notificationWithAvatar.current?.showToast();
  };

  // Notification with split buttons
  const notificationWithSplitButtons = useRef<NotificationElement>();
  const notificationWithSplitButtonsToggle = () => {
    // Show notification
    notificationWithSplitButtons.current?.showToast();
  };

  // Notification with buttons below
  const notificationWithButtonsBelow = useRef<NotificationElement>();
  const notificationWithButtonsBelowToggle = () => {
    // Show notification
    notificationWithButtonsBelow.current?.showToast();
  };

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Notification</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Basic Notification */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Basic Notification
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
                    <div className="text-center">
                      {/* BEGIN: Basic Non Sticky Notification Content */}
                      <Notification
                        getRef={(el) => {
                          basicNonStickyNotification.current = el;
                        }}
                        options={{
                          duration: 3000,
                        }}
                        className="flex flex-col sm:flex-row"
                      >
                        <div className="font-medium">
                          Yay! Updates Published!
                        </div>
                        <a
                          className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                          href=""
                        >
                          Review Changes
                        </a>
                      </Notification>
                      {/* END: Basic Non Sticky Notification Content */}
                      {/* BEGIN: Basic Sticky Notification Content */}
                      <Notification
                        getRef={(el) => {
                          basicStickyNotification.current = el;
                        }}
                        className="flex flex-col sm:flex-row"
                      >
                        <div className="font-medium">
                          Yay! Updates Published!
                        </div>
                        <a
                          className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                          href=""
                        >
                          Review Changes
                        </a>
                      </Notification>
                      {/* END: Basic Sticky Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <Button
                        variant="primary"
                        className="mr-1"
                        onClick={basicNonStickyNotificationToggle}
                      >
                        Show Non Sticky Notification
                      </Button>
                      <Button
                        variant="primary"
                        className="mt-2 sm:mt-0"
                        onClick={basicStickyNotificationToggle}
                      >
                        Show Sticky Notification
                      </Button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                {/* BEGIN: Basic Non Sticky Notification Content */}
                <Notification
                  getRef={(el) => {
                    basicNonStickyNotification.current = el;
                  }}
                  options={{
                    duration: 3000,
                  }}
                  className="flex flex-col sm:flex-row"
                >
                  <div className="font-medium">
                    Yay! Updates Published!
                  </div>
                  <a
                    className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                    href=""
                  >
                    Review Changes
                  </a>
                </Notification>
                {/* END: Basic Non Sticky Notification Content */}
                {/* BEGIN: Basic Sticky Notification Content */}
                <Notification
                  getRef={(el) => {
                    basicStickyNotification.current = el;
                  }}
                  className="flex flex-col sm:flex-row"
                >
                  <div className="font-medium">
                    Yay! Updates Published!
                  </div>
                  <a
                    className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                    href=""
                  >
                    Review Changes
                  </a>
                </Notification>
                {/* END: Basic Sticky Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  className="mr-1"
                  onClick={basicNonStickyNotificationToggle}
                >
                  Show Non Sticky Notification
                </Button>
                <Button
                  variant="primary"
                  className="mt-2 sm:mt-0"
                  onClick={basicStickyNotificationToggle}
                >
                  Show Sticky Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Basic non sticky notification
                const basicNonStickyNotification = useRef<NotificationElement>();
                const basicNonStickyNotificationToggle = () => {
                  // Show notification
                  basicNonStickyNotification.current?.showToast();
                };
              
                // Basic sticky notification
                const basicStickyNotification = useRef<NotificationElement>();
                const basicStickyNotificationToggle = () => {
                  // Show notification
                  basicStickyNotification.current?.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Notification */}
          {/* BEGIN: Success Notification */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Success Notification
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          successNotification.current = el;
                        }}
                        className="flex"
                      >
                        <Lucide icon="CheckCircle" className="text-success" />
                        <div className="ml-4 mr-4">
                          <div className="font-medium">Message Saved!</div>
                          <div className="mt-1 text-slate-500">
                            The message will be sent in 5 minutes.
                          </div>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <Button
                        variant="primary"
                        onClick={successNotificationToggle}
                      >
                        Show Notification
                      </Button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    successNotification.current = el;
                  }}
                  className="flex"
                >
                  <Lucide icon="CheckCircle" className="text-success" />
                  <div className="ml-4 mr-4">
                    <div className="font-medium">Message Saved!</div>
                    <div className="mt-1 text-slate-500">
                      The message will be sent in 5 minutes.
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={successNotificationToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Success notification
                const successNotification = useRef<NotificationElement>();
                const successNotificationToggle = () => {
                  // Show notification
                  successNotification.current?.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Success Notification */}
          {/* BEGIN: Notification With Actions */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Notification With Actions
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithActions.current = el;
                        }}
                        className="flex"
                      >
                        <Lucide icon="HardDrive" />
                        <div className="ml-4 mr-4">
                          <div className="font-medium">Storage Removed!</div>
                          <div className="mt-1 text-slate-500">
                            The server will restart in 30 seconds, don't make
                            <br />
                            changes during the update process!
                          </div>
                          <div className="font-medium flex mt-1.5">
                            <a
                              className="text-primary dark:text-slate-400"
                              href=""
                            >
                              Restart Now
                            </a>
                            <a className="ml-3 text-slate-500" href="">
                              Cancel
                            </a>
                          </div>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <Button
                        variant="primary"
                        onClick={notificationWithActionsToggle}
                      >
                        Show Notification
                      </Button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithActions.current = el;
                  }}
                  className="flex"
                >
                  <Lucide icon="HardDrive" />
                  <div className="ml-4 mr-4">
                    <div className="font-medium">Storage Removed!</div>
                    <div className="mt-1 text-slate-500">
                      The server will restart in 30 seconds, don't make
                      <br />
                      changes during the update process!
                    </div>
                    <div className="font-medium flex mt-1.5">
                      <a
                        className="text-primary dark:text-slate-400"
                        href=""
                      >
                        Restart Now
                      </a>
                      <a className="ml-3 text-slate-500" href="">
                        Cancel
                      </a>
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithActionsToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with actions
                const notificationWithActions = useRef<NotificationElement>();
                const notificationWithActionsToggle = () => {
                  // Show notification
                  notificationWithActions.current?.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* END: Notification With Actions */}
          {/* BEGIN: Notification With Avatar */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Notification With Avatar
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithAvatar.current = el;
                        }}
                        options={{
                          close: false,
                        }}
                        className="flex"
                      >
                        <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={fakerData[0].photos[0]}
                          />
                        </div>
                        <div className="ml-4 sm:mr-28">
                          <div className="font-medium">
                            {fakerData[0].users[0].name}
                          </div>
                          <div className="mt-1 text-slate-500">
                            See you later! 😃😃😃
                          </div>
                        </div>
                        <a
                          data-dismiss="notification"
                          className="absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                          href="#"
                        >
                          Reply
                        </a>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <Button
                        variant="primary"
                        onClick={notificationWithAvatarToggle}
                      >
                        Show Notification
                      </Button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithAvatar.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={fakerData[0].photos[0]}
                    />
                  </div>
                  <div className="ml-4 sm:mr-28">
                    <div className="font-medium">
                      {fakerData[0].users[0].name}
                    </div>
                    <div className="mt-1 text-slate-500">
                      See you later! 😃😃😃
                    </div>
                  </div>
                  <a
                    data-dismiss="notification"
                    className="absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                    href="#"
                  >
                    Reply
                  </a>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithAvatarToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with avatar
                const notificationWithAvatar = useRef<NotificationElement>();
                const notificationWithAvatarToggle = () => {
                  // Show notification
                  notificationWithAvatar.current?.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Notification With Avatar */}
          {/* BEGIN: Notification With Split Buttons */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Notification With Split Buttons
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithSplitButtons.current = el;
                        }}
                        options={{
                          close: false,
                        }}
                        className="flex"
                      >
                        <div className="sm:mr-40">
                          <div className="font-medium">
                            Introducing new theme
                          </div>
                          <div className="mt-1 text-slate-500">
                            Release version 2.3.3
                          </div>
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                          <a
                            className="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                            href="#"
                          >
                            View Details
                          </a>
                          <a
                            data-dismiss="notification"
                            className="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                            href="#"
                          >
                            Dismiss
                          </a>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <Button
                        variant="primary"
                        onClick={notificationWithSplitButtonsToggle}
                      >
                        Show Notification
                      </Button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithSplitButtons.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <div className="sm:mr-40">
                    <div className="font-medium">
                      Introducing new theme
                    </div>
                    <div className="mt-1 text-slate-500">
                      Release version 2.3.3
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                    <a
                      className="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                      href="#"
                    >
                      View Details
                    </a>
                    <a
                      data-dismiss="notification"
                      className="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                      href="#"
                    >
                      Dismiss
                    </a>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithSplitButtonsToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with split buttons
                const notificationWithSplitButtons = useRef<NotificationElement>();
                const notificationWithSplitButtonsToggle = () => {
                  // Show notification
                  notificationWithSplitButtons.current?.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Notification With Split Buttons */}
          {/* BEGIN: Notification With Buttons Below */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Notification With Buttons Below
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithButtonsBelow.current = el;
                        }}
                        options={{
                          close: false,
                        }}
                        className="flex"
                      >
                        <Lucide icon="FileText" />
                        <div className="ml-4 mr-5 sm:mr-20">
                          <div className="font-medium">
                            {fakerData[0].users[0].name}
                          </div>
                          <div className="mt-1 text-slate-500">
                            Sent you new documents.
                          </div>
                          <div className="mt-2.5">
                            <Button
                              variant="primary"
                              as="a"
                              className="px-2 py-1 mr-2"
                              href=""
                            >
                              Preview
                            </Button>
                            <Button
                              variant="outline-secondary"
                              as="a"
                              className="px-2 py-1"
                              href=""
                            >
                              Download
                            </Button>
                          </div>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <Button
                        variant="primary"
                        onClick={notificationWithButtonsBelowToggle}
                      >
                        Show Notification
                      </Button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithButtonsBelow.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <Lucide icon="FileText" />
                  <div className="ml-4 mr-5 sm:mr-20">
                    <div className="font-medium">
                      {fakerData[0].users[0].name}
                    </div>
                    <div className="mt-1 text-slate-500">
                      Sent you new documents.
                    </div>
                    <div className="mt-2.5">
                      <Button
                        variant="primary"
                        as="a"
                        className="px-2 py-1 mr-2"
                        href=""
                      >
                        Preview
                      </Button>
                      <Button
                        variant="outline-secondary"
                        as="a"
                        className="px-2 py-1"
                        href=""
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithButtonsBelowToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with buttons below
                const notificationWithButtonsBelow = useRef<NotificationElement>();
                const notificationWithButtonsBelowToggle = () => {
                  // Show notification
                  notificationWithButtonsBelow.current?.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Notification With Buttons Below */}
        </div>
      </div>
    </>
  );
}

export default Main;
