import { AMCCompany } from "@/types";
import { Button } from "./ui/controls";

type Props = {
  company: AMCCompany;
  selected?: boolean;
  onToggleSelect?: (id: string) => void;
};

export default function CompanyCard({
  company,
  selected,
  onToggleSelect
}: Props) {
  return (
    <div
      className={`rounded-2xl border ${selected ? "border-emerald-500 ring-2 ring-emerald-200" : "border-slate-200"} bg-white p-5 shadow-sm transition`}
      data-oid="y6namqq">

      <div className="flex items-start justify-between" data-oid="fuheu8c">
        <div data-oid="c3qcjqv">
          <h3
            className="text-lg font-semibold text-slate-900"
            data-oid="b0q-9r1">

            {company.name}
          </h3>
          <p className="mt-1 text-sm text-slate-600" data-oid="078ll5s">
            {company.state}
          </p>
        </div>
        <span
          className={`ml-3 inline-flex h-8 items-center rounded-full px-3 text-xs font-medium ${selected ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-slate-50 text-slate-600 ring-1 ring-slate-200"}`}
          data-oid="423_:h2">

          {selected ? "Selected" : "Available"}
        </span>
      </div>

      <dl
        className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2"
        data-oid="thm:qv4">

        <div data-oid="3b3iah7">
          <dt className="text-slate-500" data-oid=".5oz_5-">
            Phone
          </dt>
          <dd className="font-medium" data-oid="caqoy4q">
            {company.phone}
          </dd>
        </div>
        <div data-oid="0b7we-5">
          <dt className="text-slate-500" data-oid="47gczjt">
            Email
          </dt>
          <dd className="font-medium" data-oid="u251i99">
            {company.email}
          </dd>
        </div>
        <div data-oid="8yt9adi">
          <dt className="text-slate-500" data-oid="3_mtfo0">
            Website
          </dt>
          <dd data-oid="4bz:2u:">
            <a
              className="font-medium text-emerald-700 hover:underline"
              href={company.website}
              target="_blank"
              rel="noreferrer"
              data-oid="_-srlat">

              {company.website.replace(/^https?:\/\//, "")}
            </a>
          </dd>
        </div>
        <div data-oid="u5p54jl">
          <dt className="text-slate-500" data-oid="se3opuj">
            State
          </dt>
          <dd className="font-medium" data-oid=":i40k_9">
            {company.state}
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-3" data-oid="94hsldk">
        <a
          href={company.signupUrl}
          target="_blank"
          rel="noreferrer"
          data-oid="si2c5qr">

          <Button data-oid="xl7mbqf">Sign Up</Button>
        </a>
        <Button
          variant="secondary"
          onClick={() => onToggleSelect?.(company.id)}
          data-oid="lex.t0l">

          {selected ? "Unselect" : "Select"}
        </Button>
      </div>
    </div>);

}