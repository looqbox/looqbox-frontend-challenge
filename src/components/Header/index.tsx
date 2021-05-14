import React from 'react';
import styles from './styles.module.css';

import icon_search from '../../assets/icons/search.svg';
const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <h1>Search for a Pokemon</h1>
                <form className={styles.search_form}>
                    <label htmlFor="search">
                        <input
                            type="text"
                            name="search"
                            autoComplete="off"
                            id="search"
                            placeholder="Bulbassar"
                        />
                        <button type="submit" className={styles.button_search}>
                            <img
                                src={icon_search}
                                alt="Pesquisar"
                                width="100%"
                                height="100%"
                            />
                        </button>
                    </label>
                </form>
            </div>
        </header>
    );
};

export default Header;
