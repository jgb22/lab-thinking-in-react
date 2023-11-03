import React from 'react';

function SearchBar ({Search}) {
    return (
        <div>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => Search(e.target.value)}
        />
      </div>
    )
}

export default SearchBar;