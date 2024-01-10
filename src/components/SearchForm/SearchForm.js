import { useState } from "react";
import arrowIcon from "../../images/icon-arrow.svg";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    console.log(searchTerm);
  };
  return (
    <div className="search-container">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <img src={arrowIcon} alt="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
