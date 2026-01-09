export default function DashboardPage() {
  const totalPatients = 128;
  const todayAppointments = [
    {
      id: 1,
      name: "Nguyễn Văn Viết",
      age: 45,
      gender: "Nam",
      time: "08:30",
      symptom: "Đau đầu, chóng mặt",
      status: "Chờ khám",
    },
    {
      id: 2,
      name: "Bùi Thị Hà",
      age: 32,
      gender: "Nữ",
      time: "09:15",
      symptom: "Đau bụng",
      status: "Đã khám",
    },
    {
      id: 3,
      name: "Lê Văn Lâm",
      age: 60,
      gender: "Nam",
      time: "10:00",
      symptom: "Đau lưng",
      status: "Chờ khám",
    },
    {
      id: 4,
      name: "Lê Văn Lâm",
      age: 60,
      gender: "Nam",
      time: "10:00",
      symptom: "Đau lưng",
      status: "Chờ khám",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tổng bệnh nhân */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Tổng số bệnh nhân</p>
          <p className="mt-2 text-3xl font-semibold">{totalPatients}</p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Lịch hẹn hôm nay</p>
          <p className="mt-2 text-3xl font-semibold">
            {todayAppointments.length}
          </p>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Lịch hẹn hôm nay</h2>

        <ul className="space-y-4">
          {todayAppointments.map((appt) => (
            <li key={appt.id} className="rounded-lg border bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{appt.name}</h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium
            ${
              appt.status === "Đã khám"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
                >
                  {appt.status}
                </span>
              </div>

              <div className="mt-2 text-sm text-gray-600">
                {appt.gender} - {appt.age} tuổi - {appt.time}
              </div>

              <div className="mt-2 text-sm">
                <span className="font-medium text-gray-700">Triệu chứng:</span>{" "}
                {appt.symptom}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
