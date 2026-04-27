import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing experience! The trip was well organized and unforgettable.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Priya Das",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Best travel agency! Smooth booking process and great support.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Amit Kumar",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Affordable packages and excellent customer service. Highly recommend!",
    rating: "⭐⭐⭐⭐⭐",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          What Our Travelers Say
        </h2>

        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />

          <h3 className="text-2xl font-bold">
            {testimonials[index].name}
          </h3>

          <p className="text-yellow-500 mt-2">
            {testimonials[index].rating}
          </p>

          <p className="text-gray-600 mt-4 leading-7 text-lg">
            "{testimonials[index].review}"
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="mt-8 space-x-4">
          <button
            onClick={() =>
              setIndex(
                (index - 1 + testimonials.length) %
                  testimonials.length
              )
            }
            className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg transition duration-300"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setIndex((index + 1) % testimonials.length)
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}