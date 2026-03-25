import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { useLocation } from "react-router-dom";

interface PageLoaderProps {
  children: React.ReactNode;
}

const PageLoader = ({ children }: PageLoaderProps) => {
  const { isLoading: contextLoading, imagesToLoad, imagesLoaded, isVideoLoaded } = useLoading();
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isShopPage) {
      setIsLoading(true);
      setFadeOut(false);
      
      const maxTimeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 1000);
      
      return () => clearTimeout(maxTimeout);
    } else if (isHomePage) {
      const timeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 5000); // 5s fallback for video
      return () => clearTimeout(timeout);
    } else {
      const handleLoad = () => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      };

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        const timeout = setTimeout(handleLoad, 2000);
        return () => {
          window.removeEventListener("load", handleLoad);
          clearTimeout(timeout);
        };
      }
    }
  }, [isShopPage, isHomePage, location.pathname]);

  useEffect(() => {
    if (isShopPage && !contextLoading && imagesToLoad > 0 && imagesLoaded >= imagesToLoad) {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [isShopPage, contextLoading, imagesToLoad, imagesLoaded]);

  useEffect(() => {
    if (isHomePage && isVideoLoaded) {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [isHomePage, isVideoLoaded]);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="animate-pulse">
          <img
            src="/logo.png"
            alt="TIND ORIGINALS"
            className="h-24 w-auto object-contain animate-fade-in-out"
          />
        </div>
      </div>
      <div className="opacity-0">{children}</div>
    </>
  );
};

export default PageLoader;
