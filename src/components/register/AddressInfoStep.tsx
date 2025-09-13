import React from "react";
import { RegistrationData } from "@/types";
import { STATES } from "@/lib/mockData";

interface Props {
  data: RegistrationData;
  updateData: (updates: Partial<RegistrationData>) => void;
}

export default function AddressInfoStep({ data, updateData }: Props) {
  return (
    <div className="space-y-6" data-oid="6xdg3lo">
      <div data-oid="eqjb1ew">
        <label
          className="block text-sm font-medium text-slate-700 mb-2"
          data-oid="er.wj4m">

          Street Address *
        </label>
        <input
          type="text"
          value={data.address1 || ""}
          onChange={(e) => updateData({ address1: e.target.value })}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
          placeholder="Enter street address"
          required
          data-oid="25agidd" />

      </div>

      <div data-oid="_ghe1l9">
        <label
          className="block text-sm font-medium text-slate-700 mb-2"
          data-oid="f7nt1-7">

          Address Line 2
        </label>
        <input
          type="text"
          value={data.address2 || ""}
          onChange={(e) => updateData({ address2: e.target.value })}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
          placeholder="Apartment, suite, unit, etc. (optional)"
          data-oid="zzq-rik" />

      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3" data-oid="-funcaa">
        <div data-oid="azxyzzx">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="p1_4yg4">

            City *
          </label>
          <input
            type="text"
            value={data.city || ""}
            onChange={(e) => updateData({ city: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="Enter city"
            required
            data-oid="rytmbwn" />

        </div>

        <div data-oid="ky7l2g1">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="9qrzkdc">

            State *
          </label>
          <select
            value={data.state || ""}
            onChange={(e) => updateData({ state: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
            required
            data-oid="ibiupof">

            <option value="" data-oid="7ci:.vj">
              Select state
            </option>
            {STATES.filter((s) => s !== "All States").map((state) =>
            <option key={state} value={state} data-oid="l.:0tbk">
                {state}
              </option>
            )}
          </select>
        </div>

        <div data-oid=":md3_4d">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="2j.61xm">

            ZIP Code *
          </label>
          <input
            type="text"
            value={data.zip || ""}
            onChange={(e) => updateData({ zip: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="12345"
            required
            data-oid="m39an:2" />

        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" data-oid="3q4wd3s">
        <div data-oid="61f80ne">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="h9l4iet">

            Service Radius (miles)
          </label>
          <select
            value={data.serviceRadius || ""}
            onChange={(e) => updateData({ serviceRadius: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
            data-oid="rv685af">

            <option value="" data-oid="o4ru1fw">
              Select service radius
            </option>
            <option value="25" data-oid="53u0uy0">
              25 miles
            </option>
            <option value="50" data-oid="jnmx0mb">
              50 miles
            </option>
            <option value="75" data-oid="ceb5.p-">
              75 miles
            </option>
            <option value="100" data-oid="jyg5s6i">
              100 miles
            </option>
            <option value="150" data-oid="r7bcggl">
              150 miles
            </option>
            <option value="200" data-oid="6wqo5rz">
              200+ miles
            </option>
            <option value="statewide" data-oid="jbg3n4f">
              Statewide
            </option>
          </select>
        </div>

        <div data-oid=":_bcpw6">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="e4_cp8c">

            Travel Willingness
          </label>
          <select
            value={data.travelWillingness || ""}
            onChange={(e) => updateData({ travelWillingness: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
            data-oid="qhavsc_">

            <option value="" data-oid="95lve.-">
              Select travel willingness
            </option>
            <option value="local-only" data-oid="_mug:0b">
              Local market only
            </option>
            <option value="regional" data-oid="6-r6apg">
              Regional travel
            </option>
            <option value="statewide" data-oid="qm1vb35">
              Statewide travel
            </option>
            <option value="multi-state" data-oid="et68hds">
              Multi-state travel
            </option>
            <option value="national" data-oid="no-g.p1">
              National travel
            </option>
          </select>
        </div>
      </div>

      <div data-oid="k1rl:at">
        <label
          className="block text-sm font-medium text-slate-700 mb-2"
          data-oid="-zuls:1">

          Coverage Area Details
        </label>
        <textarea
          value={data.coverageArea || ""}
          onChange={(e) => updateData({ coverageArea: e.target.value })}
          rows={4}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
          placeholder="Describe your coverage area, any restrictions, or special considerations..."
          data-oid="lsxa0x:" />

      </div>
    </div>);

}