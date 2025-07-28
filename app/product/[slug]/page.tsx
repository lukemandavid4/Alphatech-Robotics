"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/app/ui/cartContext/CartContext";
import { CartItem } from "@/app/ui/cartContext/CartContext";
import { useProduct } from "@/app/ui/productContext/ProductContext";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, ArrowLeft, Minus, Plus } from "lucide-react";

const ProductDetails = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { products } = useProduct();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    const productId = Number(slug);
    const product = products.find((p) => p.id === productId);
    setProduct(product);
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

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
    addToCart(product);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6 cursor-pointer"
      >
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
          <div>
            <Button
              onClick={() => handleAddToCart(product)}
              className="cursor-pointer bg-[var(--primary)] text-white hover:bg-blue-600 transition duration-300"
            >
              <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
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
