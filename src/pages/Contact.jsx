import { useState } from "react";
import travel1 from "../assets/travel1.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: "",
    destination: "",
    message: "",
  });

  // Handle input changes
  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.persons ||
      !form.date ||
      !form.destination ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Booking request submitted successfully!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-10"
      style={{ backgroundImage: `url(${travel1})` }}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">
        
        {/* Left Side Contact Info */}
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">
            Plan Your Dream Trip ✈
          </h2>

          <p className="mb-8">
            Fill the booking form and start your next journey with us.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Phone />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail />
              <span>travelx@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin />
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Right Side Booking Form */}
        <form
          onSubmit={submitHandler}
          className="p-8 space-y-4"
        >
          <h1 className="text-3xl font-bold text-center mb-4">
            Contact & Booking Form
          </h1>

          {/* Name */}
          <input
            className="w-full border p-3 rounded-lg"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={changeHandler}
          />

          {/* Phone Number */}
          <input
            className="w-full border p-3 rounded-lg"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={changeHandler}
          />

          {/* Email */}
          <input
            className="w-full border p-3 rounded-lg"
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={changeHandler}
          />

          {/* Persons + Date */}
          <div className="grid grid-cols-2 gap-4">
            <input
              className="w-full border p-3 rounded-lg"
              type="number"
              name="persons"
              placeholder="Number of Persons"
              value={form.persons}
              onChange={changeHandler}
            />

            <input
              className="w-full border p-3 rounded-lg"
              type="date"
              name="date"
              value={form.date}
              onChange={changeHandler}
            />
          </div>

          {/* Destination */}
          <select
            className="w-full border p-3 rounded-lg"
            name="destination"
            value={form.destination}
            onChange={changeHandler}
          >
            <option value="">Select Destination</option>
            <option value="Goa">Goa</option>
            <option value="Manali">Manali</option>
            <option value="Bali">Bali</option>
            <option value="Dubai">Dubai</option>
            <option value="Paris">Paris</option>
            <option value="Thailand">Thailand</option>
          </select>

          {/* Message */}
          <textarea
            className="w-full border p-3 rounded-lg"
            name="message"
            placeholder="Additional Message"
            value={form.message}
            onChange={changeHandler}
            rows="4"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}