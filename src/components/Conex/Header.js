import React from "react";

function Header({ onNavigate }) {
  return (
    <div>
      <div className="text-center md:text-left">
        <h1 className="text-5xl text-gray-800 dark:text-gray-200 font-bold py-3">
          <span>Access Your Account</span>
          <span className="text-[#efe8dd] text-9xlxl">.</span>
        </h1>
        <span className="font-bold text-sm text-gray-700 dark:text-gray-300">
          <span>
            Don't have an account?{" "}
            <span
              onClick={() => onNavigate("home")}
              className="text-[#efe8dd] cursor-pointer"
            >
              Register
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default React.memo(Header);
