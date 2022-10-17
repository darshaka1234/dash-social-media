import { useRef } from "react";
import "./login.css";
import { loginCall } from "./../../pages/apiCalls";
import { AuthContext } from "./../../contex/AuthContex";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isfetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
        <div className="loginright" onSubmit={handleClick}>
          <form className="loginbox">
            <input
              type="email"
              placeholder="Email"
              className="logininput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="logininput"
              ref={email}
              required
            />
            <button className="loginbutton" type="submit" disabled={isfetching}>
              {isfetching ? <CricularProgress color={"white"} /> : "Log In"}
            </button>
            <span className="loginforgot">Forgot Password</span>
            <button className="loginregisterbutton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
