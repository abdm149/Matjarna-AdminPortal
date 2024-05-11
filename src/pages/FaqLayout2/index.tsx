import _ from "lodash";
import Lucide from "../../base-components/Lucide";
import { Disclosure } from "../../base-components/Headless";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">FAQ Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* BEGIN: FAQ Menu */}
        <div className="col-span-12 intro-y lg:col-span-4 xl:col-span-3">
          <div className="mt-5 box">
            <div className="p-5">
              <a className="flex items-center font-medium text-primary" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> About Our
                Products
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Related License
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Single
                Application License
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Multi
                Application License
              </a>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Term of Use
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Author Fees
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Product Review
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Privacy
                Policy
              </a>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> About Our
                Products
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Related License
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Single
                Application License
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Multi
                Application License
              </a>
            </div>
          </div>
        </div>
        {/* END: FAQ Menu */}
        {/* BEGIN: FAQ Content */}
        <div className="col-span-12 intro-y lg:col-span-8 xl:col-span-9">
          <div className="intro-y box lg:mt-5">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="mr-auto text-base font-medium">
                About Our Products
              </h2>
            </div>
            <Disclosure.Group className="p-5">
              <Disclosure>
                <Disclosure.Button>
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  {" "}
                  How To Troubleshoot Common HTTP Error Codes{" "}
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  {" "}
                  An Introduction to Securing your Linux VPS{" "}
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
            </Disclosure.Group>
          </div>
          <div className="mt-5 intro-y box">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="mr-auto text-base font-medium">Related License</h2>
            </div>
            <Disclosure.Group className="p-5">
              <Disclosure>
                <Disclosure.Button>
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  {" "}
                  How To Troubleshoot Common HTTP Error Codes{" "}
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  {" "}
                  An Introduction to Securing your Linux VPS{" "}
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
            </Disclosure.Group>
          </div>
          <div className="mt-5 intro-y box">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="mr-auto text-base font-medium">
                Single Application License
              </h2>
            </div>
            <Disclosure.Group className="p-5">
              <Disclosure>
                <Disclosure.Button>
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  {" "}
                  How To Troubleshoot Common HTTP Error Codes{" "}
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  {" "}
                  An Introduction to Securing your Linux VPS{" "}
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Disclosure.Panel>
              </Disclosure>
            </Disclosure.Group>
          </div>
        </div>
        {/* END: FAQ Content */}
      </div>
    </>
  );
}

export default Main;
