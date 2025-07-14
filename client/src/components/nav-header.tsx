import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black hover:scale-105 transition-transform duration-300 cursor-pointer">
              Puul
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-black hover:scale-105 transition-all duration-300 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("dashboard")}
              className="text-gray-700 hover:text-black hover:scale-105 transition-all duration-300 font-medium"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-black hover:scale-105 transition-all duration-300 font-medium"
            >
              Testimonials
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-black hover:scale-105 transition-all duration-300 font-medium"
              aria-label="Login to Puul"
            >
              Login
            </Button>
            <Button
              className="bg-black text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium"
              aria-label="Sign up for Puul"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-gray-200' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-black font-medium text-left transform hover:translate-x-2 transition-all duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("dashboard")}
              className="text-gray-700 hover:text-black font-medium text-left transform hover:translate-x-2 transition-all duration-200"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-black font-medium text-left transform hover:translate-x-2 transition-all duration-200"
            >
              Testimonials
            </button>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Button variant="ghost" className="justify-start hover:translate-x-1 transition-all duration-200">
                Login
              </Button>
              <Button className="bg-black text-white justify-start hover:translate-x-1 transition-all duration-200">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
