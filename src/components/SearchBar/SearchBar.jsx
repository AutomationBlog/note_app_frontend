import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ value, onChange, onClearSearch, handleSearch }) => {
  return (
    <div className="w-80 flex items-center px-4 border bg-slate-100 rounded-full">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="w-full text-sm py-[11px] outline-none bg-transparent"
      />
      {value && (
        <IoMdClose
          className="text-xl text-slate-400 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className=" text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
