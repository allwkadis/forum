import { Outlet } from "react-router";

import { Navbar } from "../../../../widgets/Navbar";
import { Sidebar } from "../../../../widgets/Sidebar";

import cls from "./Layout.module.css";
import { Container } from "../../Container";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className={cls["content-page"]}>
          <Sidebar />
          <div className={cls["page-wrapper"]}>
            <Container>
              <Outlet />
            </Container>
          </div>
        </div>
      </main>
    </div>
  );
};
