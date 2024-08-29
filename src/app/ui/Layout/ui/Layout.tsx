import styles from "./layout.module.scss";
import { Layout as LayoutAntd, theme } from "antd";
import { Outlet, useLocation } from "react-router";
import { clsx } from "clsx";
import Header from "../../../../widgets/Header/ui/Header.tsx";
import Footer from "../../../../widgets/Footer/ui/Footer.tsx";
import Aside from "../../../../features/Aside/ui/Aside.tsx";

const { Content, Sider } = LayoutAntd;

const withBgPages = ["/", "/about", "/"];

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <main
      id="main"
      className={clsx(styles.root, {
        [styles.rootBg]: withBgPages.includes(pathname),
      })}
    >
      <LayoutAntd>
        <Header />
        <Content className={styles.main__content}>
          <LayoutAntd className={styles.main__layout}>
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Aside />
            </Sider>
            <Content>
              <Outlet />
            </Content>
          </LayoutAntd>
        </Content>
      </LayoutAntd>
      <Footer />
    </main>
  );
};

export default Layout;
