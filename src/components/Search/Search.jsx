//The input receives the value entered by the user in the search bar
import './Search.css'

const Search = ({value, onChange}) => {

    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Pokemons"
                    value={value}
                    onChange={onChange}
                />
            </form>
        </section>
    )
}

export default Search