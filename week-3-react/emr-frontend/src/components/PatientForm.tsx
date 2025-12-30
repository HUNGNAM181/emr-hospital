import { useState } from "react";
import { NewPatient } from "../models/newPatient";

interface PatientFormProps {
  onAdd: (patient: NewPatient) => void; // callback gửi lên parent
}

export function PatientForm({ onAdd }: PatientFormProps) {
  const [form, setForm] = useState<NewPatient>({
    name: "",
    age: 0,
    gender: "male",
    phone: "",
    address: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.phone || !form.address) {
      return setError("Các trường bắt buộc không được để trống");
    }

    if (form.age <= 0) {
      return setError("Tuổi phải lớn hơn 0");
    }

    // Phone regex đơn giản
    const phoneRegex = /^[0-9]{9,11}$/;
    if (!phoneRegex.test(form.phone)) {
      return setError("Số điện thoại không hợp lệ");
    }

    onAdd(form);

    setForm({
      name: "",
      age: 0,
      gender: "male",
      phone: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h5>Thêm bệnh nhân mới</h5>

      {error && <p className="text-danger">{error}</p>}

      <div className="mb-2">
        <label className="form-label">Tên</label>
        <input
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Tuổi</label>
        <input
          name="age"
          type="number"
          className="form-control"
          value={form.age}
          onChange={handleChange}
          min={1}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Giới tính</label>
        <select
          name="gender"
          className="form-select"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">Số điện thoại</label>
        <input
          name="phone"
          className="form-control"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Địa chỉ</label>
        <input
          name="address"
          className="form-control"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Thêm bệnh nhân
      </button>
    </form>
  );
}
