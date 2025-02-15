import Header from "./Header";
import Email from "./Email";
import Password from "./Password";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../app/features/user/userSlice";
// Form API
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Import valid users
import validUsers from "./validUsers";

function Conex({ onNavigate }) {
  // Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Submit form
  const onSubmit = (data) => {
    const user = validUsers.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      // Add the user to Redux store
      dispatch(signUp({ email: data.email, password: data.password }));
      // Redirect to /explore
      navigate("/explore");
    } else {
      alert("Invalid email or password!");
    }
  };

  // Get latest info for editing
  const editUser = useSelector((state) => state.user.editUser);

  // Set values on edit info event
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
            className="col-span-2 bg-[#4a7fa9] text-white opacity-90 transition-all shadow-sm shadow-transparent hover:shadow-[#4a7fa9] hover:opacity-100 py-3 rounded-2xl mt-4 dark:bg-[#3a5f87] dark:text-[#e5e7eb] dark:hover:shadow-[#3a5f87]"
          >
            Login
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

export default Conex;
