import React from "react";
import { RegistrationData } from "@/types";

interface Props {
  data: RegistrationData;
  updateData: (updates: Partial<RegistrationData>) => void;
}

const DOCUMENT_TYPES = [
{ key: "license", label: "License Document", required: true },
{ key: "eoInsurance", label: "E&O Insurance", required: true },
{ key: "resume", label: "Resume/CV", required: true },
{ key: "sampleReport", label: "Sample Appraisal Report", required: true },
{ key: "w9", label: "IRS W-9", required: true },
{ key: "directDeposit", label: "Direct Deposit Form", required: false },
{ key: "techCompliance", label: "Technology Compliance", required: false },
{
  key: "liability",
  label: "Professional Liability Insurance",
  required: false
},
{ key: "businessLicense", label: "Business License", required: false }];


export default function DocumentsStep({ data, updateData }: Props) {
  const handleFileChange = (key: string, file: File | null) => {
    const currentDocs = data.documents || {};
    updateData({
      documents: {
        ...currentDocs,
        [key]: file
      }
    });
  };

  const getFileName = (key: string) => {
    const doc = data.documents?.[key];
    if (doc instanceof File) {
      return doc.name;
    }
    return null;
  };

  return (
    <div className="space-y-6" data-oid="moof0:b">
      <div
        className="rounded-lg bg-blue-50 border border-blue-200 p-4"
        data-oid="_:5ri29">

        <div className="flex items-start" data-oid="42b20c0">
          <div className="flex-shrink-0" data-oid="azd4td7">
            <svg
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-oid="3o2gjof">

              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
                data-oid="78p1lc:" />

            </svg>
          </div>
          <div className="ml-3" data-oid="0xq8bqt">
            <h3
              className="text-sm font-medium text-blue-800"
              data-oid="iyb8:ag">

              Document Upload Guidelines
            </h3>
            <div className="mt-2 text-sm text-blue-700" data-oid="alx411_">
              <ul
                className="list-disc list-inside space-y-1"
                data-oid=".vyfwkz">

                <li data-oid="gmwl-a9">Accepted formats: PDF, JPG, PNG</li>
                <li data-oid="qi-.59d">Maximum file size: 10MB per document</li>
                <li data-oid="w_4x.lm">
                  Ensure all documents are clear and legible
                </li>
                <li data-oid="27tzfb0">
                  Required documents are marked with an asterisk (*)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6" data-oid="53i_p3.">
        {DOCUMENT_TYPES.map(({ key, label, required }) =>
        <div
          key={key}
          className="border border-slate-200 rounded-lg p-4"
          data-oid="x:ups__">

            <div
            className="flex items-center justify-between mb-3"
            data-oid="3s1zblj">

              <label
              className="block text-sm font-medium text-slate-700"
              data-oid="4liqt86">

                {label}{" "}
                {required &&
              <span className="text-red-500" data-oid="gr53b25">
                    *
                  </span>
              }
              </label>
              {getFileName(key) &&
            <span
              className="text-sm text-emerald-600 font-medium"
              data-oid="kr5tse-">

                  ✓ Uploaded
                </span>
            }
            </div>

            <div className="mt-2" data-oid=".6lxlb4">
              <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
              handleFileChange(key, e.target.files?.[0] || null)
              }
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
              data-oid="7i:7zx1" />


              {getFileName(key) &&
            <p className="mt-2 text-sm text-slate-600" data-oid="700iji7">
                  Selected: {getFileName(key)}
                </p>
            }
            </div>
          </div>
        )}
      </div>

      <div
        className="rounded-lg bg-slate-50 border border-slate-200 p-4"
        data-oid="u3862qd">

        <h3
          className="text-sm font-medium text-slate-800 mb-2"
          data-oid="l-1ra8_">

          Document Processing
        </h3>
        <p className="text-sm text-slate-600" data-oid="vsx21n2">
          All uploaded documents will be reviewed by our compliance team. You
          will receive notification once your documents have been processed.
          This typically takes 1-2 business days.
        </p>
      </div>
    </div>);

}