import { Login, Logout, DataFetchAction } from "./Actions";

const intialState = {
  islogin: false,
  data: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case Login: {
      return { ...state, islogin: true };
    }
    case Logout: {
      return { ...state, islogin: false };
    }
    case DataFetchAction: {
      return { ...state, data: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
