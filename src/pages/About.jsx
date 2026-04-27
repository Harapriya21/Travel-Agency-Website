import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            About Us
          </h1>

          <p className="mt-4 text-lg">
            We make travel unforgettable.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={aboutImg}
          alt="About Travel"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-8">
            JourneyHub is your trusted travel partner helping you explore
            amazing destinations around the world with affordable
            packages, luxury stays, and unforgettable experiences.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Explore Destinations
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 shadow-lg rounded-xl text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Affordable Packages
            </h3>
            <p>Best travel deals at the best prices.</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              24/7 Support
            </h3>
            <p>Always available to help you anytime.</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">
              Trusted Service
            </h3>
            <p>Thousands of happy travelers trust us.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="grid md:grid-cols-4 text-center max-w-6xl mx-auto gap-8">
          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p>Destinations</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p>Happy Travelers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">200+</h2>
            <p>Tour Packages</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}