import styles from './storecontent.module.scss';
import { INFTB } from '../../../shared/config/interfaces/INFTB.ts';
import CardGrid from '../../../entity/CardGrid/ui/CardGrid.tsx';
import CardList from '../../../entity/CardList/ui/CardList.tsx';
import useQuerry from '../../../shared/hooks/useQuery/useQuery.ts';
import { getNfts } from '../../../shared/api/apijson.ts';
import { useEffect } from 'react';

const StoreContent = ({ sort }: { nfts?: INFTB[]; sort: string }) => {
  //тут было возле sort nfts, чтобы рабоать с реальным беком
  const {
    data: NFT = [],
    isLoading,
    error,
    runQuery,
  } = useQuerry<INFTB[]>(getNfts);
  useEffect(() => {
    runQuery();
  }, []);
  return (
    <div className={styles.store}>
      <div
        className={
          sort == 'grid'
            ? styles.store__nftContainer
            : styles.store__nftContainerList
        }
      >
        <div
          className={
            sort == 'grid' ? styles.store__nfts : styles.store__nftsList
          }
        >
          {isLoading && <div>loading</div>}
          {error && <div>{error}</div>}
          {/*{NFTS.map((nft) => {*/}
          {NFT &&
            NFT.map(nft => {
              //NFTS => nfts
              if (nft.id !== 0) {
                return (
                  <div key={nft.id} className={styles.store__nftItems}>
                    {sort === 'grid' ? (
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
