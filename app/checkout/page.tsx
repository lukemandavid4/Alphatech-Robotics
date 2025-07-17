"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/app/ui/cartContext/CartContext";
import { ArrowLeft, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handlePlaceOrder = async () => {
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/mpesa/stk-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
          amount: getTotalPrice(),
          accountReference: "OnlineStore",
          transactionDesc: "Purchase from e-commerce site",
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "STK Push sent! Please check your phone to complete the payment."
        );
        clearCart();
        router.push("/order-success");
      } else {
        console.error(result.error);
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/cart">
                <ArrowLeft className="w-4 h-4" />
                Back to Cart
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              {/* Shipping Information */}
              <Card className="border border-[var(--border)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col w-full space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="border border-[var(--border)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="border border-[var(--border)]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border border-[var(--border)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber">
                      Phone Number (Safaricom)
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="0712345678"
                      className="border border-[var(--border)]"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St"
                      className="border border-[var(--border)]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="Nairobi"
                        className="border border-[var(--border)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">County</Label>
                      <Input
                        id="state"
                        placeholder="Nairobi"
                        className="border border-[var(--border)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Postal Code</Label>
                      <Input
                        id="zipCode"
                        placeholder="00100"
                        className="border border-[var(--border)]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="bg-[var(--primary)] rounded-[0.5rem] text-[0.8rem] font-semibold text-white w-full py-[0.5rem] cursor-pointer hover:bg-blue-600 transition duration-300">
                      Save Address
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24 border border-[var(--border)]">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-[var(--muted-foreground)] ">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium">
                          KSh {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>KSh {getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>KSh 0</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>KSh {getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-[var(--primary)] text-white cursor-pointer hover:bg-blue-600 transition duration-300"
                    size="lg"
                    onClick={handlePlaceOrder}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Place Order"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
