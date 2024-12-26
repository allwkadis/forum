import { Outlet } from "react-router";

import { Footer } from "../../../../widgets/Footer";
import { Navbar } from "../../../../widgets/Navbar";
import { useTheme } from "../../../../app/providers/ThemeProvider";

export const Layout = () => {
  const { toogleTheme } = useTheme();

  return (
    <div>
      <Navbar />
      <main>
        <button onClick={toogleTheme}>toogle theme</button>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
