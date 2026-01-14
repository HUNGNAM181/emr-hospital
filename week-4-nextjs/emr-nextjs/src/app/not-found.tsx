import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>

        <p className="mt-4 text-xl font-semibold text-gray-800">
          Không tìm thấy trang
        </p>

        <p className="mt-2 text-gray-600">
          Trang bạn đang tìm không tồn tại hoặc đã bị xóa.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
          >
            Trang chủ
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
