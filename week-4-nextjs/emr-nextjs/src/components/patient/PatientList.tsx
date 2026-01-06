import { useEffect, useState } from "react";
import { Patient } from "@/types/patient";

export function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showList, setShowList] = useState(true);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const res = await fetch("/patients.json");
        if (!res.ok) throw new Error("Failed fetch");
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
    <div className="mt-4 text-center">
      <h4 className="text-lg font-semibold mb-2">Danh sách bệnh nhân</h4>

      <button
        className="px-3 py-2 rounded-md bg-amber-400 hover:bg-amber-500 text-black mb-3"
        onClick={() => setShowList((prev) => !prev)}
      >
        {showList ? "Hide List" : "Show List"}
      </button>

      {loading && <p>Loading...</p>}
      {err && <p className="text-red-600">Lỗi: {err}</p>}

      {!loading && !err && showList && (
        <div className="mx-auto max-w-xl">
          <ul className="divide-y rounded-lg border bg-white shadow-sm">
            {patients.map((p) => (
              <li key={p.id} className="px-4 py-3 text-sm">
                <strong>{p.name}</strong> — {p.age} tuổi — {p.gender}
                <span className="ml-1">| Trạng thái: {p.status}</span>
                <span className="ml-1">
                  | Số hồ sơ: {p.records?.length ?? 0}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
