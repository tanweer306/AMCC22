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
    <html lang="en" className="h-full" data-oid="77:2ukl">
      <body
        className="min-h-screen bg-slate-50 text-slate-900 antialiased"
        data-oid="kiuzeie">

        <div className="relative flex min-h-screen flex-col" data-oid="dau9twe">
          <SiteHeader data-oid="avqo3l." />
          <main
            className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8"
            data-oid="nm3jjq7">

            {children}
          </main>
          <SiteFooter data-oid=".ju76np" />
        </div>

{process.env.NODE_ENV === 'development' && (
          <Script
            src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
            strategy="afterInteractive"
            type="module"
            id="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
            data-oid="2hbg6m1">
          </Script>
        )}
      </body>
    </html>);

}

function SiteHeader() {
  return (
    <header
      className="relative isolate overflow-hidden rounded-b-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-700 px-4 py-10 text-white shadow-lg"
      data-oid="8ifgpkx">

      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 sm:px-2"
        data-oid="r2pyw6-">

        <div className="flex items-center gap-3" data-oid="bdyb84p">
          <div
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20"
            data-oid=":blz-.8">

            <span className="text-xl font-black" data-oid="-pi_frq">
              A
            </span>
          </div>
          <div data-oid="xkp0khq">
            <h1
              className="text-lg font-semibold tracking-tight sm:text-xl"
              data-oid="nw2n3p.">

              AMC Connect
            </h1>
            <p className="text-xs text-white/80" data-oid="nati8tu">
              Find. Select. Register.
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-4 sm:flex" data-oid="8qxbqgp">
          <a
            href="#amcs"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
            data-oid="jvrcqfu">

            Browse AMCs
          </a>
          <a
            href="/register"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-50"
            data-oid="i3l8h25">

            Register
          </a>
        </div>
      </div>
    </header>);

}

function SiteFooter() {
  return (
    <footer
      className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 text-sm text-slate-500 sm:px-6 lg:px-8"
      data-oid="cbjdas9">

      <div
        className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        data-oid="447f6z8">

        <p data-oid="r-qt5od">
          © 2025 AMC Connect. All rights reserved.
        </p>
        <nav className="flex items-center gap-6" data-oid="hw:iqcg">
          <a href="#" className="hover:text-slate-700" data-oid="_d_1f5n">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-700" data-oid="6912-xa">
            Terms
          </a>
          <a href="#" className="hover:text-slate-700" data-oid="x.4gjfh">
            Contact
          </a>
        </nav>
      </div>
    </footer>);

}