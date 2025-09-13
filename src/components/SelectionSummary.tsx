import { AMCCompany } from "@/types";
import { Button } from "./ui/controls";

type Props = {
  selected: AMCCompany[];
  onClear: () => void;
  onStart: () => void;
};

export default function SelectionSummary({
  selected,
  onClear,
  onStart
}: Props) {
  if (selected.length === 0) return null;

  return (
    <div
      className="sticky bottom-4 z-40 mx-auto w-full max-w-5xl rounded-2xl border border-emerald-200 bg-white/90 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70"
      data-oid="ynui:-d">

      <div
        className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
        data-oid="g1ej2o:">

        <div data-oid="f0-9wyp">
          <p className="text-sm text-slate-600" data-oid="dcxhokv">
            Selected Companies
          </p>
          <div className="mt-1 flex flex-wrap gap-2" data-oid="9e9__:j">
            {selected.map((c) =>
            <span
              key={c.id}
              className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200"
              data-oid="01qek2r">

                {c.name}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-3" data-oid=":3ux3.h">
          <Button variant="ghost" onClick={onClear} data-oid="9-w8_bz">
            Clear
          </Button>
          <Button onClick={onStart} data-oid="95ded.w">
            Get Started
          </Button>
        </div>
      </div>
    </div>);

}