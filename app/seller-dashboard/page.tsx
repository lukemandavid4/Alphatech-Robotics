"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddProductForm } from "@/app/ui/seller/AddProductForm";
import { OrdersList } from "@/app/ui/seller/OrdersList";
import { ProductsList } from "@/app/ui/seller/ProductsList";
import { Package, Plus, ShoppingCart } from "lucide-react";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Seller Dashboard
          </h1>

          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="products" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                My Products
              </TabsTrigger>
              <TabsTrigger
                value="add-product"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Product
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Orders
              </TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-6">
              <ProductsList />
            </TabsContent>

            <TabsContent value="add-product" className="mt-6">
              <AddProductForm />
            </TabsContent>

            <TabsContent value="orders" className="mt-6">
              <OrdersList />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
