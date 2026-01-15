import { useEffect } from "react";

export interface ToastProps {
  message: string;
  type?: "success" | "info" | "warning" | "danger";
  duration?: number; // ms
  onClose: () => void;
}

export function Toast({
  message,
  type = "success",
  duration = 2500,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bg =
    type === "success"
      ? "bg-success"
      : type === "danger"
      ? "bg-danger"
      : type === "warning"
      ? "bg-warning text-dark"
      : "bg-info";

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1055 }}>
      <div className={`toast fade show text-white ${bg}`}>
        <div className="toast-body fw-semibold d-flex justify-content-between align-items-center">
          <span>{message}</span>

          <button
            type="button"
            className="btn-close btn-close-white ms-3"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}
