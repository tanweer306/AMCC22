import React from "react";
import { RegistrationData } from "@/types";

interface Props {
  data: RegistrationData;
  updateData: (updates: Partial<RegistrationData>) => void;
}

export default function PersonalInfoStep({ data, updateData }: Props) {
  return (
    <div className="space-y-6" data-oid="oapaw.2">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" data-oid="bz:8m4.">
        <div data-oid=".798ba7">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="nwohn9d">

            First Name *
          </label>
          <input
            type="text"
            value={data.firstName || ""}
            onChange={(e) => updateData({ firstName: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="Enter your first name"
            required
            data-oid=":tirm3u" />

        </div>

        <div data-oid="_hr:6.5">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid=".w6y5iy">

            Last Name *
          </label>
          <input
            type="text"
            value={data.lastName || ""}
            onChange={(e) => updateData({ lastName: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="Enter your last name"
            required
            data-oid="96is7y:" />

        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" data-oid="ks6543f">
        <div data-oid="85b-.2r">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="bntsln0">

            Email Address *
          </label>
          <input
            type="email"
            value={data.regEmail || ""}
            onChange={(e) => updateData({ regEmail: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="Enter your email address"
            required
            data-oid="xvlxiot" />

        </div>

        <div data-oid="o3-i68j">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="mrsy6.-">

            Phone Number *
          </label>
          <input
            type="tel"
            value={data.regPhone || ""}
            onChange={(e) => updateData({ regPhone: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="(555) 123-4567"
            required
            data-oid="j6ye16p" />

        </div>
      </div>

      <div data-oid="1wvvkmq">
        <label
          className="block text-sm font-medium text-slate-700 mb-2"
          data-oid="forwth5">

          Years of Appraisal Experience *
        </label>
        <select
          value={data.yearsExperience || ""}
          onChange={(e) => updateData({ yearsExperience: e.target.value })}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
          required
          data-oid="wn-fe7o">

          <option value="" data-oid="b4yo:-8">
            Select experience level
          </option>
          <option value="0-1" data-oid="46-4cku">
            Less than 1 year
          </option>
          <option value="1-2" data-oid="79_gh.n">
            1-2 years
          </option>
          <option value="3-5" data-oid="g5mo6c9">
            3-5 years
          </option>
          <option value="6-10" data-oid="st91ob8">
            6-10 years
          </option>
          <option value="11-15" data-oid="dfvc9b:">
            11-15 years
          </option>
          <option value="16-20" data-oid="h6-lusm">
            16-20 years
          </option>
          <option value="20+" data-oid="n2c4qba">
            20+ years
          </option>
        </select>
      </div>
    </div>);

}