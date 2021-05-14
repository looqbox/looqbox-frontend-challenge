//This component is just a loading GIF
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