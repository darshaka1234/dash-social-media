import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../contex/AuthContex";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIsLike] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    try {
      axios.put("/posts/" + post._id + "like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isliked ? like - 1 : like + 1);
    setIsLike(!isliked);
  };
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postprofileimg"
                src={
                  user.profilePicture
                    ? pf + user.profilePicture
                    : pf + "/person/noAvatar.png"
                }
                alt="nikan"
              />
            </Link>
            <span className="postusername">{user.username}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>
          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post?.desc}</span>
          <img src={pf + post.img} alt="post1" className="postimg" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img
              src={`${pf}like.png`}
              alt="like"
              onClick={handleLike}
              className="likeicon"
            />
            <img
              src={`${pf}heart.png`}
              alt="heart"
              onClick={handleLike}
              className="likeicon"
            />
            <span className="postlikecounter">{like} people like it</span>
          </div>
          <div className="postbottomright">
            <span className="postcommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
