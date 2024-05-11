import _ from "lodash";
import fakerData from "../../utils/faker";
import { FormTextarea } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";

function Main() {
  return (
    <>
      <div className="p-5 mt-8 intro-y xl:w-3/5 box">
        {/* BEGIN: Blog Layout */}
        <h2 className="text-xl font-medium intro-y sm:text-2xl">
          {fakerData[0].news[0].title}
        </h2>
        <div className="mt-3 text-xs intro-y text-slate-600 dark:text-slate-500 sm:text-sm">
          {fakerData[0].dates[0]} <span className="mx-1">•</span>
          <a className="text-primary" href="">
            {fakerData[0].products[0].category}
          </a>
          <span className="mx-1">•</span> 7 Min read
        </div>
        <div className="mt-6 intro-y">
          <div className="h-[250px] md:h-[400px] image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="rounded-md"
              src={fakerData[0].images[0]}
            />
          </div>
        </div>
        <div className="relative flex items-center pt-16 pb-6 intro-y sm:pt-6">
          <Tippy
            as="a"
            href=""
            className="flex items-center justify-center flex-none w-8 h-8 mr-2 border rounded-full intro-x sm:w-10 sm:h-10 border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500"
            content="Bookmark"
          >
            <Lucide icon="Bookmark" className="w-3 h-3" />
          </Tippy>
          <div className="flex mr-3 intro-x">
            <div className="w-8 h-8 intro-x sm:w-10 sm:h-10 image-fit">
              <Tippy
                as="img"
                alt="Midone Tailwind HTML Admin Template"
                className="border border-white rounded-full zoom-in"
                src={fakerData[0].photos[0]}
                content={fakerData[0].users[0].name}
              />
            </div>
            <div className="w-8 h-8 -ml-4 intro-x sm:w-10 sm:h-10 image-fit">
              <Tippy
                as="img"
                alt="Midone Tailwind HTML Admin Template"
                className="border border-white rounded-full zoom-in"
                src={fakerData[0].photos[1]}
                content={fakerData[0].users[1].name}
              />
            </div>
            <div className="w-8 h-8 -ml-4 intro-x sm:w-10 sm:h-10 image-fit">
              <Tippy
                as="img"
                alt="Midone Tailwind HTML Admin Template"
                className="border border-white rounded-full zoom-in"
                src={fakerData[0].photos[2]}
                content={fakerData[0].users[2].name}
              />
            </div>
          </div>
          <div className="absolute flex w-full -mt-12 text-xs sm:relative sm:mt-0 text-slate-600 dark:text-slate-500 sm:text-sm">
            <div className="mr-1 intro-x sm:mr-3">
              Comments:{" "}
              <span className="font-medium">{fakerData[0].totals[0]}</span>
            </div>
            <div className="mr-1 intro-x sm:mr-3">
              Views:{" "}
              <span className="font-medium">{fakerData[0].totals[1]}k</span>
            </div>
            <div className="ml-auto intro-x sm:mr-3">
              Likes:{" "}
              <span className="font-medium">{fakerData[0].totals[2]}k</span>
            </div>
          </div>
          <Tippy
            as="a"
            href=""
            className="flex items-center justify-center flex-none w-8 h-8 ml-auto rounded-full intro-x sm:w-10 sm:h-10 text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 sm:ml-0"
            content="Share"
          >
            <Lucide icon="Share2" className="w-3 h-3" />
          </Tippy>
          <Tippy
            as="a"
            href=""
            className="flex items-center justify-center flex-none w-8 h-8 ml-2 text-white rounded-full intro-x sm:w-10 sm:h-10 bg-primary"
            content="Download PDF"
          >
            <Lucide icon="Share" className="w-3 h-3" />
          </Tippy>
        </div>
        <div className="leading-relaxed text-justify intro-y indent-[30px]">
          <p className="mb-5">{fakerData[1].news[0].content}</p>
          <p className="mb-5">{fakerData[2].news[0].content}</p>
          <p>{fakerData[3].news[0].content}</p>
        </div>
        <div className="flex flex-col items-center pt-5 mt-5 text-xs border-t intro-y sm:text-sm sm:flex-row border-slate-200/60 dark:border-darkmode-400">
          <div className="flex items-center">
            <div className="flex-none w-12 h-12 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src={fakerData[0].photos[0]}
              />
            </div>
            <div className="ml-3 mr-auto">
              <a href="" className="font-medium">
                {fakerData[0].users[0].name}
              </a>
              , Author
              <div className="text-slate-500">Senior Frontend Engineer</div>
            </div>
          </div>
          <div className="flex items-center mt-5 text-slate-600 dark:text-slate-500 sm:ml-auto sm:mt-0">
            Share this post:
            <Tippy
              as="a"
              href=""
              className="flex items-center justify-center w-8 h-8 ml-2 border rounded-full sm:w-10 sm:h-10 dark:border-darkmode-400 text-slate-400 zoom-in"
              content="Facebook"
            >
              <Lucide icon="Facebook" className="w-3 h-3 fill-current" />
            </Tippy>
            <Tippy
              as="a"
              href=""
              className="flex items-center justify-center w-8 h-8 ml-2 border rounded-full sm:w-10 sm:h-10 dark:border-darkmode-400 text-slate-400 zoom-in"
              content="Twitter"
            >
              <Lucide icon="Twitter" className="w-3 h-3 fill-current" />
            </Tippy>
            <Tippy
              as="a"
              href=""
              className="flex items-center justify-center w-8 h-8 ml-2 border rounded-full sm:w-10 sm:h-10 dark:border-darkmode-400 text-slate-400 zoom-in"
              content="Linked In"
            >
              <Lucide icon="Linkedin" className="w-3 h-3 fill-current" />
            </Tippy>
          </div>
        </div>
        {/* END: Blog Layout */}
        {/* BEGIN: Comments */}
        <div className="pt-5 mt-5 border-t intro-y border-slate-200/60 dark:border-darkmode-400">
          <div className="text-base font-medium sm:text-lg">2 Responses</div>
          <div className="relative mt-5 news__input h-[69px]">
            <Lucide
              icon="MessageCircle"
              className="absolute inset-y-0 left-0 w-5 h-5 my-auto ml-6 text-slate-500"
            />
            <FormTextarea
              className="py-6 pl-16 border-transparent resize-none bg-slate-100"
              rows={1}
              placeholder="Post a comment..."
            ></FormTextarea>
          </div>
        </div>
        <div className="pb-10 mt-5 intro-y">
          <div className="pt-5">
            <div className="flex">
              <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={fakerData[0].photos[0]}
                />
              </div>
              <div className="flex-1 ml-3">
                <div className="flex items-center">
                  <a href="" className="font-medium">
                    {fakerData[0].users[0].name}
                  </a>
                  <a href="" className="ml-auto text-xs text-slate-500">
                    Reply
                  </a>
                </div>
                <div className="text-xs text-slate-500 sm:text-sm">
                  {fakerData[0].formattedTimes[0]}
                </div>
                <div className="mt-2">{fakerData[0].news[0].shortContent}</div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5 border-t border-slate-200/60 dark:border-darkmode-400">
            <div className="flex">
              <div className="flex-none w-10 h-10 sm:w-12 sm:h-12 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={fakerData[0].photos[1]}
                />
              </div>
              <div className="flex-1 ml-3">
                <div className="flex items-center">
                  <a href="" className="font-medium">
                    {fakerData[0].users[1].name}
                  </a>
                  <a href="" className="ml-auto text-xs text-slate-500">
                    Reply
                  </a>
                </div>
                <div className="text-xs text-slate-500 sm:text-sm">
                  {fakerData[1].formattedTimes[0]}
                </div>
                <div className="mt-2">{fakerData[1].news[0].shortContent}</div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Comments */}
      </div>
    </>
  );
}

export default Main;
