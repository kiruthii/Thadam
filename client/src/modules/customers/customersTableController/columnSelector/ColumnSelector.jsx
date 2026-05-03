const ColumnSelector = ({table}) => {

  const columns = ["Name","Email", "Phone","Designation","Actions"]
  return (
    <div>
      <div className='dropdown'>
        <button className='btn btn-outline-secondary' data-bs-toggle="dropdown">Columns</button>
        <div className='dropdown-menu p-3'>
            {table
            .getAllLeafColumns()
             .filter((column) => !columns.includes(column.columnDef.header))
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

export default ColumnSelector;
