"use client";

import { createPortal } from "react-dom";
import { AlertTriangle, Trash2, X } from "lucide-react";

export function DeleteModal({
  title = "Xoá bệnh nhân",
  message = "Bạn có chắc muốn xoá mục này không?",
  onConfirm,
  onCancel,
}: {
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000]"
        onClick={onCancel}
      />

      <div className="fixed inset-0 z-[1001] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
          <div className="flex items-center gap-3 px-5 py-4 border-b">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>

            <h5 className="text-lg font-semibold text-gray-900">{title}</h5>

            <button
              onClick={onCancel}
              className="ml-auto flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-5 py-4 text-sm text-gray-700">{message}</div>

          <div className="flex justify-end gap-3 px-5 py-4 border-t">
            <button
              onClick={onCancel}
              className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
              Huỷ
            </button>

            <button
              onClick={onConfirm}
              className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4" />
              Xoá
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
