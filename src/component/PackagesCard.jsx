import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PackagesCard({ pack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // starts from bottom
      animate={{ opacity: 1, y: 0 }} // moves to top
      transition={{ duration: 0.8 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
    >
      {/* Package Image */}
      <motion.img
        src={pack.image}
        alt={pack.name}
        className="w-full h-52 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Package Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{pack.name}</h2>

        <p className="text-gray-500">{pack.duration}</p>

        <p className="text-lg font-semibold mt-2">
          ₹{pack.price}
        </p>

        {/* Book Package Button */}
        <Link to="/contact">
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300">
            Book Package
          </button>
        </Link>
      </div>
    </motion.div>
  );
}