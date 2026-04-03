const CustomerAddress = ({ address }) => {
  return (
    <div className="card h-100" style={{ backgroundColor: "white" }}>
      <div className="card-body">
        <div className="card-title">
          <h5 className="mb-3" style={{ color: "#2563eb" }}>
            Address
          </h5>
          <p className="mb-1">{address?.street || "Address not available"}</p>
          <p className="mb-1">
            {address?.city && address?.state
              ? `${address?.city},${address?.state}`
              : address?.city || address?.state}
          </p>
          <p className="mb-0">
            {address?.country} {address?.postCode && `- ${address.postCode}`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CustomerAddress;
