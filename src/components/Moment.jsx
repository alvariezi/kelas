import React, { useState } from "react";

const moments = [
  {
    id: 1,
    image: "/1.png",
    title: "Moment 1",
    date: "10 September 2023",
  },
  {
    id: 2,
    image: "/2.png",
    title: "Moment 2",
    date: "11 September 2023",
  },
  {
    id: 3,
    image: "/3.png",
    title: "Moment 3",
    date: "12 September 2023",
  },
  {
    id: 4,
    image: "/4.png",
    title: "Moment 4",
    date: "13 September 2023",
  },
  {
    id: 5,
    image: "/5.png",
    title: "Moment 5",
    date: "14 September 2023",
  },
  {
    id: 6,
    image: "/6.png",
    title: "Moment 6",
    date: "15 September 2023",
  },
  {
    id: 7,
    image: "/7.png",
    title: "Moment 7",
    date: "16 September 2023",
  },
  {
    id: 8,
    image: "/8.png",
    title: "Moment 8",
    date: "17 September 2023",
  },
  {
    id: 9,
    image: "/9.png",
    title: "Moment 9",
    date: "18 September 2023",
  },
];

const MomentSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Header text */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Moment
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
          Kalian bisa kunjungi card di bawah ini untuk melihat moment - moment
          pplg
        </p>
      </div>

      {/* Grid card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {moments.map((moment) => (
          <div
            key={moment.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={moment.image}
              alt={moment.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover cursor-pointer"
              onClick={() => openPopup(moment.image)}
            />
            <div className="p-4">
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {moment.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {moment.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* "See More" section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-14 space-y-4 sm:space-y-0">
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center sm:text-left">
          Lihat moment - moment <span className="text-[#604CC3]">lainnya</span>
        </p>
        <button className="bg-[#604CC3] text-white w-full sm:w-auto px-6 py-2 rounded-[15px] hover:bg-black transition duration-300 text-sm sm:text-base">
          Lihat Selengkapnya
        </button>
      </div>

      {/* Pop-up Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-2 sm:p-4 rounded-lg max-w-3xl w-full">
            <img
              src={selectedImage}
              alt="Selected Moment"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <button
              className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-300 text-gray-800 rounded-full p-2 text-sm sm:text-base"
              onClick={closePopup}
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MomentSection;
