import { MenuProps } from "antd";

const menuItemsList = [
  "Status",
  "Price",
  "Collections",
  "Chains",
  "Categories",
  "Sale",
];

const useAsideItems = () => {
  const items: MenuProps["items"] = menuItemsList.map((key, index) => {
    return {
      key,
      label: ` ${key}`,
      onClick: () => console.log("onclick"),
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
  return items;
};

export default useAsideItems;
