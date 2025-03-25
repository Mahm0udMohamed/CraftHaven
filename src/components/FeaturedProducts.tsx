import React from "react";
import { ProductCard } from "./ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    price: 89.99,
    artisan: "Emma Thompson",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Woven Wall Tapestry",
    price: 149.99,
    artisan: "Maria Garcia",
    image:
      "https://i.pinimg.com/originals/b8/2c/af/b82caf37fd1a39190892cd8f72780f73.jpg",
  },
  {
    id: 3,
    name: "Artisan Silver Necklace",
    price: 129.99,
    artisan: "Sophie Chen",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Handmade Leather Journal",
    price: 59.99,
    artisan: "James Wilson",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover unique handcrafted pieces from talented artisans in your
            community
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              artisan={product.artisan}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
