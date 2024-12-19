import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  // redux
  const user = useSelector((state) => state.user.user);
  return (
    <div className="my-3 flex items-center w-fit">
      <img 
  src="../../logo512.png" 
  alt="Description of the image" 
  className="bg-[#efe8dd] rounded-full w-8 h-8 mr-2"
  />

      <span className="dark:text-white md:pr-16 font-semibold">
        {user.length == 0 ? "Please Login." : `Hey ${user?.firstName} !`}
      </span>
    </div>
  );
}

export default React.memo(Profile);
