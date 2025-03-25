import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  artisan: string;
  className?: string;
}

export function ProductCard({ image, name, price, artisan, className }: ProductCardProps) {
  return (
    <div className={cn(
      "group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1",
      className
    )}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">by {artisan}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
            ${price.toFixed(2)}
          </span>
          <button
            className="flex items-center justify-center p-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}