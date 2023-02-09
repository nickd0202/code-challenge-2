import React from "react";

function SearchBar({setSearch, setSorted}) {

  const year = new Date().getFullYear()

  function handleChange(){
  setSorted(sorted => !sorted)
  }

  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange = {(e) => setSearch(e.target.value)} />
      <input type="checkbox" onClick={handleChange}/>
    </div>
  );
}

export default SearchBar;
