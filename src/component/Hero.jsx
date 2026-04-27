import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Explore The World
        </h1>

        <p className="mb-6 text-lg md:text-2xl">
          Adventure begins here
        </p>

        <div className="space-x-4">
          {/* Book Now Button */}
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition duration-300">
              Book Now
            </button>
          </Link>

          {/* View Packages Button */}
          <Link to="/packages">
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg transition duration-300">
              View Packages
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}