import React, { useEffect, useRef } from "react";
import { Truck, Heart, Award, Users } from "lucide-react";
import Typed from "typed.js";
import mainLogo from "../assets/mainlogo.png";

const AboutPage: React.FC = () => {
  const typedRef = useRef<Typed | null>(null);
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      typedRef.current = new Typed(el.current, {
        strings: [
          'Nolimit Mods <span class="sri-lanka">Sri Lanka</span>',
          'Realistic Truck Mods <span class="sri-lanka">Sri Lanka</span>',
          'ETS2 Community <span class="sri-lanka">Sri Lanka</span>',
        ],
        typeSpeed: 90,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        smartBackspace: true,
      });
    }

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="container mx-auto px-4 animate-fadeIn">
        {/* Hero Section */}
        <div className="relative text-center mb-16">
          <div className="relative z-10 py-16 px-6 bg-white/70 backdrop-blur-md rounded-lg shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex justify-center">
              <span className="text-blue-600 mr-2"></span>
              <span ref={el} />
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your premier source for high-quality Euro Truck Simulator 2 mods.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20 flex flex-col md:flex-row group transition-all duration-500 ease-in-out">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center animate-fade-in-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="animate-bounce">🚚</span> Our Story
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Nolimit Mods Sri Lanka was founded in 2025 by a passionate group
              of Euro Truck Simulator 2 fans who wanted to create a hub for
              high-quality Sri Lankan mods and build a trucking community.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              What started as a humble Discord group grew into a full-blown
              community with thousands of members and a premium library of mods
              tailored for realism and fun.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We’re committed to delivering excellence, fun, and connection
              through every mod we create.
            </p>
          </div>

          <div className="md:w-1/2 bg-gradient-to-tr from-blue-50 via-white to-yellow-50 p-8 md:p-12 flex justify-center items-center">
            <div className="transition-transform duration-500 transform group-hover:scale-105 group-hover:shadow-2xl rounded-xl">
              <img
                src={mainLogo}
                alt="NLMS Logo"
                className="h-64 object-contain rounded-xl shadow-xl transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: (
                <Truck className="h-12 w-12 text-blue-600 group-hover:animate-bounce" />
              ),
              title: "Premium Mods",
              desc: "Realistic mods made with care and tested for excellence.",
            },
            {
              icon: (
                <Heart className="h-12 w-12 text-pink-500 group-hover:animate-bounce" />
              ),
              title: "Passion-Driven",
              desc: "Created by truckers, for truckers. We love this!",
            },
            {
              icon: (
                <Users className="h-12 w-12 text-green-500 group-hover:animate-bounce" />
              ),
              title: "Community First",
              desc: "We’re building more than mods — we’re building friendships.",
            },
            {
              icon: (
                <Award className="h-12 w-12 text-yellow-500 group-hover:animate-bounce" />
              ),
              title: "Quality Assured",
              desc: "Every mod passes our high-quality testing process.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl border border-transparent hover:border-blue-500 hover:shadow-2xl shadow-md transition-all duration-300 ease-in-out text-center"
            >
              <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-700">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 rounded-3xl shadow-2xl overflow-hidden text-white text-center py-16 px-6 group transition-all duration-500 hover:shadow-blue-500/40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-white/5 opacity-20 z-0" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide animate-pulse">
              🚀 Join Our Community
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with fellow ETS2 modding fans, get support, and be the
              first to experience our newest creations!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://discord.gg/bVWaRdjr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-800 font-bold px-7 py-3 rounded-full text-lg shadow-md hover:scale-105 hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-blue-700"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037c-.211.375-.444.864-.608 1.25a18.196 18.196 0 00-5.485 0 12.51 12.51 0 00-.617-1.25.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C.533 9.043-.32 13.579.099 18.057a.084.084 0 00.031.057 19.98 19.98 0 006.076 3.057.077.077 0 00.084-.027c.469-.64.885-1.313 1.243-2.015a.076.076 0 00-.041-.106 13.182 13.182 0 01-1.872-.897.077.077 0 01-.008-.129c.126-.095.252-.192.371-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.099.245.196.371.291a.077.077 0 01-.007.129 12.3 12.3 0 01-1.873.897.076.076 0 00-.041.106c.36.7.776 1.375 1.244 2.015a.076.076 0 00.084.027 19.944 19.944 0 006.077-3.057.084.084 0 00.03-.057c.5-5.177-.838-9.673-3.548-13.661a.063.063 0 00-.03-.027zM8.02 15.331c-1.183 0-2.155-1.085-2.155-2.419 0-1.333.955-2.418 2.155-2.418 1.212 0 2.174 1.096 2.155 2.418 0 1.334-.955 2.419-2.155 2.419zm7.961 0c-1.183 0-2.155-1.085-2.155-2.419 0-1.333.955-2.418 2.155-2.418 1.212 0 2.174 1.096 2.155 2.418 0 1.334-.943 2.419-2.155 2.419z" />
                </svg>
                Join Discord
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-white px-7 py-3 rounded-full text-lg font-bold text-white hover:bg-white hover:text-blue-800 transition-all duration-300 hover:scale-105 shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.337 24h11.494v-9.294H9.846v-3.622h2.985V8.413c0-2.962 1.792-4.575 4.414-4.575 1.254 0 2.332.093 2.644.135v3.067l-1.816.001c-1.426 0-1.702.678-1.702 1.67v2.188h3.404l-.443 3.622h-2.96V24h5.803c.737 0 1.337-.6 1.337-1.337V1.337C24 .6 23.4 0 22.675 0z" />
                </svg>
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
