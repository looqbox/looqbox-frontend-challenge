import React from 'react'
import './PagesButtons.css'

const PagesButtons = ({ goToPrevPage, goToNextPage }) => {
    return (
        <div className='buttons'>
            {goToPrevPage &&
                <button
                    type="button"
                    className="btn btn-secondary"
                    id="button"
                    onClick={goToPrevPage}>
                    Previous
                </button>
            }
            {goToNextPage &&
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={goToNextPage}>
                    Next
                </button>
            }
        </div>
    )
}

export default PagesButtons
