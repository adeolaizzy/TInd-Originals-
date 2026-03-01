import { Link } from "react-router-dom";
import { useCart } from "@/lib/cart";
import SideMenu from "@/components/SideMenu";
import CartSidebar from "@/components/CartSidebar";
import Logo from "@/components/Logo";

const PrivacyPolicy = () => {
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
                        <h2 className="text-sm md:text-base font-black">3. HOW WE USE YOUR INFORMATION</h2>
                        <p>We use your personal information for the following purposes and on the following legal bases:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To fulfil orders and process payments – processing is necessary to perform our contract with you</li>
                            <li>To communicate with you about your orders, deliveries, returns, and customer support enquiries – contractual necessity</li>
                            <li>To send marketing communications (e.g. new drops, promotions) – based on your consent, which you can withdraw at any time</li>
                            <li>To improve our Site and services by analysing usage patterns and preferences – based on our legitimate interest in enhancing the customer experience</li>
                            <li>To prevent fraud and protect the security of our Site and business – based on our legitimate interest and legal obligations</li>
                            <li>To comply with legal obligations, such as tax and accounting requirements</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">4. COOKIES AND TRACKING TECHNOLOGIES</h2>
                        <p>Our Site uses cookies and similar technologies to enhance your browsing experience. When you first visit our Site, you will see a cookie banner stating: "Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies." You may accept cookies by clicking "Accept & Continue."</p>

                        <div className="space-y-4">
                            <h3 className="font-black">4.1 Types of Cookies We Use</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Strictly necessary cookies: These are essential for the Site to function properly, including session management, shopping cart functionality, and secure checkout. They cannot be disabled.</li>
                                <li>Performance and analytics cookies: These help us understand how visitors interact with our Site by collecting anonymous usage data (e.g. pages visited, time on site). We use this information to improve our Site.</li>
                                <li>Functionality cookies: These remember your preferences (e.g. language, region) to provide a more personalised experience.</li>
                                <li>Marketing and advertising cookies: These may be used to deliver relevant advertisements and track the effectiveness of marketing campaigns.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-black">4.2 Managing Cookies</h3>
                            <p>You can manage or delete cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our Site. For more information about cookies, visit www.allaboutcookies.org.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">5. HOW WE SHARE YOUR INFORMATION</h2>
                        <p>We do not sell your personal data. We may share your information with the following categories of recipients:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Service providers: including Shopify (e-commerce platform), payment processors, shipping and delivery partners, email service providers, and analytics providers – these parties process data on our behalf and under our instructions</li>
                            <li>Professional advisors: such as lawyers, accountants, and insurers where necessary</li>
                            <li>Law enforcement or regulators: where we are required to do so by law or to protect our rights</li>
                            <li>Business transfers: in connection with any merger, sale of company assets, or acquisition</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">6. INTERNATIONAL DATA TRANSFERS</h2>
                        <p>Some of our service providers (such as Shopify) may process your data outside the United Kingdom. Where personal data is transferred internationally, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the UK Information Commissioner's Office (ICO), or transfers to countries with an adequacy decision.</p>
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

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">8. YOUR RIGHTS</h2>
                        <p>Under the UK GDPR, you have the following rights regarding your personal data:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Right of access: request a copy of the personal data we hold about you</li>
                            <li>Right to rectification: request correction of inaccurate or incomplete data</li>
                            <li>Right to erasure: request deletion of your personal data in certain circumstances</li>
                            <li>Right to restrict processing: request that we limit how we use your data</li>
                            <li>Right to data portability: request a copy of your data in a structured, machine-readable format</li>
                            <li>Right to object: object to processing based on legitimate interests or for direct marketing purposes</li>
                            <li>Right to withdraw consent: where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing</li>
                        </ul>
                        <p>To exercise any of these rights, please email us at support@tindoriginals.com. We will respond within one month of receiving your request. If you are unsatisfied with how we handle your data, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at www.ico.org.uk.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">9. DATA SECURITY</h2>
                        <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include encryption of payment data during transfer, secure hosting through Shopify's infrastructure, and restricted access to personal data on a need-to-know basis. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">10. CHILDREN'S PRIVACY</h2>
                        <p>Our Site and services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us at support@tindoriginals.com and we will take steps to delete the information promptly.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">11. THIRD-PARTY LINKS</h2>
                        <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">12. CHANGES TO THIS PRIVACY POLICY</h2>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically. Your continued use of the Site after changes are posted constitutes acceptance of the updated policy.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">13. CONTACT US</h2>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                        <p>Tind Originals Ltd</p>
                        <p>Email: support@tindoriginals.com</p>
                        <p>Website: www.tindoriginals.com</p>
                    </section>
                </div>
            </main>

            <SideMenu />
            <CartSidebar />
        </div>
    );
};

export default PrivacyPolicy;
