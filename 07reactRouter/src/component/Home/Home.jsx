import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* HERO SECTION */}
      <aside className="relative h-[600px] overflow-hidden rounded-lg sm:mx-16 mx-2">
        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-6 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="block text-3xl sm:text-4xl mt-2">
                Lorem Ipsum
              </span>
            </h2>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 text-white font-medium bg-orange-700 rounded-lg hover:bg-orange-800 transition"
            >
              Download now
            </Link>
          </div>
        </div>

        {/* Image 1 */}
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
          alt="image1"
          className="absolute top-10 left-10 w-64 rounded-lg"
        />

        {/* Image 2 */}
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
          alt="image2"
          className="absolute top-1/2 left-1/2 -translate-y-1/16 translate-x-8 w-40 rounded-lg"
        />
      </aside>
    </div>
  );
}
