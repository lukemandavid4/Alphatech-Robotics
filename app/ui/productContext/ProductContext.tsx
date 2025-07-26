"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { CartItem } from "../cartContext/CartContext"; // Reuse type

type Product = Omit<CartItem, "quantity"> & {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
  brand: string;
  image: string;
  stock: number;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
};

type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("sellerProducts");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  const addProduct = (product: Product) => {
    setProducts((prev) => {
      const updated = [...prev, product];
      localStorage.setItem("sellerProducts", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProduct must be used within ProductProvider");
  return context;
};
