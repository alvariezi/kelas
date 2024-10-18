import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";

const MessageForm = () => {
  const [state, handleSubmit] = useForm("xgvwbger");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="text-center px-4 mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6">MENFESS</h1>
        <p className="text-lg sm:text-xl font-light">
          Platform anonim di mana kamu bisa mengirim pesan atau pendapat <br />
          yang kemudian akan dipublikasikan dengan mudah dan aman.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-[#E9E5FF] text-gray-800 rounded-xl p-8 w-full max-w-lg shadow-xl">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="from" className="block text-lg font-semibold">
                From
              </label>
              <input
                type="text"
                id="from"
                name="from"
                className="w-full p-3 mt-2 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 border border-gray-300"
                placeholder="Masukkan nama pengirim"
                required
              />
              <ValidationError
                prefix="From"
                field="from"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="to" className="block text-lg font-semibold">
                To
              </label>
              <input
                type="text"
                id="to"
                name="to"
                className="w-full p-3 mt-2 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 border border-gray-300"
                placeholder="Masukkan nama penerima"
                required
              />
              <ValidationError prefix="To" field="to" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 mt-2 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 border border-gray-300"
                placeholder="Tulis pesanmu di sini"
                rows="5"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.instagram.com/xii.pplg2/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-all duration-500 ease-out relative group">
                <div className="absolute inset-0 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                <IoLogoInstagram className="text-2xl text-white z-10 relative group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500 ease-in-out" />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@pepeelge2_?lang=id-ID"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-all duration-500 ease-out relative group">
                <div className="absolute inset-0 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                <IoLogoTiktok className="text-2xl text-white z-10 relative group-hover:-rotate-12 group-hover:scale-125 transition-transform duration-500 ease-in-out" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold text-green-600">
              Menfess berhasil dikirim!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageForm;
