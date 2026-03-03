import SideMenu from "@/components/SideMenu";
import CartSidebar from "@/components/CartSidebar";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen w-full bg-[#111111] text-white font-sans selection:bg-white selection:text-black pb-20">
            <Navbar />

            {/* Content */}
            <main className="max-w-4xl mx-auto pt-32 px-6 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-center mb-16">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-xs md:text-sm font-bold tracking-tight leading-relaxed uppercase opacity-90">
                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">1. INTRODUCTION</h2>
                        <p>
                            Tind Originals Ltd ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at www.tindoriginals.com (the "Site"), place an order, or otherwise interact with our services.
                        </p>
                        <p>
                            We are the data controller for the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. If you have questions about this policy, please contact us at support@tindoriginals.com.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">2. INFORMATION WE COLLECT</h2>
                        <div className="space-y-4">
                            <h3 className="font-black">2.1 Information You Provide to Us</h3>
                            <p>When you interact with our Site, you may voluntarily provide us with the following personal information:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Identity data: first name, last name</li>
                                <li>Contact data: email address, phone number, delivery address, billing address</li>
                                <li>Financial data: payment card details (processed securely via our payment provider; we do not store full card numbers)</li>
                                <li>Transaction data: details of products you have purchased from us, order history, and returns</li>
                                <li>Account data: username, password, and preferences if you create an account</li>
                                <li>Communication data: any correspondence you send to us, including emails to support@tindoriginals.com and any feedback or reviews you submit</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-black">2.2 Information We Collect Automatically</h3>
                            <p>When you visit our Site, we automatically collect certain information through cookies and similar tracking technologies, including:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Device data: IP address, browser type and version, operating system, device type, screen resolution</li>
                                <li>Usage data: pages visited, time spent on pages, click patterns, referral URLs, date and time of visits</li>
                                <li>Location data: approximate geographic location derived from your IP address</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-black">2.3 Information from Third Parties</h3>
                            <p>We may receive information about you from third parties, including our e-commerce platform provider (Shopify), payment processors, delivery partners, and analytics services.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">7. DATA RETENTION</h2>
                        <p>We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Typical retention periods include:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Order and transaction data: 6 years from the date of purchase (for tax and legal compliance)</li>
                            <li>Account data: retained while your account is active; deleted upon request, subject to legal retention obligations</li>
                            <li>Marketing data: retained until you unsubscribe or withdraw consent</li>
                            <li>Cookie data: varies by cookie type, generally from session duration up to 2 years</li>
                        </ul>
                    </section>
                </div>
            </main>

            <SideMenu />
            <CartSidebar />
        </div>
    );
};

export default PrivacyPolicy;
