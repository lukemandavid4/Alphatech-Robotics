"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Heart,
  Share2,
  Minus,
  Plus,
} from "lucide-react";
import { CartItem, useCart } from "@/app/ui/cartContext/CartContext";
import { toast } from "sonner";
import { useProduct } from "@/app/ui/productContext/ProductContext";

const ProductDetails = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { addToCart } = useCart();
  const { products } = useProduct();

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
    addToCart(product);
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Sale":
        return "destructive";
      case "New":
        return "default";
      case "Best Seller":
        return "secondary";
      default:
        return "outline";
    }
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            {filteredProducts.map((product) => (
              <div key={product.id} className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Product Info */}
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="space-y-6"
                // className="product-card group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 py-0"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {product.badge && (
                      <Badge
                        variant={getBadgeVariant(product.badge)}
                        className="absolute top-3 left-3 bg-amber-600 text-white border-0"
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <span className="text-sm text-muted-foreground">
                      {product.category}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {product.brand}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <CardContent className="p-0">
                  {/* Badge */}
                  {product.badge && (
                    <Badge
                      variant={getBadgeVariant(product.badge)}
                      className="absolute top-3 left-3 bg-amber-600 text-white border-0"
                    >
                      {product.badge}
                    </Badge>
                  )}

                  {/* Add to Cart Floating */}
                  {product.inStock ? (
                    <Button
                      size="sm"
                      className="absolute top-3 right-3 opacity-0 bg-[var(--primary)] text-white group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  ) : (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                      <Badge variant="destructive" className="bg-amber-600">
                        Out of Stock
                      </Badge>
                    </div>
                  )}

                  {/* Details Section */}
                  {/* Category */}
                  <p className="text-xs text-[var(--muted-foreground)] mb-2 uppercase tracking-wide">
                    {product.category}
                  </p>

                  {/* Name */}
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(4.5)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[var(--muted-foreground)]">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold">
                      KSh {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice &&
                      product.originalPrice > product.price && (
                        <span className="text-sm text-[var(--muted-foreground)] line-through">
                          KSh {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                  </div>

                  {/* Add to Cart Button (Bottom) */}
                  <Button
                    className={`btn-hover bg-[var(--primary)] text-white cursor-pointer hover:bg-blue-600 transition-colors duration-300`}
                    disabled={!product.inStock}
                    onClick={() => product.inStock && handleAddToCart(product)}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
