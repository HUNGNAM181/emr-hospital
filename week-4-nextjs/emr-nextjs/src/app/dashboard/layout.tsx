"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItem = (href: string, label: string) =>
    `block px-4 py-2 rounded-md font-medium
     ${
       pathname === href
         ? "bg-[#2196d9] text-white"
         : "text-gray-700 hover:bg-gray-200"
     }`;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 border-r p-4 space-y-2">
        <h2 className="text-lg font-semibold mb-3">Admin Panel</h2>

        <nav className="space-y-1">
          <Link
            href="/dashboard/dashboard"
            className={menuItem("/dashboard/dashboard", "Dashboard")}
          >
            Dashboard
          </Link>

          <Link
            href="/dashboard/patients"
            className={menuItem("/dashboard/patients", "Patients")}
          >
            Patients
          </Link>

          <Link
            href="/dashboard/doctors"
            className={menuItem("/dashboard/doctors", "Doctors")}
          >
            Doctors
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}
