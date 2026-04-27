import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">JourneyHub</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-200">
            About
          </Link>
          <Link to="/destinations" className="text-white hover:text-blue-200">
            Destinations
          </Link>
          <Link to="/packages" className="text-white hover:text-blue-200">
            Packages
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-200">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-200">
            About
          </Link>
          <Link to="/destinations" className="text-white hover:text-blue-200">
            Destinations
          </Link>
          <Link to="/packages" className="text-white hover:text-blue-200">
            Packages
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}