import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomerTableContext } from '../../context/CustomerTableContext'
import Button from '../button/Button';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const CustomerControl = () => {
    const { search, setSearch, filters, location, setLocation, role, setRole, designation, setDesignation } = useContext(CustomerTableContext)
    const [showFilter, setShowFilter] = useState(false)

    const navigate = useNavigate()
    const handleNavigate = () => {
        setLocation("")
        setRole("")
        setDesignation("")
        navigate("/add-customer-form")
    }

    const applyFilter = () => {
        setShowFilter(false)
    }

    const clearFilter = () => {
        setLocation("")
        setRole("")
        setDesignation("")
        setShowFilter(false)
    }


    // console.log(filters)
    return (

        <div className="d-flex justify-content-between gap-3 mb-3">
            <div className='d-flex gap-3'>
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
                            className="card shadow p-3"
                            style={{
                                width: "250px",
                                position: "absolute",
                                top: "45px",
                                right: "0",
                                zIndex: "1000"
                            }}>
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
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="">All</option>
                                    {filters.roles?.map((rol) => (
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
                            <div className='d-flex gap-2'>
                                <button className="btn btn-outline-primary btn-sm mt-2 w-100"
                                    onClick={applyFilter}>Apply</button>
                                <button className="btn btn-outline-danger btn-sm mt-2 w-100"
                                    onClick={clearFilter}>Clear</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <button className="btn btn-primary" onClick={handleNavigate}>
                <i className="fa-solid fa-plus"></i> Add Customer
            </button>
        </div>


    )
}

export default CustomerControl