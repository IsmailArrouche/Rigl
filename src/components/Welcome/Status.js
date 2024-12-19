import React, { useState } from "react";

function Status() {
  // status IDs
  const [status, setStatus] = useState("st3");

  return (
    <div className="mt-4 md:mt-8">
      <h3 className="font-semibold text-center mb-1 dark:text-gray-400 text-gray-600">
        My Status
      </h3>

      <div className="flex flex-wrap justify-center">
        <div
          onClick={() => setStatus("st1")}
          className={`${
            status == "st1" ? "opacity-100" : "opacity-30"
          } bg-black mr-2 mt-2 text-white text-sm p-3 rounded-3xl cursor-pointer`}
        >
          😴 Away
        </div>
        <div
          onClick={() => setStatus("st2")}
          className={`${
            status == "st2" ? "opacity-100" : "opacity-30"
          } bg-green-600 mr-2 mt-2 text-white text-sm p-3 rounded-3xl cursor-pointer`}
        >
          💻 At Work
        </div>
        <div
          onClick={() => setStatus("st3")}
          className={`${
            status == "st3" ? "opacity-100" : "opacity-30"
          } bg-orange-600 mr-2 mt-2 text-white text-sm p-3 rounded-3xl cursor-pointer`}
        >
          🎮 Gaming
        </div>
        <div
          onClick={() => setStatus("st4")}
          className={`${
            status == "st4" ? "opacity-100" : "opacity-30"
          } bg-red-600 mr-2 mt-2 text-white text-sm p-3 rounded-3xl cursor-pointer`}
        >
          🏆 Champion
        </div>
        <div
          onClick={() => setStatus("st5")}
          className={`${
            status == "st5" ? "opacity-100" : "opacity-30"
          } bg-purple-600 mr-2  mt-2 text-white text-sm p-3 rounded-3xl cursor-pointer`}
        >
          🎉 Party
        </div>
      </div>
    </div>
  );
}

export default React.memo(Status);
