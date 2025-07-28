"use client";
import { useState } from "react";
import Link from "next/link";
import { Cpu, Search, ShoppingCart, Menu, X, User, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/app/ui/cartContext/CartContext";
import { SignedIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalItems } = useCart();
  const { isSignedIn, user } = useUser();
  const role = user?.publicMetadata?.role;
  const router = useRouter();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchQuery.trim();
    if (query.length) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/shop");
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white font-quanta shadow-sm border-b-[var(--border)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[var(--primary)]">
              <Cpu />
            </span>
            <span className="text-xl font-bold text-foreground">AlphaTech</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <form
            className="hidden lg:flex flex-1 max-w-md mx-8"
            onSubmit={handleSearch}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)] w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for electronics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-full border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none focus:ring-0 focus-visible:ring-0"
              />
            </div>
          </form>
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <Link
                href="/account"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-5 h-5" />
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="text-white bg-[var(--primary)] hover:bg-black transition-colors duration-200 font-medium px-8 py-1 flex items-center space-x-2 rounded-[0.4rem]"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Login</span>
              </Link>
            )}
            <SignedIn>
              {role === "admin" && (
                <Button className="cursor-pointer">
                  <Link href="/seller-dashboard" className="flex gap-4">
                    <Store />
                    <span>Seller</span>
                  </Link>
                </Button>
              )}
            </SignedIn>
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--primary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        <div className="lg:hidden py-3 border-t">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search for electronics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 w-full border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t py-3">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
