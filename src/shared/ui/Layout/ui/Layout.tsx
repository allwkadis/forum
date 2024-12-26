import { Outlet } from "react-router";

import { Footer } from "../../../../widgets/Footer";
import { Navbar } from "../../../../widgets/Navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
