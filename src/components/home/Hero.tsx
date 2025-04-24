import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { ChevronRight, Download } from "lucide-react";
import mainLogo from "../../assets/mainlogo.png"

const backgroundImages = [
  "https://cdn.discordapp.com/attachments/1339626094835404973/1364582823847133225/ets2_20250407_063803_00.png?ex=680adb09&is=68098989&hm=432eb336eb0eace0ff4b211d6d1f18c91de2d17c51f23f931fe049dd36f22109&",
  "https://media.discordapp.net/attachments/1339626094835404973/1364866983429931079/ets2_20250424_130056_00.png?ex=680b3aee&is=6809e96e&hm=bb840d373e932a7a20ddd27cb01892b54e1369718a15136f87fe9e837b153c14&=&format=webp&quality=lossless&width=981&height=552",
  "https://media.discordapp.net/attachments/1339626094835404973/1364866986923921519/ets2_20250424_125936_00.png?ex=680b3aef&is=6809e96f&hm=5c58ed4c97c7e0881f71337f8723ef69db39f0f27afcd8d8e5785412390c8e84&=&format=webp&quality=lossless&width=981&height=552 ",
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: ["Nolimit Mods", "Realistic Mods", "ETS2 Mods"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      smartBackspace: true,
      showCursor: true,
    });

    return () => typed.destroy(); // cleanup
  }, []);

  return (
    <div className="relative h-screen max-h-[650px] overflow-hidden">
      {backgroundImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out scale-105 ${
            idx === currentImage ? "opacity- z-0" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/20  z-10" />

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <img
              src={mainLogo}
              alt="NLMS Logo"
              className="mx-auto h-32 mb-6 rounded-xl shadow-xl animate-bounce"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight flex justify-center items-center gap-2 flex-wrap">
              <span ref={typedRef} className="whitespace-nowrap"></span>
              <span className="flag-text whitespace-nowrap">Sri Lanka</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8">
              Sri Lanka's premier source for high-quality Euro Truck Simulator 2
              mods 🚛
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/mods"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 text-white rounded-full text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Browse Mods</span>
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/register"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-md border border-white/20 shadow-inner transition-all duration-300 flex items-center gap-2"
              >
                <span>Join Community</span>
                <Download size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-1" />
        </div>
      </div>

      <style>
        {`
          .flag-text {
            background: linear-gradient(90deg, #FFB300, #D62828, #007847, #FCE205);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
