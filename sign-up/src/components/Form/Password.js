import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

function Password({ register, errors }) {
  // show password and active style
  const [states, setStates] = useState([{ show: false }, { active: false }]);

  // error color for password
  const errColor = !errors.password
    ? "dark:text-white text-gray-800"
    : "dark:text-red-300 text-red-500";
  return (
    <>
      <div
        onFocus={() =>
          setStates(
            states.map((s) => (s.active == false ? { active: true } : s))
          )
        }
        onBlur={() =>
          setStates(
            states.map((s) => (s.active == true ? { active: false } : s))
          )
        }
        className={`form__inputs col-span-2 ${
          states[1].active && "input__active"
        }`}
      >
        <label htmlFor="password">
          <span>Password</span>
          <small className="dark:text-red-400 text-red-600 ml-2 text-xs">
            {errors.password && "*" + errors?.password?.message}
          </small>
          {states[0].show ? (
            <EyeOffIcon
              onClick={() =>
                setStates(
                  states.map((s) => (s.show == true ? { show: false } : s))
                )
              }
              className={`cursor-pointer h-6 w-6 absolute right-4 ${errColor}`}
            />
          ) : (
            <EyeIcon
              onClick={() =>
                setStates(
                  states.map((s) => (s.show == false ? { show: true } : s))
                )
              }
              className={`cursor-pointer h-6 w-6 absolute right-4 ${errColor}`}
            />
          )}
        </label>
        <input
          {...register("password", {
            required: "required",
            minLength: { value: 9, message: "Minimum 9 characters" },
          })}
          type={states[0].show ? "text" : "password"}
          id="password"
        />
      </div>
    </>
  );
}

export default React.memo(Password);
