"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const [tiltStyle, setTiltStyle] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = event.clientX - innerWidth / 2;
      const y = event.clientY - innerHeight / 2;

      const maxTilt = 45;
      const tiltX = (y / innerHeight) * maxTilt;
      const tiltY = -(x / innerWidth) * maxTilt;

      setTiltStyle({
        transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kaboompics.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black filter blur-sm"></div>
      </div>

      <div className="flex flex-col lg:flex-row flex-col-reverse justify-center items-center gap-10 lg:gap-0 z-10 p-6">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-center text-balance text-4xl font-bold tracking-light text-neutral-100 sm:text-6xl">
            A life remembered is a life celebrated.
          </h1>
          <div className="flex gap-5 mt-10">
            <button className="rounded-md bg-neutral-100 hover:bg-neutral-200 duration-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm">
              Create an account
            </button>
            <button className="px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
              See how it works
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div
            className="relative rounded-xl transition duration-150 hover:brightness-125 hover:cursor-pointer border-4 border-neutral-900 shadow-2xl"
            ref={containerRef}
            style={{
              backgroundImage: "url('/tiles.jpg')",
              perspective: "1000px",
              ...tiltStyle,
            }}
          >
            <span className="absolute pt-1 left-1/2 -translate-x-1/2 text-base font-semibold leading-6">
              Hystoria
            </span>
            <Image src="/qrcode.svg" alt="qr-code" width={296} height={296} />
          </div>
        </div>
      </div>
    </section>
  );
}
