import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, className = "", children, ...props }, ref) =>
  <label
    className="block text-sm font-medium text-slate-700"
    data-oid="pi089n0">

      {label &&
    <span className="mb-1 block" data-oid="e_xcct4">
          {label}
        </span>
    }
      <select
      ref={ref}
      className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 ${className}`}
      {...props}
      data-oid="du2jkju">

        {children}
      </select>
    </label>

);
Select.displayName = "Select";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, className = "", ...props }, ref) =>
  <label
    className="block text-sm font-medium text-slate-700"
    data-oid="826htuq">

      {label &&
    <span className="mb-1 block" data-oid="a.:8ldm">
          {label}
        </span>
    }
      <input
      ref={ref}
      className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 ${className}`}
      {...props}
      data-oid="tvbiukp" />


      {hint &&
    <p className="mt-1 text-xs text-slate-500" data-oid="tm1cemo">
          {hint}
        </p>
    }
    </label>

);
Input.displayName = "Input";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className = "", ...props }, ref) =>
  <label
    className="block text-sm font-medium text-slate-700"
    data-oid="6pzl-.k">

      {label &&
    <span className="mb-1 block" data-oid="7l3:1w7">
          {label}
        </span>
    }
      <textarea
      ref={ref}
      className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 ${className}`}
      {...props}
      data-oid="a6x:dm8" />

    </label>

);
Textarea.displayName = "Textarea";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-200";
  const variants = {
    primary:
    "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 focus:ring-offset-1",
    secondary:
    "bg-white text-emerald-700 ring-1 ring-emerald-300 hover:bg-emerald-50",
    ghost: "text-emerald-700 hover:bg-emerald-50"
  } as const;

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
      data-oid="d68lmsy">

      {children}
    </button>);

};