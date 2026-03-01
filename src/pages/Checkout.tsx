import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { ChevronRight, HelpCircle, Search, ChevronLeft, CreditCard } from "lucide-react";

type CheckoutStep = "information" | "shipping" | "payment" | "review";

const Checkout = () => {
    const { items, totalPrice } = useCart();
    const [step, setStep] = useState<CheckoutStep>("information");
    const [formData, setFormData] = useState({
        email: "adeolaaddison@gmail.com",
        firstName: "adeola",
        lastName: "daniel",
        address: "21 alhaji salisu street Obanikoro Lagos",
        apartment: "21 alhaji salisu street obanikoro Lagos",
        city: "lagos LA",
        postcode: "100232",
        country: "Nigeria",
        phone: "09052027107",
        shippingMethod: "Standard Tracked",
        shippingPrice: 25300.00,
        paymentMethod: "ending with 0130"
    });

    const SummaryCard = () => (
        <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5 text-[11px] md:text-xs">
            <div className="p-4 grid grid-cols-[80px_1fr_50px] gap-4 items-start border-b border-white/5">
                <span className="text-white/40 font-bold uppercase">Contact</span>
                <span className="text-white truncate">{formData.email}</span>
                <button onClick={() => setStep("information")} className="text-white/60 underline hover:text-white transition-colors text-right">Change</button>
            </div>
            <div className={`p-4 grid grid-cols-[80px_1fr_50px] gap-4 items-start ${(step === "payment" || step === "review") ? "border-b border-white/5" : ""}`}>
                <span className="text-white/40 font-bold uppercase">Ship to</span>
                <span className="text-white leading-relaxed">
                    {formData.firstName} {formData.lastName}<br />
                    {formData.address}, {formData.apartment}<br />
                    {formData.postcode} {formData.city}<br />
                    {formData.country}
                </span>
                <button onClick={() => setStep("information")} className="text-white/60 underline hover:text-white transition-colors text-right">Change</button>
            </div>
            {(step === "payment" || step === "review") && (
                <div className={`p-4 grid grid-cols-[80px_1fr_50px] gap-4 items-start ${step === "review" ? "border-b border-white/5" : ""}`}>
                    <span className="text-white/40 font-bold uppercase">Method</span>
                    <span className="text-white">{formData.shippingMethod} · £{formData.shippingPrice.toLocaleString()}</span>
                    {(step === "payment") && <button onClick={() => setStep("shipping")} className="text-white/60 underline hover:text-white transition-colors text-right">Change</button>}
                </div>
            )}
            {step === "review" && (
                <div className="p-4 grid grid-cols-[80px_1fr_50px] gap-4 items-start">
                    <span className="text-white/40 font-bold uppercase">Payment</span>
                    <div className="flex items-center gap-2">
                        <span className="text-white">{formData.paymentMethod}</span>
                        <div className="flex gap-1">
                            <div className="w-5 h-3 bg-[#EB001B] rounded-[1px]" />
                            <div className="w-5 h-3 bg-[#F79E1B] rounded-[1px]" />
                        </div>
                    </div>
                    <button onClick={() => setStep("payment")} className="text-white/60 underline hover:text-white transition-colors text-right">Change</button>
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row min-h-screen">

                {/* Left Side: Checkout Flow */}
                <div className="flex-1 p-6 md:p-12 lg:pr-20 border-r border-white/5">
                    <header className="mb-8">
                        <Logo className="w-32 mb-6" />

                        <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-tight uppercase">
                            <button onClick={() => setStep("information")} className={`${step === "information" ? "text-white" : "text-white/50"} hover:text-white transition-colors`}>Information</button>
                            <ChevronRight size={10} className="text-white/30" />
                            <button onClick={() => setStep("shipping")} className={`${step === "shipping" ? "text-white" : "text-white/50"} hover:text-white transition-colors`}>Shipping</button>
                            <ChevronRight size={10} className="text-white/30" />
                            <button onClick={() => setStep("payment")} className={`${step === "payment" ? "text-white" : "text-white/50"} hover:text-white transition-colors`}>Payment</button>
                            <ChevronRight size={10} className="text-white/30" />
                            <span className={step === "review" ? "text-white" : "text-white/50"}>Review</span>
                        </nav>
                    </header>

                    <main className="space-y-8">
                        {step === "information" && (
                            <>
                                <section className="mb-10">
                                    <p className="text-center text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">Express checkout</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="bg-[#5a31f4] hover:bg-[#4824d6] transition-all h-12 rounded flex items-center justify-center font-black italic text-lg tracking-tighter">
                                            shop<span className="opacity-70 ml-1 font-black">pay</span>
                                        </button>
                                        <button className="bg-black border border-white/10 hover:bg-white/5 transition-all h-12 rounded flex items-center justify-center">
                                            <span className="flex items-center gap-1 font-black uppercase text-xs tracking-widest">
                                                <span className="text-white text-base">G</span> Pay
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative mt-8 text-center">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-white/10"></div>
                                        </div>
                                        <span className="relative px-4 bg-[#0a0a0a] text-[10px] uppercase tracking-widest text-white/40 font-bold font-black">OR</span>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <h2 className="text-lg md:text-xl font-black uppercase tracking-tight">Contact</h2>
                                        {/* <Link to="/login" className="text-xs text-white/60 underline hover:text-white transition-colors font-bold uppercase">Log in</Link> */}
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        defaultValue={formData.email}
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                                    />
                                    <div className="mt-3 flex items-center gap-2">
                                        <input type="checkbox" id="newsletter" className="w-4 h-4 bg-white/5 border-white/10 rounded cursor-pointer" />
                                        <label htmlFor="newsletter" className="text-xs text-white/60 font-bold uppercase cursor-pointer">Email me with news and offers</label>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-lg md:text-xl font-black uppercase tracking-tight">Shipping address</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-[10px] uppercase text-white/40 mb-1 ml-1 font-bold">Country/Region</label>
                                            <select className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors appearance-none font-bold uppercase">
                                                <option value="UK">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="NG">Nigeria</option>
                                            </select>
                                        </div>
                                        <input type="text" placeholder="First name" defaultValue={formData.firstName} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                        <input type="text" placeholder="Last name" defaultValue={formData.lastName} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                        <div className="md:col-span-2 relative">
                                            <input type="text" placeholder="Address" defaultValue={formData.address} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors pr-10" />
                                            <Search className="absolute right-3 top-3.5 text-white/40" size={16} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <input type="text" placeholder="Apartment, suite, etc. (optional)" defaultValue={formData.apartment} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                        </div>
                                        <input type="text" placeholder="City" defaultValue={formData.city} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                        <input type="text" placeholder="Postcode" defaultValue={formData.postcode} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                        <div className="md:col-span-2 relative">
                                            <input type="text" placeholder="Phone" defaultValue={formData.phone} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors pr-10" />
                                            <HelpCircle className="absolute right-3 top-3.5 text-white/40" size={16} />
                                        </div>
                                    </div>
                                </section>

                                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <Link to="/shop" className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase">
                                        <ChevronLeft size={14} /> Return to shop
                                    </Link>
                                    <button onClick={() => setStep("shipping")} className="w-full md:w-auto bg-[#6e5d50] hover:bg-[#5a4a3e] text-white px-10 py-5 rounded-md text-xs font-black uppercase tracking-widest transition-all">
                                        Continue to shipping
                                    </button>
                                </div>
                            </>
                        )}

                        {step === "shipping" && (
                            <>
                                <SummaryCard />
                                <section className="space-y-4">
                                    <h2 className="text-lg md:text-xl font-black uppercase tracking-tight">Shipping method</h2>
                                    <div className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                                        <div className="p-4 flex justify-between items-center group cursor-pointer hover:bg-white/[0.02] transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center p-[2px]">
                                                    <div className="w-full h-full bg-white rounded-full" />
                                                </div>
                                                <span className="text-xs font-bold uppercase">Standard Tracked</span>
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-widest">FREE</span>
                                        </div>
                                    </div>
                                </section>

                                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <button onClick={() => setStep("information")} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase">
                                        <ChevronLeft size={14} /> Return to information
                                    </button>
                                    <button onClick={() => setStep("payment")} className="w-full md:w-auto bg-[#6e5d50] hover:bg-[#5a4a3e] text-white px-10 py-5 rounded-md text-xs font-black uppercase tracking-widest transition-all">
                                        Continue to payment
                                    </button>
                                </div>
                            </>
                        )}

                        {step === "payment" && (
                            <>
                                <SummaryCard />
                                <section className="space-y-4">
                                    <div className="flex flex-col">
                                        <h2 className="text-lg md:text-xl font-black uppercase tracking-tight">Payment</h2>
                                        <p className="text-[10px] text-white/40 font-bold uppercase">All transactions are secure and encrypted.</p>
                                    </div>

                                    <div className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                                        <div className="p-4 flex justify-between items-center border-b border-white/10 bg-white/[0.03]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center p-[2px]">
                                                    <div className="w-full h-full bg-white rounded-full" />
                                                </div>
                                                <span className="text-xs font-bold uppercase">Credit card</span>
                                            </div>
                                            <div className="flex gap-1 opacity-60 grayscale hover:grayscale-0 transition-all">
                                                <div className="bg-white/80 p-[2px] rounded-sm">
                                                    <div className="w-5 h-3 bg-[#1A1F71] rounded-[1px]" />
                                                </div>
                                                <div className="bg-white/80 p-[2px] rounded-sm">
                                                    <div className="w-5 h-3 bg-[#EB001B] rounded-[1px]" />
                                                </div>
                                                <div className="bg-white/80 p-[2px] rounded-sm">
                                                    <div className="w-5 h-3 bg-[#0070BA] rounded-[1px]" />
                                                </div>
                                                <span className="text-[8px] font-black text-white/40 ml-1">+5</span>
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-4 bg-white/[0.01]">
                                            <div className="relative">
                                                <input type="text" placeholder="Card number" className="w-full bg-white/5 border border-white/10 rounded-t-md px-4 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                                <CreditCard className="absolute right-3 top-4.5 text-white/40" size={16} />
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <input type="text" placeholder="Expiration date (MM / YY)" className="w-full bg-white/5 border border-white/10 border-t-0 border-r-0 rounded-bl-md px-4 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                                <div className="relative">
                                                    <input type="text" placeholder="Security code" className="w-full bg-white/5 border border-white/10 border-t-0 rounded-br-md px-4 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                                    <HelpCircle className="absolute right-3 top-4.5 text-white/40" size={16} />
                                                </div>
                                            </div>
                                            <input type="text" placeholder="Name on card" defaultValue="adeola israel" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                        </div>
                                        <div className="p-4 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity border-t border-white/10 cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full border-2 border-white/30 truncate" />
                                                <span className="text-xs font-bold uppercase">Clearpay</span>
                                            </div>
                                            <div className="w-8 h-4 bg-[#B2FCE4] rounded-sm flex items-center justify-center">
                                                <div className="w-4 h-2 bg-black rounded-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4 pt-4">
                                    <div className="flex flex-col">
                                        <h2 className="text-lg md:text-xl font-black uppercase tracking-tight">Billing address</h2>
                                        <p className="text-[10px] text-white/40 font-bold uppercase">Select the address that matches your card or payment method.</p>
                                    </div>
                                    <div className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                                        <div className="p-4 flex items-center gap-3 border-b border-white/10 bg-white/[0.03]">
                                            <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center p-[2px]">
                                                <div className="w-full h-full bg-white rounded-full" />
                                            </div>
                                            <span className="text-xs font-bold uppercase text-white">Same as shipping address</span>
                                        </div>
                                        <div className="p-4 flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                                            <div className="w-4 h-4 rounded-full border-2 border-white/30" />
                                            <span className="text-xs font-bold uppercase">Use a different billing address</span>
                                        </div>
                                    </div>
                                </section>

                                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <button onClick={() => setStep("shipping")} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase">
                                        <ChevronLeft size={14} /> Return to shipping
                                    </button>
                                    <button onClick={() => setStep("review")} className="w-full md:w-auto bg-[#6e5d50] hover:bg-[#5a4a3e] text-white px-10 py-5 rounded-md text-xs font-black uppercase tracking-widest transition-all">
                                        Review order
                                    </button>
                                </div>
                            </>
                        )}

                        {step === "review" && (
                            <>
                                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">Complete your order</h1>
                                <SummaryCard />

                                <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-4">
                                    <div className="flex justify-between text-xs font-bold text-white/60">
                                        <span className="uppercase">Subtotal</span>
                                        <span className="text-white">£{formData.shippingPrice.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-bold text-white/60">
                                        <span className="uppercase">Shipping</span>
                                        <span className="text-white">£{(formData.shippingPrice * 0.054).toLocaleString()}</span>
                                    </div>
                                    <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                                        <span className="text-lg font-black uppercase tracking-tight text-white">Total</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-white/40 font-black">GBP</span>
                                            <span className="text-2xl font-black tracking-tighter">£{(formData.shippingPrice * 1.054).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <button onClick={() => setStep("payment")} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase">
                                        <ChevronLeft size={14} /> Return to payment
                                    </button>
                                    <button className="w-full md:w-auto bg-[#6e5d50] hover:bg-[#5a4a3e] text-white px-12 py-5 rounded-md text-xs font-black uppercase tracking-widest transition-all shadow-xl">
                                        Pay now
                                    </button>
                                </div>
                            </>
                        )}

                        <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col gap-6">
                            <div className="flex flex-wrap gap-4 text-[9px] text-white/40 uppercase font-black">
                                <Link to="/privacy" className="hover:text-white transition-colors underline underline-offset-4">Refund policy</Link>
                                <Link to="/privacy" className="hover:text-white transition-colors underline underline-offset-4">Shipping policy</Link>
                                <Link to="/privacy" className="hover:text-white transition-colors underline underline-offset-4">Privacy policy</Link>
                                <Link to="/privacy" className="hover:text-white transition-colors underline underline-offset-4">Terms of service</Link>
                            </div>
                            <p className="text-[9px] text-white/20 uppercase font-black tracking-widest">
                                All rights reserved TIND ORIGINALS
                            </p>
                        </footer>
                    </main>
                </div>

                {/* Right Side: Order Summary (Sticky) */}
                <div className="w-full md:w-[420px] bg-white/[0.02] p-6 md:p-12 lg:pl-10 sticky top-0 h-fit">
                    <div className="space-y-6">
                        {items.map((item) => (
                            <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-4">
                                <div className="relative w-16 h-16 bg-white/[0.05] rounded-lg border border-white/10 flex items-center justify-center">
                                    <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-contain" />
                                    <span className="absolute -top-2 -right-2 bg-white/80 text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border border-black/10">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-[11px] font-black uppercase tracking-tight text-white mb-0.5 truncate">{item.product.name}</h3>
                                    <p className="text-[9px] font-bold text-white/40 uppercase">{item.size} / {item.product.id}</p>
                                </div>
                                <div className="text-xs font-black tracking-tighter">
                                    £{item.product.price.toFixed(2)}
                                </div>
                            </div>
                        ))}

                        <div className="pt-6 border-t border-white/10">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Discount code or gift card"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors uppercase font-bold"
                                />
                                <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-30" disabled>
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3 pt-6 text-xs transition-all">
                            <div className="flex justify-between text-white/60">
                                <span className="font-bold uppercase tracking-tight">Subtotal</span>
                                <span className="font-black text-white">£{totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-white/60 items-center">
                                <span className="font-bold uppercase tracking-tight">Shipping</span>
                                <span className="text-[9px] font-black uppercase text-white/40 tracking-widest">
                                    {step === "information" ? "Calculated at next step" : "FREE"}
                                </span>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <div className="flex justify-between items-baseline">
                                <div className="flex flex-col">
                                    <span className="text-lg font-black uppercase tracking-tight">Total</span>
                                    <span className="text-[9px] text-white/40 font-black uppercase">Including £{(totalPrice * 0.2).toFixed(2)} in taxes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-white/40 uppercase font-black">GBP</span>
                                    <span className="text-2xl font-black tracking-tighter">£{totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
