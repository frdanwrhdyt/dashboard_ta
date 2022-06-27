import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { TemplateIcon, ChipIcon } from "@heroicons/react/outline";

export default function sideBar() {
  const [hoverCollapse, setHoverCollapse] = useState(false);
  const wrapperClasses = classNames(
    "h-full px-4 pt-8 pb-4  justify-between text-white border border-black rounded-r-md",
    {
      ["w-40"]: hoverCollapse,
      ["w-20"]: !hoverCollapse,
    }
  );
  const onMouseOver = () => {
    setHoverCollapse(!hoverCollapse);
  };
  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{
        transition: "width 1s cubic-bezier(0.2, 0, 0, 1) 0s",
      }}
    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-center relative pb-8 border-b  border-black ">
          <div className="flex items-center ">
            <ChipIcon className="h-10 w-10 text-black" />
          </div>
        </div>
        <div className="flex items-start justify-center pt-10 space-x-3">
          <TemplateIcon className="h-5 w-5 text-black" />
          {hoverCollapse && (
            <span className={classNames("text-md font-medium text-black ")}>
              Dashboard
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
