import { useEffect, useState } from "react";
import { NewPatient } from "../models/newPatient";

type FormErrors<T> = Partial<Record<keyof T, string>>;

const VN_PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

export function useFormValidation(values: NewPatient, delay = 400) {
  const [errors, setErrors] = useState<FormErrors<NewPatient>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newErrors: FormErrors<NewPatient> = {};

      if (!values.name.trim()) newErrors.name = "Tên không được để trống";

      if (values.age <= 0 || values.age > 120)
        newErrors.age = "Tuổi phải nằm trong khoảng từ 1 đến 120";

      if (!values.gender) newErrors.gender = "Vui lòng chọn giới tính";

      if (!VN_PHONE_REGEX.test(values.phone))
        newErrors.phone = "Số điện thoại không hợp lệ";

      if (!values.address.trim())
        newErrors.address = "Địa chỉ không được để trống";

      setErrors(newErrors);
    }, delay);

    return () => clearTimeout(timer);
  }, [values, delay]);

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
}
