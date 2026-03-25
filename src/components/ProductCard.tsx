import { Link } from "react-router-dom";
import type { Product } from "@/lib/products";
import { useImageLoadHandler } from "./ShopImageLoader";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleImageLoad = useImageLoadHandler();

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col items-center p-6 pt-10 pb-10 transition-all duration-300 hover:bg-card"
    >
      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden mb-6">
        <img
          src={product.image}
          alt={product.name}
          onLoad={handleImageLoad}
          className="w-[75%] h-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground text-center mb-3">
        {product.name}
      </h3>
      <p className="text-sm font-medium text-foreground mb-1">
        ₦{product.price.toFixed(2)}
      </p>
      <p className="text-xs text-muted-foreground">
        £{(product.price / 2000).toFixed(2)}
      </p>
    </Link>
  );
};

export default ProductCard;
