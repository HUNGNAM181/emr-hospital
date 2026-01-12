import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "EMR Hospital - Quản lý Bệnh nhân",
  description:
    "Hệ thống quản lý EMR (Electronic Medical Records) cho bệnh viện thông minh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased `}>{children}</body>
    </html>
  );
}
