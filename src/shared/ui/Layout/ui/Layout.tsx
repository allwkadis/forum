import { Outlet } from "react-router";

import { Footer } from "../../../../widgets/Footer";
import { Navbar } from "../../../../widgets/Navbar";
import { Sidebar } from "../../../../widgets/Sidebar";

import cls from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className={cls["content-page"]}>
          <Sidebar />
          <div className={cls["page-wrapper"]}>
            <Outlet />
          </div>
        </div>
      </main>
      
    </div>
  );
};
