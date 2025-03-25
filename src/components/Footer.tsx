import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const FOOTER_LINKS = {
  about: [
    { label: 'About Us', href: '#' },
    { label: 'Our Mission', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Safety Center', href: '#' },
    { label: 'Community Guidelines', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
};

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <h3 className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400">
                CraftHaven
              </h3>
            </a>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Join our community of artisans and craft enthusiasts. Get weekly updates on new products,
              artisan stories, and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1">
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg 
                         transition-colors duration-200 whitespace-nowrap text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-8">
            <div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4">
                About
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.about.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 
                               dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Support
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 
                               dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 
                               dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 
                           transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} CraftHaven. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}