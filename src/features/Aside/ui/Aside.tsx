import { Menu } from "antd";
import useAsideItems from "../module/useAsideItems.ts";

const Aside = () => {
  const items = useAsideItems();
  return (
    <Menu
      mode="inline"
      style={{ height: "100%", font: "500 16px $font" }}
      items={items}
    />
  );
};

export default Aside;
