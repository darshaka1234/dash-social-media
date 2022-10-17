import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "./../../contex/AuthContex";
const TopBar = () => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">dash social</span>
        </Link>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="searchicon" />
          <input
            type="text"
            placeholder="search for friend, post or video..."
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="tobarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timelines</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <PersonIcon />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <ChatIcon />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <NotificationsIcon />
            <span className="topbariconbadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? pf + user.profilePicture
                : pf + "person/noAvatar.png"
            }
            alt="profilePic"
            className="topbarimg"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
