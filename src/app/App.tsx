import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactElement } from "react";
import routes from "./config/router/routes.tsx";

const App = (): ReactElement => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default App;
