import axios from "axios";
export const loginCall = async (user, fetch) => {
  dispatchEvent({ type: LOGIN_START });

  try {
    const res = await axios.post("auth/login", userCredential);
    dispatchEvent({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatchEvent({ type: "LOGIN_FAILURE", payload: err });
  }
};
