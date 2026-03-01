import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/lib/cart";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Sustainability from "./pages/Sustainability";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";

import NotFound from "./pages/NotFound";


import { client } from "@/services/api/client";

const App = () => (
  <QueryClientProvider client={client}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);




export default App;
