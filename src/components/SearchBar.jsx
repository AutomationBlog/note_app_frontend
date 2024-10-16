import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ value, onChange, onClearSearch, handleSearch }) => {
  return (
    <div className="w-1/3 h-1/2 py-2 flex items-center px-2 border bg-slate-100 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="h-10 w-full p-2 outline-none bg-transparent"
      />
      {value && (
        <XMarkIcon
          className="h-6 w-6 text-xl text-slate-500 cursor-pointer hover:text-black"
          onClick={onClearSearch}
        />
      )}
      <MagnifyingGlassIcon
        className="h-8 w-8 text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
