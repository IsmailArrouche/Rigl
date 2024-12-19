import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";

function FirstName({ register, errors }) {
  // active style
  const [active, setActive] = useState(false);

  // error style for firstName
  const errColor = !errors.firstName
    ? "dark:text-white text-gray-800"
    : "dark:text-red-300 text-red-500";

  return (
    <>
      <div
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={`form__inputs mr-1 ${active && "input__active"}`}
      >
        <label htmlFor="firstName">
          <span>First name</span>
          <small className="dark:text-red-400 text-red-600 ml-2 text-xs">
            {errors.firstName && "*" + errors?.firstName?.message}
          </small>
          <UserIcon className={`h-6 w-6 absolute right-3 ${errColor}`} />
        </label>
        <input
          {...register("firstName", { required: "required" })}
          type="text"
          id="firstName"
        />
      </div>
    </>
  );
}

export default React.memo(FirstName);
