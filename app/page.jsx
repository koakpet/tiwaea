import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEarth,
  faHandshakeSimple,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full px-3 md:w-full m-auto items-center pt-52 pb-9 md:pt-64 md:pb-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <p className="border-b border-black pb-6 md:pb-6 mx-12 md:px-9 text-center brand">
          TAMMY'S INTERNATIONAL WOMEN
          <br />
          IN AGIRCULTURE EMPOWERMENT ASSOCIATION <br /> (TIWAEA)
        </p>

        <p className="w-full md:w-8/12 text-center font-medium md:font-semibold text-base md:text-xl md:-pt-6">
          Empowering women farmers through education, innovation, and community
          to build sustainable, profitable agricultural enterprises across
          Africa and beyond.
        </p>
      </div>

      <div className="flex flex-col-reverse pb-12 md:flex-row md:gap-16 md:py-32 md:px-16">
        <div className="px-9 py-6">
          <h2 className="text-pink-400">What we do</h2>
          <p className="text-justify">
            Our passion is to empower the next generation of women and youth in
            rural, urban, and underserved communities across the Africa and
            beyond. As part of the growing NWIAA/TIWAEA family, We have gained
            significant local and international recognition, and we invite you
            to join us in transforming lives through agriculture. Whether you
            are looking to become more self-sufficient, achieve food security,
            or launch your own agricultural business, we are here to guide and
            empower you to success; helping you grow from the ground up to
            become an “agri-diva.”
          </p>
          <p>Reach out today and turn your passion into a thriving reality!</p>
          <button>Join us</button>
        </div>
        <Image
          src="/images/women-farming.jpg"
          width="600"
          height="0"
          alt="Organization's Logo"
          className="md:w-5/6 md:rounded-md"
        ></Image>
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center md:w-10/12 md:m-auto border-t border-zinc-200">
        <Image
          src="/images/short-logo.png"
          width="270"
          height="0"
          alt="Organization's Logo"
          className="hidden md:block"
        ></Image>

        <div className="px-9 py-24 md:w-7/12 md:flex-col md:pr-20">
          <div className="pb-6 md:py-6">
            <h2 className="text-pink-400">Our Vision:</h2>
            <p className="text-center">
              To foster sustainable agriculture that empowers minority women and
              youth farmers, enhances food security, and creates a brighter
              future for all through education and innovative practices.
            </p>
          </div>
          <div className="pt-6 md:py-6">
            <h2 className="text-pink-400">Our Mission:</h2>
            <p className="text-center">
              We empower farmers by promoting sustainable practices, providing
              education, and advocating for equitable access to resources,
              particularly for marginalized communities.
            </p>
          </div>
        </div>
      </div>

      <div className="py-6 px-7 md:py-12 md:px-16 bg-zinc-100 md:text-center">
        <h2 className="text-pink-400">Our core values:</h2>
        <div className="py-20 text-center flex flex-wrap justify-center gap-20 md:justify-center md:flex-row md:gap-32">
          <div>
            <h1 className="">
              <FontAwesomeIcon icon={faThumbsUp} />
            </h1>
            <h3 className="text-pink-400">Respect</h3>
          </div>
          <div>
            <h1 className="">
              <FontAwesomeIcon icon={faHandshakeSimple} />
            </h1>
            <h3 className="text-pink-400">Integrity</h3>
          </div>
          <div>
            <h1 className="">
              <FontAwesomeIcon icon={faUsers} />
            </h1>
            <h3 className="text-pink-400">Stewardship</h3>
          </div>
          <div>
            <h1 className="">
              <FontAwesomeIcon icon={faEarth} />
            </h1>
            <h3 className="text-pink-400">Duty</h3>
          </div>
        </div>
      </div>
    </>
  );
}
