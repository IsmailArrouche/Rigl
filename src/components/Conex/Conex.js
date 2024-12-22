import Header from "./Header";
import Email from "./Email";
import Password from "./Password";
// redux
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../app/features/user/userSlice";
// form api
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function Conex({ onNavigate }) {
  // redux
  const dispatch = useDispatch();

  // react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // submit form
  const onSubmit = (data) => dispatch(signUp(data));

  // get latest info for editing
  const editUser = useSelector((state) => state.user.editUser);

  // set values on edit info event
  useEffect(() => {
    if (editUser.length === 0) return;
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
          <Email register={register} errors={errors} />
          <Password register={register} errors={errors} />
          <button
            type="submit"
            className=" col-span-2 bg-[#efe8dd] text-black opacity-70 transition-all shadow-sm shadow-transparent hover:shadow-[#efe8dd] hover:opacity-100 py-3 rounded-2xl mt-4"
          >
            Login
          </button>
          <span
              onClick={() => onNavigate("home")}
              className="font-extralight text-sm text-gray-700 dark:text-gray-300 mt-4 cursor-pointer w-28 justify-self-end col-span-2"
            >
              Forgot Password ?
            </span>
        </form>
      </div>
    </div>
  );
}

export default Conex;
