import { Link } from "react-router-dom";
import { useCart } from "@/lib/cart";
import SideMenu from "@/components/SideMenu";
import CartSidebar from "@/components/CartSidebar";
import Logo from "@/components/Logo";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const Sustainability = () => {
    const { totalItems, setIsOpen } = useCart();

    return (
        <div className="min-h-screen w-full bg-[#111111] text-white font-sans selection:bg-white selection:text-black pb-20">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-10 bg-transparent">
                <Logo className="w-28 md:w-36" />


                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-1 text-sm md:text-base font-black tracking-widest uppercase hover:opacity-70 transition-opacity"
                >
                    BAG
                    <span className="flex items-center justify-center bg-white text-black rounded-full w-5 h-5 text-[10px] font-bold ml-1">
                        {totalItems}
                    </span>
                </button>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto pt-32 px-6 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-center mb-16">
                    Sustainability
                </h1>

                <div className="space-y-8 text-sm md:text-base font-bold tracking-tight leading-relaxed uppercase opacity-90">
                    <p>
                        Sometimes, the idea of perfection is paralysing and overwhelming to the point that people would rather do nothing than do something, not 100% "right". However, we believe that we don't need a handful of people living a completely sustainable life, but we need millions of people doing it imperfectly.
                    </p>

                    <p>
                        Today fashion consumption is at an all-time high and this contributes to a large percentage of pollution and waste worldwide. In order to be entirely sustainable, brands should create and produce nothing at all, as every product leaves a carbon footprint. However, this approach is unrealistic as the apparel and textile sector is the 4th biggest in the world and millions of people rely on it to survive. Therefore, we believe it's important to look for realistic long-term solutions that focus on creating safe and ethical working conditions for people in every chain of production while mitigating the negative impact on the environment.
                    </p>

                    <p>
                        However, sustainability is a complicated, constantly evolving journey, and every step forward must be celebrated. Unfortunately, the topic of sustainability has become tainted as people often think it is being forced upon them, take an all-or-nothing mentality, or are turned off that sustainable products, such as organic and fair trade, cost more. The truth is: everything comes with a cost. Fast fashion has arisen with discounted clothing made so poorly that 60% of it is thrown out within a year, only to be worn once or twice. By purchasing cheap and harmful fabrics, there is an immense environmental and public health toll being paid.
                    </p>

                    <p>
                        Lately, sustainability has been used as a buzzword to guilt-trip and convince people to buy their green products, but to us, sustainability is about creating a real impact instead of using it as a marketing strategy. While our primary focus has been on our designs and making the best streetwear possible, every single production-related decision since day one has been made with sustainability in mind – hence how the name Tind Originals was born.
                    </p>


                    <p>
                        We strive to do things the right way, not take cheap shortcuts, and produce pieces made ethically, even if the process takes longer. Sustainability is our standard, and as we continue to make clothes, we will continue to find new ways to become even more environmentally friendly. We understand that although there are already enough clothes in the world, people are still consuming more, so we are here to provide a better option through organic and recycled fabrics made ethically, which also ensures that our clothes are built to last.
                    </p>

                    <p>
                        Being in one of the most polluting industries - fashion, which is second only to the oil and gas sector, we are well aware that there is still significant progress to be made. However, we are doing our best to be transparent about our sustainability journey and the things that we are working on improving. We hope to inspire others to begin making more sustainable choices – no matter how small.
                    </p>
                </div>

                {/* FAQ Accordion Section */}
                <div className="mt-20 border-t border-white/20">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-b border-white/20 py-4">
                            <AccordionTrigger className="text-xs md:text-sm font-black tracking-widest uppercase hover:no-underline">
                                What fabrics do we use?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm font-bold tracking-tight uppercase opacity-70">
                                We prioritize organic cotton, recycled polyester, and other sustainable alternatives that reduce our environmental impact while maintaining the high quality of our streetwear pieces.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b border-white/20 py-4">
                            <AccordionTrigger className="text-xs md:text-sm font-black tracking-widest uppercase hover:no-underline">
                                Where are our fabrics sourced from?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm font-bold tracking-tight uppercase opacity-70">
                                Our fabrics are sourced from certified ethical suppliers globally who share our commitment to sustainability and fair labor practices.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </main>

            <SideMenu />
            <CartSidebar />
        </div>
    );
};

export default Sustainability;
