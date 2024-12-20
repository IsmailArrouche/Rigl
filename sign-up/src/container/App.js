import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import Welcome from "../components/Welcome/Welcome";
import { useSelector } from "react-redux";

function App() {
  // redux
  const mode = useSelector((state) => state.mode.mode);
  const user = useSelector((state) => state.user.user);
  return (
    <div className="app h-screen min-h-[770px] md:min-h-[710px] bg-center bg-cover bg-no-repeat bg-[url('./assets/mountain.jpg')] ">
      <div className={`${mode == true ? "dark" : "light"} bg-gradient h-full`}>
        <Nav />
        {user.length === 0 ? <Form /> : <Welcome />}
      </div>
    </div>
  );
}

export default App;
