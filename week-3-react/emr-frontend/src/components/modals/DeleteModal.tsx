export function DeleteModal({
  title = "Xác nhận xoá",
  message = "Bạn có chắc muốn xoá mục này không?",
  onConfirm,
  onCancel,
}: {
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <>
      <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button className="btn-close" onClick={onCancel}></button>
            </div>

            <div className="modal-body">
              <p>{message}</p>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onCancel}>
                Huỷ
              </button>

              <button className="btn btn-danger" onClick={onConfirm}>
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop show"></div>
    </>
  );
}
