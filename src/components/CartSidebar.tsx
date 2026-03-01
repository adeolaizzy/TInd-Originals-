import { Link } from "react-router-dom";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";

const CartSidebar = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-border animate-slide-in-right flex flex-col uppercase font-black">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
            Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={() => setIsOpen(false)} className="text-foreground hover:text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center mt-20">Your bag is empty</p>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                <div className="w-24 h-24 bg-card flex items-center justify-center flex-shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[10px] font-black tracking-wider uppercase text-foreground truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Size: {item.size}</p>
                  <p className="text-xs font-medium text-foreground mt-1">₦{item.product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} className="text-muted-foreground hover:text-foreground">
                      <Minus size={14} />
                    </button>
                    <span className="text-[10px] text-foreground">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} className="text-muted-foreground hover:text-foreground">
                      <Plus size={14} />
                    </button>
                    <button onClick={() => removeItem(item.product.id, item.size)} className="ml-auto text-[10px] text-muted-foreground hover:text-foreground underline underline-offset-4">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between text-xs font-semibold text-foreground">
              <span>Total</span>
              <span>₦{totalPrice.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 bg-foreground text-background text-[10px] text-center font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

