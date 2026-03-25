import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/lib/cart";
import { LoadingProvider } from "@/context/LoadingContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Sustainability from "./pages/Sustainability";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import { useCart } from "@/lib/cart";
import NewsletterPopup from "@/components/NewsletterPopup";

import NotFound from "./pages/NotFound";


import { client } from "@/services/api/client";

import PageLoader from "./components/PageLoader";

const GlobalModals = () => {
  const { isNewsletterOpen, setIsNewsletterOpen } = useCart();
  return <NewsletterPopup open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen} />;
};

const App = () => (
  <LoadingProvider>
    <QueryClientProvider client={client}>
      <TooltipProvider>
        <CartProvider>
          <GlobalModals />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <PageLoader>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageLoader>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </LoadingProvider>
);




export default App;
