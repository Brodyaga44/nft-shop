import styles from './dashboard.module.scss';
import { Button, FloatButton } from 'antd';
import { useEffect, useState } from 'react';
import ModalForm from '../../../widgets/ModalForm/ui/ModalForm.tsx';
import { FilterOutlined } from '@ant-design/icons';
import AsideDrawer from '../../../widgets/AsideDrawer/ui/AsideDrawer.tsx';
import useGetNfts from '../model/useGetNfts.ts';
import VisualButton from '../../../features/VisualButton/ui/VisualButton.tsx';
import PaginationModule from '../../../features/PaginationModule/ui/PaginationModule.tsx';
import StoreContent from '../../../features/StoreContent/ui/StoreContent.tsx';

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { nfts, pags, changePage, getNFTS } = useGetNfts();
  const [sort, setSort] = useState('grid');
  console.log(nfts, pags);

  useEffect(() => {
    // эта часть была в useGetNfts
    getNFTS();
    console.log('kek');
  }, [pags.current_page]);

  return (
    <div className={styles.db__body}>
      <div className={styles.db__content}>
        <div className={styles.db__headContainer}>
          <div className={styles.db__headTop}>
            <div className={styles.db__title}>Cryptographics</div>
            <Button
              type="primary"
              onClick={() => setOpen(true)}
              className={styles.db__Btn}
            >
              <span className={styles.db__btnText}>Create New Item</span>
            </Button>
            <ModalForm open={open} setOpen={setOpen} />
          </div>
          <VisualButton sort={sort} setSort={setSort} />
        </div>
        <StoreContent nfts={nfts} sort={sort} />
        <PaginationModule pags={pags} changePage={changePage} />
      </div>
      <FloatButton
        icon={<FilterOutlined />}
        type="primary"
        style={{ insetInlineEnd: 24 }}
        onClick={() => setOpenDrawer(true)}
        className={styles.db__filtersButton}
      />
      <AsideDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
};

export default Dashboard;
