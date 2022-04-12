import React, { useState } from "react";
import { connect } from "react-redux";
import { DataFetchActionAction } from "../ReduxContext/Actions";
import ListItem from "./ListItem";
import "./SignUp.css";
function Home({ data, dataFetcher }) {
  const [state, setstate] = useState(false);
  const handleClick = () => {
    dataFetcher();
    setstate((prev) => !prev);
    console.log(state);
  };
  return (
    <div>
      <div>
        <h1> Other Mandi</h1>
      </div>
      <button className="btn" onClick={handleClick}>
        Fetch
      </button>
      {data &&
        data.map((item) => {
          return <ListItem key={item.id} Data={item} />;
        })}
    </div>
  );
}

const mapsToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapsDispatch = (dispatch) => {
  return {
    dataFetcher: () => {
      dispatch(DataFetchActionAction());
    },
  };
};

export default connect(mapsToProps, mapsDispatch)(Home);
