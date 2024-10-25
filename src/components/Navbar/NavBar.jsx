import { Link, useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import PropTypes from "prop-types";
import noteLogo from "../../assets/note_logo.jpg";

const NavBar = ({ userinfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery.toString());
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow ">
      <Link to="/">
        <div className="flex items-center">
          <img src={noteLogo} alt="logo" className="w-10 h-10" />
          <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        </div>
      </Link>

      {userinfo && (
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClearSearch={onClearSearch}
          handleSearch={handleSearch}
        />
      )}
      {userinfo ? (
        <ProfileInfo userinfo={userinfo} onLogout={onLogout} />
      ) : (
        <Link to="/login">
          <span className="text-lg font-medium text-black py-2 hover:underline cursor-pointer">
            Login
          </span>
        </Link>
      )}
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  userinfo: PropTypes.object,
  onSearchNote: PropTypes.func,
  handleClearSearch: PropTypes.func,
};
