import React from "react";
import Link from "next/link"; // Import Link component
import Image from "next/image"; // Import Image component
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-green-200 text-green-700 py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-4">
          <Link href={"/"}>
            <Image
              src="/nav-logo.png" // Replace this with the actual path to your logo
              alt="Pokémon World Logo"
              width={200} // Adjust width as needed
              height={100} // Adjust height as needed
              className="mb-2"
            />
          </Link>
        </div>
        <p className="text-gray-700 mb-6">
          Explore and discover Pokémon like never before. Join the community today!
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-xl mb-6">
          <Link href="#" className="hover:text-green-900 transition duration-200">
            <FaFacebook />
          </Link>
          <Link href="#" className="hover:text-green-900 transition duration-200">
            <FaTwitter />
          </Link>
          <Link href="#" className="hover:text-green-900 transition duration-200">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-green-900 transition duration-200">
            <FaGithub />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-green-600 text-sm mb-6">
          <Link href="#explore" className="hover:text-green-900 transition duration-200">
            Explore Pokémon
          </Link>
          <Link href="#about" className="hover:text-green-900 transition duration-200">
            About
          </Link>
          <Link href="#features" className="hover:text-green-900 transition duration-200">
            Features
          </Link>
          <Link href="#contact" className="hover:text-green-900 transition duration-200">
            Contact
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="text-gray-700 text-xs">
          &copy; {new Date().getFullYear()} Pokémon World. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
