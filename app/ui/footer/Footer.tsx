import React from "react";
import Link from "next/link";
import { FiCpu } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <footer className="bg-[var(--tech-dark)]">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 pb-2">
        <div className="flex justify-between flex-wrap gap-8 md:gap-0">
          <div className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
            <Link
              href="/"
              className="flex items-center gap-2 text-[1.5rem] font-bold"
            >
              <span className="text-[var(--primary)]">
                <FiCpu />
              </span>
              <span className="text-white">AlphaTech</span>
            </Link>
            <p className="text-[var(--muted-foreground)]">
              Your trusted destination for premium electronics and cutting-edge
              technology. Quality products, fast shipping, and exceptional
              customer service.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
            <h1 className="text-white font-semibold">Navigation</h1>
            <div className="text-[var(--muted-foreground)] flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-white w-fit transition duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
            <h1 className="text-white font-semibold">Account</h1>
            <Link
              href=""
              className="text-[var(--muted-foreground)] w-fit hover:text-white transition-colors duration-200"
            >
              My Account
            </Link>
            <Link
              href=""
              className="text-[var(--muted-foreground)] w-fit hover:text-white transition-colors duration-200"
            >
              Shopping Cart
            </Link>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
            <h1 className="text-white font-semibold">Stay Updated</h1>
            <p className="text-[var(--muted-foreground)]">
              Get the latest deals and tech news delivered to your inbox.
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="border border-[var(--muted-foreground)] p-2 rounded-[0.5rem] text-[var(--muted-foreground)]"
            />
            <button
              type="submit"
              className="bg-[var(--primary)] text-white w-full py-2 rounded-[0.5rem] cursor-pointer hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
        <hr className="text-[var(--muted-foreground)]" />
        <div>
          <p className="text-[var(--muted-foreground)] text-center md:text-start">
            &copy; {currentYear} Alphatech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
