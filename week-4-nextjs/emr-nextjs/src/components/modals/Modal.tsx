"use client";

import { createPortal } from "react-dom";

export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[1001] flex items-center justify-center">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50 rounded-sm">
            <h5 className="text-lg font-semibold">{title}</h5>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="px-4 py-4">{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
}
