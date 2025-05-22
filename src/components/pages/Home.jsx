import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaWhatsapp, FaCoffee, FaSun } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
      const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[80vh] sm:h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 flex flex-col justify-center items-center text-center px-4 py-8"
          data-aos="fade-down"
        >
          <div className="mt-24">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
            Kefiko-Tea&Coffee
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light max-w-4xl mt-6 text-gray-200"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Pure Vegetarian{" "}
              <strong className="text-yellow-300"> Malviya Nagar</strong>, Jaipur – Venue for Birthday & Kitty Parties. Known for
              <span className="text-yellow-400 font-medium"> Pizza, Coffee & Cozy Ambience</span>.
            </p>

            <div
              className="mt-6 space-y-2 text-xs sm:text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <p className="text-gray-300">
                <span className="font-semibold text-white">Location:</span>{" "}
                <a
                  href="https://www.google.com/maps/place/Maiden+Over+Bistro/@26.8932905,75.8269511,586m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396db7cc4a0f9983:0x61656d96fd2e4a23!8m2!3d26.8932857!4d75.829526!16s%2Fg%2F11y7cvp6lt?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline hover:text-yellow-300 transition"
                >
                   Malviya Nagar, Jaipur, Rajasthan 302004
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Enquiries:</span>{" "}
                <span className="text-yellow-400 font-semibold">+91-8104942875</span>
              </p>
            </div>

            <div
              className="mt-10 flex flex-wrap gap-2 justify-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a
                href="https://www.google.com/maps?q=Kefiko+-+Tea+and+Coffee,+D-654-55,+Park+Ave+Rd,+Siddharth+Nagar,+Sector+9,+Malviya+Nagar,+Jaipur,+Rajasthan+302017&ftid=0x396db77fdd9bbc0d:0x1aece1e73a70cdc3&entry=gps&lucs=,94242541,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjA2LjEuNzIyNzcxMDg2MBgAIJ6dCipjLDk0MjQyNTQxLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJJTg%3D%3D&g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-full flex items-center gap-2 shadow-lg transition transform hover:scale-105"
              >
                <FaMapMarkerAlt className="text-lg hover:animate-pulse" /> Location
              </a>
              <a
                href="https://wa.me/918104942875"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-full flex items-center gap-2 shadow-lg transition transform hover:scale-105"
              >
                <FaWhatsapp className="text-lg hover:animate-pulse" /> Call / Whatsapp
              </a>
             <button
        onClick={() => navigate("/cafe-menu")}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full flex items-center gap-2 shadow-lg transition transform hover:scale-105"
      >
        <FaCoffee className="text-lg hover:animate-pulse" /> Cafe Menu
      </button>

      <button
        onClick={() => navigate("/breakfast-menu")}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-5 rounded-full flex items-center gap-2 shadow-lg transition transform hover:scale-105"
      >
        <FaSun className="text-lg hover:animate-pulse" /> Breakfast Menu
      </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section
        className="bg-[#0b5757] text-white py-16 px-6 md:px-20 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Best Cafe in  Malviya Nagar
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Spacious and lively Cafe in Malviya Nagar, Jaipur serving delicious hot and cold coffee,
            chef’s special pizza, variety of momos, noodles and refreshing coolers & shakes at
            decent prices. Indoor and outdoor seating available. Loved by both couples and families.
            First in Jaipur to introduce Ram Ladoo in any Cafe. Softy ice-cream also available at
            only Rs. 30/- per cone.
          </p>
          <p className="text-lg md:text-xl font-bold text-white">
            Best venue for hosting{" "}
            <span className="text-yellow-200">
              Birthday celebrations, Anniversaries, Friends get-togethers, Kitty Parties
            </span>{" "}
            & Family functions with a capacity of{" "}
            <span className="text-yellow-200">50 people</span>.
          </p>
        </div>
      </section>

      {/* Image Cards Section */}
      <section
        className="py-16 px-6 md:px-20 bg-white text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Explore Our Vibes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((num, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={`/cafe${num}.jpg`}
                alt={`Cafe vibe ${num}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Google Map */}
      <section
  className="py-10 px-4 md:px-20 bg-gray-100 text-center"
  data-aos="fade-up"
>
  <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Visit Us
  </h2>
  <div className="w-full h-80 rounded-lg overflow-hidden shadow-xl">
    <iframe
      title="Cafe Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.079535480936!2d75.8071677!3d26.8498573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db77fdd9bbc0d%3A0x1aece1e73a70cdc3!2sKefiko%20-%20Tea%20and%20Coffee%20%7C%20Best%20Cafe%20in%20Malviya%20Nagar%20Jaipur%20%7C%20Coffee%20Shop%20in%20Jaipur!5e0!3m2!1sen!2sin!4v1716358695236!5m2!1sen!2sin"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

    </>
  );
};

export default Home;
