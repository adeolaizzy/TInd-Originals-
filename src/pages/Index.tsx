import { Link } from "react-router-dom";
import { useCart } from "@/lib/cart";
import CartSidebar from "@/components/CartSidebar";
import SideMenu from "@/components/SideMenu";
import Logo from "@/components/Logo";


const Index = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-10">
        <Logo className="w-32 md:w-44" />

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 text-sm md:text-base font-black tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          BAG
          <span className="flex items-center justify-center bg-white text-black rounded-full w-5 h-5 text-[10px] font-bold ml-1">
            {totalItems}
          </span>
        </button>
      </header>

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


