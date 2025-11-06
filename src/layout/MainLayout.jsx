import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar /> {/* Fixed sidebar */}

      {/* Main content pushed to the right */}
      <main className="ml-[260px] p-6">
        <Outlet />
      </main>

      <Footer /> {/* Optional, stays below */}
    </div>
  );
}

export default MainLayout;
