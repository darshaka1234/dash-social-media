import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordagain = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (passwordagain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="ligonwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Dsah Social</h3>
          <span className="logindesc">
            Connnect with friends and world around you on dash social
          </span>
        </div>
        <div className="loginright">
          <form className="loginbox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              className="logininput"
              ref={username}
            />
            <input
              type="email"
              placeholder="Email"
              className="logininput"
              ref={email}
            />
            <input
              placeholder="Password"
              className="logininput"
              ref={password}
              type="password"
            />
            <input
              placeholder="Password Again"
              className="logininput"
              ref={passwordagain}
              type="password"
            />
            <button className="loginbutton">Sign UP</button>

            <button className="loginregisterbutton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
