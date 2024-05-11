import _ from "lodash";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Pricing Layout</h2>
      </div>
      {/* BEGIN: Pricing Layout */}
      <div className="flex flex-col mt-5 intro-y box lg:flex-row">
        <div className="flex-1 px-5 py-16 intro-y">
          <Lucide
            icon="CreditCard"
            className="block w-12 h-12 mx-auto text-primary"
          />
          <div className="mt-10 text-xl font-medium text-center">
            Basic Plan
          </div>
          <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
            1 Domain <span className="mx-1">•</span> 10 Users{" "}
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="px-10 mx-auto mt-2 text-center text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative mx-auto mt-8 text-5xl font-semibold">
              <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span> 35
            </div>
          </div>
          <Button
            variant="primary"
            rounded
            type="button"
            className="block px-4 py-3 mx-auto mt-8"
          >
            PURCHASE NOW
          </Button>
        </div>
        <div className="flex-1 p-5 py-16 border-t border-b intro-y lg:border-b-0 lg:border-t-0 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400">
          <Lucide
            icon="Briefcase"
            className="block w-12 h-12 mx-auto text-primary"
          />
          <div className="mt-10 text-xl font-medium text-center">Business</div>
          <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
            1 Domain <span className="mx-1">•</span> 10 Users{" "}
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="px-10 mx-auto mt-2 text-center text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative mx-auto mt-8 text-5xl font-semibold">
              <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span> 60
            </div>
          </div>
          <Button
            variant="primary"
            rounded
            type="button"
            className="block px-4 py-3 mx-auto mt-8"
          >
            PURCHASE NOW
          </Button>
        </div>
        <div className="flex-1 px-5 py-16 intro-y">
          <Lucide
            icon="ShoppingBag"
            className="block w-12 h-12 mx-auto text-primary"
          />
          <div className="mt-10 text-xl font-medium text-center">
            Enterprise
          </div>
          <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
            1 Domain <span className="mx-1">•</span> 10 Users{" "}
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="px-10 mx-auto mt-2 text-center text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative mx-auto mt-8 text-5xl font-semibold">
              <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span>{" "}
              120
            </div>
          </div>
          <Button
            variant="primary"
            rounded
            type="button"
            className="block px-4 py-3 mx-auto mt-8"
          >
            PURCHASE NOW
          </Button>
        </div>
      </div>
      {/* END: Pricing Layout */}
      {/* BEGIN: Pricing Layout */}
      <div className="flex flex-col mt-5 intro-y box lg:flex-row">
        <div className="flex-1 px-5 py-16 intro-y">
          <Lucide
            icon="Activity"
            className="block w-12 h-12 mx-auto text-primary"
          />
          <div className="mt-10 text-xl font-medium text-center">
            Basic Plan
          </div>
          <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
            1 Domain <span className="mx-1">•</span> 10 Users{" "}
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="px-10 mx-auto mt-2 text-center text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative mx-auto mt-8 text-5xl font-semibold">
              <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span> 35
            </div>
          </div>
          <Button
            variant="primary"
            rounded
            type="button"
            className="block px-4 py-3 mx-auto mt-8"
          >
            PURCHASE NOW
          </Button>
        </div>
        <div className="flex-1 px-5 py-16 border-t border-b intro-y lg:border-b-0 lg:border-t-0 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400">
          <Lucide icon="Box" className="block w-12 h-12 mx-auto text-primary" />
          <div className="mt-10 text-xl font-medium text-center">Business</div>
          <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
            1 Domain <span className="mx-1">•</span> 10 Users{" "}
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="px-10 mx-auto mt-2 text-center text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative mx-auto mt-8 text-5xl font-semibold">
              <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span> 60
            </div>
          </div>
          <Button
            variant="primary"
            rounded
            type="button"
            className="block px-4 py-3 mx-auto mt-8"
          >
            PURCHASE NOW
          </Button>
        </div>
        <div className="flex-1 px-5 py-16 intro-y">
          <Lucide
            icon="Send"
            className="block w-12 h-12 mx-auto text-primary"
          />
          <div className="mt-10 text-xl font-medium text-center">
            Enterprise
          </div>
          <div className="mt-5 text-center text-slate-600 dark:text-slate-500">
            1 Domain <span className="mx-1">•</span> 10 Users{" "}
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="px-10 mx-auto mt-2 text-center text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative mx-auto mt-8 text-5xl font-semibold">
              <span className="absolute top-0 left-0 -ml-4 text-2xl">$</span>{" "}
              120
            </div>
          </div>
          <Button
            variant="primary"
            rounded
            type="button"
            className="block px-4 py-3 mx-auto mt-8"
          >
            PURCHASE NOW
          </Button>
        </div>
      </div>
      {/* END: Pricing Layout */}
    </>
  );
}

export default Main;
