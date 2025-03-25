import React, { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "./ProductCard";

const CATEGORIES = [
  "All",
  "Jewelry",
  "Pottery",
  "Textiles",
  "Wood Crafts",
  "Home Decor",
  "Art Prints",
];

const PRICE_RANGES = [
  { label: "All Prices", value: "all" },
  { label: "Under $50", value: "0-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "Over $200", value: "200+" },
];

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Popular", value: "popular" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    price: 89.99,
    artisan: "Emma Thompson",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
    category: "Pottery",
  },
  {
    id: 2,
    name: "Woven Wall Tapestry",
    price: 149.99,
    artisan: "Maria Garcia",
    image:
      "https://i.pinimg.com/originals/b8/2c/af/b82caf37fd1a39190892cd8f72780f73.jpg",
    category: "Textiles",
  },
  {
    id: 3,
    name: "Artisan Silver Necklace",
    price: 129.99,
    artisan: "Sophie Chen",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    category: "Jewelry",
  },
  {
    id: 4,
    name: "Handmade Leather Journal",
    price: 59.99,
    artisan: "James Wilson",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    category: "Wood Crafts",
  },
  {
    id: 5,
    name: "Abstract Art Print",
    price: 79.99,
    artisan: "Alex Rivera",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
    category: "Art Prints",
  },
  {
    id: 6,
    name: "Macramé Plant Hanger",
    price: 45.99,
    artisan: "Luna Patel",
    image:
      "https://images.unsplash.com/photo-1622227056993-6e7f88420855?auto=format&fit=crop&q=80&w=800",
    category: "Home Decor",
  },
  {
    id: 7,
    name: "Stained Glass Suncatcher",
    price: 169.99,
    artisan: "David Kim",
    image:
      "https://images.unsplash.com/photo-1607975218223-94f82613e833?auto=format&fit=crop&q=80&w=800",
    category: "Home Decor",
  },
  {
    id: 8,
    name: "Hand-Painted Silk Scarf",
    price: 95.99,
    artisan: "Isabella Chen",
    image:
      "https://th.bing.com/th/id/OIP.u2pjgJIGUNvMoqO1qM4TSAHaJ4?rs=1&pid=ImgDetMain",
    category: "Textiles",
  },
];

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (max) {
        matchesPrice = product.price >= min && product.price <= max;
      } else {
        matchesPrice = product.price >= min;
      }
    }

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
      default:
        return b.id - a.id;
    }
  });

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-primary-500 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Price Range
        </h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                priceRange === range.value
                  ? "bg-primary-500 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Shop Handcrafted Treasures
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover unique pieces made with passion by local artisans
        </p>
      </div>

      {/* Search and Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products or artisans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div className="flex gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="md:hidden px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <FilterSection />
        </div>

        {/* Mobile Filters */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-opacity duration-200 ${
            isMobileFiltersOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 p-6 transform transition-transform duration-200 ${
              isMobileFiltersOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400"
            >
              <X className="w-6 h-6" />
            </button>
            <FilterSection />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                artisan={product.artisan}
                image={product.image}
              />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
