import React from "react";
import { LightningBoltIcon } from "@heroicons/react/solid";

export default function infoColumn({ props, title, lastUpdate }) {
  const pt = props?.pt;
  const dt = props?.datetime;
  return (
    <>
      <div className="flex flex-row p-5 min-h-[100px] max-h-[200px] max-w-[300px] min-w-full  shadow-md bg-white rounded-md  items-center space-x-4">
        <div className="min-h-[80px] aspect-square border rounded-md bg-cyan-900 shadow-md flex items-center justify-center">
          <LightningBoltIcon className="h-10 aspect-square text-white" />
        </div>
        <div className="h-full w-full flex flex-col justify-center ">
          <div className="text-sm md:text-md font-medium ">{title}</div>
          <div className="text-xl md:text-3xl font-black ">
            {typeof pt === "number" ? pt.toFixed(2) : pt} kW
          </div>
          {(() => {
            if (lastUpdate) {
              return (
                <>
                  <div className="text-sm font-light ">Last Update: </div>
                  <div className="text-sm font-light ">{dt}</div>
                </>
              );
            }
          })()}
        </div>
      </div>
    </>
  );
}
