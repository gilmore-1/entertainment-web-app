import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchQuery }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex items-center gap-6">
      <CiSearch size={40} color="white" className="pt-2" />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="bg-[#1A1D2A] text-white w-80 mt-4 p-4 rounded-none outline-none"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
