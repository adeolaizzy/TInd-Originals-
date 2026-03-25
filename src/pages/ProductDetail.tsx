import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import SideMenu from "@/components/SideMenu";
import { ArrowLeft, ChevronUp, ChevronDown } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Product not found</p>
      </div>
    );
  }

  const images = product.images ?? [product.image];

  const handleAddToBag = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
  };

  const scrollUp = () => setActiveIndex((i) => Math.max(0, i - 1));
  const scrollDown = () => setActiveIndex((i) => Math.min(images.length - 1, i + 1));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />
      <SideMenu />

      <main className="pt-32 md:pt-40 px-6 pb-16">
        <Link
          to="/shop"
          className="relative z-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* ── Image section: thumbnail strip + main image ── */}
          <div className="flex gap-4">
            {/* Vertical thumbnail strip */}
            <div className="flex flex-col items-center gap-2 relative">
              {/* Scroll-up arrow */}
              <button
                onClick={scrollUp}
                disabled={activeIndex === 0}
                aria-label="Previous image"
                className="p-1 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-20"
              >
                <ChevronUp size={20} />
              </button>

              {/* Scrollable thumbnails */}
              <div
                className="flex flex-col gap-2 overflow-y-auto scrollbar-hide"
                style={{ maxHeight: "440px" }}
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View image ${idx + 1}`}
                    className={`w-16 h-16 flex-shrink-0 border-2 transition-all duration-200 overflow-hidden
                      ${activeIndex === idx
                        ? "border-foreground scale-105"
                        : "border-transparent opacity-60 hover:opacity-100 hover:border-border"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-contain bg-card"
                    />
                  </button>
                ))}
              </div>

              {/* Scroll-down arrow */}
              <button
                onClick={scrollDown}
                disabled={activeIndex === images.length - 1}
                aria-label="Next image"
                className="p-1 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-20"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Main image */}
            <div className="flex-1 bg-card flex items-center justify-center aspect-square overflow-hidden">
              <img
                key={activeIndex}
                src={images[activeIndex]}
                alt={product.name}
                className="w-[80%] h-[80%] object-contain transition-opacity duration-300 animate-fadeIn"
              />
            </div>
          </div>

          {/* ── Product info ── */}
          <div className="flex flex-col justify-center">
            <h1 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-foreground mb-2">
              ₦{product.price.toFixed(2)}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              £{(product.price / 2000).toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-3">
                Size
              </p>
              <div className="flex gap-2 flex-wrap">
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
