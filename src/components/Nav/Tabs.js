import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../app/features/mode/modeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function Tabs() {
  // redux
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div className="flex-1 text-gray-500 dark:text-gray-400 font-semibold text-sm">
      <span className="cursor-pointer px-5">
        <a href="https://mehdi-zandian.vercel.app/" target="_blank">
          About
        </a>
      </span>
      <span className="cursor-pointer px-5 md:inline hidden">Join</span>
      <span
        title="Change Mode"
        onClick={() => dispatch(changeMode())}
        className="cursor-pointer md:px-5"
      >
        {mode ? (
          <SunIcon className="w-6 inline" />
        ) : (
          <MoonIcon className="w-6 inline" />
        )}
      </span>
    </div>
  );
}

export default React.memo(Tabs);
