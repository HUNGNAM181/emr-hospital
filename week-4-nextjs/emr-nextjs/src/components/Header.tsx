import Link from "next/link";
import Image from "next/image";
import Navbar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className=" bg-white ">
        <div className="border-b border-gray-300">
          <div className="h-10 flex items-center max-w-7xl px-8 mx-auto ">
            <span className="text-sm text-gray-400">
              Chào mừng bạn đến với EMR Hospital - Quản lý Bệnh nhân!
            </span>
          </div>
        </div>
        <div>
          <div className="max-w-7xl mx-auto px-8 py-1 flex items-center justify-between">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/icon.png"
                  alt="Logo EMR"
                  width={200} // kích thước gốc tham chiếu
                  height={200}
                  className="h-24 w-auto max-h-24"
                  priority
                />
              </Link>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a83cf"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin-house-icon lucide-map-pin-house"
                >
                  <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                  <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                  <path d="M18 22v-3" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-base leading-6 font-bold text-gray-500 ">
                  <p>Địa chỉ bệnh viện:</p>
                </div>
                <div className="text-xs font-normal text-gray-400">
                  <p>La Phù, Hoài Đức, Hà Nội</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a83cf"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock-icon lucide-clock"
                >
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-base leading-6 font-bold text-gray-500 ">
                  <p>Giờ làm việc:</p>
                </div>
                <div className="text-xs font-normal text-gray-400">
                  <p>24/24 thứ 2 - CN (Kể cả lễ, Tết)</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a83cf"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-icon lucide-phone"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-base leading-6 font-bold text-gray-500 ">
                  <p>Hotline tư vấn:</p>
                </div>
                <div className="font-bold text-base text-blue-600">
                  <p>0902291756</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* <div className="h-16" /> */}
    </>
  );
}
