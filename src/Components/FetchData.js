import axios from "axios";

export const fetchdata = () => {
  axios
    .get(
      "http://api.krishi.network/mandi?lat=28.44108136&lon=77.0526054&ver=89&lang=hi&crop_id=10"
    )
    .then((response) => {
      const results = response.data;
      console.log(results.data);
    });
};
