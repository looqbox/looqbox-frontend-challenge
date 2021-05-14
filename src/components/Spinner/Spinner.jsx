import spinner from '../../assets/spinner.gif'
import './Spinner.css'

const Spinner = () => {
    return (
        <img
            src={spinner}
            alt="Loading"
            className="spinner"
        />
    )
}

export default Spinner