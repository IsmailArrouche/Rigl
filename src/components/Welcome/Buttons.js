import { useDispatch, useSelector } from "react-redux";
import { clear, editInfo } from "../../app/features/user/userSlice";

function Buttons() {
  // redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // edit info event
  const handleEditInfo = (latestInfo) => {
    dispatch(editInfo(latestInfo));
    dispatch(clear());
  };

  return (
    <div className="w-full pb-10 flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12">
      <button onClick={() => dispatch(clear())} className="logOut__btn">
        Log out
      </button>
      <button onClick={() => handleEditInfo(user)} className="editInfo__btn">
        Edit Info
      </button>
    </div>
  );
}

export default Buttons;
