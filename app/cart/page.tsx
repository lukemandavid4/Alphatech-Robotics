"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/app/ui/cartContext/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const page = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col">
        <main className="flex-1 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <ShoppingBag className="w-24 h-24 text-[var(--muted-foreground)] mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                Your cart is empty
              </h1>
              <p className="text-[var(--muted-foreground)] mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button asChild className="bg-[var(--primary)] text-white">
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className=" flex flex-col">
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.brand}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-foreground">
                            KSh {item.price.toLocaleString()}
                          </span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-[var(--muted-foreground)] line-through">
                              KSh {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[var(--destructive)] hover:text-[var(--destructive)]"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>KSh {getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>KSh {getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/shop">Continue Shopping</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full text-[var(--destructive)] hover:text-[var(--destructive)] "
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
