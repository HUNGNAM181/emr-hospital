interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

export default function InputField({
  label,
  name,
  error,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        id={name}
        name={name}
        {...props}
        className={`
          w-full rounded-md border px-3 py-2 text-sm
          shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
        `}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
