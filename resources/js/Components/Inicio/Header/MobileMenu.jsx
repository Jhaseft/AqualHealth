import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MobileMenu({ isOpen, menuItems }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full right-0 md:right-auto md:left-0 w-64 md:w-80 bg-white shadow-lg border border-blue-200 rounded-md z-50"

        >
          {/*Itera sobre menuItems y crea un botón por cada item. */}
          <ul className="flex flex-col items-end text-blue-800 py-4 space-y-2 font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full">
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className="w-full flex justify-between items-center px-4 py-2 rounded hover:bg-blue-50 transition-colors"
                >
                  {item.name}
                  {item.submenu && (
                    <span className="ml-2 text-sm">
                      {activeSubmenu === item.name ? "▲" : "▼"}
                    </span>
                  )}
                </button>

                {/* Submenú animado */}
                <AnimatePresence>
                  {activeSubmenu === item.name && item.submenu && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden mt-1 space-y-1 px-4"
                    >
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.link}
                            className="block text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
