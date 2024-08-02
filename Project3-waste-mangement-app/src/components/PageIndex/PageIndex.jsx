import React from "react";

function PageIndex({ index = 1 ,length = 10, fontColor = 'text-black' }) {
  return (
    <div className="mx-6 sm:my-8 mb-8 w-fit flex items-center justify-between">
      <div className={`p-1 px-3 rounded-lg md:text-xl text-sm bg-green-200 font-bold ${fontColor}`}>
        &#706;
      </div>
      <div className="px-3 flex gap-1 md:text-lg text-sm">
        <b>{index}</b> of <b>{length}</b>
      </div>
      <div className={`p-1 px-3 rounded-lg md:text-xl text-sm bg-green-200 font-bold ${fontColor}`}>
        &#707;
      </div>
    </div>
  );
}

export default PageIndex;
