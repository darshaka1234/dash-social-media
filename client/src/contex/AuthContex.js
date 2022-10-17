import { Children, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isfetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {Children}
    </AuthContext.Provider>
  );
};
