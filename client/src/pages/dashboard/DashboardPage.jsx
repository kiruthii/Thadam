import Sidebar from "../../modules/layout/sidebar/Sidebar"
import WelcomeCard from "../../modules/layout/welcomeCard/WelcomeCard"
import CustomerTableColumns from "../../modules/customers/customerTableColumns/CustomerTableColumns";
import { Logout } from "../../modules/actions/handleLogout/Logout";
import { useState, useContext } from "react";
import { AllCustomerContext } from "../../contexts/allCustomerContext/AllCustomerContext";

const getInitials = (firstname = "", lastname = "") => {
  return `${firstname[0] ?? ""}${lastname[0] ?? ""}`.toUpperCase();
};

const getRelativeTime = (dateStr) => {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor(diffMs / (1000 * 60));

  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays === 1) return `1 day ago`;
  return `${diffDays} days ago`;
};

const avatarColors = [
  "#4f6ef7", "#e85d9b", "#f7924f", "#4fcaad",
  "#a066d3", "#f7c94f", "#4f9ef7", "#e85d5d",
];

const getAvatarColor = (firstname = "") => {
  const index = firstname.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
};

const DashboardPage = () => {
  const [open, setOpen] = useState(false);
  const { customers } = useContext(AllCustomerContext);
  const totalCustomers = customers?.length || 0;

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const recentContacts = customers
    ?.filter((c) => new Date(c.createdAt) >= sevenDaysAgo)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="d-flex vh-100 position-relative">
     
      <Sidebar open={open} setOpen={setOpen} handleLogout={Logout} />

      <div className="flex-grow-1 d-flex flex-column bg-light overflow-auto">
        <div className="border-bottom bg-white p-2">
          <button
            className="btn btn-outline-secondary d-md-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        <div className="p-4">
          <WelcomeCard />
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h6 className="text-muted mb-2">Total Customers</h6>
                  <h3 className="fw-bold text-primary">{totalCustomers}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-lg-6">
              <div className="card shadow-sm border-0">
                <div className="card-body px-4 py-3">
                  <h6 className="fw-semibold mb-3">Recently Added</h6>

                  {recentContacts?.length === 0 ? (
                    <p className="text-muted text-center py-3 mb-0">
                      No contacts added in the last 7 days.
                    </p>
                  ) : (
                    <ul className="list-unstyled mb-0">
                      {recentContacts.map((customer) => (
                        <li
                          key={customer._id}
                          className="d-flex align-items-center justify-content-between py-2"
                          style={{ borderBottom: "1px solid #f1f1f1" }}
                        >
                          <div className="d-flex align-items-center gap-3">
                            {customer.profilePicture &&
                            customer.profilePicture !== "https://placehold.co/150" ? (
                              <img
                                src={customer.profilePicture}
                                alt={`${customer.firstname} ${customer.lastname}`}
                                className="rounded-circle object-fit-cover"
                                style={{ width: 42, height: 42, flexShrink: 0 }}
                              />
                            ) : (
                              <div
                                className="d-flex align-items-center justify-content-center rounded-circle text-white fw-semibold"
                                style={{
                                  width: 42,
                                  height: 42,
                                  fontSize: 14,
                                  backgroundColor: getAvatarColor(customer.firstname),
                                  flexShrink: 0,
                                }}
                              >
                                {getInitials(customer.firstname, customer.lastname)}
                              </div>
                            )}
                            <div>
                              <div className="fw-semibold" style={{ fontSize: 14 }}>
                                {customer.firstname} {customer.lastname}
                              </div>
                              <div className="text-muted" style={{ fontSize: 12 }}>
                                {customer.contactType}
                                {customer.company && (
                                  <span> · {customer.company}</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            className="text-muted"
                            style={{ fontSize: 12, whiteSpace: "nowrap" }}
                          >
                            {getRelativeTime(customer.createdAt)}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;