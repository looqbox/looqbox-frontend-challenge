import React from 'react'

const PagesButtons = ({ goToPrevPage, goToNextPage }) => {
    return (
        <div>
            {goToPrevPage &&
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={goToPrevPage}>
                    Previous
                </button>
            }
            {goToNextPage &&
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={goToNextPage}>
                    Next
                </button>
            }
        </div>
    )
}

export default PagesButtons
