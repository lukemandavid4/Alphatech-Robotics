import Link from "next/link";
import React from "react";
import { FiCpu } from "react-icons/fi";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const Header = () => {
  return (
    <div className="font-quanta h-[4rem] flex items-center px-[10rem] justify-between border-b-[1px] border-b-[var(--border)]">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-[1.5rem] font-bold"
      >
        <span className="text-[var(--primary)]">
          <FiCpu />
        </span>
        <h1>AlphaTech</h1>
      </Link>
      <div className="text-[var(--muted-foreground)] flex gap-8">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-[var(--primary)] transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex border-2 border-[var(--input)] gap-2 px-2 py-1 text-[var(--muted-foreground)] items-center rounded-[0.5rem] focus-within:border-[var(--primary)] w-1/4">
        <Search className="w-[1.2rem] h-[1.2rem]" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for electronics"
          className="mt-1.5 outline-0"
        />
      </div>
      <div className="flex items-center gap-8">
        <Link
          href="/account"
          className="flex items-center gap-2 px-2 py-1 hover:bg-[var(--muted)] rounded-[0.5rem]"
        >
          <User className="w-[1.2rem] h-[1.2rem]" />
          <span className="mt-1.5">Account</span>
        </Link>
        <Link href="">
          <ShoppingCart className="w-[1.2rem] h-[1.2rem]" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
