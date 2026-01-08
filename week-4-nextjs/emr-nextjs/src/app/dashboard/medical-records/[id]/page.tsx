import { Patient } from "@/types/patient";
import { Role } from "@/types/role";
import { Status } from "@/types/status";

export default function MedicalRecordDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const patient: Patient = {
    id: params.id,
    name: "Nguyễn Văn Anh",
    age: 22,
    gender: "male",
    role: Role.Patient,
    status: Status.Active,
    records: [
      {
        id: "mr1",
        patientId: params.id,
        date: new Date("2026-01-05"),
        diagnosis: "Tăng huyết áp",
        doctorId: "TS.Nam",
        prescriptions: [
          {
            id: "pr1",
            medicalRecordId: "mr1",
            medicine: "Amlodipine",
            dosage: "5mg / ngày",
          },
          {
            id: "pr2",
            medicalRecordId: "mr1",
            medicine: "Losartan",
            dosage: "50mg / ngày",
          },
        ],
      },
      {
        id: "mr2",
        patientId: params.id,
        date: new Date("2026-01-15"),
        diagnosis: "Đau đầu kéo dài",
        doctorId: "TS.Tân",
        prescriptions: [
          {
            id: "pr3",
            medicalRecordId: "mr2",
            medicine: "Paracetamol",
            dosage: "500mg khi đau",
          },
        ],
      },
    ],
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Chi tiết hồ sơ bệnh án</h1>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Thông tin bệnh nhân</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Họ tên: </span>
            <span className="font-medium">{patient.name}</span>
          </div>
          <div>
            <span className="text-gray-500">Tuổi:</span> {patient.age}
          </div>
          <div>
            <span className="text-gray-500">Giới tính:</span> {patient.gender}
          </div>
          <div>
            <span className="text-gray-500">Trạng thái:</span> {patient.status}
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Lịch sử khám bệnh</h2>

        {patient.records.length === 0 ? (
          <p className="text-sm text-gray-500">Chưa có hồ sơ bệnh án</p>
        ) : (
          <ul className="space-y-4">
            {patient.records.map((record) => (
              <li key={record.id} className="rounded-lg border bg-gray-50 p-4">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">
                    Ngày khám: {record.date.toLocaleDateString("vi-VN")}
                  </span>
                  <span className="text-gray-500">
                    BS ID: {record.doctorId}
                  </span>
                </div>

                <p className="text-sm mb-2">
                  <span className="font-medium">Chẩn đoán:</span>
                  {record.diagnosis}
                </p>

                <div className="text-sm">
                  <span className="font-medium">Đơn thuốc:</span>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {record.prescriptions.map((p) => (
                      <li key={p.id}>
                        {p.medicine} – {p.dosage}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
