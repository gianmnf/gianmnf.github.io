'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden p-8 space-y-6 border border-white/20">
        <div className="flex justify-center">
          <div className="relative">
            {/* Cat SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
              <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path>
              <path d="M8 14v.5"></path>
              <path d="M16 14v.5"></path>
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
            </svg>
            <div className="absolute -top-1 -right-1 bg-amber-400 rounded-full p-1">
              <div className="h-3 w-3 rounded-full bg-white animate-custom-pulse"></div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">Meow-velous Portfolio</h1>

        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            Awesome Portfolio coming soon, stay tuned!
          </p>
          <p className="text-sm text-gray-500">
            Currently chasing inspiration and yarn balls...
          </p>
        </div>

        <div className="pt-4 flex justify-center space-x-4">
          {/* GitHub link */}
          <a href="https://github.com/gianmnf" className="text-gray-600 hover:text-gray-900 transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>

          {/* LinkedIn link */}
          <a href="https://linkedin.com/in/gmichel" className="text-gray-600 hover:text-gray-900 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-center space-x-2">
            <span className="inline-block h-3 w-3 rounded-full bg-amber-400 animate-custom-bounce"></span>
            <span className="inline-block h-3 w-3 rounded-full bg-amber-400 animate-custom-bounce delay-200"></span>
            <span className="inline-block h-3 w-3 rounded-full bg-amber-400 animate-custom-bounce delay-400"></span>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-sm text-white/80">
        <p>© {currentYear} • Purrfectly Under Construction</p>
      </footer>
    </main>
  );
}