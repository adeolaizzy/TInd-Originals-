import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { totalItems, setIsOpen: setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "PRODUCTS", path: "/shop" },
    { label: "SIGN UP", path: "/signup" },
    { label: "SIZE GUIDE", path: "#" },
    { label: "SUSTAINABILITY", path: "/sustainability" },
    { label: "FOUNDATION", path: "#" },
    { label: "TERMS", path: "#" },
    { label: "PRIVACY POLICY", path: "/privacy" },
    { label: "COOKIE POLICY", path: "#" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[110] flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${isScrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
          }`}
      >
        <Logo className="w-24 md:w-36" />

        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1 text-[10px] md:text-xs font-black tracking-widest uppercase text-white hover:opacity-70 transition-opacity"
          >
            BAG
            <span className="flex items-center justify-center bg-white text-black rounded-full w-4 h-4 md:w-5 md:h-5 text-[8px] md:text-[10px] font-bold ml-1">
              {totalItems}
            </span>
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden text-white hover:opacity-70 transition-opacity p-2"
            aria-label="Open Menu"
          >
            <Menu size={28} color="white" strokeWidth={3} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[120] bg-black/95 transition-all duration-500 overflow-y-auto ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col min-h-screen p-8 pt-24">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white hover:opacity-70 transition-opacity"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col gap-6 mt-10">
            {menuItems.map((item) => (
              item.path !== "#" ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-black tracking-wider uppercase transition-all ${location.pathname === item.path ? "text-white/40" : "text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className="text-2xl text-left font-black tracking-wider uppercase text-white hover:opacity-70 transition-all"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
