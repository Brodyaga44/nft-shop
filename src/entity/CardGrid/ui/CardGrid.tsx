import styles from "./cardgrid.module.scss";
import { CardProps } from "../../../shared/config/interfaces/Card/CardProps.ts";

const CardGrid = ({ nft }: CardProps) => {
  return (
    <div className={styles.grid__Card}>
      <div className={styles.grid__body}>
        <div className={styles.grid__cardTop}>
          <div className={styles.grid__PhotoContainer}>
            <img src={nft.image} alt="" className={styles.grid__Photo} />
          </div>
          <div className={styles.grid__Text}>
            {/*<div className={styles.nft__Title}>{nft.title}</div>*/}
            <div className={styles.grid__Title}>{nft.name}</div>
            {/*<div className={styles.nft__Author}>{nft.author}</div>*/}
            <div className={styles.grid__Author}>{nft.autor}</div>
          </div>
        </div>
        <div className={styles.grid__priceBlock}>
          <div className={styles.grid__priceType}>
            {/*{nft.priceType} <span>Price</span>*/}
            {nft.typePrice}
          </div>
          <div className={styles.grid__priceContainer}>
            <div className={styles.grid__blurContainer} />
            <div className={styles.grid__price}>
              {nft.price} <span>ETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
