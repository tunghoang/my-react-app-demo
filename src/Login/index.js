import "./style.css";
import AppContext from "../AppContext";
import { useContext } from "react";
const componentName = "Login";
export default function () {
  const { token, setToken } = useContext(AppContext);
  const doLogin = () => {
    console.log("login");
    setToken("token Value");
  };
  return (
    <div className={componentName}>
      This is {componentName}
      {token}
      <button onClick={doLogin}>Loginnnn</button>
    </div>
  );
}
