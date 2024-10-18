import React from "react";

const ProfileSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#E9E5FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Profil
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Kunjungi profil guru dan siswa PPLG lewat card di bawah ini untuk
            mengenal mereka lebih dekat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card Guru */}
          <ProfileCard
            image="/guru.png"
            title="Guru Pengembangan Perangkat Lunak dan Gim"
            description="Temukan profil para ahli yang mengajarkan pengembangan perangkat lunak dan gim di sini."
          />

          {/* Card Siswa */}
          <ProfileCard
            image="/siswa.png"
            title="Siswa Pengembangan Perangkat Lunak dan Gim"
            description="Temukan profil siswa di bidang pengembangan perangkat lunak dan gim di sini."
          />
        </div>
      </div>
    </section>
  );
};

const ProfileCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-[20px] sm:rounded-[30px] overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          {description}
        </p>
        <div className="flex justify-end">
          <button className="bg-[#6B46E4] text-white w-full sm:w-auto px-6 py-2 sm:py-3 rounded-[15px] text-sm sm:text-base hover:bg-black transition duration-300">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
