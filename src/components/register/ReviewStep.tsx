import React from "react";
import { RegistrationData, AMCCompany } from "@/types";

interface Props {
  data: RegistrationData;
  updateData: (updates: Partial<RegistrationData>) => void;
  selectedCompanies: AMCCompany[];
}

export default function ReviewStep({
  data,
  updateData,
  selectedCompanies
}: Props) {
  const handleComplete = () => {
    if (data.termsAccepted && data.privacyAccepted) {
      // In a real app, this would submit to an API
      alert("Registration completed successfully!");
      // Redirect to success page or home
      window.location.href = "/register/success";
    }
  };

  return (
    <div className="space-y-8" data-oid="ubaea89">
      {/* Personal Information */}
      <div className="bg-slate-50 rounded-lg p-6" data-oid="l4obawc">
        <div
          className="flex items-center justify-between mb-4"
          data-oid="n04npr0">

          <h3 className="text-lg font-medium text-slate-900" data-oid="c-dp6i8">
            Personal Information
          </h3>
          <button
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            data-oid="owp.5wg">

            Edit
          </button>
        </div>
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm"
          data-oid="whu5y0o">

          <div data-oid="_-flvf4">
            <span className="font-medium text-slate-700" data-oid="njufpw2">
              Name:
            </span>
            <span className="ml-2 text-slate-600" data-oid="4_3aj2e">
              {data.firstName} {data.lastName}
            </span>
          </div>
          <div data-oid=":fyqp1x">
            <span className="font-medium text-slate-700" data-oid="7x3f5f:">
              Email:
            </span>
            <span className="ml-2 text-slate-600" data-oid="34neuo8">
              {data.regEmail}
            </span>
          </div>
          <div data-oid="_iuc.jd">
            <span className="font-medium text-slate-700" data-oid="0mzx2hi">
              Phone:
            </span>
            <span className="ml-2 text-slate-600" data-oid="a60hq0n">
              {data.regPhone}
            </span>
          </div>
          <div data-oid="d9z2ynz">
            <span className="font-medium text-slate-700" data-oid="_yunt.q">
              Experience:
            </span>
            <span className="ml-2 text-slate-600" data-oid="g:e4vim">
              {data.yearsExperience} years
            </span>
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className="bg-slate-50 rounded-lg p-6" data-oid="wefy87j">
        <div
          className="flex items-center justify-between mb-4"
          data-oid="w2n0d6j">

          <h3 className="text-lg font-medium text-slate-900" data-oid="ccimzp1">
            Professional Information
          </h3>
          <button
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            data-oid="62cji5f">

            Edit
          </button>
        </div>
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm"
          data-oid="70qu:::">

          <div data-oid="rvb389r">
            <span className="font-medium text-slate-700" data-oid="l.67edr">
              Company:
            </span>
            <span className="ml-2 text-slate-600" data-oid="egll786">
              {data.companyName}
            </span>
          </div>
          <div data-oid="a:nb6-r">
            <span className="font-medium text-slate-700" data-oid="s2_qh1v">
              License:
            </span>
            <span className="ml-2 text-slate-600" data-oid="y7hp_qr">
              {data.licenseNumber} ({data.licenseState})
            </span>
          </div>
          {data.designations && data.designations.length > 0 &&
          <div className="sm:col-span-2" data-oid="0ku--9z">
              <span className="font-medium text-slate-700" data-oid="1.obo45">
                Designations:
              </span>
              <span className="ml-2 text-slate-600" data-oid="7.lv:i6">
                {data.designations.join(", ")}
              </span>
            </div>
          }
          {data.specialties && data.specialties.length > 0 &&
          <div className="sm:col-span-2" data-oid="ho--vo4">
              <span className="font-medium text-slate-700" data-oid="5re9q9m">
                Specialties:
              </span>
              <span className="ml-2 text-slate-600" data-oid="ggee_z8">
                {data.specialties.join(", ")}
              </span>
            </div>
          }
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-slate-50 rounded-lg p-6" data-oid="flx89ok">
        <div
          className="flex items-center justify-between mb-4"
          data-oid="bhplcg4">

          <h3 className="text-lg font-medium text-slate-900" data-oid="ycdbjk4">
            Address Information
          </h3>
          <button
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            data-oid="uu1pjet">

            Edit
          </button>
        </div>
        <div className="text-sm" data-oid="1cewfcx">
          <div className="mb-2" data-oid="7z0y:bc">
            <span className="font-medium text-slate-700" data-oid="6qx2h77">
              Address:
            </span>
            <span className="ml-2 text-slate-600" data-oid="o28y_xf">
              {data.address1}
              {data.address2 && `, ${data.address2}`}
            </span>
          </div>
          <div data-oid="ttzu-ls">
            <span className="font-medium text-slate-700" data-oid="31leieu">
              Location:
            </span>
            <span className="ml-2 text-slate-600" data-oid="7eufb1m">
              {data.city}, {data.state} {data.zip}
            </span>
          </div>
          {data.serviceRadius &&
          <div className="mt-2" data-oid="7gorseq">
              <span className="font-medium text-slate-700" data-oid="be:y3u1">
                Service Radius:
              </span>
              <span className="ml-2 text-slate-600" data-oid="e7x_p-6">
                {data.serviceRadius} miles
              </span>
            </div>
          }
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-slate-50 rounded-lg p-6" data-oid="_c110wq">
        <div
          className="flex items-center justify-between mb-4"
          data-oid="o38bhme">

          <h3 className="text-lg font-medium text-slate-900" data-oid="hi8sf0g">
            Business Information
          </h3>
          <button
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            data-oid="lt4.8o1">

            Edit
          </button>
        </div>
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm"
          data-oid="tb35hj.">

          <div data-oid="x6::e79">
            <span className="font-medium text-slate-700" data-oid="rq157io">
              Business Type:
            </span>
            <span className="ml-2 text-slate-600" data-oid="ef:nvj2">
              {data.businessType}
            </span>
          </div>
          <div data-oid="gv3q_lw">
            <span className="font-medium text-slate-700" data-oid="-inhp.w">
              Tax ID:
            </span>
            <span className="ml-2 text-slate-600" data-oid="_u8ajmm">
              {data.taxId}
            </span>
          </div>
          <div data-oid="uhd.yga">
            <span className="font-medium text-slate-700" data-oid="rfo73p0">
              Formation Date:
            </span>
            <span className="ml-2 text-slate-600" data-oid="9e0s59h">
              {data.formationDate}
            </span>
          </div>
        </div>
      </div>

      {/* Selected AMC Companies */}
      <div className="bg-slate-50 rounded-lg p-6" data-oid="gh0i0wi">
        <h3
          className="text-lg font-medium text-slate-900 mb-4"
          data-oid="2ngd832">

          Selected AMC Companies
        </h3>
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          data-oid="z9xbb_2">

          {selectedCompanies.map((company) =>
          <div
            key={company.id}
            className="bg-white rounded-lg border border-slate-200 p-4"
            data-oid="galwwpa">

              <h4
              className="font-medium text-slate-900 mb-2"
              data-oid="jt3accs">

                {company.name}
              </h4>
              <p className="text-sm text-slate-600 mb-3" data-oid="t2l_meo">
                State: {company.state}
              </p>
              <a
              href={company.signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700"
              data-oid=":d..ke4">

                Complete Signup →
              </a>
            </div>
          )}
        </div>
        <div
          className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          data-oid="17n.72y">

          <p className="text-sm text-blue-800" data-oid="27tfd2l">
            <strong data-oid="efuq7mc">Next Steps:</strong> After completing
            this registration, you'll need to complete individual signups with
            each selected AMC company using the links above.
          </p>
        </div>
      </div>

      {/* Terms and Privacy */}
      <div className="bg-slate-50 rounded-lg p-6" data-oid="d3jumv0">
        <h3
          className="text-lg font-medium text-slate-900 mb-4"
          data-oid="8klowgh">

          Terms & Conditions
        </h3>
        <div className="space-y-4" data-oid="4x.uojb">
          <label className="flex items-start space-x-3" data-oid=".3jvzm0">
            <input
              type="checkbox"
              checked={data.termsAccepted || false}
              onChange={(e) => updateData({ termsAccepted: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
              required
              data-oid="p6i7i3o" />


            <span className="text-sm text-slate-700" data-oid="4:c0m_e">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
                data-oid="h4c8uh3">

                Terms of Service
              </a>{" "}
              and acknowledge that I have read and understand the terms
              governing the use of this platform.
            </span>
          </label>

          <label className="flex items-start space-x-3" data-oid="i86naaw">
            <input
              type="checkbox"
              checked={data.privacyAccepted || false}
              onChange={(e) =>
              updateData({ privacyAccepted: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
              required
              data-oid="jcernjt" />


            <span className="text-sm text-slate-700" data-oid="7x939pt">
              I agree to the{" "}
              <a
                href="/privacy"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
                data-oid="sz0l3ba">

                Privacy Policy
              </a>{" "}
              and consent to the collection and use of my information as
              described.
            </span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center space-y-3" data-oid="131zsnn">
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          data-oid="3mttg:8">

          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            data-oid="browse-amcs-btn">

            Browse AMCs
          </a>
          <button
            onClick={handleComplete}
            disabled={!data.termsAccepted || !data.privacyAccepted}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
            data-oid="akloln5">

            Complete Registration
          </button>
        </div>
        <p className="mt-3 text-sm text-slate-600" data-oid="jrytt1_">
          By completing registration, you confirm all information provided is
          accurate and complete.
        </p>
      </div>
    </div>);

}