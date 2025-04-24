import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { FaDiscord, FaWhatsapp, FaMailBulk } from "react-icons/fa";


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4 animate-fade-in">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              NLMS
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to us anytime – we're here to help and connect with our
            community!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: (
                <FaWhatsapp className="h-10 w-10 text-green-500 group-hover:scale-110 transition" />
              ),
              title: "WhatsApp",
              desc: "Quick support via WhatsApp",
              link: "https://api.whatsapp.com/send?phone=94704604578&text=Hello%20NLMS%20Team%2C%20I%20need%20support",


              label: "Chat Now",
            },
            {
              icon: (
                <FaDiscord className="h-10 w-10 text-indigo-500 group-hover:scale-110 transition" />
              ),
              title: "Discord",
              desc: "Join our modding community",
              link: "https://discord.gg/MYu4Uqpuma",
              label: "Join Discord",
            },
            {
              icon: (
                <FaMailBulk className="h-10 w-10 text-red-500 group-hover:scale-110 transition" />
              ),
              title: "Email",
              desc: "Drop us an email anytime",
              link: "mailto:info@nlms.com",
              label: "Email Us",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-6 py-2 rounded-full transition-all"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you! Your message has been received.</span>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Mod Support">Mod Support</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5 0 0 5 0 12h4z"
                    />
                  </svg>
                ) : (
                  <Send className="h-5 w-5" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10 lg:p-12 flex items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">We're Here to Help</h2>
              <p className="mb-6">
                Contact us through any method and we’ll get back to you
                promptly.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: <Phone className="h-5 w-5 mr-3" />,
                    title: "Phone Support",
                    info: "+94 70 460 4578",
                  },
                  {
                    icon: <Mail className="h-5 w-5 mr-3" />,
                    title: "Email Support",
                    info: "support@nlms.com",
                  },
                  {
                    icon: <MessageSquare className="h-5 w-5 mr-3" />,
                    title: "Live Chat",
                    info: "9AM – 6PM (SL Time)",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    {item.icon}
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-blue-200">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-blue-500 mt-8 pt-4">
                <p className="text-blue-200">
                  Follow us on social media for the latest updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
