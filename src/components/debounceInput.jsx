import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";


const SearchInput = () => {
    const renderList = ["apple", "banana", "grapes", "orange"]

    const [search, setSearch] = useState("")
    const [renderData, setRenderData] = useState([])

    const renderItems = () => {
        return <>{renderData.map(item => <li key={item}>{item}</li>)}</>
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }
    const onSearch = () => {
        setRenderData([...renderList.filter(i => i.toLowerCase().includes(search.toLowerCase()))])
    }
    useDebounce(search, 500, onSearch)

    return (
        <div style={{ margin: "15px" }}>
            <div className="input">
                <input placeholder="search" value={search} onChange={handleSearchChange} />
            </div>
            <ul className="list">{renderItems()}</ul>
        </div>
    )
}

export default SearchInput;