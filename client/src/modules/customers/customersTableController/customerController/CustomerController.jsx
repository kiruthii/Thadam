import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Button from "../../../../ui/button/Button";
import ColumnSelector from "../columnSelector/ColumnSelector";
import { CustomerTableControllerContext } from "../../../../contexts/customerTableControllerContext/CustomerTableControllerContext";
import { AllCustomerContext } from "../../../../contexts/allCustomerContext/AllCustomerContext";

const CustomerController = ({ table }) => {
  const {
    search,
    setSearch,
    filters,
    location,
    setLocation,
    contactType,
    setContactType,
    designation,
    setDesignation,
  } = useContext(CustomerTableControllerContext);
  const [showFilter, setShowFilter] = useState(false);
  const { view, handleView } = useContext(AllCustomerContext);
  const filterRef = useRef(null) 

  const navigate = useNavigate();
  const handleNavigate = () => {
    setLocation("");
    setContactType("");
    setDesignation("");
    navigate("/add-contact-form");
  };

  const clearFilter = () => {
    setLocation("");
    setContactType("");
    setDesignation("");
    setShowFilter(false);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowFilter(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className="d-flex justify-content-between gap-3 mb-3 w-100">
      <div className="d-flex gap-2">
        <input
          className="form-control w-100"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <div className="position-relative">
          <Button
            buttonText="Filter"
            onClick={() => setShowFilter(!showFilter)}
            className="btn btn-outline-secondary"
          />

          {showFilter && (
            <div
              ref={filterRef}
              className="card shadow p-3"
              style={{
                width: "250px",
                position: "absolute",
                top: "45px",
                right: "0",
                zIndex: "1000",
              }}
            >
              <div className="mb-2">
                <label className="form-label">Location</label>
                <select
                  className="form-select"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">All</option>
                  {filters.locations?.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label">Role</label>
                <select
                  className="form-select"
                  value={contactType}
                  onChange={(e) => setContactType(e.target.value)}
                >
                  <option value="">All</option>
                  {filters.contactTypes?.map((rol) => (
                    <option key={rol} value={rol}>
                      {rol}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label">Designation</label>
                <select
                  className="form-select"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option value="">All</option>
                  {filters.designations?.map((des) => (
                    <option key={des} value={des}>
                      {des}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-danger btn-sm mt-2 w-100"
                  onClick={clearFilter}
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>
        <ColumnSelector table={table} />
      </div>
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-light border border-secondary" onClick={handleView}>
         {view === "table" ? (<i className="fa-regular fa-address-card"></i>) : (<i className="fa-solid fa-table-list"></i>)}
         </button>
        <button className="btn btn-primary" onClick={handleNavigate}>
          <i className="fa-solid fa-plus"></i> Add Contact
        </button>
      </div>
    </div>
  );
};

export default CustomerController;
