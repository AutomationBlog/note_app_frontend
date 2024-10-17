import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = (e) => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow ">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClearSearch={onClearSearch}
        handleSearch={handleSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default NavBar;
