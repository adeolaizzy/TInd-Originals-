import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CartSidebar from "@/components/CartSidebar";
import SideMenu from "@/components/SideMenu";
import Navbar from "@/components/Navbar";
import { useLoading } from "@/context/LoadingContext";

const Index = () => {
  const { setIsVideoLoaded } = useLoading();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // These are critical for mobile autoplay
      video.setAttribute("muted", "");
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      
      const attemptPlay = () => {
        video.play().catch((error) => {
          console.error("Autoplay failed:", error);
          // If it fails, we try again on the next tick
          setTimeout(attemptPlay, 100);
        });
      };
      
      attemptPlay();
    }
    return () => setIsVideoLoaded(false);
  }, [setIsVideoLoaded]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
      
        webkit-playsinline="true"
        controls={false}
        preload="auto"
        onCanPlay={() => setIsVideoLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-1000"
      >
        <source
          src="/TINO.mp4"
          type="video/mp4"
        />
      </video>


      {/* Overlay for better text legibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center Hero Button */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <Link
          to="/shop"
          className="group relative px-12 py-5 border-[6px] border-white rounded-[2rem] transition-all hover:bg-white hover:text-black"
        >
          <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-center">
            SHOP HERE
          </span>
        </Link>
      </div>

      <SideMenu />
      <CartSidebar />
    </div>
  );
};

export default Index;
