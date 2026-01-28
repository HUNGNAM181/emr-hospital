"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/breadcrumb";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
      return;
    }

    setReady(true);
  }, [isLoggedIn, router]);

  // Chưa check xong auth → không render gì
  if (!ready) return null;

  // ================= UI LOGIC (GIỮ NGUYÊN) =================
  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const menuItem = (href: string) =>
    `block px-4 py-2 rounded-md font-medium transition
     ${isActive(href) ? "bg-[#2196d9] text-white" : "text-gray-700 hover:bg-gray-200"}`;

  const SidebarContent = (
    <>
      <nav className="space-y-1">
        <Link href="/dashboard" className={menuItem("/dashboard")} onClick={() => setOpenSidebar(false)}>
          Dashboard
        </Link>

        <Link
          href="/dashboard/patients"
          className={menuItem("/dashboard/patients")}
          onClick={() => setOpenSidebar(false)}
        >
          Patients
        </Link>

        <Link
          href="/dashboard/doctors"
          className={menuItem("/dashboard/doctors")}
          onClick={() => setOpenSidebar(false)}
        >
          Doctors
        </Link>
      </nav>
    </>
  );

  // ================= RENDER =================
  return (
    <>
      <Header />

      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        <aside className="hidden md:block w-60 bg-gray-100 border-r p-4 overflow-y-auto">{SidebarContent}</aside>

        {openSidebar && (
          <>
            <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpenSidebar(false)} />

            <aside
              className="fixed left-0 top-0 bottom-0 w-64 bg-gray-100
                         p-4 z-50 md:hidden shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Admin Panel</h2>
                <button onClick={() => setOpenSidebar(false)}>
                  <X />
                </button>
              </div>

              {SidebarContent}
            </aside>
          </>
        )}

        <main className="flex-1 bg-white overflow-y-auto p-4 md:p-6">
          <button
            className="md:hidden mb-3 inline-flex items-center gap-2
                       px-3 py-2 rounded-md border text-sm"
            onClick={() => setOpenSidebar(true)}
          >
            <Menu size={16} />
            Menu
          </button>

          <Breadcrumb />
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
}
