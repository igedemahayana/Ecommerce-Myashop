// import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoverredLink, setHoverredLink] = useState(null);

  const navLinks = ["Home", "Shop", "Collection", "Sale", "Deals"];
  return (
    <nav className="relative z-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex gap-4">
            <h1 className="text-lg text-blue-500 font-medium">Myaecommerce</h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex gap-8 lg:gap-12 text-white">
              {navLinks.map((link) => (
                <a
                  href="#"
                  key="{link}"
                  onClick={() => setActiveLink(link)}
                  onMouseEnter={() => setHoverredLink(link)}
                  onMouseLeave={() => setHoverredLink(null)}
                  className={`relative font-medium transition-opacity hover:opacity-70 ${activeLink === link ? "opacity-100" : "opacity-80"}`}
                >
                  {link}
                  {(hoverredLink === link || activeLink) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full animate-fade-in">
                      hahahaha
                    </span>
                  )}
                </a>
              ))}
              ;
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
