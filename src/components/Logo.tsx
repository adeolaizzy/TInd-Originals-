import { Link } from "react-router-dom";

interface LogoProps {
    className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
    return (
        <Link to="/" className={`block hover:opacity-80 transition-opacity ${className}`}>
            <img
                src="/logo.png"
                alt="TIND ORIGINALS"
                className="h-auto w-full object-contain"
            />

        </Link>
    );
};

export default Logo;
