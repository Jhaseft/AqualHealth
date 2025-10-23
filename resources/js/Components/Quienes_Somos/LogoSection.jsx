import React from "react";
import { Link } from "@inertiajs/react";

export default function LogoSection({
  href = "", // destino al hacer clic
  src,
  alt = "Logo",
  height = "h-32 md:h-48", // clases tailwind para altura
  className = "",
}) {
  return (
    <div className={`bg-white p-6 md:p-8 h-full flex items-center justify-center ${className}`}>
      <Link
        href={href}
        className="flex items-center transform transition duration-300 hover:scale-105 hover:brightness-110"
      >
        <img
          src={src}
          alt={alt}
          className={`${height} rounded-xl shadow-md group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-500`}
        />
      </Link>
    </div>
  );
}
