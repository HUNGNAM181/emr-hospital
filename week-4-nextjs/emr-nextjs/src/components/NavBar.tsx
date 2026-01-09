"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const menuItem = (href: string) =>
    `px-5 h-12 flex items-center font-semibold text-white rounded-md
     transition-all duration-150
     ${pathname === href ? "bg-[#196fa8]" : "hover:bg-[#196fa8]/70"}`;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    router.push(`/search?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <nav className="bg-[#2196d9] shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-16 flex items-center gap-8">
          {/* Menu trái */}
          <Link href="/" className={menuItem("/")}>
            Trang chủ
          </Link>
          <Link href="/about" className={menuItem("/about")}>
            Giới thiệu
          </Link>
          <Link href="/news" className={menuItem("/news")}>
            Tin tức
          </Link>

          {/* Bên phải */}
          <div className="ml-auto flex items-center gap-4">
            {/* Ô tìm kiếm */}
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white px-4 h-10 rounded-full 
                         border border-gray-300 shadow-sm"
            >
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="outline-none bg-transparent text-gray-600 w-48 md:w-64"
              />

              {/* Nút icon tìm kiếm */}
              <button
                type="submit"
                className="ml-2 w-8 h-8 flex items-center justify-center rounded-full
                           hover:bg-[#196fa8]/15 transition"
                title="Tìm kiếm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  stroke="#196fa8"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="transition group-hover:stroke-white"
                >
                  <path d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                </svg>
              </button>
            </form>

            {/* Đăng ký */}
            <Link
              href="/register"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold
                         px-5 h-10 rounded-full flex items-center"
            >
              TEST
            </Link>

            {/* Đăng nhập */}
            <Link
              href="/login"
              className="border border-white/80 text-white px-5 h-10 rounded-full
                         flex items-center hover:bg-[#196fa8]/70"
            >
              TEST
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
