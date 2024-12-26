import { Outlet } from "react-router";

import { Header } from "../../../../widget/Header";
import { Footer } from "../../../../widget/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
