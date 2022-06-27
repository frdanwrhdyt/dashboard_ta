import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import LineChart from "./lineChart";

export default function lineCharts({ props }) {
  const menu = [
    { id: 1, name: "An Hour", data: props?.hour },
    { id: 2, name: "A Day", data: props?.day },
    { id: 3, name: "A Week", data: props?.week },
  ];

  const [selectedMenu, setSelectedMenu] = useState(menu[0]);

  return (
    <>
      <div className="w-full min-h-[300px] bg-white shadow-lg rounded-md p-5">
        <div className=" relative w-full">
          <div className="flex justify-between">
            <div className="text-black font-medium md:text-xl text-sm">
              Predict Graph
            </div>
            <div className="absolute right-0 top-0 min-w-fit min-h-fit">
              <Listbox value={selectedMenu} onChange={setSelectedMenu}>
                <div className="relative ">
                  <Listbox.Button className="relative min-w-[150px] cursor-default rounded-lg shadow-lg bg-cyan-900 text-white py-2 pl-3 pr-10 text-left hover:bg-cyan-900/80 duration-500 md:text-md text-sm">
                    <span className="block truncate">{selectedMenu.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:text-md text-sm">
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
          <div className="w-11/12 mx-auto h-fit ">
            <LineChart datas={selectedMenu.data} label={selectedMenu.name} />
          </div>
        </div>
      </div>
    </>
  );
}
