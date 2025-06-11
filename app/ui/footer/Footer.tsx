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
    <>
      <div className="flex flex-col gap-10 bg-[var(--tech-dark)] px-[10rem] mt-20 pt-12 pb-2">
        <div className="flex justify-between flex-wrap">
          <div
            className="flex flex-col"
            style={{ flexBasis: "calc(25% - 16px)" }}
          >
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
          <div
            className="flex flex-col"
            style={{ flexBasis: "calc(25% - 16px)" }}
          >
            <h1 className="text-white">Navigation</h1>
            <div className="text-[var(--muted-foreground)] flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-white transition duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{ flexBasis: "calc(25% - 16px)" }}
          >
            <h1 className="text-white">Account</h1>
            <Link
              href=""
              className="text-[var(--muted-foreground)] hover:text-white transition-colors duration-200"
            >
              My Account
            </Link>
            <Link
              href=""
              className="text-[var(--muted-foreground)] hover:text-white transition-colors duration-200"
            >
              Shopping Cart
            </Link>
          </div>
          <div
            style={{ flexBasis: "calc(25% - 16px)" }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-white">Stay Updated</h1>
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
          <p className="text-[var(--muted-foreground)]">
            &copy; {currentYear} Alphatech. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
