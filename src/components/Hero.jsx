import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 mt-1 md:mt-10 md:mb-0">
          <h3 className="text-[#604CC3] font-semibold text-lg sm:text-xl mb-2 sm:mb-4">
            Class Website PPLG 2
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Hai, selamat datang{" "}
            <span className="text-[#604CC3]">di situs kelas kami</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-light max-w-[500px] mx-auto md:mx-0">
            Halo, selamat datang di situs kelas kami! Pemahaman dalam
            mengeksplorasi berbagai topik menarik di kelas ini. Temukan
            pengetahuan baru dan tingkatkan keterampilan Anda bersama kami.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end relative">
          <img
            src="/hero.png"
            alt="Hero Section"
            className="hidden md:block absolute top-[-280px] bottom-0 left-0 right-0 max-w-full h-auto object-contain
                       md:max-w-[80%] lg:max-w-[100%] xl:max-w-[120%]
                       md:h-[400px] lg:h-[500px] xl:h-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
