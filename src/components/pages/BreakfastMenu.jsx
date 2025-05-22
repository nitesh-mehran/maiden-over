import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaMapPin } from "react-icons/fa";

const BreakfastMenu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const menuSections = [
    {
      title: "Combos",
      items: [
        ["Combo Poha + Tea", "₹99/-"],
        ["Combo Vada Pav + Tea", "₹99/-"],
        ["Combo Maska Bun + Tea", "₹99/-"],
        ["Combo Coleslaw Sandwich + Tea", "₹105/-"],
        ["Combo Cheese Sandwich + Tea", "₹149/-"],
      ],
    },
    {
      title: "Meals",
      items: [
        ["Poha", "₹74/-"],
        ["Vada Pav", "₹74/-"],
        ["Dhokla (2 pc)", "₹44/-"],
        ["Maska Bun", "₹65/-"],
        ["Sabu Dana Khichdi", "₹59/-"],
        ["Nutella Bun", "₹129/-"],
        ["Upma", "₹110/-"],
        ["Quinoa Upma", "₹279/-"],
        ["Chana Chaat", "₹149/-"],
        ["Saute Chana", "₹179/-"],
        ["Vermicelli (Seviyan)", "₹109/-"],
        ["Maggie (Plain / Veggie / Cheese)", "₹79 / ₹109 / ₹149"],
      ],
    },
    {
      title: "Sandwiches",
      items: [
        ["Coleslaw Sandwich", "₹79/-"],
        ["Cheese Sandwich", "₹119/-"],
        ["Bombay Sandwich", "₹129/-"],
        ["OTC Sandwich", "₹139/-"],
        ["Paneer Tikka Sandwich", "₹159/-"],
        ["Chef’s Special Sandwich", "₹178/-"],
      ],
    },
    {
      title: "Specials",
      items: [
        ["Masala Oats", "₹159/-"],
        ["Tofu Bhurji", "₹179/-"],
        ["Paneer Bhurji", "₹198/-"],
        ["Italian Panini", "₹219/-"],
      ],
    },
    {
      title: "With Garlic Bread",
      items: [
        ["Saute Veg (served with Garlic Bread)", "₹249/-"],
        ["Paneer Saute (served with Garlic Bread)", "₹298/-"],
      ],
    },
    {
      title: "Pancakes",
      items: [
        ["Pancake - Honey", "₹79/-"],
        ["Pancake - Nutella", "₹158/-"],
      ],
    },
    {
      title: "Beverages",
      items: [
        ["Elaichi Tea (150ml)", "₹45/-"],
        ["Instant Coffee (150ml)", "₹60/-"],
        ["Chilled Juice (180ml)", "₹60/-"],
      ],
    },
  ];

  return (
    <section className="mt-20">
      {/* Hero Section */}
       <div className="relative mt-20 w-full overflow-hidden">
      <img
        src="/pasta.webp"
        alt="Cafe Background"
        className="absolute top-0 left-0 w-full h-96 sm:h-96 md:h-[90vh] lg:h-[80vh] object-cover z-0"
      />

      <div className="relative z-10 flex items-center justify-start h-96 sm:h-96 md:h-[90vh] lg:h-[80vh] px-4 sm:px-10 bg-black/50">
        <div
          className="max-w-4xl text-white space-y-5 md:ml-24"
          data-aos="fade-right"
          data-aos-delay={200}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Breakfast Menu
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Pure Vegetarian Cafe in Jaipur offering delicious cuisines, tasty
            pizza, creamy coffee, and spacious seating.
          </p>

          <p className="text-sm sm:text-base font-medium">
            📍 Malviya Nagar, Jaipur, Rajasthan 302004
            <br />
            📞 Enquiries: +91-8104942875
          </p>

          <a
            href="https://www.google.com/maps?q=Kefiko+-+Tea+and+Coffee,+D-654-55,+Park+Ave+Rd,+Siddharth+Nagar,+Sector+9,+Malviya+Nagar,+Jaipur,+Rajasthan+302017&ftid=0x396db77fdd9bbc0d:0x1aece1e73a70cdc3&entry=gps&lucs=,94242541,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjA2LjEuNzIyNzcxMDg2MBgAIJ6dCipjLDk0MjQyNTQxLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJJTg%3D%3D&g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <FaMapMarkerAlt className="text-lg hover:animate-pulse" />
            View Location
          </a>
        </div>
      </div>
    </div>

      {/* Menu Section */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 text-gray-800">
        <p
          className="text-center text-base md:text-lg mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <strong className="text-lg md:text-xl">
            Breakfast is served between 8AM – 12PM
          </strong>
          <br />
          For Suggestions and Special Requests, please inform the counter. Thank
          you.
        </p>

        <div className="space-y-14">
          {menuSections.map((section, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h2 className="text-xl md:text-2xl font-bold text-yellow-600 border-b pb-2 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.items.map(([name, price], idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center text-base md:text-lg border-b border-dashed pb-1"
                  >
                    <span>{name}</span>
                    <span className="text-gray-600">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm text-gray-500 mt-12 italic"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          * All Inclusive of GST
        </p>
      </div>
    </section>
  );
};

export default BreakfastMenu;
