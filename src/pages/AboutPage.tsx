import React from "react";
import { Truck, Heart, Award, Users } from "lucide-react";
import mainLogo from "../assets/mainlogo.png";


const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="container mx-auto px-4 animate-fadeIn">
        {/* Hero Section */}
        <div className="relative text-center mb-16">
          <div className="relative z-10 py-16 px-6 bg-white/70 backdrop-blur-md rounded-lg shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Nolimit Mods Sri Lanka</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your premier source for high-quality Euro Truck Simulator 2 mods.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🚚 Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Nolimit Mods Sri Lanka was founded in 2025 by a passionate group
              of Euro Truck Simulator 2 fans who wanted to create a hub for
              high-quality Sri Lankan mods and build a trucking community.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a humble Discord group grew into a full-blown
              community with thousands of members and a premium library of mods
              tailored for realism and fun.
            </p>
            <p className="text-gray-600">
              We’re committed to delivering excellence, fun, and connection
              through every mod we create.
            </p>
          </div>
          <div className="md:w-1/2 bg-white p-8 flex justify-center items-center">
            <img
              src={mainLogo}
              alt="NLMS Logo"
              className="h-64 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Truck className="h-12 w-12 text-blue-600" />,
              title: "Premium Mods",
              desc: "Realistic mods made with care and tested for excellence.",
            },
            {
              icon: <Heart className="h-12 w-12 text-pink-500" />,
              title: "Passion-Driven",
              desc: "Created by truckers, for truckers. We love this!",
            },
            {
              icon: <Users className="h-12 w-12 text-green-500" />,
              title: "Community First",
              desc: "We’re building more than mods — we’re building friendships.",
            },
            {
              icon: <Award className="h-12 w-12 text-yellow-500" />,
              title: "Quality Assured",
              desc: "Every mod passes our high-quality testing process.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md overflow-hidden text-white text-center py-12 px-6">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Connect with fellow ETS2 fans, get modding help, and explore
            exclusive content. Our community awaits!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.gg/MYu4Uqpuma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Join Discord
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
