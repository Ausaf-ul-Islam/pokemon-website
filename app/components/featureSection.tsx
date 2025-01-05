import React from "react";

const FeatureSection = () => {
  return (
    <section id="features" className="py-12 bg-green-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Features</h2>
        <p className="text-gray-700 mb-12">
          Why choose Pokémon World? Here's what makes us unique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {/* Feature Card 1 */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl hover:bg-green-200 transform transition-all duration-300 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Search Pokémon
            </h3>
            <p className="text-gray-600">
              Find Pokémon by name and explore their stats, abilities, and more.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl hover:bg-green-200 transform transition-all duration-300 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Interactive Cards
            </h3>
            <p className="text-gray-600">
              View beautifully designed Pokémon cards with real-time animations.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl hover:bg-green-200 transform transition-all duration-300 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Fully Responsive
            </h3>
            <p className="text-gray-600">
              Enjoy a seamless experience across all devices, big or small.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
