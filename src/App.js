import "./styles.css";

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  Router,
  RouterProvider
} from "react-router-dom";
import routes from "./routes.config.js";
import { createContext, useState } from "react";
import AppContext from "./AppContext";
export default function App() {
  const router = createBrowserRouter(routes);
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <AppContext.Provider value={{ token, setToken }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
  /*return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="comp1" element={<Comp1 />}></Route>
          <Route path="comp2" element={<Comp2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );*/
}
