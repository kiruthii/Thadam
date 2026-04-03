import React from 'react'

const ColumnSelector = ({table}) => {
  return (
    <div>
      <div className='dropdown'>
        <button className='btn btn-secondary' data-bs-toggle="dropdown">Columns</button>
        <div className='dropdown-menu p-3'>
            {table
            .getAllLeafColumns()
            .filter((column) => column.id !== "Actions")
            .map((column)=>(
            <div key={column.id} className='form-check'>
            <input type="checkbox" className='form-check-input' id={column.id} checked={column.getIsVisible()} onChange={column.getToggleVisibilityHandler()}/>
            <label htmlFor="" className='form-check-label'>{column.columnDef.header}</label>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ColumnSelector
