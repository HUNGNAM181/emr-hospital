"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <span className="text-3xl">⚠️</span>
        </div>

        <h1 className="text-xl font-semibold text-gray-800">Đã xảy ra lỗi</h1>

        <p className="mt-2 text-sm text-gray-600">
          Có lỗi không mong muốn xảy ra. Vui lòng thử lại.
        </p>

        {process.env.NODE_ENV === "development" && (
          <pre className="mt-4 max-h-32 overflow-auto rounded bg-gray-100 p-3 text-left text-xs text-red-600">
            {error.message}
          </pre>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={reset}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            Thử lại
          </button>

          <Link
            href="/"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
