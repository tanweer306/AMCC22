"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import StepProgress from "@/components/StepProgress";
import { RegistrationData } from "@/types";
import { COMPANIES } from "@/lib/mockData";
import PersonalInfoStep from "@/components/register/PersonalInfoStep";
import ProfessionalInfoStep from "@/components/register/ProfessionalInfoStep";
import AddressInfoStep from "@/components/register/AddressInfoStep";
import BusinessInfoStep from "@/components/register/BusinessInfoStep";
import DocumentsStep from "@/components/register/DocumentsStep";
import ReviewStep from "@/components/register/ReviewStep";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<RegistrationData>({
    selectedCompanyIds: [],
    step: 1,
    references: [
    { name: "", company: "", email: "", phone: "", relationship: "" },
    { name: "", company: "", email: "", phone: "", relationship: "" },
    { name: "", company: "", email: "", phone: "", relationship: "" }],


    documents: {},
    designations: [],
    specialties: [],
    languages: [],
    geographicCoverage: []
  });

  useEffect(() => {
    const ids = searchParams?.get("ids");
    if (ids) {
      setData((prev) => ({
        ...prev,
        selectedCompanyIds: ids.split(",").filter(Boolean)
      }));
    }
  }, [searchParams]);

  const selectedCompanies = COMPANIES.filter((c) =>
  data.selectedCompanyIds.includes(c.id)
  );

  const updateData = (updates: Partial<RegistrationData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const goNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
      setData((prev) => ({ ...prev, step: currentStep + 1 }));
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setData((prev) => ({ ...prev, step: currentStep - 1 }));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            data={data}
            updateData={updateData}
            data-oid="v_2.w_8" />);



      case 2:
        return (
          <ProfessionalInfoStep
            data={data}
            updateData={updateData}
            data-oid="mxz-xkk" />);



      case 3:
        return (
          <AddressInfoStep
            data={data}
            updateData={updateData}
            data-oid="ozlc6a7" />);



      case 4:
        return (
          <BusinessInfoStep
            data={data}
            updateData={updateData}
            data-oid="4rf-z:p" />);



      case 5:
        return (
          <DocumentsStep
            data={data}
            updateData={updateData}
            data-oid="gv510at" />);



      case 6:
        return (
          <ReviewStep
            data={data}
            updateData={updateData}
            selectedCompanies={selectedCompanies}
            data-oid="4m:cvg_" />);



      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information";
      case 2:
        return "Professional Information";
      case 3:
        return "Address Information";
      case 4:
        return "Business Information";
      case 5:
        return "Documents";
      case 6:
        return "Review & Complete";
      default:
        return "";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Basic information about you";
      case 2:
        return "License and certification details";
      case 3:
        return "Business and service locations";
      case 4:
        return "Company and professional details";
      case 5:
        return "Upload required documents";
      case 6:
        return "Review and complete registration";
      default:
        return "";
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!(
        data.firstName?.trim() &&
        data.lastName?.trim() &&
        data.regEmail?.trim() &&
        data.regPhone?.trim() &&
        data.yearsExperience?.trim());


      case 2:
        return !!(
        data.companyName?.trim() &&
        data.licenseNumber?.trim() &&
        data.licenseState?.trim());


      case 3:
        return !!(
        data.address1?.trim() &&
        data.city?.trim() &&
        data.state?.trim() &&
        data.zip?.trim());


      case 4:
        return !!(
        data.businessType?.trim() &&
        data.taxId?.trim() &&
        data.formationDate?.trim());


      case 5:
        return true; // Documents are optional for now
      case 6:
        return !!(data.termsAccepted && data.privacyAccepted);
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50" data-oid="register-container">
      <div className="mx-auto max-w-4xl px-4 py-8" data-oid="v:.xr7b">
        {/* Header */}
        <div className="mb-8 text-center" data-oid="i8ec4sg">
          <h1
            className="text-3xl font-bold text-slate-900 mb-2"
            data-oid="gbu7kh.">

            Appraiser Registration
          </h1>
          <p className="text-slate-600" data-oid="hm-f5i2">
            Complete your registration to connect with AMC companies
          </p>
        </div>

        {/* Progress */}
        <div
          className="mb-8 rounded-2xl bg-white p-6 shadow-sm"
          data-oid="oxvy3c:">

          <div
            className="mb-4 flex items-center justify-between"
            data-oid="dq5a-c3">

            <span
              className="text-sm font-medium text-slate-900"
              data-oid="xnbjni9">

              {Math.round(currentStep / 6 * 100)}% Complete
            </span>
            <span className="text-sm text-slate-500" data-oid="991igf6">
              Step {currentStep} of 6
            </span>
          </div>
          <StepProgress step={currentStep} data-oid="aqlv4qs" />
        </div>

        {/* Main Content */}
        <div className="rounded-2xl bg-white shadow-sm" data-oid="xk3y8jf">
          <div className="border-b border-slate-200 p-6" data-oid="myhs0nc">
            <h2
              className="text-xl font-semibold text-slate-900"
              data-oid="qlx1a1f">

              {getStepTitle()}
            </h2>
            <p className="mt-1 text-sm text-slate-600" data-oid="8odefjg">
              {getStepDescription()}
            </p>
          </div>

          <div className="p-6" data-oid="6ei60rw">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div
            className="flex items-center justify-between border-t border-slate-200 p-6"
            data-oid="qy-x.az">

            <button
              onClick={goBack}
              disabled={currentStep === 1}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
              data-oid="5i3e1p_"
              key="olk-Ql4_">

              Previous
            </button>
            <button
              onClick={goNext}
              disabled={!canProceed() || currentStep === 6}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              data-oid="w:4gzm."
              key="olk-kGpG">

              {currentStep === 6 ? "Complete Registration" : "Continue"}
            </button>
          </div>
        </div>

        {/* Help */}
        <div
          className="mt-8 text-center text-sm text-slate-500"
          data-oid="mb-g.lc">

          Need help? Contact our support team at{" "}
          <a
            href="mailto:support@amconnect.com"
            className="text-emerald-600 hover:text-emerald-700"
            data-oid="1p:jt4:">

            support@amconnect.com
          </a>{" "}
          or{" "}
          <a
            href="tel:555-123-4567"
            className="text-emerald-600 hover:text-emerald-700"
            data-oid="dyzl.:s">

            (555) 123-4567
          </a>
        </div>
      </div>
    </div>);

}