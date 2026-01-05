import React from "react";
interface PropSelectField
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

export default function SelectField({
  label,
  name,
  options,
  ...props
}: PropSelectField) {
  return (
    <div className="mb-2">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <select id={name} name={name} className="form-select" {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
