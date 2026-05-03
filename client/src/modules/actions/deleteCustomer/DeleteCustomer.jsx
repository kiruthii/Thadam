import { gooeyToast } from "goey-toast";
import Button from "../../../ui/button/Button";

const DeleteConfirmation = ({ show, onCancel, onConfirm }) => {
  if (!show) return null;

  const handleDelete = () => {
    onConfirm();

    gooeyToast.success(
      <div className="d-flex align-items-center">
        <span className="me-2 text-danger fs-4">
          <i className="bi bi-trash"></i>
        </span>
        <div>
          <strong className="text-danger">Deleted</strong>
          <div>Customer deleted successfully</div>
        </div>
      </div>,
    );
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title text-danger">
              <i className="bi bi-exclamation-triangle me-2"></i>
              Delete Customer
            </h5>

            <Button type="button" className="btn-close" onClick={onCancel} />
          </div>

          {/* Body */}
          <div className="modal-body text-center">
            <p className="mb-0">
              Are you sure you want to delete this customer?
            </p>
            <small className="text-muted">This action cannot be undone.</small>
          </div>

          {/* Footer */}
          <div className="modal-footer justify-content-center">
            <Button
              className="btn btn-outline-secondary"
              onClick={onCancel}
              buttonText="Cancel"
            />

            <Button
              className="btn btn-danger"
              onClick={handleDelete}
              icon={<i className="bi bi-trash me-1"></i>}
              buttonText="Delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
