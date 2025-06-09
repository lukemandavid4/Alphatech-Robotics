// components/Layout.tsx
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { CartProvider } from "./cartContext/CartContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
};

export default Layout;
