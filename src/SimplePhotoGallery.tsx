import React, { useState } from "react";
import { galleryImages } from "./data"; // adjust path if needed

export default function SimplePhotoGallery() {
  const images = galleryImages;
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (images.length === 0) {
    return (
      <div className="bg-gray-50 shadow-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-3">Photo Gallery</h3>
        <p className="text-gray-600">No images added yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 shadow-md rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3"></h3>

      {/* Slider */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
        >
          ›
        </button>
      </div>
      <p className="text-gray-600 mb-4 mt-4">
        Memorable moments from{" "}
        <strong>projects, humanitarian efforts, and events</strong>.
      </p>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={images[current]}
              alt="Large view"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-white/90 text-black px-3 py-1 rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
