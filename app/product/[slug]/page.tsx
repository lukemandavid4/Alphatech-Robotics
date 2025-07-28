// app/product/[id]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/app/ui/cartContext/CartContext";
import { useProduct } from "@/app/ui/productContext/ProductContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
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

const ProductDetails = () => {
  const { slug } = useParams();
  const router = useRouter();
  const { products } = useProduct();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    console.log("Product ID from route:", slug);
    console.log("Products from context:", products);

    if (products && slug) {
      const found = products.find((p) => String(p.id) === String(slug));
      setProduct(found);
    }
  }, [slug, products]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => router.push("/shop")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

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

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      brand: product.brand,
    });
    toast.success(`${quantity} x ${product.name} added to cart`);
  };

  const updateQuantity = (newQty: number) => {
    if (newQty >= 1 && newQty <= product.stockCount) {
      setQuantity(newQty);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Button variant="ghost" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            {product.images?.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`w-20 h-20 border rounded-md overflow-hidden ${
                  i === activeImageIndex ? "border-primary" : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumb ${i}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <Badge variant={getBadgeVariant(product.badge)}>
              {product.badge}
            </Badge>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <p className="text-muted-foreground">{product.brand}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(4)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-4 items-center">
              <span className="text-3xl font-bold text-foreground">
                KSh {Number(product.price).toLocaleString()}
              </span>
              <span className="line-through text-muted-foreground">
                KSh {Number(product.originalPrice).toLocaleString()}
              </span>
            </div>
            <p className="text-green-600 font-semibold">
              Save KSh{" "}
              {(product.originalPrice - product.price).toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md border border-[var(--border)]">
              <Button
                variant="ghost"
                onClick={() => updateQuantity(quantity - 1)}
                disabled={quantity <= 1}
                className="cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="px-4">{quantity}</span>
              <Button
                variant="ghost"
                onClick={() => updateQuantity(quantity + 1)}
                disabled={quantity >= product.stockCount}
                className="cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
            </Button>
            <Button variant="outline">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="outline">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
