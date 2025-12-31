import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const clasName =
    variant === "primary" ? "btn btn-primary" : "btn btn-secondary";
  return (
    <button className={clasName} {...props}>
      {children}
    </button>
  );
}
