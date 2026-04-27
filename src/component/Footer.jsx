import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.jpg";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            JourneyHub
          </h2>

          <p className="text-gray-400 leading-7">
            Explore the world with us.
            Discover beautiful destinations,
            affordable packages,
            and unforgettable memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Destinations</li>
            <li className="hover:text-white cursor-pointer">Packages</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">
            <p>📞 +91 9876543210</p>
            <p>📧 journeyhub@gmail.com</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>
            <div className="flex gap-4">
            <a href="#">
                <img
                src={instagram}
                alt="Instagram"
                className="w-10 h-10 hover:scale-110 transition duration-300"
                />
            </a>

            <a href="#">
                <img
                src={twitter}
                alt="Twitter"
                className="w-10 h-10 hover:scale-110 transition duration-300"
                />
            </a>
            </div>
          
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        <p>© 2026 JourneyHub. All rights reserved.</p>
      </div>
    </footer>
  );
}