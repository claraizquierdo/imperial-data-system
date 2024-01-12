import '../css/components/Pagination.scss';

const Pagination = ({page, pageSize, totalPages, totalRecords, assetType, handlePageChange}) => {
    return (
        <div className="pagination">
            <button
                className="button"
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
            >
                <span>{`<`}</span>
                <span className="pagination__button-text"> Previous</span>
            </button>
            <span className="pagination__totals-text">
                {`${1 + pageSize*(page-1)} to ${pageSize*page} of ${totalRecords} ${assetType}`}
            </span>
            <button
                className="button"
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
            >   
                <span className="pagination__button-text">Next </span>
                <span>{`>`}</span>
            </button>
        </div>
    );
  };
  
  export default Pagination;