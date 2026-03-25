import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">Shop</h4>
          <ul className="space-y-2">
            <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
            <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hoodies</Link></li>
            <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pants</Link></li>
            <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tees</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">Info</h4>
          <ul className="space-y-2">
            <li><Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sustainability</Link></li>
            <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Foundation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link></li>
            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="https://www.instagram.com/tindoriginals?igsh=cHYzeDNubjV0YmNo" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="https://wa.link/xyxxp8" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a></li>
            <li><a href="https://www.tiktok.com/@tindoriginals?_r=1&_t=ZS-94PaUWp3FHV" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">TikTok</a></li>
            <li><a href="https://www.snapchat.com/@tindoriginals?share_id=wKQoUDw8kyg&locale=en-US" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Snapchat</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground tracking-wider">© 2026 TIND ORIGINALS. ALL RIGHTS RESERVED.</p>
      </div>

    </footer>
  );
};

export default Footer;
