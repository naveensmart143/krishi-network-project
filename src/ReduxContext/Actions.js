import axios from "axios";
export const Login = "Login";
export const Logout = "Logout";
export const DataFetchAction = "DataFetchAction";

export const LoginAction = () => {
  return { type: Login };
};
export const LogoutAction = () => {
  return { type: Logout };
};
export const DataFetchActionAction = () => {
  return async (dispatch) => {
    axios
      .get(
        "http://api.krishi.network/mandi?lat=28.44108136&lon=77.0526054&ver=89&lang=hi&crop_id=10"
      )
      .then((response) => {
        const results = response.data;

        console.log(results.data.other_mandi);
        return dispatch({
          type: DataFetchAction,
          payload: results.data.other_mandi,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
