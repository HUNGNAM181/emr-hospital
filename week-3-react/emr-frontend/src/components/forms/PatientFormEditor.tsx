import { useState } from "react";
import { NewPatient } from "../../models/newPatient";
import { PatientForm } from "./PatientForm";
import InputField from "../inputs/InputField";
import SelectField from "../inputs/SelectField";
import Button from "../Button";
import { useFormValidation } from "../../hooks/useFormValidation";

// Form state cho phép age = "" khi user chưa nhập
type PatientFormState = Omit<NewPatient, "age"> & {
  age: number | "";
};

interface PatientFormEditorProps {
  initial?: NewPatient;
  mode?: "create" | "edit";
  onSubmit: (p: NewPatient) => void;
}

export function PatientFormEditor({
  initial,
  mode = "create",
  onSubmit,
}: PatientFormEditorProps) {
  const [form, setForm] = useState<PatientFormState>(
    initial
      ? { ...initial, age: initial.age }
      : { name: "", age: "", gender: "male", phone: "", address: "" }
  );

  //  Track field nào đã đụng vào
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  //  Khi submit rồi thì cho phép show toàn bộ lỗi
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  //  validation tự động + debounce
  const { errors, isValid } = useFormValidation({
    ...form,
    age: Number(form.age || 0),
  });
  const shouldDisable = submitted && !isValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); //  bật hiển thị lỗi khi submit

    if (!isValid) return;

    onSubmit({
      ...form,
      age: Number(form.age),
    });

    if (mode === "create") {
      setForm({
        name: "",
        age: "",
        gender: "male",
        phone: "",
        address: "",
      });
      setTouched({});
      setSubmitted(false);
    }
  };

  //  Quy tắc hiển thị lỗi
  const shouldShowError = (field: string) =>
    errors[field as keyof typeof errors] && (touched[field] || submitted);

  return (
    <PatientForm onSubmit={handleSubmit}>
      {/* NAME */}
      <InputField
        name="name"
        label="Tên"
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {shouldShowError("name") && (
        <small className="text-danger">{errors.name}</small>
      )}

      {/* AGE */}
      <InputField
        name="age"
        type="number"
        label="Tuổi"
        value={form.age}
        onChange={handleChange}
        onBlur={handleBlur}
        min={1}
      />
      {shouldShowError("age") && (
        <small className="text-danger">{errors.age}</small>
      )}

      {/* GENDER */}
      <SelectField
        name="gender"
        label="Giới tính"
        value={form.gender}
        onChange={handleChange}
        onBlur={handleBlur}
        options={[
          { value: "male", label: "Nam" },
          { value: "female", label: "Nữ" },
          { value: "other", label: "Khác" },
        ]}
      />
      {shouldShowError("gender") && (
        <small className="text-danger">{errors.gender}</small>
      )}

      {/* PHONE */}
      <InputField
        name="phone"
        label="Số điện thoại"
        value={form.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {shouldShowError("phone") && (
        <small className="text-danger">{errors.phone}</small>
      )}

      {/* ADDRESS */}
      <InputField
        name="address"
        label="Địa chỉ"
        value={form.address}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {shouldShowError("address") && (
        <small className="text-danger">{errors.address}</small>
      )}

      <div className="text-end mt-3">
        <Button type="submit" disabled={shouldDisable}>
          {mode === "edit" ? "Lưu thay đổi" : "Thêm bệnh nhân"}
        </Button>
      </div>
    </PatientForm>
  );
}
