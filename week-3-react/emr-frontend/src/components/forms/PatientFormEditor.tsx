import { useState } from "react";
import { NewPatient } from "../../models/newPatient";
import { PatientForm } from "./PatientForm";
import InputField from "../inputs/InputField";
import SelectField from "../inputs/SelectField";
import Button from "../Button";
import { useFormValidation } from "../../hooks/useFormValidation";

type PatientFormState = Omit<NewPatient, "age"> & {
  age: number | "";
};

export function PatientFormEditor({
  initial,
  mode = "create",
  onSubmit,
}: {
  initial?: NewPatient;
  mode?: "create" | "edit";
  onSubmit: (p: NewPatient) => void;
}) {
  const [form, setForm] = useState<PatientFormState>(
    initial
      ? { ...initial, age: initial.age }
      : { name: "", age: "", gender: "male", phone: "", address: "" }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const { error, validate } = useFormValidation(form, [
    {
      validate: (f) => f.name !== "" && f.phone !== "" && f.address !== "",
      message: "Các trường bắt buộc không được để trống",
    },
    { validate: (f) => Number(f.age) > 0, message: "Tuổi phải lớn hơn 0" },
    {
      validate: (f) => /^[0-9]{9,11}$/.test(f.phone),
      message: "Số điện thoại không hợp lệ",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      ...form,
      age: Number(form.age),
    });

    // Reset lại chỉ khi CREATE
    if (mode === "create") {
      setForm({
        name: "",
        age: "",
        gender: "male",
        phone: "",
        address: "",
      });
    }
  };

  return (
    <PatientForm error={error} onSubmit={handleSubmit}>
      <InputField
        name="name"
        label="Tên"
        value={form.name}
        onChange={handleChange}
      />

      <InputField
        name="age"
        type="number"
        label="Tuổi"
        value={form.age}
        onChange={handleChange}
        min={1}
      />

      <SelectField
        name="gender"
        label="Giới tính"
        value={form.gender}
        onChange={handleChange}
        options={[
          { value: "male", label: "Nam" },
          { value: "female", label: "Nữ" },
          { value: "other", label: "Khác" },
        ]}
      />

      <InputField
        name="phone"
        label="Số điện thoại"
        value={form.phone}
        onChange={handleChange}
      />
      <InputField
        name="address"
        label="Địa chỉ"
        value={form.address}
        onChange={handleChange}
      />

      <Button type="submit">
        {mode === "edit" ? "Lưu thay đổi" : "Thêm bệnh nhân"}
      </Button>
    </PatientForm>
  );
}
