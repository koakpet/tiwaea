"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="flex justify-between items-center px-6 py-3 md:px-20 md:py-3 bg-white">
      {/* Tablet and Desktop Navigation */}
      <Image
        src="/images/logo.png"
        width={180}
        height={90}
        alt="TIWAEA Logo"
        className="hidden md:block"
      ></Image>

      <div className="hidden md:flex md:gap-9 text-lg font-semibold">
        <Link href="/" className="hover:text-blue-900">
          Home
        </Link>
        <Link href="/about-us" className="hover:text-blue-900">
          About Us
        </Link>
        <Link href="/events" className="hover:text-blue-900">
          News/Events
        </Link>
        <Link href="/contact-us" className="hover:text-blue-900">
          Contact Us
        </Link>
      </div>

      {/* Mobile View Navigation */}
      <Image
        src="/images/short-logo.png"
        width={51}
        height={0}
        alt="TIWAEA Logo"
        className="block md:hidden"
      ></Image>

      <div className="md:hidden">
        {isOpen ? (
          <FontAwesomeIcon
            icon={faClose}
            className="text-3xl"
            onClick={toggleMenu}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl"
            onClick={toggleMenu}
          />
        )}
      </div>

      {isOpen ? (
        <div className="nav-menu md:hidden ease-in-out">
          <Link href="/" className="hover:text-blue-900" onClick={closeMenu}>
            Home
          </Link>
          <Link
            href="/about-us"
            className="hover:text-blue-900"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            href="/events"
            className="hover:text-blue-900"
            onClick={closeMenu}
          >
            News/Events
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-blue-900"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      ) : (
        " "
      )}
    </nav>
  );
}

export default Navbar;
