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
          className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-blue-200 z-50"
        >

          <ul className="flex flex-col text-blue-800 py-4 space-y-1 font-medium">

  
            {menuItems.map((item) => (
              <li key={item.name} className="w-full">
                {/* ✅ Si NO tiene submenu → es un link normal */}
                {!item.submenu ? (
                  <a
                    href={item.link}
                    className="block w-full px-4 py-2 rounded hover:bg-blue-50 transition-colors text-left"
                  >
                    {item.name}
                  </a>
                ) : (
                  <>
                    {/* ✅ Si tiene submenu → toggle */}
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex justify-between items-center px-4 py-2 rounded hover:bg-blue-50 transition-colors"
                    >
                      {item.name}
                      <span className="ml-2 text-sm">
                        {activeSubmenu === item.name ? "▲" : "▼"}
                      </span>
                    </button>

                    {/* Submenú animado */}
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden mt-1 space-y-1 px-6"
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
                  </>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
