import Layout from "../../ui/Layout/ui/Layout.tsx";
import { RouteObject } from "react-router";
import { AboutUsPage } from "../../../pages/AboutUs/ui";
import { DashBoardPage } from "../../../pages/Dashboard/ui";
import { FAQPage } from "../../../pages/FAQ/ui";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <DashBoardPage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "*",
        element: <span>Такой страницы нет</span>,
      },
    ],
  },
];

export default routes;
