import React from "react";
import { RegistrationData } from "@/types";
import { STATES } from "@/lib/mockData";

interface Props {
  data: RegistrationData;
  updateData: (updates: Partial<RegistrationData>) => void;
}

const DESIGNATIONS = ["MAI", "SRA", "ASA", "ASR", "CRA", "CRE"];
const PROPERTY_TYPES = [
"Single Family Residential",
"Condominiums",
"Multi-Family (2-4 units)",
"Commercial",
"Industrial",
"Vacant Land",
"Agricultural"];


export default function ProfessionalInfoStep({ data, updateData }: Props) {
  const handleDesignationChange = (designation: string, checked: boolean) => {
    const current = data.designations || [];
    const updated = checked ?
    [...current, designation] :
    current.filter((d) => d !== designation);
    updateData({ designations: updated });
  };

  const handleSpecialtyChange = (specialty: string, checked: boolean) => {
    const current = data.specialties || [];
    const updated = checked ?
    [...current, specialty] :
    current.filter((s) => s !== specialty);
    updateData({ specialties: updated });
  };

  return (
    <div className="space-y-6" data-oid="vdpzqds">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" data-oid="k.8cx3f">
        <div data-oid="2:eupse">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="peny_8a">

            Company Name *
          </label>
          <input
            type="text"
            value={data.companyName || ""}
            onChange={(e) => updateData({ companyName: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="Enter your company name"
            required
            data-oid="oh6pi3:" />

        </div>

        <div data-oid="2lke:k1">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="7r9z302">

            License Number *
          </label>
          <input
            type="text"
            value={data.licenseNumber || ""}
            onChange={(e) => updateData({ licenseNumber: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="Enter your license number"
            required
            data-oid="7hpsqt2" />

        </div>
      </div>

      <div data-oid="su.4-cf">
        <label
          className="block text-sm font-medium text-slate-700 mb-2"
          data-oid=".qx6_qg">

          License State *
        </label>
        <select
          value={data.licenseState || ""}
          onChange={(e) => updateData({ licenseState: e.target.value })}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
          required
          data-oid="6_.s1at">

          <option value="" data-oid="1wohupm">
            Select license state
          </option>
          {STATES.filter((s) => s !== "All States").map((state) =>
          <option key={state} value={state} data-oid="7ddt4g0">
              {state}
            </option>
          )}
        </select>
      </div>

      <div data-oid="2wu93u1">
        <label
          className="block text-sm font-medium text-slate-700 mb-3"
          data-oid="plwmqkv">

          Professional Designations
        </label>
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          data-oid="2j.h-8e">

          {DESIGNATIONS.map((designation) =>
          <label
            key={designation}
            className="flex items-center space-x-2"
            data-oid="zinq3z.">

              <input
              type="checkbox"
              checked={data.designations?.includes(designation) || false}
              onChange={(e) =>
              handleDesignationChange(designation, e.target.checked)
              }
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
              data-oid="irvm2kh" />


              <span className="text-sm text-slate-700" data-oid="rh2gy0j">
                {designation}
              </span>
            </label>
          )}
        </div>
      </div>

      <div data-oid="7wrdtnu">
        <label
          className="block text-sm font-medium text-slate-700 mb-3"
          data-oid="3eb_-9s">

          Property Type Specialties
        </label>
        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          data-oid="-ktlsck">

          {PROPERTY_TYPES.map((type) =>
          <label
            key={type}
            className="flex items-center space-x-2"
            data-oid="9szg91d">

              <input
              type="checkbox"
              checked={data.specialties?.includes(type) || false}
              onChange={(e) => handleSpecialtyChange(type, e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
              data-oid="nib2oer" />


              <span className="text-sm text-slate-700" data-oid="8499xs3">
                {type}
              </span>
            </label>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" data-oid="jhu8_f9">
        <div data-oid="j9.goki">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="ycgtak:">

            FHA Roster Status
          </label>
          <select
            value={data.fhaRoster || ""}
            onChange={(e) => updateData({ fhaRoster: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
            data-oid="hgs:1.h">

            <option value="" data-oid="5l8n:p8">
              Select status
            </option>
            <option value="active" data-oid="qdybxxl">
              Active
            </option>
            <option value="inactive" data-oid="ek56j89">
              Inactive
            </option>
            <option value="applying" data-oid="t8wokn5">
              Currently Applying
            </option>
            <option value="not-applicable" data-oid="nv4p7j9">
              Not Applicable
            </option>
          </select>
        </div>

        <div data-oid="6ly1tg7">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="ci4h1fq">

            VA Panel Status
          </label>
          <select
            value={data.vaPanel || ""}
            onChange={(e) => updateData({ vaPanel: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
            data-oid="r-9cqg4">

            <option value="" data-oid="cxfy6hk">
              Select status
            </option>
            <option value="active" data-oid="1ys4czs">
              Active
            </option>
            <option value="inactive" data-oid="m-z5-cp">
              Inactive
            </option>
            <option value="applying" data-oid=".c2u45z">
              Currently Applying
            </option>
            <option value="not-applicable" data-oid="9l6lu8k">
              Not Applicable
            </option>
          </select>
        </div>
      </div>
    </div>);

}