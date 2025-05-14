import React from "react";
import { Heart, Star, Award, Sparkles, Users } from "lucide-react";

const Aboutus = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-purple-600 mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-purple-700 font-light italic max-w-3xl mx-auto">
            Your Trusted Partner in Crafting Unforgettable Celebrations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-purple mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-purple-800">
              Welcome to{" "}
              <span className="font-serif font-bold">Ember Events</span> – At
              Ember Events, we believe that every moment deserves to be
              celebrated with passion, creativity, and elegance. Since our
              journey began, we've been on a mission to redefine the way events
              are experienced – turning dreams into reality with precision and
              flair.
            </p>

            <div className="my-10 flex justify-center">
              <div className="h-0.5 w-32 bg-gradient-to-r from-purple-300 to-pink-200"></div>
            </div>

            <p>
              Founded by visionary event curator{" "}
              <span className="font-medium text-purple-600">
                Amar Pratap Singh & Isha Goyal
              </span>
              , Ember Events was built on the foundation of creating immersive,
              personalized, and flawless experiences. Whether it's a fairy-tale
              wedding, a corporate gathering, a luxurious holiday, or a private
              celebration, we bring a touch of magic to everything we do.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-purple-600 font-bold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-pink-400" />
              Our Services
            </h2>

            <p>
              Our services span across{" "}
              <span className="font-medium text-purple-600">
                wedding planning, destination management, artist and
                entertainment curation, venue selection, and bespoke travel
                experiences
              </span>
              . What makes Ember Events truly stand out is our commitment to
              understanding <em>your</em> story, style, and vision – and then
              designing every element to reflect just that.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-purple-50 rounded-xl p-6 text-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-medium text-purple-700 mb-2">Weddings</h3>
                <p className="text-sm text-purple-600">
                  Turning your love story into an unforgettable celebration
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-medium text-purple-700 mb-2">
                  Corporate Events
                </h3>
                <p className="text-sm text-purple-600">
                  Elevating your business gatherings with sophistication
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-medium text-purple-700 mb-2">
                  Special Celebrations
                </h3>
                <p className="text-sm text-purple-600">
                  Making every milestone a magical memory
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-purple-600 font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-pink-400" />
              Our Approach
            </h2>

            <p>
              We don't just plan events – we design memories. Our expert team of
              planners, designers, and coordinators pour heart and soul into
              every detail, ensuring your event not only meets but exceeds
              expectations. With Ember, you can expect creativity, dedication,
              and a seamless experience from start to finish.
            </p>

            <p className="mt-4">
              At Ember Events, values like{" "}
              <span className="font-medium text-purple-600">
                integrity, innovation, and exceptional client service
              </span>{" "}
              form the cornerstone of everything we do. We strive to make your
              planning journey stress-free and enjoyable, while delivering
              results that leave a lasting impression.
            </p>
          </div>

          {/* Closing Message */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 sm:p-8 rounded-xl text-center mt-10">
            <p className="text-lg text-purple-700">
              Thank you for choosing Ember Events to be a part of your most
              treasured moments. We invite you to browse our work, connect with
              our team, and take the first step toward a celebration that truly
              reflects <em>you</em>.
            </p>

            <p className="mt-4 text-lg font-serif text-purple-600 italic">
              "Let's light up your special moments — one event at a time."
            </p>

            <p className="mt-6 font-medium text-purple-700">
              Warm regards,
              <br />
              The Ember Events Team
            </p>
          </div>
        </div>
      </div>

      {/* Team Section Teaser - Could be expanded later */}
      {/* <div className="bg-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-purple-600 mb-6">
            Meet Our Creative Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mb-10 rounded-full"></div>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-12">
            Passionate experts dedicated to turning your vision into reality
            with creativity, precision, and a personal touch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/api/placeholder/200/200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-purple-700">
                Zeynep Sharma
              </h3>
              <p className="text-purple-500 mb-2">
                Founder & Creative Director
              </p>
              <p className="text-sm text-purple-600">
                With over 15 years of experience, Zeynep brings vision and
                innovation to every celebration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/api/placeholder/200/200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-purple-700">
                Aryan Mehta
              </h3>
              <p className="text-purple-500 mb-2">Event Design Specialist</p>
              <p className="text-sm text-purple-600">
                Aryan transforms spaces into immersive experiences with his eye
                for detail and aesthetics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/api/placeholder/200/200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-purple-700">
                Priya Kapoor
              </h3>
              <p className="text-purple-500 mb-2">Client Experience Manager</p>
              <p className="text-sm text-purple-600">
                Priya ensures every client journey is smooth, enjoyable, and
                exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-400 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to Create Something Magical?
          </h2>
          <p className="text-lg text-white opacity-90 max-w-2xl mx-auto mb-8">
            Let's start planning your dream event together. Reach out to our
            team for a consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transform transition-transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
