import SideMenu from "@/components/SideMenu";
import CartSidebar from "@/components/CartSidebar";
import Navbar from "@/components/Navbar";

const CookiePolicy = () => {
    return (
        <div className="min-h-screen w-full bg-[#111111] text-white font-sans selection:bg-white selection:text-black pb-20">
            <Navbar />

            {/* Content */}
            <main className="max-w-4xl mx-auto pt-32 px-6 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-center mb-16">
                    Cookie Policy
                </h1>

                <div className="space-y-8 text-xs md:text-sm font-bold tracking-tight leading-relaxed uppercase opacity-90">
                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">1. INTRODUCTION</h2>
                        <p>
                            Tind Originals Ltd uses cookies and similar tracking technologies on our website www.tindoriginals.com (the "Site") to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.
                        </p>
                        <p>
                            This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you can control your cookie preferences.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">2. WHAT ARE COOKIES</h2>
                        <p>
                            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
                        </p>
                        <p>
                            Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remain on your device for a set period or until you delete them manually).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">3. HOW WE USE COOKIES</h2>
                        <p>
                            We use cookies for various purposes, including but not limited to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Essential cookies: Required for the Site to function properly, such as maintaining your shopping cart and enabling secure checkout</li>
                            <li>Analytics cookies: Help us understand how visitors interact with our Site by collecting and reporting information anonymously</li>
                            <li>Preference cookies: Allow the Site to remember choices you make (such as your language or region) to provide enhanced, personalized features</li>
                            <li>Marketing cookies: Used to deliver advertisements relevant to your interests and measure the effectiveness of our advertising campaigns</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">4. TYPES OF COOKIES WE USE</h2>
                        <div className="space-y-4">
                            <h3 className="font-black">4.1 Essential Cookies</h3>
                            <p>These cookies are necessary for the Site to function and cannot be switched off in our systems. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-black">4.2 Performance Cookies</h3>
                            <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Site. They help us know which pages are most and least popular and see how visitors move around the Site.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-black">4.3 Functional Cookies</h3>
                            <p>These cookies enable the Site to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-black">4.4 Targeting Cookies</h3>
                            <p>These cookies may be set through our Site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">5. THIRD-PARTY COOKIES</h2>
                        <p>
                            We may allow third-party service providers to place cookies on your device through our Site. These third parties may include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Google Analytics: For website traffic analysis</li>
                            <li>Payment processors: For secure payment processing</li>
                            <li>Social media platforms: For social media integration and sharing</li>
                            <li>Advertising partners: For targeted advertising</li>
                        </ul>
                        <p>
                            We do not control these third-party cookies. Please refer to the privacy and cookie policies of the respective third parties for more information.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">6. MANAGING COOKIE PREFERENCES</h2>
                        <p>
                            You can control and manage cookies in various ways:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Browser settings: Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser.</li>
                            <li>Cookie banner: When you first visit our Site, you can choose to accept or decline non-essential cookies through our cookie consent banner.</li>
                            <li>Third-party tools: You can opt out of targeted advertising by visiting websites such as www.youronlinechoices.com or www.aboutads.info.</li>
                        </ul>
                        <p>
                            Please note that disabling certain cookies may affect the functionality and your experience of our Site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">7. DATA RETENTION</h2>
                        <p>
                            The duration for which cookies remain on your device varies by cookie type:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Session cookies: Deleted when you close your browser</li>
                            <li>Persistent cookies: Range from 30 days to 2 years depending on their purpose</li>
                            <li>Essential cookies: Generally retained for the duration necessary to provide the service</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">8. CHANGES TO THIS POLICY</h2>
                        <p>
                            We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-sm md:text-base font-black">9. CONTACT US</h2>
                        <p>
                            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                        </p>
                        <p>
                            Email: support@tindoriginals.com<br />
                            Address: Tind Originals Ltd, Lagos, Nigeria
                        </p>
                    </section>
                </div>
            </main>

            <SideMenu />
            <CartSidebar />
        </div>
    );
};

export default CookiePolicy;
