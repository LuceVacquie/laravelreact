import React from 'react'

const Search = ({handleSearch}) => {

    const onChange = ({target}) => {
        return handleSearch(target.value)
    }

    return (
        <div>
            <label htmlFor="search">Search a teammate</label>
                <input 
                    type="text"
                    name="search" 
                    onChange={onChange}
                />
        </div>
    )
}

export default Search;