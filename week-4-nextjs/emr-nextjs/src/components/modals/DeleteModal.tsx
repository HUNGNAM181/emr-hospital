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
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h5 className="text-lg font-semibold">{title}</h5>
            <button
              onClick={onCancel}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          <div className="px-4 py-4">
            <p className="text-gray-700">{message}</p>
          </div>

          <div className="px-4 py-3 flex justify-end gap-2 border-t">
            <button
              onClick={onCancel}
              className="px-3 py-2 rounded-md border bg-gray-100 hover:bg-gray-200"
            >
              Huỷ
            </button>

            <button
              onClick={onConfirm}
              className="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              Xoá
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
