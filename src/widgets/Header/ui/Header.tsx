import styles from "./header.module.scss";
import { Menu } from "antd";
import SearchForm from "../../../shared/SearchForm/ui/SearchForm.tsx";
import Logo from "../../../shared/assets/icons/Logo.svg?react";
import Mail from "../../../shared/assets/icons/mail.svg?react";
import Note from "../../../shared/assets/icons/note.svg?react";
import Pay from "../../../shared/assets/icons/pay.svg?react";
import Photo from "../../../shared/assets/icons/DefaultPhoto.svg?react";
import { useTheme } from "../../../shared/hooks/useTheme/useTheme.ts";
import useHeaderItems from "../model/useHeaderItems.ts";

const Header = () => {
  const { currTheme, setTheme } = useTheme();
  const { pathname, items } = useHeaderItems();
  const handleTheme = () => {
    if (currTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__leftPart}>
        <div>
          <Logo className={styles.header__logo}></Logo>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Dashboard"]}
          items={items}
          selectedKeys={[pathname]}
          className={styles.header__menu}
        />
      </div>

      <div className={styles.header__rightPart}>
        <div className={styles.header__searchbar}>
          <SearchForm />
        </div>
        <div className={styles.header__iconsContainer}>
          <div className={styles.header__iconsItems}>
            <div className={styles.header__iconsItem}>
              <Mail className={styles.header__icon} />
            </div>
            <div className={styles.header__iconsItem} onClick={handleTheme}>
              <Note className={styles.header__icon} />
            </div>
            <div className={styles.header__iconsItem}>
              <Pay className={styles.header__icon} />
            </div>
          </div>
        </div>
        <div className={styles.header__profileContainer}>
          <div className={styles.header__profilePhoto}>
            <Photo />
          </div>
          <div className={styles.header__profileName}>Habib Nurmagomedov</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
