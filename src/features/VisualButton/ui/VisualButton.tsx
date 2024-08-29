import styles from "./visualbutton.module.scss";
import TopFilters from "../../TopFilters/TopFilters.tsx";
import SearchForm from "../../../widgets/SearchForm/ui/SearchForm.tsx";
import ListIcon from "../../../shared/assets/dashboard/listIcon.svg?react";
import GridIcon from "../../../shared/assets/dashboard/gridIcon.svg?react";
import { Dispatch, SetStateAction } from "react";

const VisualButton = ({
  sort,
  setSort,
}: {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}) => {
  const switchSort = () => {
    console.log(sort);
    setSort((cur: string) => (cur === "list" ? "grid" : "list"));
  };
  return (
    <div className={styles.visual__headBottom}>
      <TopFilters />
      <div className={styles.visual__sortContainer}>
        <div className={styles.visual__searchMobile}>
          <SearchForm />
        </div>
        <div className={styles.visual__sort} id={sort} onClick={switchSort}>
          <div
            className={
              sort === "grid"
                ? styles.visual__gridSelected
                : styles.visual__gridSort
            }
          >
            <div>
              <GridIcon
                className={
                  sort === "grid"
                    ? styles.visual__gridIselected
                    : styles.visual__gridIcon
                }
              />
            </div>
          </div>
          <div
            className={
              sort === "grid"
                ? styles.visual__listSort
                : styles.visual__listSelected
            }
          >
            <ListIcon
              className={
                sort == "grid"
                  ? styles.visual__listIcon
                  : styles.visual__listIselected
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualButton;
