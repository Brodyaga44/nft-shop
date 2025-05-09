import styles from "../../../pages/Dashboard/ui/dashboard.module.scss";
import { Pagination } from "antd";
import { IPag } from "../../../shared/config/interfaces/IPag.ts";

const PaginationModule = ({
  pags,
  changePage,
}: {
  pags: IPag;
  changePage: (e: number) => void;
}) => {
  return (
    <div className={styles.db__pagContainer}>
      <div className={styles.db__pagination}>
        <div className={styles.db__paginationFilter}>
          <span>Results 1 - {pags.total_items}</span>
          <div>
            <div className={styles.db__totalItems}>
              {" "}
              out of {pags.total_items}
            </div>
          </div>
        </div>
        <div>
          <Pagination
            align="end"
            defaultCurrent={1}
            pageSize={8}
            total={pags.total_items}
            onChange={(page) => {
              changePage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationModule;
