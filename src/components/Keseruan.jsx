import React, { useState, useEffect } from "react";

const Keseruan = () => {
  const [randomKekompakan, setRandomKekompakan] = useState(0);
  const [randomTataKrama, setRandomTataKrama] = useState(0);
  const [randomKelas, setRandomKelas] = useState(0);

  useEffect(() => {
    const generateRandomNumber = (min, max) => {
      return (Math.random() * (max - min) + min).toFixed(2);
    };

    const kekompakanInterval = setInterval(() => {
      setRandomKekompakan(generateRandomNumber(0, 1));
    }, 100);

    const tataKramaInterval = setInterval(() => {
      setRandomTataKrama(generateRandomNumber(0, 1));
    }, 100);

    const kelasInterval = setInterval(() => {
      setRandomKelas(generateRandomNumber(0, 1));
    }, 100);

    setTimeout(() => {
      clearInterval(kekompakanInterval);
      clearInterval(tataKramaInterval);
      clearInterval(kelasInterval);
      setRandomKekompakan(0.01);
      setRandomTataKrama(0.5);
      setRandomKelas(34);
    }, 5000);

    return () => {
      clearInterval(kekompakanInterval);
      clearInterval(tataKramaInterval);
      clearInterval(kelasInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
        Keseruan <span className="text-[#604CC3]">Kelas</span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-around w-full max-w-4xl gap-8 sm:gap-4">
        <StatItem label="Kekompakan" value={randomKekompakan} unit="%" />
        <StatItem label="Tata Krama" value={randomTataKrama} unit="%" />
        <StatItem label="Jumlah Siswa" value={randomKelas} unit="" />
      </div>

      <div className="w-full max-w-4xl h-[1px] bg-[#D4D4D4] mt-10"></div>
    </div>
  );
};

const StatItem = ({ label, value, unit }) => (
  <div className="flex flex-col items-center mb-6 sm:mb-0">
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
      {value}
      {unit && <span className="text-[#604CC3]">{unit}</span>}
    </span>
    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#9A9A9A] mt-2 text-center">
      {label}
    </span>
  </div>
);

export default Keseruan;
