import { Modal } from "antd";
import AddNFTForm from "../../../features/addNFTForm/addNFTForm.tsx";

const ModalForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  // const { addNFT } = useCreateNFT();
  // const [newNFT, setNewNFT] = useState<INFTPost>();
  const handleCancel = () => {
    console.log("handleCancel");
    setOpen(!open);
  };

  const handleOk = () => {
    // const handleOk = async (data: INFTPost) => {
    console.log("handleOk");
    // const res = await addNFT(data);
    // setNewNFT((prev: INFTPost) => [...prev, res.data]);

    // addNFT();
    setOpen(!open);
  };

  return (
    <Modal
      title="New NFT"
      open={open}
      onCancel={handleCancel}
      footer={null}
      onOk={handleOk}
    >
      <AddNFTForm handleOk={handleOk} />
    </Modal>
  );
};

export default ModalForm;
