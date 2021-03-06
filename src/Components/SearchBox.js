import React from "react"

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
                className="pa2 ba b--green bg-lightest-blue" />
        </div>
    );
}

export default SearchBox;