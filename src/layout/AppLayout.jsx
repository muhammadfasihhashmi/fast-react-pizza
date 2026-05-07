import { Outlet } from "react-router-dom";
import CartOverview from "../features/Cart/CartOverview";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
