import React from "react";

import { InformationCircleIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

function costPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>
            <InformationCircleIcon
              className={`${
                open ? "" : "text-opacity-90"
              }"w-5 h-5 text-black/50 hover:text-black transition duration-300"`}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-[99] mt-3 w-[200px] bg-cyan-900/90 transform p-5 shadow-lg rounded-md">
              <div className="text-white">
                <div className="font-semibold border-b border-white">
                  Cost Information
                </div>
                <div className="text-sm pt-2">
                  <p>
                    Estimated cost by price per kwh in 2021 for L/TR, TM and TT
                    is IDR 1644.52
                  </p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default function infoTop({ datas }) {
  const hour = datas?.hour?.predict?.pt;
  const day = datas?.day?.predict?.pt;
  const week = datas?.week?.predict?.pt;

  var costHour = (hour * 1644.52).toFixed(2);
  var costDay = (day * 24 * 1644.52).toFixed(2);
  var costWeek = (week * 24 * 7 * 1644.52).toFixed(2);

  return (
    <>
      {costPopover()}
      <div className="grid grid-cols-3 gap-20 pb-10 h-fit w-full">
        <div className="w-full min-h-[100px] rounded-md bg-white shadow-md p-5 flex flex-row">
          <div className="text-sm md:text-md font-semibold">
            Estimated cost for the next hour
          </div>
          <div className="h-full flex w-1/3 items-end">
            <div className="flex ml-auto">
              <div className="w-full text-end ">
                <span className="font-semibold text-sm md:text-lg">IDR</span>{" "}
                {costHour}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100px] rounded-md bg-white shadow-md p-5 flex flex-row">
          <div className="text-sm md:text-md font-semibold ">
            Estimated cost for the next day
          </div>
          <div className="h-full flex w-1/3 items-end">
            <div className="flex ml-auto">
              <div className="w-full text-end ">
                <span className="font-semibold text-sm md:text-lg">IDR</span>{" "}
                {costDay}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100px] rounded-md bg-white shadow-md p-5 flex flex-row">
          <div className="text-sm md:text-md font-semibold">
            Estimated cost for the next week
          </div>
          <div className="h-full flex w-1/3 items-end">
            <div className="flex ml-auto">
              <div className="w-full text-end ">
                <span className="font-semibold text-sm md:text-lg">IDR</span>{" "}
                {costWeek}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
