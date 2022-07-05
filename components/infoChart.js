/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import LineChart from "./lineChart";

export default function lineCharts({ props }) {
  const menu = [
    { id: 1, name: "An Hour", data: props?.hour },
    { id: 2, name: "A Day", data: props?.day },
    { id: 3, name: "A Week", data: props?.week },
  ];

  const [selectedMenu, setSelectedMenu] = React.useState(menu[0]);

  return (
    <>
      <div className="w-full min-h-[300px] bg-white shadow-lg rounded-md p-5 flex flex-col justify-between">
        <div className="relative w-full">
          <div className="flex justify-between">
            <div className="text-black font-medium md:text-xl text-sm">
              Predict Graph
            </div>
            <div className="absolute right-0 top-0 min-w-fit min-h-fit">
              <Listbox value={selectedMenu} onChange={setSelectedMenu}>
                <div className="relative ">
                  <Listbox.Button className="relative md:min-w-[150px] cursor-default rounded-lg shadow-lg border border-cyan-900 text-cyan-900 py-2 pl-3 pr-10 text-left hover:bg-cyan-900 hover:text-white duration-500 text-xs md:text-md">
                    <span className="block truncate">{selectedMenu.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 md:max-h-60 w-full overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-xs md:text-md">
                      {menu.map((m) => (
                        <Listbox.Option
                          key={m.id}
                          value={m}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-5 transition-opacity duration-300 ${
                              active
                                ? "bg-cyan-900/20 text-black"
                                : "text-gray-900"
                            }`
                          }
                        >
                          {m.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>
        <div className="w-full md:w-11/12 mx-auto h-full ">
          <LineChart datas={selectedMenu.data} label={selectedMenu.name} />
        </div>
      </div>
    </>
  );
}
