import "./home.css";
import TopBar from "../../components/topbar/TopBar";
import RightBar from "./../../components/rightbar/RightBar";
import SideBar from "./../../components/sidebar/SideBar";
import Feed from "./../../components/feed/Feed";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homecontainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
