import styles from "./storecontent.module.scss";
import { INFTB } from "../../../shared/config/interfaces/INFTB.ts";
import CardGrid from "../../../entity/CardGrid/ui/CardGrid.tsx";
import CardList from "../../../entity/CardList/ui/CardList.tsx";

const StoreContent = ({ nfts, sort }: { nfts: INFTB[]; sort: string }) => {
  return (
    <div className={styles.store}>
      <div
        className={
          sort == "grid"
            ? styles.store__nftContainer
            : styles.store__nftContainerList
        }
      >
        <div
          className={
            sort == "grid" ? styles.store__nfts : styles.store__nftsList
          }
        >
          {/*{NFTS.map((nft) => {*/}
          {nfts.map((nft) => {
            if (nft.id !== 0) {
              return (
                <div key={nft.id} className={styles.store__nftItems}>
                  {sort === "grid" ? (
                    <CardGrid nft={nft} />
                  ) : (
                    <CardList nft={nft} />
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
