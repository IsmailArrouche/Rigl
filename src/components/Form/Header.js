import React from "react";

function Header({ onNavigate }) {
  return (
    <div>
      <div className="text-center md:text-left">
        <span className="font-bold text-sm text-gray-600 dark:text-gray-400">
          START FOR FREE
        </span>
        <h1 className="text-5xl text-gray-800 dark:text-gray-200 font-bold py-3">
          <span>Create new account</span>
          <span className="text-[#efe8dd] text-9xlxl">.</span>
        </h1>
        <span className="font-bold text-sm text-gray-700 dark:text-gray-300">
          <span>
            Already a member?{" "}
            <span
              onClick={() => onNavigate("conex")}
              className="text-[#efe8dd] cursor-pointer"
            >
              Log In
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default React.memo(Header);
