import React from 'react'
import './PagesButtons.css'

const PagesButtons = ({ goToNextPage }) => {
    return (
        <div className='buttons'>
            {goToNextPage &&
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={goToNextPage}>
                    Load more
                </button>
            }
        </div>
    )
}

export default PagesButtons