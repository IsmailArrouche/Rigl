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
  className="rounded-full w-16 h-16 mr-5"
  />

      <span className="dark:text-white font-semibold">
        {user.length == 0 ? "Welcome" : `Hey ${user?.firstName} !`}
      </span>
    </div>
  );
}

export default React.memo(Profile);
