import { Patient } from "@/types/patient";
import { Role } from "@/types/role";
import { Status } from "@/types/status";

export const patients: Patient[] = [
  {
    id: "1",
    name: "Nguyễn Văn Anh",
    age: 22,
    gender: "male",
    role: Role.Patient,
    status: Status.Active,
    records: [
      {
        id: "mr1",
        patientId: "1",
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
        patientId: "1",
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
  },

  {
    id: "2",
    name: "Trần Thị Mai",
    age: 30,
    gender: "female",
    role: Role.Patient,
    status: Status.Active,
    records: [
      {
        id: "mr3",
        patientId: "2",
        date: new Date("2026-02-01"),
        diagnosis: "Viêm dạ dày",
        doctorId: "BS.Hà",
        prescriptions: [
          {
            id: "pr4",
            medicalRecordId: "mr3",
            medicine: "Omeprazole",
            dosage: "20mg / ngày",
          },
          {
            id: "pr5",
            medicalRecordId: "mr3",
            medicine: "Maalox",
            dosage: "1 gói sau ăn",
          },
        ],
      },
    ],
  },

  {
    id: "3",
    name: "Nguyễn Thị Nở",
    age: 30,
    gender: "female",
    role: Role.Patient,
    status: Status.Active,
    records: [
      {
        id: "mr4",
        patientId: "3",
        date: new Date("2026-02-10"),
        diagnosis: "Thiếu máu nhẹ",
        doctorId: "BS.Lan",
        prescriptions: [
          {
            id: "pr6",
            medicalRecordId: "mr4",
            medicine: "Sắt Ferrovit",
            dosage: "1 viên / ngày",
          },
        ],
      },
      {
        id: "mr5",
        patientId: "3",
        date: new Date("2026-03-05"),
        diagnosis: "Mệt mỏi kéo dài",
        doctorId: "BS.Lan",
        prescriptions: [
          {
            id: "pr7",
            medicalRecordId: "mr5",
            medicine: "Vitamin B Complex",
            dosage: "1 viên / ngày",
          },
        ],
      },
    ],
  },

  {
    id: "4",
    name: "Nguyễn Chí Phèo",
    age: 35,
    gender: "male",
    role: Role.Patient,
    status: Status.Inactive,
    records: [], // ❗ chưa có hồ sơ bệnh án
  },
];
