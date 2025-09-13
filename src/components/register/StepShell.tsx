import { Button } from "@/components/ui/controls";
import StepProgress from "@/components/StepProgress";

export default function StepShell({
  step,
  title,
  children,
  onPrev,
  onNext






}: {step: number;title: string;children: React.ReactNode;onPrev?: () => void;onNext?: () => void;}) {
  return (
    <div className="space-y-6" data-oid="ga9pplo">
      <div
        className="rounded-3xl bg-gradient-to-br from-teal-600 via-emerald-600 to-emerald-500 p-6 text-white shadow-lg"
        data-oid="rhf:h6t">

        <div
          className="flex items-center justify-between gap-4"
          data-oid="szg:8j3">

          <div data-oid="1rvhods">
            <p className="text-sm/5 text-white/80" data-oid="tm9cffr">
              Step {step} of 6
            </p>
            <h2 className="text-xl font-bold sm:text-2xl" data-oid="vhqjg2g">
              {title}
            </h2>
          </div>
          <div className="hidden sm:block" data-oid="mnmoute">
            <StepProgress step={step} data-oid="u8hxr2v" />
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        data-oid="km2d-9k">

        {children}
        <div
          className="mt-6 flex items-center justify-between"
          data-oid="2rvtr:n">

          <Button
            variant="ghost"
            onClick={onPrev}
            disabled={!onPrev}
            data-oid="wney3h2">

            Back
          </Button>
          <Button onClick={onNext} disabled={!onNext} data-oid="4bx69ug">
            Continue
          </Button>
        </div>
      </div>
    </div>);

}