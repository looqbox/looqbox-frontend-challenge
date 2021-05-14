import { useState } from "react";

import styles from "../../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(search);
      }}
    >
      <input
        className={styles.input}
        name="query"
        type="search"
        placeholder="Type your search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
