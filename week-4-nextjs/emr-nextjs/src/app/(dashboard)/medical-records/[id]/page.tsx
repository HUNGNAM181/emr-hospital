import { Metadata } from "next";
import { getPatientById } from "@/data/patient.service";

export async function generateMetadata({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await Promise.resolve(params);
  const patient = getPatientById(id);

  return {
    title: patient ? `Hồ sơ bệnh án - ${patient.name}` : "Hồ sơ bệnh án",
  };
}

export default async function MedicalRecordDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await Promise.resolve(params);
  const patient = getPatientById(id);

  if (!patient) {
    return <div className="p-6 text-red-500">Không tìm thấy bệnh nhân</div>;
  }

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Hồ sơ bệnh án</h1>

      {/* ===== Thông tin bệnh nhân ===== */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Thông tin bệnh nhân</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <b>Họ tên:</b> {patient.name}
          </div>
          <div>
            <b>Tuổi:</b> {patient.age}
          </div>
          <div>
            <b>Giới tính:</b> {patient.gender}
          </div>
          <div>
            <b>Trạng thái:</b> {patient.status}
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
                    Bác sĩ: {record.doctorId}
                  </span>
                </div>

                <p className="text-sm mb-2">
                  <b>Chẩn đoán:</b> {record.diagnosis}
                </p>

                <div className="text-sm">
                  <b>Đơn thuốc:</b>
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
