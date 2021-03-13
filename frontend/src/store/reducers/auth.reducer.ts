import { authActions } from "../actions/";
import { IState } from "../context/auth/auth.context.interfaces";

const authReducer = (state: IState, action: authActions) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        access_token: action.payload,
        error: "",
        isLoading: false,
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        access_token: "",
        error: "",
        isLoading: false,
        user: null,
      };
    case "verify":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        access_token: action.payload.access_token,
        error: "",
        isLoading: false,
      };
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "error":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        access_token: "",
        isLoading: false,
        error: action.payload,
      };
    case "clear_error":
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};

export default authReducer;
