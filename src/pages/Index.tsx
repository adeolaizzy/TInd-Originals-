import { Link } from "react-router-dom";
import CartSidebar from "@/components/CartSidebar";
import SideMenu from "@/components/SideMenu";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-1000"
      >
        <source
          src="/TINO.mp4"
          type="video/mp4"
        />
      </video>


      {/* Overlay for better text legibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center Hero Button */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <Link
          to="/shop"
          className="group relative px-12 py-5 border-[6px] border-white rounded-[2rem] transition-all hover:bg-white hover:text-black"
        >
          <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-center">
            SHOP HERE
          </span>
        </Link>
      </div>

      <SideMenu />
      <CartSidebar />
    </div>
  );
};

export default Index;
