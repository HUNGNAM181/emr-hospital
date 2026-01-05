import { useState } from "react";
import { NewPatient } from "../models/newPatient";

import { PatientFormEditor } from "../components/forms/PatientFormEditor";
import { NewPatientList } from "../components/patient/NewPatientList";
import { Modal } from "../components/modals/Modal";
import { DeleteModal } from "../components/modals/DeleteModal";
import { Toast } from "../components/Toast/Toast";

export default function PatientPage() {
  const [patients, setPatients] = useState<NewPatient[]>([]);
  const [showCreate, setShowCreate] = useState(false);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);

  type ToastType = "success" | "info" | "warning" | "danger";
  interface ToastState {
    message: string;
    type: ToastType;
  }

  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type });
  };

  const handleAdd = (p: NewPatient) => {
    setPatients((prev) => [...prev, p]);
    showToast("Thêm bệnh nhân thành công!", "success");
  };

  const handleEditSave = (updated: NewPatient) => {
    setPatients((prev) =>
      prev.map((p, i) => (i === editingIndex ? updated : p))
    );
    setEditingIndex(null);
    showToast("Cập nhật bệnh nhân thành công!", "info");
  };

  const handleDeleteRequest = (index: number) => {
    setDeletingIndex(index);
  };

  const handleConfirmDelete = () => {
    if (deletingIndex === null) return;

    setPatients((prev) => prev.filter((_, i) => i !== deletingIndex));

    if (editingIndex === deletingIndex) {
      setEditingIndex(null);
    }

    setDeletingIndex(null);
    showToast("Xoá bệnh nhân thành công!", "danger");
  };

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <h3>Quản lý bệnh nhân</h3>

      <button
        className="btn btn-primary mt-2"
        onClick={() => setShowCreate(true)}
      >
        Add Patient
      </button>

      <NewPatientList
        patients={patients}
        onEdit={(index) => setEditingIndex(index)}
        onDelete={handleDeleteRequest}
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

      {deletingIndex !== null && (
        <DeleteModal
          title="Xoá bệnh nhân"
          message={`Bạn có chắc muốn xoá bệnh nhân "${patients[deletingIndex].name}"?`}
          onCancel={() => setDeletingIndex(null)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
