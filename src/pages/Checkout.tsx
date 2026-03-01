import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { ChevronRight, HelpCircle, Search, ChevronLeft, CreditCard } from "lucide-react";
import { usePaystackPayment } from "react-paystack";
import { useCreateOrder } from "@/services/order.service";
import { toast } from "sonner";

type CheckoutStep = "information" | "shipping" | "review";

const Checkout = () => {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState<CheckoutStep>("information");
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        postcode: "",
        country: "Nigeria",
        phone: "",
        shippingMethod: "Standard Tracked",
        shippingPrice: 0.00,
        billingSameAsShipping: true,
        discountCode: "",
        billingFirstName: "",
        billingLastName: "",
        billingAddress: "",
        billingCity: "",
        billingPostcode: ""
    });

    const paystackConfig = {
        reference: (new Date()).getTime().toString(),
        email: formData.email,
        amount: Math.round(totalPrice * 100), // Amount in Kobo
        publicKey: 'pk_test_378ec2c883aeb10eb4bf3c175c4d764535a3e714',
        currency: 'NGN'
    };

    const initializePayment = usePaystackPayment(paystackConfig);

    const { mutate: createOrder, isPending: isCreatingOrder } = useCreateOrder({
        onSuccess: () => {
            toast.success("Order placed successfully!");
            clearCart();
            navigate("/");
        }
    });

    const onPaystackSuccess = (reference: any) => {
        const orderData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phone,
            address: `${formData.address}${formData.apartment ? ', ' + formData.apartment : ''}, ${formData.city}, ${formData.postcode}, ${formData.country}`,
            items: items.map(item => ({
                name: item.product.name,
                price: item.product.price,
                size: item.size,
                quantity: item.quantity
            })),
            total: totalPrice,
            paymentReference: reference.reference
        };

        createOrder(orderData as any);
    };

    const onPaystackClose = () => {
        toast.info("Payment window closed.");
    };

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateStep = (currentStep: CheckoutStep) => {
        const newErrors: Record<string, string> = {};

        if (currentStep === "information") {
            if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
            if (!formData.firstName) newErrors.firstName = "Enter a first name";
            if (!formData.lastName) newErrors.lastName = "Enter a last name";
            if (!formData.address) newErrors.address = "Enter an address";
            if (!formData.city) newErrors.city = "Enter a city";
            if (!formData.postcode) newErrors.postcode = "Enter a postcode";
            if (!formData.phone) newErrors.phone = "Enter a phone number";
        }



        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleContinue = (nextStep: CheckoutStep) => {
        if (validateStep(step)) {
            setStep(nextStep);
            window.scrollTo(0, 0);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }
    };

    const SummaryCard = () => (
        <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5 text-[11px] md:text-xs animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="p-4 grid grid-cols-[80px_1fr_50px] gap-4 items-start border-b border-white/5">
                <span className="text-white/40 font-bold uppercase">Contact</span>
                <span className="text-white truncate">{formData.email}</span>
                <button onClick={() => setStep("information")} className="text-white/60 underline hover:text-white transition-colors text-right font-bold uppercase text-[10px]">Change</button>
            </div>
            {(step === "shipping" || step === "review") && (
                <div className={`p-4 grid grid-cols-[80px_1fr_50px] gap-4 items-start ${step === "review" ? "border-b border-white/5" : ""}`}>
                    <span className="text-white/40 font-bold uppercase">Ship to</span>
                    <span className="text-white leading-relaxed">
                        {formData.firstName} {formData.lastName}<br />
                        {formData.address}, {formData.apartment}<br />
                        {formData.postcode} {formData.city}<br />
                        {formData.country}
                    </span>
                    <button onClick={() => setStep("information")} className="text-white/60 underline hover:text-white transition-colors text-right font-bold uppercase text-[10px]">Change</button>
                </div>
            )}
            {(step === "review") && (
                <div className="p-4 grid grid-cols-[80px_1fr_50px] gap-4 items-start">
                    <span className="text-white/40 font-bold uppercase">Method</span>
                    <span className="text-white">{formData.shippingMethod} · FREE</span>
                    <button onClick={() => setStep("shipping")} className="text-white/60 underline hover:text-white transition-colors text-right font-bold uppercase text-[10px]">Change</button>
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
                            <button onClick={() => formData.email && formData.address ? setStep("shipping") : null} className={`${step === "shipping" ? "text-white" : "text-white/50"} hover:text-white transition-colors`}>Shipping</button>
                            <ChevronRight size={10} className="text-white/30" />
                            <span className={step === "review" ? "text-white" : "text-white/50"}>Review</span>
                        </nav>
                    </header>

                    <main className="space-y-8 animate-in fade-in duration-700">
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
                                        <Link to="/login" className="text-xs text-white/60 underline hover:text-white transition-colors font-bold uppercase">Log in</Link>
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:font-bold`}
                                        />
                                        {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.email}</p>}
                                    </div>
                                    <div className="mt-3 flex items-center gap-2">
                                        <input type="checkbox" id="newsletter" className="w-4 h-4 bg-white/5 border-white/10 rounded cursor-pointer accent-white" />
                                        <label htmlFor="newsletter" className="text-xs text-white/60 font-bold uppercase cursor-pointer">Email me with news and offers</label>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-lg md:text-xl font-black uppercase tracking-tight">Shipping address</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2 space-y-1">
                                            <label className="block text-[10px] uppercase text-white/40 mb-1 ml-1 font-bold">Country/Region</label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors appearance-none font-bold uppercase"
                                            >
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Nigeria">Nigeria</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <input
                                                name="firstName"
                                                type="text"
                                                placeholder="First name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:font-bold`}
                                            />
                                            {errors.firstName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.firstName}</p>}
                                        </div>
                                        <div className="space-y-1">
                                            <input
                                                name="lastName"
                                                type="text"
                                                placeholder="Last name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:font-bold`}
                                            />
                                            {errors.lastName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.lastName}</p>}
                                        </div>
                                        <div className="md:col-span-2 space-y-1">
                                            <div className="relative">
                                                <input
                                                    name="address"
                                                    type="text"
                                                    placeholder="Address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    className={`w-full bg-white/5 border ${errors.address ? 'border-red-500' : 'border-white/10'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors pr-10 placeholder:font-bold`}
                                                />
                                                <Search className="absolute right-3 top-3.5 text-white/40" size={16} />
                                            </div>
                                            {errors.address && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.address}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <input
                                                name="apartment"
                                                type="text"
                                                placeholder="Apartment, suite, etc. (optional)"
                                                value={formData.apartment}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:font-bold"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <input
                                                name="city"
                                                type="text"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.city ? 'border-red-500' : 'border-white/10'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:font-bold`}
                                            />
                                            {errors.city && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.city}</p>}
                                        </div>
                                        <div className="space-y-1">
                                            <input
                                                name="postcode"
                                                type="text"
                                                placeholder="Postcode"
                                                value={formData.postcode}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.postcode ? 'border-red-500' : 'border-white/10'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:font-bold`}
                                            />
                                            {errors.postcode && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.postcode}</p>}
                                        </div>
                                        <div className="md:col-span-2 space-y-1">
                                            <div className="relative">
                                                <input
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors pr-10 placeholder:font-bold`}
                                                />
                                                <HelpCircle className="absolute right-3 top-3.5 text-white/40" size={16} />
                                            </div>
                                            {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.phone}</p>}
                                        </div>
                                    </div>
                                </section>

                                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <Link to="/shop" className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-tight">
                                        <ChevronLeft size={14} /> Return to shop
                                    </Link>
                                    <button onClick={() => handleContinue("shipping")} className="w-full md:w-auto bg-[#6e5d50] hover:bg-[#5a4a3e] text-white px-10 py-5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
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
                                    <button onClick={() => handleContinue("review")} className="w-full md:w-auto bg-[#6e5d50] hover:bg-[#5a4a3e] text-white px-10 py-5 rounded-md text-xs font-black uppercase tracking-widest transition-all">
                                        Continue to review
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
                                        <span className="text-white">₦{totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-bold text-white/60">
                                        <span className="uppercase">Shipping</span>
                                        <span className="text-white">FREE</span>
                                    </div>
                                    <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                                        <span className="text-lg font-black uppercase tracking-tight text-white">Total</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-white/40 font-black">NGN</span>
                                            <span className="text-2xl font-black tracking-tighter">₦{totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <button onClick={() => setStep("shipping")} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase">
                                        <ChevronLeft size={14} /> Return to shipping
                                    </button>
                                    <button
                                        onClick={() => (initializePayment as any)({ onSuccess: onPaystackSuccess, onClose: onPaystackClose })}
                                        disabled={isCreatingOrder}
                                        className="w-full md:w-auto bg-[#6e5d50] hover:bg-[#5a4a3e] text-white px-12 py-5 rounded-md text-xs font-black uppercase tracking-widest transition-all shadow-xl disabled:opacity-50"
                                    >
                                        {isCreatingOrder ? "Processing..." : "Pay now"}
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
                                    ₦{item.product.price.toFixed(2)}
                                </div>
                            </div>
                        ))}

                        <div className="pt-6 border-t border-white/10">
                            <div className="flex gap-3">
                                <input
                                    name="discountCode"
                                    type="text"
                                    placeholder="Discount code or gift card"
                                    onChange={handleChange}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors uppercase font-bold placeholder:text-white/20"
                                />
                                <button
                                    className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-30"
                                    disabled={!formData?.discountCode}
                                    onClick={() => alert('Code applied!')}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3 pt-6 text-xs transition-all">
                            <div className="flex justify-between text-white/60">
                                <span className="font-bold uppercase tracking-tight">Subtotal</span>
                                <span className="font-black text-white">₦{totalPrice.toFixed(2)}</span>
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
                                    <span className="text-[9px] text-white/40 font-black uppercase">Including ₦{(totalPrice * 0.2).toFixed(2)} in taxes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-white/40 uppercase font-black">GBP</span>
                                    <span className="text-2xl font-black tracking-tighter">₦{totalPrice.toFixed(2)}</span>
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
