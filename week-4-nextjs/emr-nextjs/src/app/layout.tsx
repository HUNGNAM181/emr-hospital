import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "EMR Hospital - Quản lý Bệnh nhân",
    template: "%s | EMR Hospital",
  },
  description: "Hệ thống quản lý EMR (Electronic Medical Records) cho bệnh viện thông minh",

  openGraph: {
    title: "EMR Hospital",
    description: "Hệ thống quản lý hồ sơ bệnh án điện tử cho bệnh viện hiện đại",
    images: ["/icon.png"], // public/og-image.png
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
