import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Search"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        <FiSearch size={24} />
      </button>

      <input
        type="search"
        placeholder="search breeds"
        aria-label="Search breeds"
        className="h-12 min-w-0 flex-1 rounded-full border border-gray-300 px-5 text-sm outline-none placeholder:text-gray-300 focus-visible:border-coral focus-visible:ring-2 focus-visible:ring-coral"
      />
    </div>
  );
};

export default SearchBar;
