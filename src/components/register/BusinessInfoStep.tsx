import React from "react";
import { RegistrationData } from "@/types";

interface Props {
  data: RegistrationData;
  updateData: (updates: Partial<RegistrationData>) => void;
}

const BUSINESS_TYPES = [
"Sole Proprietorship",
"LLC",
"Corporation",
"Partnership",
"Other"];


const LANGUAGES = [
"English",
"Spanish",
"French",
"German",
"Italian",
"Portuguese",
"Chinese",
"Japanese",
"Korean",
"Other"];


const GEOGRAPHIC_AREAS = [
"Urban",
"Suburban",
"Rural",
"Waterfront",
"Mountain",
"Desert",
"Agricultural"];


export default function BusinessInfoStep({ data, updateData }: Props) {
  const handleLanguageChange = (language: string, checked: boolean) => {
    const current = data.languages || [];
    const updated = checked ?
    [...current, language] :
    current.filter((l) => l !== language);
    updateData({ languages: updated });
  };

  const handleGeographicChange = (area: string, checked: boolean) => {
    const current = data.geographicCoverage || [];
    const updated = checked ?
    [...current, area] :
    current.filter((a) => a !== area);
    updateData({ geographicCoverage: updated });
  };

  const handleReferenceUpdate = (
  index: number,
  field: string,
  value: string) =>
  {
    const currentRefs = data.references || [];
    const updated = [...currentRefs];
    updated[index] = { ...updated[index], [field]: value };
    updateData({ references: updated });
  };

  return (
    <div className="space-y-8" data-oid="0wimld9">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" data-oid="70_a22v">
        <div data-oid="43gpj-f">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="044bclo">

            Business Type *
          </label>
          <select
            value={data.businessType || ""}
            onChange={(e) => updateData({ businessType: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4"
            required
            data-oid="1i:zy94">

            <option value="" data-oid="qmf8w71">
              Select business type
            </option>
            {BUSINESS_TYPES.map((type) =>
            <option key={type} value={type} data-oid="u3y:796">
                {type}
              </option>
            )}
          </select>
        </div>

        <div data-oid="trgmdc0">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            data-oid="xm7mz-z">

            Tax ID/EIN *
          </label>
          <input
            type="text"
            value={data.taxId || ""}
            onChange={(e) => updateData({ taxId: e.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
            placeholder="XX-XXXXXXX"
            required
            data-oid="y-e84s1" />

        </div>
      </div>

      <div data-oid="rkil7ut">
        <label
          className="block text-sm font-medium text-slate-700 mb-2"
          data-oid="1szd74h">

          Business Formation Date *
        </label>
        <input
          type="date"
          value={data.formationDate || ""}
          onChange={(e) => updateData({ formationDate: e.target.value })}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 focus:ring-4 sm:w-auto"
          required
          data-oid="0q3p4uk" />

      </div>

      <div data-oid="bor195r">
        <label
          className="block text-sm font-medium text-slate-700 mb-3"
          data-oid="e-6tnhj">

          Languages Spoken
        </label>
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          data-oid="0aqnnmd">

          {LANGUAGES.map((language) =>
          <label
            key={language}
            className="flex items-center space-x-2"
            data-oid="te7kkej">

              <input
              type="checkbox"
              checked={data.languages?.includes(language) || false}
              onChange={(e) =>
              handleLanguageChange(language, e.target.checked)
              }
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
              data-oid="-becr65" />


              <span className="text-sm text-slate-700" data-oid="83q_.ih">
                {language}
              </span>
            </label>
          )}
        </div>
      </div>

      <div data-oid="cxhq26f">
        <label
          className="block text-sm font-medium text-slate-700 mb-3"
          data-oid="toubufy">

          Geographic Coverage Types
        </label>
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          data-oid="7ki-do-">

          {GEOGRAPHIC_AREAS.map((area) =>
          <label
            key={area}
            className="flex items-center space-x-2"
            data-oid="t1s3oe9">

              <input
              type="checkbox"
              checked={data.geographicCoverage?.includes(area) || false}
              onChange={(e) => handleGeographicChange(area, e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
              data-oid="b.yjo7z" />


              <span className="text-sm text-slate-700" data-oid="u0l8r5i">
                {area}
              </span>
            </label>
          )}
        </div>
      </div>

      <div data-oid="cjagbxk">
        <label
          className="block text-sm font-medium text-slate-700 mb-2"
          data-oid="ei7dr6o">

          Current AMC Relationships
        </label>
        <textarea
          value={data.currentAmcRelationships || ""}
          onChange={(e) =>
          updateData({ currentAmcRelationships: e.target.value })
          }
          rows={3}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
          placeholder="List current AMC relationships, if any..."
          data-oid="4kj.2k6" />

      </div>

      <div data-oid="vqu7.mr">
        <h3
          className="text-lg font-medium text-slate-900 mb-4"
          data-oid="o6h6q53">

          Professional References
        </h3>
        <div className="space-y-6" data-oid="67cfrog">
          {(data.references || []).map((ref, index) =>
          <div
            key={index}
            className="rounded-lg border border-slate-200 p-4"
            data-oid="3rj5ioh">

              <h4
              className="text-sm font-medium text-slate-700 mb-3"
              data-oid="se2kfu9">

                Reference {index + 1}
              </h4>
              <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              data-oid="j01.qow">

                <input
                type="text"
                value={ref.name}
                onChange={(e) =>
                handleReferenceUpdate(index, "name", e.target.value)
                }
                placeholder="Full Name"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
                data-oid="39_moj2" />


                <input
                type="text"
                value={ref.company}
                onChange={(e) =>
                handleReferenceUpdate(index, "company", e.target.value)
                }
                placeholder="Company Name"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
                data-oid="l-pbyua" />


                <input
                type="email"
                value={ref.email}
                onChange={(e) =>
                handleReferenceUpdate(index, "email", e.target.value)
                }
                placeholder="Email Address"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
                data-oid="8di56tb" />


                <input
                type="tel"
                value={ref.phone}
                onChange={(e) =>
                handleReferenceUpdate(index, "phone", e.target.value)
                }
                placeholder="Phone Number"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
                data-oid="ggspagh" />

              </div>
              <input
              type="text"
              value={ref.relationship}
              onChange={(e) =>
              handleReferenceUpdate(index, "relationship", e.target.value)
              }
              placeholder="Relationship (e.g., Former supervisor, Colleague, Client)"
              className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none ring-emerald-500/20 placeholder:text-slate-400 focus:ring-4"
              data-oid="s6ao6h8" />

            </div>
          )}
        </div>
      </div>
    </div>);

}