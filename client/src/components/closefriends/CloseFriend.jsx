const CloseFriend = ({ user }) => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarfriend">
      <img
        src={pf + user.profilePicture}
        alt={user.id}
        className="sidebarfriendimg"
      />
      <span className="sidebarfriendname">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
