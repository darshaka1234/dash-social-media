import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext, useState } from "react";
import { AuthContext } from "./../../contex/AuthContex";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";

const items = [
  {
    name: "Photo or Video",
    icon: <PermMediaIcon className="shareicon" htmlColor="tomato" />,
  },
  { name: "Tag", icon: <LabelIcon className="shareicon" htmlColor="blue" /> },
  {
    name: "Location",
    icon: <LocationOnIcon className="shareicon" htmlColor="green" />,
  },
  {
    name: "Feelings",
    icon: <EmojiEmotionsIcon className="shareicon" htmlColor="goldenod" />,
  },
];
const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file, setFile] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img
            src={
              user.profilePicture
                ? pf + user.profilePicture
                : pf + "person/noAvatar.png"
            }
            alt="profile_pic"
            className="shareprofileimg"
          />
          <input
            placeholder={"what's on your mind" + user.name + "?"}
            className="shareinput"
            ref={desc}
          />
        </div>
        <hr className="shareline" />
        {file && (
          <div className="shareimgcontainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareimg" />
            <CancelIcon
              className="sharecancelimg"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className="sharebottom" onSubmit={submitHandler}>
          <div className="shareoptions">
            {items.map((item) => {
              return (
                <div key={item.name} htmlFor="file" className="shareoption">
                  {item.icon}
                  <span className="shareoptiontext">{item.name}</span>
                </div>
              );
            })}
            <input
              style={{ display: "none" }}
              type="file"
              accept=".png,.jpeg.,.jpg"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button className="sharebutton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
