const Pagination = ({ table }) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex align-items-center gap-2 mt-3">

      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        ‹ Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => table.setPageIndex(page)}
          className={`btn btn-sm ${
            pageIndex === page
              ? "btn-primary"
              : "btn-outline-secondary"
          }`}
        >
          {page + 1}
        </button>
      ))}

      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next ›
      </button>
    </div>
  );
};

export default Pagination;
