"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-green-100 flex items-center justify-center relative pt-20 lg:pt-0">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-700 mb-4">
            Explore Your Favorite Pokémon!
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Stay updated with the latest Pokémon news and series. Enter your
            email to get started!
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/pokemonPage">
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow transition w-full sm:w-auto">
                Explore Pokémon
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/herologo.png" // Replace with your Pikachu image URL
            alt="Pikachu"
            width={380}
            height={300}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[2rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] font-bold text-green-300 uppercase tracking-wider opacity-20">
          Pikachu
        </h1>
      </div>
    </section>

  );
};

export default HeroSection;
