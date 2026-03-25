import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to subscribe the user
    console.log("Subscribing email:", email);
    localStorage.setItem("newsletter_subscribed", "true");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] border-none bg-[#1A1A1A] p-0 overflow-hidden rounded-[2rem] shadow-2xl">
        <div className="relative p-10 md:p-14 text-center">
          <button 
            onClick={() => onOpenChange(false)}
            className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <DialogHeader className="space-y-4 mb-8">
            <DialogTitle className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              SIGN UP FOR UPDATES
            </DialogTitle>
            <DialogDescription className="text-xs md:text-sm font-black tracking-[0.35em] text-white/90 uppercase">
              BE THE FIRST TO KNOW
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="relative mb-10">
            <div className="relative group">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b-2 border-white/20 py-4 pr-12 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors font-bold tracking-[0.2em] text-[10px]"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <p className="text-[10px] md:text-[11px] leading-relaxed text-white/60 font-medium uppercase tracking-wider">
              BY SUBSCRIBING, YOU AGREE TO RECEIVE EMAILS FROM BROKEN PLANET. YOU CAN UNSUBSCRIBE AT ANY TIME. SEE OUR{" "}
              <a href="/privacy-policy" className="underline underline-offset-4 hover:text-white transition-colors">
                PRIVACY POLICY
              </a>{" "}
              FOR DETAILS.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
