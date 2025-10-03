
import { useState } from "react";

export default function MobileNav({ links,  menuOpen, setMenuOpen }) {
  const [userMenu, setUserMenu] = useState(false);

  return (
    <div
      className={`absolute top-18 left-0 w-full bg-white border-t border-gray-200 shadow-xl overflow-hidden transition-all duration-300 md:hidden ${
        menuOpen ? "max-h-96 animate-fade-slide" : "max-h-0"
      }`}
    >
      <div className="flex flex-col p-4 space-y-3">
        {/* Links principales */}
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block text-lg font-medium text-gray-800 hover:text-white hover:bg-blue-600 rounded-lg px-3 py-2 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

      </div>
    </div>
  );
}
