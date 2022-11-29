import "./style.css";
import Nav from "../Nav";
import AppContext from "../AppContext";
import { useContext } from "react";
import Login from "../Login";
const componentName = "Layout";
export default function (props) {
  const { token, setToken } = useContext(AppContext);
  return (
    <div className={componentName}>
      {token ? (
        <div>
          <Nav />
          {props.component ? <props.component /> : <div>Empty</div>}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
