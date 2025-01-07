import Header from "./Header";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";
// redux
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../app/features/user/userSlice";
// form api
import { useForm } from "react-hook-form";
import { useEffect } from "react";

// navigation links
import { Link } from "react-router-dom";

function Form({ onNavigate }) {
  // redux
  const dispatch = useDispatch();

  // react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // submit form
  const onSubmit = (data) => dispatch(signUp(data));

  // get latest info for editing
  const editUser = useSelector((state) => state.user.editUser);

  // set values on edit info event
  useEffect(() => {
    if (editUser.length === 0) return;
    setValue("firstName", `${editUser?.firstName}`, { shouldValidate: true });
    setValue("lastName", `${editUser?.lastName}`, { shouldValidate: true });
    setValue("email", `${editUser?.email}`, { shouldValidate: true });
    setValue("password", `${editUser?.password}`, { shouldValidate: true });
  }, [editUser]);

  return (
    <div className="container mt-12 md:mt-24 mx-auto md:px-20 px-5">
      <Header onNavigate={onNavigate} />

      <div className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-6/12 pb-10 xl:w-4/12 w-full grid grid-cols-2 p-2"
          autoComplete="off"
        >
          <FirstName register={register} errors={errors} />
          <LastName register={register} errors={errors} />
          <Email register={register} errors={errors} />
          <Password register={register} errors={errors} />
          <button
            type="submit"
            className="col-span-2 bg-[#4a7fa9] text-white opacity-90 transition-all shadow-sm shadow-transparent hover:shadow-[#4a7fa9] hover:opacity-100 py-3 rounded-2xl mt-4 dark:bg-[#3a5f87] dark:text-[#e5e7eb] dark:hover:shadow-[#3a5f87]"
          >
            Create account
          </button>
          <div className="col-span-2 text-right mt-2">
            <Link
              to="/forget-password"
              className="font-extralight text-sm text-gray-700 dark:text-gray-400 mt-4 cursor-pointer w-28 justify-self-end col-span-2"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
