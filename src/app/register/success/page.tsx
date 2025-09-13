import React from "react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div
      className="min-h-screen bg-slate-50 flex items-center justify-center px-4"
      data-oid=":k6j2n7">

      <div className="max-w-md w-full text-center" data-oid="2dyirc9">
        <div className="bg-white rounded-2xl shadow-sm p-8" data-oid="9tws:7y">
          {/* Success Icon */}
          <div
            className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-6"
            data-oid="th0dgzl">

            <svg
              className="h-8 w-8 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="coj0174">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
                data-oid="n52lm6x" />

            </svg>
          </div>

          {/* Success Message */}
          <h1
            className="text-2xl font-bold text-slate-900 mb-2"
            data-oid="crc.w3u">

            Registration Complete!
          </h1>
          <p className="text-slate-600 mb-8" data-oid="k4a8dek">
            Thank you for completing your appraiser registration. Your
            information has been submitted successfully.
          </p>

          {/* Next Steps */}
          <div
            className="bg-slate-50 rounded-lg p-6 mb-8 text-left"
            data-oid="-rlk0x0">

            <h2
              className="font-semibold text-slate-900 mb-3"
              data-oid="ob6pu60">

              Next Steps:
            </h2>
            <ol
              className="list-decimal list-inside space-y-2 text-sm text-slate-700"
              data-oid="51i:aw5">

              <li data-oid="1ryv-b2">
                Complete individual signups with your selected AMC companies
              </li>
              <li data-oid="h4f.t:e">
                Our compliance team will review your submitted documents
              </li>
              <li data-oid="p:iki71">
                You'll receive email notifications for each step of the process
              </li>
              <li data-oid="5dd8gcb">
                AMC companies will contact you directly once approved
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3" data-oid="vj8u014">
            <Link
              href="/"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              data-oid=":led92f">

              Browse AMCs
            </Link>
            <button
              disabled
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-slate-200 text-sm font-medium rounded-lg text-slate-400 bg-slate-100 cursor-not-allowed opacity-50"
              data-oid="aaxyk7a">

              Register (Completed)
            </button>
          </div>
        </div>

        {/* Support Contact */}
        <div
          className="mt-8 text-center text-sm text-slate-500"
          data-oid="k9t80jm">

          Questions? Contact our support team at{" "}
          <a
            href="mailto:support@amconnect.com"
            className="text-emerald-600 hover:text-emerald-700"
            data-oid="sj2k8ub">

            support@amconnect.com
          </a>
        </div>
      </div>
    </div>);

}