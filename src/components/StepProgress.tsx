type Props = {
  step: number; // 1..6
};

const steps = [
"Personal",
"Professional",
"Address",
"Business",
"Documents",
"Review"];


export default function StepProgress({ step }: Props) {
  return (
    <ol className="grid grid-cols-6 items-center gap-2" data-oid=".4qh75g">
      {steps.map((label, i) => {
        const index = i + 1;
        const active = index <= step;
        return (
          <li
            key={label}
            className="flex items-center gap-2"
            data-oid="4:w4l:u">

            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ring-2 ${
              active ?
              "bg-emerald-600 text-white ring-emerald-400" :
              "bg-slate-100 text-slate-500 ring-slate-200"}`
              }
              data-oid="x9bvipl">

              {index}
            </span>
            <span
              className={`hidden text-sm font-medium sm:block ${active ? "text-slate-900" : "text-slate-500"}`}
              data-oid="awvpth:">

              {label}
            </span>
          </li>);

      })}
    </ol>);

}