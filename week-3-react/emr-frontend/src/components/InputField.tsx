interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function InputField({ label, name, ...props }: InputProps) {
  return (
    <div className="mb-2">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} className="form-control" {...props} />
    </div>
  );
}
