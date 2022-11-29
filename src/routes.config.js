import Layout from "./Layout";

import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Home from "./Home";

const routes = [
  {
    path: "/",
    label: "Home",
    element: <Layout component={Home} />
  },
  {
    path: "/comp1",
    label: "Component1",
    element: <Layout component={Comp1} />
  },
  {
    path: "/comp2",
    label: "Component2",
    element: <Layout component={Comp2} />
  }
];
export default routes;
