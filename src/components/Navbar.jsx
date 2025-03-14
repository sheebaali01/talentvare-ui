import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/icons/search.png";
import profile from "../assets/profile.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const links = [
    { id: 1, title: "Find Jobs", url: "/" },
    { id: 2, title: "Top Companies", url: "/" },
    { id: 3, title: "My Calendar", url: "/" },
    { id: 4, title: "Documents", url: "/" },
    { id: 5, title: "Messages", url: "/" },
    { id: 6, title: "Notifications", url: "/" },
  ];

  return (
    <nav className="flex items-center justify-between bg-white h-[70px] px-4 md:px-8 relative z-50">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-[41px] h-[38px]" loading="lazy"/>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.url}
              className={`text-[16px] transition-colors ${
                link.title === "Find Jobs"
                  ? "text-[#2C5FCC] font-semibold"
                  : "text-[#737A91] hover:text-black"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-5">
        {/* Search Bar */}
        <div className="w-[200px] lg:w-[261px] h-[39px] rounded-lg bg-[#F6F9FF] flex items-center px-4 gap-2">
          <img src={searchIcon} alt="Search" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="text-sm text-[#737A91] bg-transparent border-none outline-none w-full placeholder:text-[#737A91] placeholder:font-roman"
          />
        </div>

        {/* Resume Button */}
        <Button text="Resume Builder" />

        {/* Profile Picture */}
        <img
          src={profile}
          alt="Profile"
          className="w-[38px] h-[38px] rounded-full object-cover"
        />
      </div>

      {/* Mobile Icons */}
      <div className="md:hidden flex items-center gap-3">
        {/* Mobile Search Icon */}
        <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
          <Search size={22} className="text-gray-700" />
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md p-4 flex items-center gap-2 z-40">
          <img src={searchIcon} alt="Search" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="text-sm bg-transparent border-none outline-none w-full"
            autoFocus
          />
          <button onClick={() => setMobileSearchOpen(false)}>
            <X size={18} className="text-gray-500" />
          </button>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col gap-4 p-4 md:hidden z-30">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className={`text-[16px] ${
                link.title === "Find Jobs"
                  ? "text-[#2C5FCC] font-semibold"
                  : "text-[#737A91]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          {/* Resume Builder Button in Mobile */}
          <div className="mt-2">
            <Button text="Resume Builder" className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
