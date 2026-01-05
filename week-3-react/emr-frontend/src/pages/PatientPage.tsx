import { useState } from "react";
import { NewPatient } from "../models/newPatient";

import { PatientFormEditor } from "../components/forms/PatientFormEditor";
import { NewPatientList } from "../components/patient/NewPatientList";
import { Modal } from "../components/modals/Modal";

export default function PatientPage() {
  const [patients, setPatients] = useState<NewPatient[]>([]);

  const [showCreate, setShowCreate] = useState(false);

  // 👇 lưu index bệnh nhân đang Edit
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = (p: NewPatient) => {
    setPatients((prev) => [...prev, p]);
  };

  const handleEditSave = (updated: NewPatient) => {
    setPatients((prev) =>
      prev.map((p, i) => (i === editingIndex ? updated : p))
    );
    setEditingIndex(null);
  };

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <h3>Quản lý bệnh nhân</h3>

      <button
        className="btn btn-primary mt-2"
        onClick={() => setShowCreate(true)}
      >
        Thêm bệnh nhân
      </button>

      {/* Danh sách bệnh nhân */}
      <NewPatientList
        patients={patients}
        onEdit={(index) => setEditingIndex(index)} // 👈 mở Edit
      />

      {showCreate && (
        <Modal title="Thêm bệnh nhân mới" onClose={() => setShowCreate(false)}>
          <PatientFormEditor
            mode="create"
            onSubmit={(p) => {
              handleAdd(p);
              setShowCreate(false);
            }}
          />
        </Modal>
      )}

      {editingIndex !== null && (
        <Modal
          title="Chỉnh sửa bệnh nhân"
          onClose={() => setEditingIndex(null)}
        >
          <PatientFormEditor
            mode="edit"
            initial={patients[editingIndex]}
            onSubmit={handleEditSave}
          />
        </Modal>
      )}
    </div>
  );
}
