import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";
import { useEffect } from "react";
import axios from "axios";
import { buttonBaseClasses, Link } from "@mui/material";
import { AuthContext } from "./../../contex/AuthContex";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const RightBar = ({ user }) => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get("/users/friends/" + user._id);
        setFriends(friendsList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img src="assets/gift.png" alt="gift" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Geeth madhawa</b> and <b># others</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="ad" className="rightbarad" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const items = [
    { key: "City", value: "Balangoda" },
    { key: "From", value: "Trinco" },
    { key: "Relationships", value: "Single" },
  ];

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarfollowbutton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <h4 className="rightbartitle">User Info.</h4>
        <div className="rightbarinfo">
          {items.map((item) => {
            return (
              <div key={item.key} className="rightbarinfoitem">
                <span className="rightbarinfokey">{item.key}</span>
                <span className="rightbarinfovalue">{item.value}</span>
              </div>
            );
          })}

          <h4 className="rightbartitle">User Frineds</h4>
          <div className="rightbarfollowings">
            {friends.map((friend) => (
              <Link
                to={"/profile" + friend.username}
                style={{ textDecoration: "none" }}
              >
                <div className="rightbarfollowing">
                  <img
                    src={
                      friend.profilePicture
                        ? pf + friend.profilePicture
                        : pf + "person/noAvatar.png"
                    }
                    alt=""
                    className="rightbarfollowingimg"
                  />
                  <span className="rightbarfollowingname">
                    {friend.username}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="rightbarfollowings">
            <div className="rightbarfollowing">
              <img
                src={`${pf}person/1.jpeg`}
                alt=""
                className="rightbarfollowingimg"
              />
              <span className="rightbarfollowingname">Dinal naveen</span>
            </div>
          </div>
          <div className="rightbarfollowings">
            <div className="rightbarfollowing">
              <img
                src={`${pf}person/1.jpeg`}
                alt=""
                className="rightbarfollowingimg"
              />
              <span className="rightbarfollowingname">Dinal naveen</span>
            </div>
          </div>
          <div className="rightbarfollowings">
            <div className="rightbarfollowing">
              <img
                src={`${pf}person/1.jpeg`}
                alt=""
                className="rightbarfollowingimg"
              />
              <span className="rightbarfollowingname">Dinal naveen</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
