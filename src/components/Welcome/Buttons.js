import { useDispatch } from "react-redux";
import { clear} from "../../app/features/user/userSlice";

function Buttons() {
  // redux
  const dispatch = useDispatch();

  return (
    <div className="w-full pb-10 flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12">
      <button onClick={() => dispatch(clear())} className="logOut__btn">
        Log out
      </button>
    </div>
  );
}

export default Buttons;
