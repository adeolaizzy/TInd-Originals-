import { Link } from "react-router-dom";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col items-center p-6 pt-10 pb-10 transition-all duration-300 hover:bg-card"
    >
      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-[75%] h-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground text-center mb-3">
        {product.name}
      </h3>
      <p className="text-sm font-medium text-foreground">
        ₦{product.price.toFixed(2)}
      </p>
    </Link>
  );
};

export default ProductCard;
