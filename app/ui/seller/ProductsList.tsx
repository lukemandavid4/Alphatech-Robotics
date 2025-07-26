import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2, Eye } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  brand: string;
  stock: number;
  image: string;
  description: string;
  createdAt: string;
}

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("sellerProducts");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("sellerProducts", JSON.stringify(updatedProducts));
    toast.success("Product deleted successfully!");
  };

  if (products.length === 0) {
    return (
      <Card className="border border-[var(--border)]">
        <CardContent className="py-12 text-center">
          <p className="text-[var(--muted-foreground)]">
            No products added yet. Start by adding your first product!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-[var(--border)]">
      <CardHeader>
        <CardTitle>My Products ({products.length})</CardTitle>
      </CardHeader>
      <CardContent className="border-[var(--muted-foreground)]">
        <div className="overflow-x-auto border-[var(--muted-foreground)]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      )}
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-">
                          {product.brand}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border border-[var(--border)]">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">${product.price}</p>
                      {product.originalPrice > product.price && (
                        <p className="text-sm text-[var(--muted-foreground)] line-through">
                          ${product.originalPrice}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={product.stock > 0 ? "default" : "destructive"}
                    >
                      {product.stock} units
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={product.stock > 0 ? "default" : "secondary"}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
