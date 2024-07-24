import { INFT } from "../../components/NFTS/interfaces/INFT.ts";
import styles from "../NFTcard/NFTcard.module.scss";
import NftPhoto from "../../assets/nftPhoto.png";

type NFTprops = { nft: INFT; sort: string };
const NFTcard = ({ nft, sort }: NFTprops) => {
  if (sort === "grid") {
    return (
      <div className={styles.nft__Card}>
        <div className={styles.nft__body}>
          <div className={styles.nft__cardTop}>
            <div className={styles.nft__PhotoContainer}>
              <img src={NftPhoto} alt="" className={styles.nft__Photo} />
            </div>
            <div className={styles.nft__Text}>
              <div className={styles.nft__Title}>{nft.title}</div>
              <div className={styles.nft__Author}>{nft.author}</div>
            </div>
          </div>
          <div className={styles.nft__priceBlock}>
            <div className={styles.nft__priceType}>
              {nft.priceType} <span>Price</span>
            </div>
            <div className={styles.nft__priceContainer}>
              <div className={styles.nft__blurContainer} />
              <div className={styles.nft__price}>
                {nft.price} <span>ETH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.nft__CardL}>
      <div className={styles.nft__bodyL}>
        <div className={styles.nft__contentL}>
          <img src={NftPhoto} alt="" className={styles.nft__PhotoL} />
          <div className={styles.nft__textL}>
            <div className={styles.nft__titleL}>{nft.title}</div>
            <div className={styles.nft__AuthorL}> {nft.author}</div>
          </div>
        </div>
        <div className={styles.nft__priceBlockL}>
          <div className={styles.nft__priceContentL}>
            <div className={styles.nft__priceTypeL}>
              {nft.priceType} <span>Price</span>
            </div>
            <div className={styles.nft__priceContainerL}>
              <div className={styles.nft__blurContainerL} />
              <div className={styles.nft__priceL}>
                {nft.price} <span>ETH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTcard;
