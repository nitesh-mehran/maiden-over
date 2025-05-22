import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  { title: "Coffee & Beverages", image: "/menu3.jpg" },
  { title: "Great Coffee & Good Vibes", image: "/menu3.jpg" },
  { title: "Burgers & Sandwich", image: "/menu3.jpg" },
  { title: "Pizza & Pasta", image: "/menu3.jpg" },
  { title: "Platters & Starters", image: "/menu3.jpg" },
  { title: "Oriental Asian", image: "/menu3.jpg" },
  { title: "Thank you for Visiting our Cafe", image: "/menu3.jpg" },
  { title: "Mocktails & Shakes", image: "/menu3.jpg" },
];

const CafeMenu = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // animation sirf ek baar chalega scroll me
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative mt-20 w-full overflow-hidden">
        <img
          src="/sand.avif"
          alt="Cafe Background"
          className="absolute top-0 left-0 w-full h-96 sm:h-96 md:h-[60vh] lg:h-[80vh] object-cover z-0"
        />
        <div className="relative z-20 flex items-center justify-start h-96 sm:h-96 md:h-[60vh] lg:h-[80vh] px-6 sm:px-12 text-left text-white bg-black/40">
          <div className="max-w-4xl" data-aos="fade-right" data-aos-delay={200}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Cafe Menu
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              Pure Vegetarian <strong>Cafe in Jaipur</strong> offering Delicious cuisines, Tasty Pizza, Creamy Coffee and Spacious seating.
            </p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800"
          data-aos="fade-up"
        >
          Our Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 150} // thoda slow delay for better stagger
            >
              {/* Card with Image */}
              <div className="w-full bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="w-full h-64 sm:h-72 md:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title and Description OUTSIDE the card */}
              <div className="text-center mt-4 px-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">Delicious & Fresh</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CafeMenu;
