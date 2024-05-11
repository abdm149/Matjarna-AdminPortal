import LoadingIcon from "../../base-components/LoadingIcon";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">SVG Loaders</h2>
      </div>
      {/* BEGIN: Icon List */}
      <div className="grid grid-cols-12 px-5 py-8 mt-5 intro-y sm:gap-6 gap-y-6 box">
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="audio" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">audio</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="ball-triangle" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">ball-triangle</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="bars" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">bars</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="circles" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">circles</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="grid" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">grid</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="hearts" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">hearts</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="oval" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">oval</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="puff" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">puff</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="rings" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">rings</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="spinning-circles" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">spinning-circles</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="tail-spin" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">tail-spin</div>
        </div>
        <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
          <LoadingIcon icon="three-dots" className="w-8 h-8" />
          <div className="mt-2 text-xs text-center">three-dots</div>
        </div>
      </div>
      {/* END: Icon List */}
    </>
  );
}

export default Main;
