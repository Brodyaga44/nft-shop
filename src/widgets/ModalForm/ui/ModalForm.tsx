import { Modal } from 'antd';
import AddNFTForm from '../../../features/AddNFTForm/AddNFTForm.tsx';

const ModalForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  const onClose = () => {
    console.log('onClose');
    setOpen(!open);
  };

  return (
    <Modal
      title="New NFT"
      open={open}
      onCancel={onClose}
      footer={null}
      onOk={onClose}
    >
      <AddNFTForm onClose={onClose} />
    </Modal>
  );
};

export default ModalForm;
