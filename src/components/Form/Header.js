import React from "react";

function Header() {
  return (
    <div>
      <div className="text-center md:text-left">
        <span className="font-bold text-sm text-gray-600 dark:text-gray-400">
          START FOR FREE
        </span>
        <h1 className="text-5xl text-gray-800 dark:text-gray-200 font-bold py-3">
          <span>Create new account</span>
          <span className="text-fblue-100 text-9xlxl">.</span>
        </h1>
        <span className="font-bold text-sm text-gray-700 dark:text-gray-300">
          <span>
            Already a member?{" "}
            <span className="text-fblue-100 curse cursor-pointer"> Log In</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default React.memo(Header);
