import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import ReactGA from 'react-ga4';

// Function to track link clicks
function trackNavbarLinkClick(label) {
    ReactGA.event({
      category: 'Navbar',
      action: 'Link Clicked',
      label: label, 
    });
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#212121] text-white p-4 relative z-50 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={"/"} onClick={()=>trackNavbarLinkClick("Home")}>
                <img
                    src="/images/AppLogo/zymo2.jpg"
                    alt="zymologo"
                    className="h-14 mix-blend-screen"
                />
                </Link>

                {/* Hamburger Button */}
                <button
                    className="md:hidden z-50"
                    onClick={() => {
                        setIsOpen(!isOpen); 
                    }}
                                >
                    {isOpen ? (
                        <X className="w-6 h-6 " />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>

                {/* Mobile Menu (Right Sidebar) */}
                <div
                    className={`fixed top-0 right-0 w-2/3 h-full bg-darkGrey text-[#faffa4] shadow-lg transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
                >
                    <ul className="mt-16 space-y-6 text-lg px-8">
                        <li>
                            <Link
                                to="/about-us"
                                className="hover:text-[#faffa4]"
                                onClick={()=>trackNavbarLinkClick("About Us")}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="hover:text-[#faffa4]" onClick={()=>trackNavbarLinkClick("Blogs")}>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/career" className="hover:text-[#faffa4]" onClick={()=>trackNavbarLinkClick("Career")}>
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact-us"
                                className="hover:text-[#faffa4]"
                                onClick={()=>trackNavbarLinkClick("Contact Us")}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                        <Link to="/profile" onClick={()=>trackNavbarLinkClick("Profile")}>
                            <IoPersonCircleOutline size={24} className="text-[#faffa4] cursor-pointer" />
                        </Link>
                    </li>
                    </ul>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm">
                    <li>
                        <Link to="/about-us" className="hover:text-[#faffa4]" onClick={()=>trackNavbarLinkClick("About Us")}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="hover:text-[#faffa4]" onClick={()=>trackNavbarLinkClick("Blogs")}>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/career" className="hover:text-[#faffa4]" onClick={()=>trackNavbarLinkClick("Career")}>
                            Career
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="hover:text-[#faffa4]" onClick={()=>trackNavbarLinkClick("Contact Us")}>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" onClick={()=>trackNavbarLinkClick("Profile dashboard")}>
                            <IoPersonCircleOutline size={24} className="text-[#faffa4] cursor-pointer" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
