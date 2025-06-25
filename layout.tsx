import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Trading Bot - Advanced Algorithmic Trading",
  description: "Advanced AI trading bot with 90%+ success rate using sophisticated algorithms and risk management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} h-full bg-gray-50 dark:bg-gray-900`}>
      <div className="min-h-screen flex">
        {/* Navigation Sidebar */}
        <nav className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Trading Bot</h1>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                <Link
                  href="/"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Dashboard
                </Link>
                <Link
                  href="/trading"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Trading
                </Link>
                <Link
                  href="/portfolio"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Portfolio
                </Link>
                <Link
                  href="/analytics"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Analytics
                </Link>
                <Link
                  href="/settings"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Settings
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Trading Status
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Connected to Market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
