import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-white font-poppins">
      <Header />
      
      {/* el main crece para empujar el footer */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
