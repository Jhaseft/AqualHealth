

export default function DesktopNav({ links }) {
  return (
    <nav className="hidden md:flex items-center space-x-8 font-medium">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="relative group text-lg text-gray-800 hover:text-blue-600 transition-colors px-2 py-1"
        >
          {link.name}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}

     
    </nav>
  );
}
