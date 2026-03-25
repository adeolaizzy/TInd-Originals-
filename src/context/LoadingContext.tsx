import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  imagesToLoad: number;
  setImagesToLoad: (count: number) => void;
  imagesLoaded: number;
  incrementImagesLoaded: () => void;
  resetImageCount: () => void;
  isVideoLoaded: boolean;
  setIsVideoLoaded: (loaded: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesToLoad, setImagesToLoad] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const incrementImagesLoaded = useCallback(() => {
    setImagesLoaded((prev) => prev + 1);
  }, []);

  const resetImageCount = useCallback(() => {
    setImagesToLoad(0);
    setImagesLoaded(0);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        imagesToLoad,
        setImagesToLoad,
        imagesLoaded,
        incrementImagesLoaded,
        resetImageCount,
        isVideoLoaded,
        setIsVideoLoaded,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
