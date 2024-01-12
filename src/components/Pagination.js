const Pagination = ({page, pageSize, totalPages, totalRecords, assetType, handlePageChange}) => {
    return (
        <div className="pagination">
            <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
            >Previous Page</button>
            <span>{`${1 + pageSize*(page-1)} to ${pageSize*page} of ${totalRecords} ${assetType}`}</span>
            <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
            >Next Page</button>
        </div>
    );
  };
  
  export default Pagination;