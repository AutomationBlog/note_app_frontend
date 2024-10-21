import PropTypes from "prop-types";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userinfo, onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userinfo.name)}
      </div>
      <div>
        <p className="text-sm font-medium">{userinfo.name}</p>
        <button className="text-xs text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;

ProfileInfo.propTypes = {
  userinfo: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};
