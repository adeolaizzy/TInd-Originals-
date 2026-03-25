import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import type { Product } from "@/lib/products";

interface ShopImageLoaderProps {
  children: ReactNode;
  products: Product[];
}

import { type ReactNode } from "react";

export const ShopImageLoader = ({ children, products }: ShopImageLoaderProps) => {
  const { setImagesToLoad, incrementImagesLoaded, imagesToLoad, imagesLoaded, setIsLoading, resetImageCount } = useLoading();
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  useEffect(() => {
    resetImageCount();
    const imageCount = products.length;
    setImagesToLoad(imageCount);
    setIsLoading(true);
    setHasStartedLoading(true);
  }, [products, setImagesToLoad, setIsLoading, resetImageCount]);

  useEffect(() => {
    if (hasStartedLoading && imagesToLoad > 0 && imagesLoaded >= imagesToLoad) {
      setIsLoading(false);
    }
  }, [imagesLoaded, imagesToLoad, hasStartedLoading, setIsLoading]);

  return <>{children}</>;
};

export const useImageLoadHandler = () => {
  const { incrementImagesLoaded } = useLoading();
  return incrementImagesLoaded;
};
