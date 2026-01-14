"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAME_MAP: Record<string, string> = {
  dashboard: "Dashboard",
  patients: "Patients",
  doctors: "Doctors",
  "medical-records": "Medical Records",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Chỉ hiện breadcrumb trong dashboard
  if (segments[0] !== "dashboard") return null;

  return (
    <nav className="mb-4 text-sm text-gray-600">
      <ol className="flex items-center gap-2">
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = "/" + segments.slice(0, index + 1).join("/");

          if (segment.match(/^\d+$/)) {
            return (
              <li key={segment} className="flex items-center gap-2">
                <span>/</span>
                <span className="font-medium text-gray-900">Detail</span>
              </li>
            );
          }

          return (
            <li key={href} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {isLast ? (
                <span className="font-medium text-gray-900">
                  {NAME_MAP[segment] ?? segment}
                </span>
              ) : (
                <Link href={href} className="hover:text-blue-600">
                  {NAME_MAP[segment] ?? segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
