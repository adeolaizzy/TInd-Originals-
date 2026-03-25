import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
    const location = useLocation();

    const menuItems = [
        { label: "PRODUCTS", path: "/shop" },
        { label: "SIGN UP", path: "/signup" },
        { label: "SUSTAINABILITY", path: "/sustainability" },
        { label: "FOUNDATION", path: "#" },
        { label: "TERMS", path: "#" },
        { label: "PRIVACY POLICY", path: "/privacy" },
        { label: "COOKIE POLICY", path: "/cookies" },

    ];

    return (
        <div className="hidden md:flex fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] flex-col items-start gap-1">
            {menuItems.map((item) => (
                item.path !== "#" ? (
                    <Link
                        key={item.label}
                        to={item.path}
                        className={`text-xs md:text-sm font-black tracking-wider uppercase transition-all hover:underline underline-offset-4 decoration-2 ${location.pathname === item.path ? "text-white/40" : "text-white"
                            }`}
                    >
                        {item.label}
                    </Link>
                ) : (
                    <button
                        key={item.label}
                        className="text-xs md:text-sm font-black tracking-wider uppercase text-white hover:underline underline-offset-4 decoration-2 transition-all"
                    >
                        {item.label}
                    </button>
                )
            ))}
        </div>
    );
};

export default SideMenu;
