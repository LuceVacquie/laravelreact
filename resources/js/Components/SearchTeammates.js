import React from 'react'

const Search = ({filteredNames}) => {

    return (
        <ul>
            {filteredNames.map(name => {
                <li>{name}</li>
            })}
        </ul>
    )
}

export default Search;