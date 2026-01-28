"use client";

import { usePathname, useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const [keyword, setKeyword] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    setShowMobileMenu(false);
    setShowMobileSearch(false);

    logout();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setShowMobileSearch(false);
    router.push(`/dashboard/patients?search=${encodeURIComponent(keyword)}`);
    setKeyword("");
  };

  const pageTitleMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/patients": "Patients",
    "/dashboard/doctors": "Doctors",
    "/dashboard/medical-records": "Medical Records",
  };

  const title =
    Object.entries(pageTitleMap).find(([key]) => pathname === key || pathname.startsWith(`${key}/`))?.[1] ?? "Detail";

  return (
    <nav className="bg-[#2196d9] shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="h-14 flex items-center gap-4 text-white">
          <div className="font-semibold text-lg tracking-wide">EMR Admin</div>

          <div className="hidden md:block text-sm opacity-90">
            Dashboard / <span className="font-semibold">{title}</span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* giữ nguyên */}
            <button
              type="button"
              onClick={() => {
                setShowMobileSearch(true);
                setShowMobileMenu(false);
              }}
              className="md:hidden w-9 h-9 flex items-center justify-center
                         rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <Search size={18} className="text-white" />
            </button>

            {/* giữ nguyên */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center bg-white/95 px-4 h-9 rounded-full
                         border border-white/40"
            >
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Tìm bệnh nhân, hồ sơ..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="outline-none bg-transparent text-gray-700 w-48 text-sm"
              />
            </form>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setShowMobileMenu((prev) => !prev);
                  setShowMobileSearch(false);
                }}
                className="md:hidden w-8 h-8 rounded-full overflow-hidden
                           border border-white/60 bg-white"
              >
                <Image
                  src="/img/patients/default.jpg"
                  alt="Admin avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                  priority
                />
              </button>

              <div className="hidden md:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/60 bg-white">
                  <Image
                    src="/img/patients/default.jpg"
                    alt="Admin avatar"
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-sm font-medium">Admin</span>
              </div>

              {showMobileMenu && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border md:hidden z-50">
                  <div className="px-4 py-2 text-sm font-medium text-gray-800 border-b">Admin</div>

                  {/*  MOBILE LOGOUT */}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600
                               hover:bg-gray-100 rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/*  DESKTOP LOGOUT */}
            <button
              onClick={handleLogout}
              className="hidden md:flex px-4 h-9 items-center rounded-md
                         bg-white/15 hover:bg-white/25 text-sm"
            >
              Logout
            </button>
          </div>

          {showMobileSearch && (
            <form
              onSubmit={handleSearch}
              className="absolute left-0 right-0 top-full
                         bg-[#2196d9] p-3 md:hidden shadow-lg"
            >
              <div className="flex items-center bg-white rounded-full px-4 h-10 gap-2">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Tìm bệnh nhân, hồ sơ..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="flex-1 outline-none text-gray-700 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowMobileSearch(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
