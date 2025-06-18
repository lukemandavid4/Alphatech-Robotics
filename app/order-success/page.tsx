import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="text-center border border-[var(--input)]">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <CardTitle className="text-3xl font-bold">
                Order Placed Successfully!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-[var(--muted-foreground)] ">
                Thank you for your order. We'll send you a confirmation email
                shortly.
              </p>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-[var(--muted-foreground)] mb-2">
                  Order Number
                </p>
                <p className="font-mono text-lg font-semibold">
                  #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-[var(--primary)] hover:bg-blue-600 transition duration-300 text-white"
                  size="lg"
                >
                  <Link href="/shop">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-[var(--input)] hover:bg-[var(--border)] transition duration-300"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccess;
