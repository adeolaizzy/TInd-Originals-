import { useState } from "react";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import SideMenu from "@/components/SideMenu";


const Shop = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <CartSidebar />
            <SideMenu />


            <main className="pt-32 md:pt-48 pb-8">
                <header className="px-6 md:px-10 mb-12 flex flex-col items-center sm:items-start">
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-foreground leading-none">
                        Shop
                    </h1>
                </header>


                <div className="px-6 mb-10 flex gap-4 flex-wrap justify-center sm:justify-start">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-[10px] font-black tracking-[0.2em] uppercase px-6 py-3 border-2 transition-all ${activeCategory === cat
                                ? "bg-foreground text-background border-foreground"
                                : "text-foreground border-foreground/10 hover:border-foreground"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <section className="product-grid">
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Shop;
