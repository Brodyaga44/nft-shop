import styles from "./cardlist.module.scss";
import NftPhoto from "../../../shared/assets/nftPhoto.png";
import { CardProps } from "../../../shared/config/interfaces/Card/CardProps.ts";

const CardList = ({ nft }: CardProps) => {
  return (
    <div className={styles.list__CardL}>
      <div className={styles.list__bodyL}>
        <div className={styles.list__PhotoContainerL}>
          <img src={NftPhoto} alt="" className={styles.list__PhotoL} />
        </div>
        <div className={styles.list__contentL}>
          <div className={styles.list__textL}>
            {/*<div className={styles.nft__titleL}>{nft.title}</div>*/}
            <div className={styles.list__textContainer}>
              <div className={styles.list__titleL}>{nft.name}</div>
              {/*<div className={styles.nft__AuthorL}> {nft.author}</div>*/}
              <div className={styles.list__AuthorL}> {nft.autor}</div>
            </div>
          </div>
          <div className={styles.list__descriprion}>
            <div className={styles.list__priceBlockL}>
              <div className={styles.list__priceContentL}>
                <div className={styles.list__priceTypeL}>
                  {/*{nft.priceType} <span>Price</span>*/}
                  {nft.typePrice}
                </div>
                <div className={styles.list__priceContainerL}>
                  <div className={styles.list__blurContainerL} />
                  <div className={styles.list__priceL}>
                    {nft.price} <span>ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
