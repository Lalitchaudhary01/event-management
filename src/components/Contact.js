import React, { useState } from "react";
import {
  PhoneCall,
  MapPin,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = ({ activeSection }) => {
  // State for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  // WhatsApp redirect URL with phone number and preset message
  const phoneNumber = "918005931391"; // Format for WhatsApp API (no + sign)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello! Can I get more information.`;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, phone, email, eventType, message });

    // Reset form after submission
    setName("");
    setPhone("");
    setEmail("");
    setEventType("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 bg-gradient-to-b from-purple-50 to-white ${
        activeSection === "contact" ? "block" : "hidden"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-3">
            Get In Touch
          </div>
          <h2 className="text-4xl font-serif text-purple-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Ready to create unforgettable memories? We're here to bring your
            vision to life.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Contact Info Panel */}
            <div className="md:w-2/5 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 md:p-10">
              <h3 className="text-2xl font-medium mb-6">Let's Connect</h3>
              <p className="text-purple-100 mb-8">
                Reach out to us for a free consultation and let's discuss how we
                can make your event extraordinary.
              </p>

              <div className="space-y-6 text-white">
                <div className="flex items-start">
                  <div className="mr-4 bg-purple-500 bg-opacity-30 p-2 rounded-full">
                    <PhoneCall size={20} className="text-purple-100" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-purple-100">+91 8005931391</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-purple-500 bg-opacity-30 p-2 rounded-full">
                    <MapPin size={20} className="text-purple-100" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-purple-100">
                      863- Vyas Colony, Shastri Nagar, Jaipur, Rajasthan 302016
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-purple-500 bg-opacity-30 p-2 rounded-full">
                    <Instagram size={20} className="text-purple-100" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-purple-100">@ember_events</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-700 rounded-full hover:bg-purple-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1 group"
                >
                  <MessageCircle size={20} className="mr-2" />
                  <span className="font-medium">Chat on WhatsApp</span>
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:w-3/5 p-8 md:p-10">
              <h3 className="text-2xl font-medium text-purple-800 mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    rows="4"
                    placeholder="Tell us about your event vision"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
