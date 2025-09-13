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
    <div className="space-y-8" data-oid="tuq2wdt">
      <Hero
        onGetStarted={() => {
          if (selected.length === 0) return;
          window.location.href = `/register?ids=${selected.join(",")}`;
        }}
        companiesCount={companies.length}
        data-oid="hl6d:nf" />


      <section id="amcs" className="space-y-4" data-oid="xuwp362">
        <div
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          data-oid="d-5l770">

          <h2
            className="text-xl font-semibold tracking-tight text-slate-800"
            data-oid="57ybmkm">

            Explore AMC Companies
          </h2>
          <div
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            data-oid=":eqhsvo">

            <div className="relative flex-1 min-w-[260px]" data-oid="wrgx2qh">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by company name..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
                data-oid="v2v9fc:" />


              <div
                className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-slate-400"
                data-oid="g2l19v2">

                ⌕
              </div>
            </div>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="min-w-[180px] rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
              data-oid="bb.p8m0">

              {STATES.map((s) =>
              <option key={s} value={s} data-oid="it4bxha">
                  {s}
                </option>
              )}
            </select>
          </div>
        </div>

        {loading ?
        <div className="text-center py-12" data-oid="loading-state">
            <div
            className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-emerald-600 bg-emerald-50"
            data-oid="4novfcr">

              <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              data-oid="5_vlw3r">

                <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                data-oid="rzqf9b:">
              </circle>
                <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                data-oid="12o25co">
              </path>
              </svg>
              Loading companies...
            </div>
          </div> :
        error ?
        <div className="text-center py-12" data-oid="error-state">
            <div
            className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-6"
            data-oid="suh3bf8">

              <p className="font-semibold mb-2" data-oid="rl0_s2b">
                Error loading companies
              </p>
              <p className="text-sm text-red-500" data-oid="t2e2-1j">
                {error}
              </p>
              <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              data-oid="qn:ny9n">

                Try Again
              </button>
            </div>
          </div> :

        <AMCGrid
          companies={filtered}
          selected={selected}
          onSelect={toggleSelect}
          data-oid="k:ojahy" />

        }
      </section>

      <SelectionBar
        selected={selected}
        onClear={() => setSelected([])}
        data-oid="m:psd4n" />

    </div>);

}

function Hero({
  onGetStarted,
  companiesCount



}: {onGetStarted: () => void;companiesCount: number;}) {
  return (
    <section
      className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-700 px-6 py-12 text-white shadow-xl sm:px-10"
      data-oid="5edvsuh">

      <div
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2"
        data-oid="y-t1kjc">

        <div className="space-y-4" data-oid="3r6lif5">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            data-oid="tsu7aog">

            Connect with top AMCs and register in minutes
          </h2>
          <p className="text-white/85" data-oid="aot3-o6">
            Browse trusted AMC partners, select the ones you want to work with,
            and complete a single, streamlined registration flow. Built for
            residential and commercial appraisers.
          </p>
          <div className="flex items-center gap-3" data-oid="fqax0_b">
            <a
              href="#amcs"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
              data-oid="1tkfivz">

              Browse AMCs
            </a>
            <button
              onClick={onGetStarted}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-50"
              data-oid="cmp2r.1">

              Get Started
            </button>
          </div>
        </div>
        <div className="relative" data-oid="q0bvrju">
          <div
            className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl"
            data-oid="5bij2d2" />


          <div
            className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/10 blur-3xl"
            data-oid="ifu.ago" />


          <div
            className="relative rounded-2xl border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-lg"
            data-oid="nmut8ed">

            <div className="grid grid-cols-3 gap-3" data-oid="tzff_bc">
              <div className="rounded-xl bg-white/10 p-4" data-oid="7wpxevv">
                <p className="text-xs text-white/70" data-oid="td.9dy8">
                  AMCs
                </p>
                <p className="text-2xl font-semibold" data-oid="i8i4:v_">
                  {companiesCount}
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4" data-oid="2ocrbx4">
                <p className="text-xs text-white/70" data-oid=".rcw_d6">
                  States
                </p>
                <p className="text-2xl font-semibold" data-oid="p-xt1l2">
                  50
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4" data-oid="0vdk:ax">
                <p className="text-xs text-white/70" data-oid="in:sz.:">
                  Minutes
                </p>
                <p className="text-2xl font-semibold" data-oid="iru-c7d">
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
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      data-oid="q8msuah">

      {companies.map((c) =>
      <article
        key={c.id}
        className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        data-oid="ruqns6r">

          <div className="absolute right-4 top-4" data-oid="1zh:mq:">
            <input
            type="checkbox"
            aria-label={`Select ${c.name}`}
            checked={selected.includes(c.id)}
            onChange={() => onSelect(c.id)}
            className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
            data-oid="4-9ex2o" />

          </div>
          <h3
          className="mb-1 line-clamp-1 pr-8 text-base font-semibold text-slate-900"
          data-oid="2n1mhdd">

            {c.name}
          </h3>
          <p className="mb-3 text-xs text-slate-500" data-oid="2vr-rka">
            State: {c.state}
          </p>
          <dl className="grid gap-2 text-sm text-slate-700" data-oid="5uzqdr6">
            <div className="flex items-center gap-2" data-oid=".vd.jv3">
              <span className="text-slate-400" data-oid="-kdeb77">
                ☎
              </span>
              <a
              className="hover:text-emerald-700"
              href={`tel:${c.phone}`}
              data-oid="ch496x4">

                {c.phone}
              </a>
            </div>
            <div className="flex items-center gap-2" data-oid="17ek28l">
              <span className="text-slate-400" data-oid="xvr5kwt">
                ✉
              </span>
              <a
              className="hover:text-emerald-700"
              href={`mailto:${c.email}`}
              data-oid="d1x6nd5">

                {c.email}
              </a>
            </div>
            <div className="flex items-center gap-2" data-oid=":dw6md0">
              <span className="text-slate-400" data-oid="eabpl-x">
                🔗
              </span>
              <a
              className="truncate hover:text-emerald-700"
              target="_blank"
              rel="noreferrer"
              href={c.website}
              data-oid="ff7ccyy">

                {c.website.replace("https://", "")}
              </a>
            </div>
          </dl>
          <div className="mt-4 flex gap-2" data-oid="i2mp-q8">
            <a
            target="_blank"
            rel="noreferrer"
            href={c.signupUrl}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            data-oid="d8erfk_">

              Sign Up
            </a>
            <button
            onClick={() => onSelect(c.id)}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            data-oid="rxpdb-s">

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
    <div
      className="sticky inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl"
      data-oid=":si.u::">

      <div
        className="m-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-lg backdrop-blur"
        data-oid="o2:_-g5">

        <div
          className="flex flex-col items-center justify-between gap-3 sm:flex-row"
          data-oid="hstwj1g">

          <div
            className="flex items-center gap-2 text-sm text-emerald-900"
            data-oid="1nu6c7q">

            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white"
              data-oid="kc0plix">

              {selected.length}
            </span>
            <span data-oid="lxja4jk">
              AMC{selected.length > 1 ? "s" : ""} selected
            </span>
          </div>
          <div className="flex items-center gap-3" data-oid="caq6d5k">
            <button
              onClick={onClear}
              className="rounded-full px-3 py-1.5 text-sm text-emerald-900 hover:text-emerald-700"
              data-oid="68-hg4d">

              Clear
            </button>
            <Link
              href={`/register?ids=${selected.join(",")}`}
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              data-oid="xty5382">

              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>);

}