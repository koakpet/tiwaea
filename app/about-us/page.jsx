import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="w-11/12 m-auto pb-6 md:pb-3 md:w-10/12">
        <h1 className="text-pink-400 border-b border-black pt-12 pb-7">
          About Us
        </h1>

        <div className="md:py-6 flex md:flex-row md:items-start md:gap-12">
          <Image
            src="/images/countryside-women-discussing.jpg"
            width={420}
            height={150}
            alt="Countryside women discussing in the field"
            className="hidden md:block"
          ></Image>
          <div className="md:text-justify">
            <h2 className="hidden md:block text-blue-500 txt">
              We are growing fast
            </h2>
            <p>
              Tammy’s International Women in Agriculture Empowerment Association
              (TIWAEA), founded in August 2022 in Nigeria, is a proud affiliate
              of the National Women in Agriculture Association (NWIAA), the
              world’s largest black woman-led agricultural nonprofit.
            </p>

            <p>
              Our mission is to empower small-scale women farmers through
              education, innovation, and a global sisterhood that fuels
              productivity and sustainability. We are dedicated to enhancing the
              capabilities of rural farmers and organizations, fostering
              entrepreneurship, and driving progress in the agricultural sector.
            </p>

            <p>
              With a vision to create a network of strong women-led farming
              communities, TIWAEA is rapidly expanding. We have already
              established 16 chapters across Nigerian states, including Akwa
              Ibom, Abuja, Benue, Cross River, Lagos, and more. Our reach now
              extends beyond Nigeria to Kenya, Ghana, Liberia, Uganda, and
              Malawi.
            </p>

            <p>
              As one of Africa’s fastest-growing agricultural organizations,
              TIWAEA is committed to reducing food insecurity, fighting poverty,
              and advancing equality. We empower women farmers and vulnerable
              youth to build sustainable livelihoods and take the lead in
              transforming agriculture across the continent.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/countryside-women-discussing.jpg"
        width={767}
        height={150}
        alt="Countryside women discussing in the field"
        className="md:hidden"
      ></Image>
      <div className="py-6 px-7 md:py-12 md:px-24 bg-zinc-100 md:text-justify">
        <h2 className="text-pink-400 hidden md:block">
          We strive to bring out the best in you.
        </h2>
        <p>
          Our passion is to provide education, and training, increase farmer’s
          access to knowledge, information, and technology, promote market
          linkages, and value chain development, and empowerment that would
          contribute to the sustainability of the agricultural sector in Africa,
          making agriculture profitable and attractive to the next generation of
          Women/Youths and even Men in rural, urban and underserved communities
          throughout the United States, Nigeria, Africa and other parts of the
          World, creating a more prosperous and sustainable future for all.
        </p>
        <p>
          NWIAA/TIWAEA have attracted much local and International attention. It
          is our hope that you will join us on our mission to provide
          women/men/youths with the opportunity to not only put healthy,
          home-grown food on the table but to succeed in agriculture even to the
          point of becoming an “agri-diva”! If you are interested in becoming
          more self-sufficient, food secured, or beginning a business in
          agriculture, please contact us today, and we will educate, train and
          empower you to make your goals a reality.
        </p>
      </div>
    </>
  );
}
