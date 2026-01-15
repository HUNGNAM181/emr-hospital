import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "1",
      name: "Nguyễn Văn Anh",
      age: 22,
      gender: "male",
      phone: "0901234567",
      address: "Hà Nội",
    },
    {
      id: "2",
      name: "Trần Thị Mai",
      age: 30,
      gender: "female",
      phone: "0912345678",
      address: "TP. Hồ Chí Minh",
    },
    {
      id: "3",
      name: "Nguyễn Thị Nở",
      age: 30,
      gender: "female",
      phone: "0912345678",
      address: "TP. Hồ Chí Minh",
    },
    {
      id: "4",
      name: "Nguyễn Chí Phèo",
      age: 30,
      gender: "male",
      phone: "0912345678",
      address: "TP. Hồ Chí Minh",
    },
  ]);
}
