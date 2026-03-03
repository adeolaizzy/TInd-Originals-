import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import SideMenu from "@/components/SideMenu";
import CartSidebar from "@/components/CartSidebar";
import Navbar from "@/components/Navbar";
import { useSubscribeToNewsletter } from "@/services/newsletter.service";
import { toast } from "@/components/ui/sonner";

const Signup = () => {
    const [email, setEmail] = useState("");

    const { mutate: subscribe, isPending } = useSubscribeToNewsletter({
        onSuccess: (data: any) => {
            toast.success(data?.message || "Subscribed successfully!");
            setEmail("");
        },
        onError: (error: any) => {
            // Error handled globally in handleResponseError.ts
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            toast.error("Please enter your email");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            toast.error("Please enter a valid email address");
            return;
        }

        subscribe({ email: trimmedEmail });
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-black">
            <Navbar />

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-in fade-in duration-1000">
                <div className="max-w-[1200px] w-full space-y-12 md:space-y-16">
                    <div className="space-y-6 md:space-y-8">
                        <h1 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.8] tracking-widest">
                            SIGN UP FOR UPDATES
                        </h1>
                        <h2 className="text-xl md:text-3xl font-bold uppercase tracking-[0.4em] text-white/90">
                            BE THE FIRST TO KNOW
                        </h2>
                    </div>

                    <div className="space-y-8 max-w-3xl mx-auto">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50 leading-relaxed px-4 max-w-xl mx-auto">
                            BY SUBSCRIBING, YOU AGREE TO RECEIVE EMAILS FROM TIND ORIGINALS. YOU CAN UNSUBSCRIBE AT ANY TIME. SEE OUR <Link to="/privacy" className="underline underline-offset-4 hover:text-white transition-colors">PRIVACY POLICY</Link> FOR DETAILS.
                        </p>

                        <form onSubmit={handleSubmit} className="relative w-full pt-16 max-w-2xl mx-auto group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ENTER YOUR EMAIL"
                                disabled={isPending}
                                className="w-full bg-transparent border-b border-white/20 py-8 px-4 text-sm md:text-xl font-bold uppercase tracking-[0.3em] placeholder:text-white/10 focus:outline-none focus:border-white transition-all text-center disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isPending}
                                className="absolute right-0 top-1/2 translate-y-6 md:translate-y-8 hover:translate-x-3 transition-transform disabled:opacity-50 disabled:hover:translate-x-0"
                            >
                                {isPending ? (
                                    <Loader2 className="animate-spin text-white" size={24} />
                                ) : (
                                    <ArrowRight size={28} className="text-white/60 group-focus-within:text-white transition-colors" />
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* Side Menu */}
            <SideMenu />

            <CartSidebar />
        </div>
    );
};

export default Signup;
