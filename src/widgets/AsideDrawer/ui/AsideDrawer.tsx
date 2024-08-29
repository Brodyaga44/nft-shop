import { Drawer } from "antd";
import Aside from "../../../features/Aside/ui/Aside.tsx";

const AsideDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title="Filters"
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
    >
      <Aside />
    </Drawer>
  );
};

export default AsideDrawer;
