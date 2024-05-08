import React from 'react';


const Search = ({ filter, setFilter }) => {
 return (
    <div>
      
      <input
        type="text"
        placeholder="Search favorite book title"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
 );
};

export default Search;