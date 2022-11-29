import "./style.css";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes.config.js";
const componentName = "Nav";
export default function (props) {
  const location = useLocation();
  console.log(location);
  return (
    <div className={componentName}>
      {(routes || []).map((r) => (
        <Link
          key={r.path}
          to={r.path}
          className={r.path === location.pathname ? "active" : ""}
        >
          {r.label}
        </Link>
      ))}
    </div>
  );
}
