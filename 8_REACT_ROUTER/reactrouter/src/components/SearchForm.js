import { Form, useNavigate } from "react-router-dom"

import { useState } from "react"

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/search?q=${query}`);
        setQuery("");
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar"/>
    </form>
  )
}

export default SearchForm