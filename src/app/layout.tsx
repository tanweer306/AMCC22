import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AMC Connect — Appraiser Registration",
  description: "Discover AMCs and register with a modern, streamlined flow."
};

export default function RootLayout({
  children


}: {children: React.ReactNode;}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">

            {children}
          </main>
          <SiteFooter />
        </div>

{process.env.NODE_ENV === 'development' && (
          <Script
            src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
            strategy="afterInteractive"
            type="module"
            id="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
            >
          </Script>
        )}
      </body>
    </html>);

}

function SiteHeader() {
  return (
    <header className="relative isolate overflow-hidden rounded-b-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-700 px-4 py-10 text-white shadow-lg">

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 sm:px-2">

        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">

            <span className="text-xl font-black">
              A
            </span>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight sm:text-xl">

              AMC Connect
            </h1>
            <p className="text-xs text-white/80">
              Find. Select. Register.
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <a
            href="#amcs"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20">

            Browse AMCs
          </a>
          <a
            href="/register"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-50">

            Register
          </a>
        </div>
      </div>
    </header>);

}

function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 text-sm text-slate-500 sm:px-6 lg:px-8">

      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

        <p>
          © 2025 AMC Connect. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-700">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-700">
            Terms
          </a>
          <a href="#" className="hover:text-slate-700">
            Contact
          </a>
        </nav>
      </div>
    </footer>);

}