import { Outlet } from "react-router"; 
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    );
  };
  
  export default MainLayout;
  
