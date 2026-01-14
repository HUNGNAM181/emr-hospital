import Image from "next/image";
import { Building2, MapPin, Users2, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10 bg-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start">
          <div className="pr-6">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/icon.png"
                alt="EMR Hospital Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                EMR Hospital System
              </h2>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              Hệ thống quản lý EMR (Electronic Medical Records) dành cho bệnh
              viện thông minh — hỗ trợ bác sĩ, điều dưỡng và quản trị viên trong
              việc quản lý hồ sơ bệnh án, quy trình khám chữa bệnh và dữ liệu y
              tế số hóa.
            </p>
          </div>

          <div className="md:px-6">
            <h3 className="text-gray-800 font-semibold mb-3">
              Thông tin hệ thống
            </h3>

            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-900" />
                <span>Đơn vị triển khai: EMR Hospital</span>
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-900" />
                <span>Địa chỉ: La Phù, Hoài Đức, Hà Nội</span>
              </li>

              <li className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-gray-900" />
                <span>Phạm vi sử dụng: Admin — Doctor — Nurse</span>
              </li>

              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gray-900" />
                <span>Bảo mật dữ liệu: Tuân thủ tiêu chuẩn y tế</span>
              </li>
            </ul>
          </div>

          <div className="md:ml-6">
            <h3 className="text-gray-800 font-semibold mb-3">
              Khu vực chức năng
            </h3>

            <ul className="text-sm text-gray-700 space-y-2">
              <li>Bảng điều khiển (Dashboard)</li>
              <li>Quản lý bệnh nhân</li>
              <li>Hồ sơ bệnh án (EMR)</li>
              <li>Quản lý nhân sự y tế</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t" />

      <div className="text-center py-4 text-sm text-gray-900 bg-[#2196d9]">
        © {new Date().getFullYear()} EMR Hospital — Internal Healthcare
        Management Platform
      </div>
    </footer>
  );
}
