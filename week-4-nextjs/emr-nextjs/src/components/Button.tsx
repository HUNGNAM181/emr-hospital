import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      : "inline-flex items-center px-4 py-2 rounded-md font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400";

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
