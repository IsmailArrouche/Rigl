import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../app/features/mode/modeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function Tabs() {
  // redux
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div className="ml-auto text-gray-500 dark:text-gray-400 font-semibold text-sm">
      <span
        title="Change Mode"
        onClick={() => dispatch(changeMode())}
        className="cursor-pointer md:px-5"
      >
        {mode ? (
          <SunIcon className="w-8 inline" />
        ) : (
          <MoonIcon className="w-8 inline" />
        )}
      </span>
    </div>
  );
}

export default React.memo(Tabs);
