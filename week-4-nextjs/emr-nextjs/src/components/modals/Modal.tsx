export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
            <h5 className="text-lg font-semibold">{title}</h5>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          <div className="px-4 py-4">{children}</div>
        </div>
      </div>
    </>
  );
}
