import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import SideMenu from "@/components/SideMenu";
import { ArrowLeft } from "lucide-react";


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Product not found</p>
      </div>
    );
  }

  const handleAddToBag = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />
      <SideMenu />


      <main className="pt-24 px-6 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft size={16} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-card flex items-center justify-center aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-[70%] h-[70%] object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-foreground mb-8">
              £{product.price.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-3">Size</p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-xs font-semibold tracking-wider transition-colors ${selectedSize === size
                      ? "bg-foreground text-background"
                      : "border border-border text-foreground hover:bg-card"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToBag}
              disabled={!selectedSize}
              className="w-full py-4 bg-foreground text-background text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {selectedSize ? "Add to Bag" : "Select a Size"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
