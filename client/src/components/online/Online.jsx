import "./online.css";

const Online = ({ user }) => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarfriend">
      <div className="rightbarprofielimgcontaniner">
        <img
          src={pf + user.profilePicture}
          alt="friend"
          className="rightbarprofileimg"
        />
        <span className="rightbaronline"></span>
      </div>
      <span className="rightbarusername">{user.username}</span>
    </li>
  );
};

export default Online;
