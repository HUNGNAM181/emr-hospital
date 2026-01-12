"use client";

import { useState, useEffect } from "react";
import { NewPatient } from "@/types/newPatient";

import { PatientFormEditor } from "@/components/forms/PatientFormEditor";
import { NewPatientList } from "@/components/patient/NewPatientList";
import { Modal } from "@/components/modals/Modal";
import { DeleteModal } from "@/components/modals/DeleteModal";
import { Toast } from "@/components/Toast/Toast";

export default function PatientList() {
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

  useEffect(() => {
    const fetchPatients = async () => {
      const res = await fetch("/api/patients");
      const data = await res.json();
      setPatients(data);
    };

    fetchPatients();
  }, []);

  const showToast = (message: string, type: ToastType) =>
    setToast({ message, type });

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

  const handleDeleteRequest = (index: number) => setDeletingIndex(index);

  const handleConfirmDelete = () => {
    if (deletingIndex === null) return;
    setPatients((prev) => prev.filter((_, i) => i !== deletingIndex));
    if (editingIndex === deletingIndex) setEditingIndex(null);
    setDeletingIndex(null);
    showToast("Xoá bệnh nhân thành công!", "danger");
  };

  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý bệnh nhân</h1>
          <p className="text-sm text-gray-500">
            Danh sách và quản lý thông tin bệnh nhân
          </p>
        </div>

        <button
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setShowCreate(true)}
        >
          + Thêm bệnh nhân
        </button>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <NewPatientList
          patients={patients}
          onEdit={(index) => setEditingIndex(index)}
          onDelete={handleDeleteRequest}
        />
      </div>

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
