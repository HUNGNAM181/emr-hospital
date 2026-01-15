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
      <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-light">
              <h5 className="modal-title">{title}</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop show"></div>
    </>
  );
}
