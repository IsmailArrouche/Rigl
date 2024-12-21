import Profile from "./Profile";
import Tabs from "./Tabs";

function Nav() {
  return (
    <div className="container mx-auto md:px-20 px-5">
      <div className="flex items-center">
        <Profile />
        <Tabs />
      </div>
    </div>
  );
}

export default Nav;
