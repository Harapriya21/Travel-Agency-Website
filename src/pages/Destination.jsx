import { useState } from "react";
import { destinations } from "../assets/assets";
import { motion } from "framer-motion";

export default function Destination() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Explore Top Destinations
          </h1>

          <p className="text-gray-500 mt-3">
            Find your perfect holiday destination
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border p-4 rounded-xl shadow-md outline-none"
          />
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredDestinations.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />

              {/* Content */}
              <div className="p-5">
                <h2 className="text-2xl font-bold">
                  {place.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {place.description}
                </p>

                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300">
                  Explore Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}