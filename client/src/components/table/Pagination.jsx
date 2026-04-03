const Pagination = ({table}) => {


  return (
    <div>
      <div className="d-flex gap-2 mt-3">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.setPageIndex(0)}
        >
          First
        </button>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last
        </button>
      </div>
    </div>
  )
}

export default Pagination;
