import "./style.css";
import AppContext from "../AppContext";
import { useContext } from "react";

const componentName = "Comp2";

export default function () {
  const { token, setToken } = useContext(AppContext);
  const doLogout = () => {
    console.log("Log out");
    setToken(null);
  };
  return (
    <div className={componentName}>
      <div>This is {componentName}</div>
      <div>
        <button onClick={doLogout}>Log out</button>
      </div>
    </div>
  );
}
