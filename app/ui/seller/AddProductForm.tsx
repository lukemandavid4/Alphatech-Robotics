"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProduct } from "@/app/ui/productContext/ProductContext";
import { toast } from "sonner";

interface ProductFormData {
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  stock: string;
}

export const AddProductForm = () => {
  const { addProduct } = useProduct();
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    originalPrice: "",
    description: "",
    category: "",
    brand: "",
    image: "",
    stock: "",
  });

  const handleInputChange = (field: keyof ProductFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.price || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    const existingProducts = JSON.parse(
      localStorage.getItem("sellerProducts") || "[]"
    );

    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price),
      originalPrice:
        parseFloat(formData.originalPrice) || parseFloat(formData.price),
      stock: parseInt(formData.stock) || 0,
      createdAt: new Date().toISOString(),
      rating: 0,
      reviews: 0,
      badge: undefined,
      inStock: (parseInt(formData.stock) || 0) > 0,
    };

    addProduct(newProduct);
    // Save to localStorage
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem("sellerProducts", JSON.stringify(updatedProducts));

    toast.success("Product added successfully!");

    setFormData({
      name: "",
      price: "",
      originalPrice: "",
      description: "",
      category: "",
      brand: "",
      image: "",
      stock: "",
    });
  };

  return (
    <Card className="border border-[var(--border)]">
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter product name"
                required
                className="border border-[var(--border)]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                value={formData.brand}
                onChange={(e) => handleInputChange("brand", e.target.value)}
                placeholder="Enter brand name"
                className="border border-[var(--border)]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="0.00"
                required
                className="border border-[var(--border)]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="originalPrice">Original Price</Label>
              <Input
                id="originalPrice"
                type="number"
                step="0.01"
                value={formData.originalPrice}
                onChange={(e) =>
                  handleInputChange("originalPrice", e.target.value)
                }
                placeholder="0.00"
                className="border border-[var(--border)]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange("category", value)}
              >
                <SelectTrigger className="border border-[var(--input)] cursor-pointer">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="border border-[var(--border)] bg-white">
                  <SelectItem value="smartphones" className="cursor-pointer">
                    Smartphones
                  </SelectItem>
                  <SelectItem value="laptops" className="cursor-pointer">
                    Laptops
                  </SelectItem>
                  <SelectItem value="audio" className="cursor-pointer">
                    Audio
                  </SelectItem>
                  <SelectItem value="accessories" className="cursor-pointer">
                    Accessories
                  </SelectItem>
                  <SelectItem value="storage" className="cursor-pointer">
                    Storage
                  </SelectItem>
                  <SelectItem value="gaming" className="cursor-pointer">
                    Gaming
                  </SelectItem>
                  <SelectItem value="smart home" className="cursor-pointer">
                    Smart Home
                  </SelectItem>
                  <SelectItem value="wearables" className="cursor-pointer">
                    Wearables
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="stock">Stock Quantity</Label>
              <Input
                id="stock"
                type="number"
                value={formData.stock}
                onChange={(e) => handleInputChange("stock", e.target.value)}
                placeholder="0"
                className="border border-[var(--border)]"
              />
            </div> */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="border border-[var(--border)]"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Enter product description"
                className="border border-[var(--border)] w-full rounded-[0.5rem] p-2 resize-none h-[8rem]"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-[var(--primary)] cursor-pointer text-white hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
