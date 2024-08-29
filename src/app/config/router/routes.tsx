import Layout from "../../ui/Layout/ui/Layout.tsx";
import Dashboard from "../../../pages/Dashboard/ui/Dashboard.tsx";
import About from "../../../pages/AboutUs/ui/AboutUs.tsx";
import FAQ from "../../../pages/FAQ/ui/FAQ.tsx";
import { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "*",
        element: <span>Такой страницы нет</span>,
      },
    ],
  },
];

export default routes;
