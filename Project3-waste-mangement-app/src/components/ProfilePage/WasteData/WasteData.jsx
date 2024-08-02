import React from "react";

function WasteData({
  orgWaste = 0,
  recycleWaste = 0,
  hazWaste = 0
}) {
  return (
    <div className="flex flex-col gap-4 py-3">
      <h4 className="text-center lg:text-2xl text-xl">Recycling and Waste Reduction</h4>
      <div className="flex justify-center lg:gap-28 gap-3">
        <div className="bg-yellow-400 rounded-2xl lg:px-14 px-6 py-1 text-nowrap flex flex-col justify-center items-center gap-1">
          <h6 className="font-medium text-sm">Organic Waste</h6>
          <p className="text-blue-800 text-sm">{orgWaste} kgs</p>
        </div>
        <div className="bg-yellow-400 rounded-2xl lg:px-14 px-6 py-1 text-nowrap flex flex-col justify-center items-center gap-1">
          <h6 className="font-medium text-sm">Recyclable Waste</h6>
          <p className="text-blue-800 text-sm">{recycleWaste} kgs</p>
        </div>
        <div className="bg-yellow-400 rounded-2xl lg:px-14 px-6 py-1 text-nowrap flex flex-col justify-center items-center gap-1">
          <h6 className="font-medium text-sm">Hazardous Waste</h6>
          <p className="text-blue-800 text-sm">{hazWaste} kgs</p>
        </div>
      </div>
    </div>
  );
}

export default WasteData;
