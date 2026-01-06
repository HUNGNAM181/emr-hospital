"use client";
import { useEffect } from "react";

export interface ToastProps {
  message: string;
  type?: "success" | "info" | "warning" | "danger";
  duration?: number; // ms
  onClose: () => void;
}

export function Toast({
  message,
  type = "success",
  duration = 2500,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bg =
    type === "success"
      ? "bg-green-600"
      : type === "danger"
      ? "bg-red-600"
      : type === "warning"
      ? "bg-amber-400 text-black"
      : "bg-blue-600";

  return (
    <div className="fixed top-3 right-3 z-[1055]">
      <div
        className={`rounded-lg shadow-lg px-4 py-3 text-white transition-opacity ${bg}`}
      >
        <div className="flex items-center justify-between gap-3 font-semibold">
          <span>{message}</span>

          <button
            type="button"
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
