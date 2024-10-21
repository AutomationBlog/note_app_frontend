import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import PropTypes from "prop-types";

const NavBar = ({ userinfo }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow ">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      {userinfo && (
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClearSearch={onClearSearch}
          handleSearch={handleSearch}
        />
      )}
      {userinfo && <ProfileInfo userinfo={userinfo} onLogout={onLogout} />}
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  userinfo: PropTypes.object,
};
