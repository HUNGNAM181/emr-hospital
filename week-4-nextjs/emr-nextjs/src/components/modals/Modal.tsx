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
  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[1000]
                   bg-black/40 backdrop-blur-sm
                   transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      <div
        className="fixed inset-0 z-[1001]
                   flex items-end md:items-center
                   justify-center"
      >
        <div
          className="
            w-full md:max-w-lg
            bg-white
            rounded-t-2xl md:rounded-2xl
            shadow-xl
            mx-0 md:mx-4
            max-h-[90vh]
            flex flex-col
            animate-slideUp md:animate-scaleIn
          "
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="flex items-center justify-between
                       px-4 py-3
                       border-b
                       bg-gray-50
                       rounded-t-2xl"
          >
            <h5 className="text-base md:text-lg font-semibold">{title}</h5>

            <button
              onClick={onClose}
              className="w-8 h-8
                         flex items-center justify-center
                         rounded-full
                         hover:bg-gray-200
                         transition
                         text-gray-600 text-lg"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div
            className="px-4 py-4
                       overflow-y-auto
                       text-sm md:text-base"
          >
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
