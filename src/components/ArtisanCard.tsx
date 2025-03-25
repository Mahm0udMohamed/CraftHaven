import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ArtisanCardProps {
  image: string;
  name: string;
  specialty: string;
  className?: string;
}

export function ArtisanCard({ image, name, specialty, className }: ArtisanCardProps) {
  return (
    <div className={cn(
      "group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
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
        <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{specialty}</p>
        <a
          href="#"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          View Profile
          <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}