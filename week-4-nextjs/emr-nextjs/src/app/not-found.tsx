import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
          404
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Không tìm thấy trang
        </h2>

        <p className="text-gray-500 mt-2">
          Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Về Dashboard
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Đăng nhập
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">EMR Hospital System</p>
      </div>
    </div>
  );
}
