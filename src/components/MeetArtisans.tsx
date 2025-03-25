import React from 'react';
import { ArtisanCard } from './ArtisanCard';

const FEATURED_ARTISANS = [
  {
    id: 1,
    name: "Emma Thompson",
    specialty: "Ceramic Artist",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Maria Garcia",
    specialty: "Textile Weaver",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Sophie Chen",
    specialty: "Jewelry Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "James Wilson",
    specialty: "Leather Craftsman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  }
];

export function MeetArtisans() {
  return (
    <section className="py-16 bg-white dark:bg-craft-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Artisans
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know the talented creators behind our handcrafted treasures
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_ARTISANS.map((artisan) => (
            <ArtisanCard
              key={artisan.id}
              name={artisan.name}
              specialty={artisan.specialty}
              image={artisan.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}