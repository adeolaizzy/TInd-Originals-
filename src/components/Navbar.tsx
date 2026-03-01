import { useCart } from "@/lib/cart";
import Logo from "./Logo";


const Navbar = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-10 bg-transparent">
      <Logo className="w-28 md:w-36" />

      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 text-sm font-black tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
      >
        BAG
        <span className="flex items-center justify-center bg-foreground text-background rounded-full w-5 h-5 text-[10px] font-bold ml-1">
          {totalItems}
        </span>
      </button>
    </nav>

  );
};

export default Navbar;
