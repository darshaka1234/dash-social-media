import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Users } from "../../dummyData";
import CloseFriend from "./../closefriends/CloseFriend";
import {
  Bookmark,
  Event,
  GroupOutlined,
  HelpOutline,
  School,
  WorkOutline,
} from "@mui/icons-material";

const items = [
  { name: "Feed", icon: <RssFeedIcon /> },
  { name: "Chats", icon: <ChatIcon /> },
  { name: "Videos", icon: <PlayCircleFilledIcon /> },
  { name: "Groups", icon: <GroupOutlined /> },
  { name: "Bookmarks", icon: <Bookmark /> },
  { name: "Questions", icon: <HelpOutline /> },
  { name: "Jobs", icon: <WorkOutline /> },
  { name: "Events", icon: <Event /> },
  { name: "Courses", icon: <School /> },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          {items.map((item) => {
            return (
              <li className="sidebarlistitem" key={item.name}>
                {item.icon}
                <span className="sidebarlistitemtext">{item.name}</span>
              </li>
            );
          })}
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarline" />
        <ul className="sidebarfriendlist">
          {Users.map((u) => {
            return <CloseFriend user={u} key={u.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
