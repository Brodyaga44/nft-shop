import {
  InfoCircleOutlined,
  MoreOutlined,
  QuestionCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footer__iconsItems}>
          <div className={styles.footer__iconsItem}>
            <div className={styles.footer__icon}>
              <ShoppingOutlined />
            </div>
          </div>
          <div className={styles.footer__iconsItem}>
            <div className={styles.footer__icon}>
              <InfoCircleOutlined />
            </div>
          </div>
          <div className={styles.footer__iconsItem}>
            <div className={styles.footer__icon}>
              <QuestionCircleOutlined />
            </div>
          </div>
          <div className={styles.footer__iconsItem}>
            <div className={styles.footer__icon}>
              <MoreOutlined />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
