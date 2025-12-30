import { useEffect, useState } from "react";
import { Patient } from "../models/patient";

export function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showList, setShowList] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const res = await fetch("/patients.json");
        if (!res.ok) throw new Error("Failed fetch");
        // const data: Patient[] = await res.json(); // Lỗi
        // ép kiểu rõ ràng để tránh lỗi TS
        const data = (await res.json()) as Patient[];
        setPatients(data);
      } catch (err) {
        setErr((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  return (
    <>
      <div className="container mt-3 text-center">
        <h4>Danh sách bệnh nhân</h4>
        <button
          className="btn btn-warning mb-3"
          onClick={() => setShowList((prev) => !prev)}
        >
          {showList ? "Hide List" : "Show List"}
        </button>
        {loading && <p>Loading...</p>}
        {err && <p>Lỗi: {err}</p>}
        {!loading && !err && showList && (
          <div className="mx-auto" style={{ width: "fit-content" }}>
            <ul className="list-group">
              {patients.map((p) => (
                <li key={p.id} className="list-group-item">
                  <strong>{p.name}</strong> — {p.age} tuổi — {p.gender} |
                  <span className="ms-1">Trạng thái: {p.status}</span> |
                  <span className="ms-1">
                    Số hồ sơ bệnh án: {p.records?.length ?? 0}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
