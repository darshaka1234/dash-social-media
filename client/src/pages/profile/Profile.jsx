import "./profile.css";
import Topbar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/RightBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img
                className="profilecoverimg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileuserimg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">{user.username}</h4>
              <span className="profileinfodesc">{user.desc}</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
