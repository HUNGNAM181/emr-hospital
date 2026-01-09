"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const menuItem = (href: string) =>
    `block px-4 py-2 rounded-md font-medium transition
     ${
       isActive(href)
         ? "bg-[#2196d9] text-white"
         : "text-gray-700 hover:bg-gray-200"
     }`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <aside className="w-60 bg-gray-100 border-r p-4 space-y-2">
          <h2 className="text-lg font-semibold mb-3">Admin Panel</h2>

          <nav className="space-y-1">
            <Link href="/dashboard" className={menuItem("/dashboard")}>
              Dashboard
            </Link>

            <Link href="/patients" className={menuItem("/patients")}>
              Patients
            </Link>

            <Link href="/doctors" className={menuItem("/doctors")}>
              Doctors
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-white">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
