import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";

function LastName({ register, errors }) {
  // active style
  const [active, setActive] = useState(false);

  // error color for lastName
  const errColor = !errors.lastName
    ? "dark:text-white text-gray-800"
    : "dark:text-red-300 text-red-500";

  return (
    <>
      <div
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={`form__inputs ml-1 ${active && "input__active"}`}
      >
        <label htmlFor="lastName">
          <span>Last name</span>
          <small className="dark:text-red-400 text-red-600 ml-2 text-xs">
            {errors.lastName && "*" + errors?.lastName?.message}
          </small>
          <UserIcon className={`h-6 w-6 absolute right-3 ${errColor}`} />
        </label>
        <input
          {...register("lastName", { required: "required" })}
          type="text"
          id="lastName"
        />
      </div>
    </>
  );
}

export default React.memo(LastName);
