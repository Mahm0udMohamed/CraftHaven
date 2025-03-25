import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
  className?: string;
}

export function ThemeToggle({ isDark, toggle, className }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className={cn(
        'p-2 rounded-full transition-colors duration-200',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        'focus:outline-none focus:ring-2 focus:ring-primary-500',
        className
      )}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-yellow-500" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}