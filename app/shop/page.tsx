"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Filter, Grid, List, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/ui/cartContext/CartContext";
import { products } from "@/app/ui/data/productData";
import { useProduct } from "@/app/ui/productContext/ProductContext";
import { CartItem } from "@/app/ui/cartContext/CartContext";

const Shop = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { addToCart } = useCart();
  const { products } = useProduct();

  const categories = [
    "Smartphones",
    "Laptops",
    "Audio",
    "Accessories",
    "Storage",
    "Gaming",
    "Smart Home",
    "Wearables",
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

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
          selectedCategories.includes(product.category.toLowerCase())
        )
      : products;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Shop Electronics
            </h1>
            <p className="text-[var(--muted-foreground)]">
              Discover premium electronics and tech accessories
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 space-y-6">
              <Card className="border-[var(--input)]">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </h3>
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) =>
                              handleCategoryChange(category, checked as boolean)
                            }
                            className="border-[var(--primary)] text-white data-[state=checked]:bg-[var(--primary)] cursor-pointer"
                          />
                          <label
                            htmlFor={category}
                            className="text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[var(--input)] cursor-pointer hover:bg-[var(--input)] transition duration-300"
                    onClick={handleClearFilters}
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <p className="text-[var(--muted-foreground)] ">
                  Showing {products.length} of {products.length} products
                </p>
                <div className="flex items-center gap-4">
                  
                  <div className="flex border rounded-lg border-[var(--input)]">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none cursor-pointer hover:bg-[var(--input)] focus:bg-[var(--primary)] focus:text-white transition-all duration-300"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none cursor-pointer hover:bg-[var(--input)] focus:bg-[var(--primary)] focus:text-white transition-all duration-300"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="product-card group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className={viewMode === "list" ? "flex" : ""}>
                        {/* Image Section */}
                        <div
                          className={`relative ${
                            viewMode === "list" ? "w-48" : ""
                          }`}
                        >
                          <div
                            className={`bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden ${
                              viewMode === "list"
                                ? "h-48 rounded-l-lg"
                                : "aspect-square rounded-t-lg"
                            }`}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

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
                              className="absolute top-3 right-3 opacity-0 bg-[var(--primary)] text-white group-hover:opacity-100 transition-opacity duration-200"
                              onClick={(e) => {
                                e.preventDefault();
                                handleAddToCart(product);
                              }}
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          ) : (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                              <Badge
                                variant="destructive"
                                className="bg-amber-600"
                              >
                                Out of Stock
                              </Badge>
                            </div>
                          )}
                        </div>

                        {/* Details Section */}
                        <div
                          className={`p-6 ${
                            viewMode === "list" ? "flex-1" : ""
                          }`}
                        >
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
                                    i < Math.floor(product.rating)
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
                            className={`btn-hover ${
                              viewMode === "list" ? "w-auto" : "w-full"
                            } bg-[var(--primary)] text-white cursor-pointer hover:bg-blue-600 transition-colors duration-300`}
                            disabled={!product.inStock}
                            onClick={() =>
                              product.inStock && handleAddToCart(product)
                            }
                          >
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  {[1, 2, 3].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "default" : "outline"}
                      className={`border cursor-pointer ${
                        page === 1
                          ? "bg-[var(--primary)] text-white"
                          : "border-[var(--input)]"
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" disabled>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
