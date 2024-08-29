import { useLocation, useNavigate } from "react-router";
import { MenuProps } from "antd";

const useHeaderItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const items: MenuProps["items"] = [
    {
      key: "/",
      label: "Dashboard",
      onClick: () => navigate("/"),
    },
    {
      key: "/about",
      label: "About Us",
      onClick: () => navigate("/about"),
    },
    {
      key: "/faq",
      label: "FAQ",
      onClick: () => navigate("/faq"),
    },
  ];
  return { pathname, items };
};

export default useHeaderItems;
