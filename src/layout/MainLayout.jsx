import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
     <header>
      <nav>
          <Navbar /> 
      </nav>
     </header>

      <main className="ml-[260px] pl-60">
        <Outlet  />
      </main>

      <Footer /> 
    </div>
  );
}

export default MainLayout;
