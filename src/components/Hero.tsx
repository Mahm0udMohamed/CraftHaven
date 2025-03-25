import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-craft-light-bg dark:bg-craft-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8">
            Discover Handmade Treasures from{" "}
            <span className="text-primary-500 dark:text-primary-400">
              Local Artisans
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10">
            Support local creators and find unique, handcrafted pieces that tell
            a story. Each item is made with passion and skill by artisans in
            your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border border-primary-500 dark:border-primary-400 text-base font-medium rounded-md text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Join as an Artisan
            </a>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A704A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </div>
  );
}
