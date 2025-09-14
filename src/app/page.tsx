"use client";
import React, { useMemo, useState, useEffect } from "react";
import { STATES } from "@/lib/mockData";
import { AMCCompany } from "@/types";
import Link from "next/link";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("All States");
  const [selected, setSelected] = useState<string[]>([]);
  const [companies, setCompanies] = useState<AMCCompany[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch companies from API
  useEffect(() => {
    async function fetchCompanies() {
      try {
        setLoading(true);
        const response = await fetch("/api/companies");

        if (!response.ok) {
          throw new Error("Failed to fetch companies");
        }

        const data = await response.json();
        setCompanies(data.companies);
        setError(null);
      } catch (err) {
        console.error("Error fetching companies:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch companies"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  const filtered = useMemo(() => {
    const byState =
    stateFilter === "All States" ?
    companies :
    companies.filter((c) => c.state === stateFilter);
    const byQuery = query.trim().toLowerCase();
    return byQuery ?
    byState.filter((c) => c.name.toLowerCase().includes(byQuery)) :
    byState;
  }, [query, stateFilter, companies]);

  function toggleSelect(id: string) {
    setSelected((prev) =>
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="space-y-8">
      <Hero
        onGetStarted={() => {
          if (selected.length === 0) return;
          window.location.href = `/register?ids=${selected.join(",")}`;
        }}
        companiesCount={companies.length}
        />


      <section id="amcs" className="space-y-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">

          <h2 className="text-xl font-semibold tracking-tight text-slate-800">

            Explore AMC Companies
          </h2>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

            <div className="relative flex-1 min-w-[260px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by company name..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
                />


              <div className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-slate-400">

                ⌕
              </div>
            </div>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="min-w-[180px] rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
              >

              {STATES.map((s) =>
              <option key={s} value={s}>
                  {s}
                </option>
              )}
            </select>
          </div>
        </div>

        {loading ?
        <div className="text-center py-12">
            <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-emerald-600 bg-emerald-50">

              <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">

                <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4">
              </circle>
                <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
              </svg>
              Loading companies...
            </div>
          </div> :
        error ?
        <div className="text-center py-12">
            <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-6">

              <p className="font-semibold mb-2">
                Error loading companies
              </p>
              <p className="text-sm text-red-500">
                {error}
              </p>
              <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">

                Try Again
              </button>
            </div>
          </div> :

        <AMCGrid
          companies={filtered}
          selected={selected}
          onSelect={toggleSelect}
          />

        }
      </section>

      <SelectionBar
        selected={selected}
        onClear={() => setSelected([])}
        />

    </div>);

}

function Hero({
  onGetStarted,
  companiesCount



}: {onGetStarted: () => void;companiesCount: number;}) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-700 px-6 py-12 text-white shadow-xl sm:px-10">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">

            Connect with top AMCs and register in minutes
          </h2>
          <p className="text-white/85">
            Browse trusted AMC partners, select the ones you want to work with,
            and complete a single, streamlined registration flow. Built for
            residential and commercial appraisers.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#amcs"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20">

              Browse AMCs
            </a>
            <button
              onClick={onGetStarted}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-50">

              Get Started
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />


          <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />


          <div className="relative rounded-2xl border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-lg">

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs text-white/70">
                  AMCs
                </p>
                <p className="text-2xl font-semibold">
                  {companiesCount}
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs text-white/70">
                  States
                </p>
                <p className="text-2xl font-semibold">
                  50
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs text-white/70">
                  Minutes
                </p>
                <p className="text-2xl font-semibold">
                  10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function AMCGrid({
  companies,
  selected,
  onSelect




}: {companies: AMCCompany[];selected: string[];onSelect: (id: string) => void;}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {companies.map((c) =>
      <article
        key={c.id}
        className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">

          <div className="absolute right-4 top-4">
            <input
            type="checkbox"
            aria-label={`Select ${c.name}`}
            checked={selected.includes(c.id)}
            onChange={() => onSelect(c.id)}
            className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
            />

          </div>
          <h3 className="mb-1 line-clamp-1 pr-8 text-base font-semibold text-slate-900">

            {c.name}
          </h3>
          <p className="mb-3 text-xs text-slate-500">
            State: {c.state}
          </p>
          <dl className="grid gap-2 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">
                ☎
              </span>
              <a
              className="hover:text-emerald-700"
              href={`tel:${c.phone}`}>

                {c.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">
                ✉
              </span>
              <a
              className="hover:text-emerald-700"
              href={`mailto:${c.email}`}>

                {c.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">
                🔗
              </span>
              <a
              className="truncate hover:text-emerald-700"
              target="_blank"
              rel="noreferrer"
              href={c.website}>

                {c.website.replace("https://", "")}
              </a>
            </div>
          </dl>
          <div className="mt-4 flex gap-2">
            <a
            target="_blank"
            rel="noreferrer"
            href={c.signupUrl}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">

              Sign Up
            </a>
            <button
            onClick={() => onSelect(c.id)}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700">

              {selected.includes(c.id) ? "Selected" : "Select"}
            </button>
          </div>
        </article>
      )}
    </div>);

}

function SelectionBar({
  selected,
  onClear



}: {selected: string[];onClear: () => void;}) {
  if (selected.length === 0) return null;
  return (
    <div className="sticky inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl">

      <div className="m-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-lg backdrop-blur">

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

          <div className="flex items-center gap-2 text-sm text-emerald-900">

            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">

              {selected.length}
            </span>
            <span>
              AMC{selected.length > 1 ? "s" : ""} selected
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="rounded-full px-3 py-1.5 text-sm text-emerald-900 hover:text-emerald-700">

              Clear
            </button>
            <Link
              href={`/register?ids=${selected.join(",")}`}
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">

              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>);

}