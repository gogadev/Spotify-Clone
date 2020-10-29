import React from "react";

import { useDataLayerValue } from "../../context/DataLayer";

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import "./header.style.css";

const Header = () => {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Podcasts"
        />
      </div>
      <div className="header__right">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc1BK8WDj5rqf2vofxLHg5n9PtsZRH1xCenQ&usqp=CAU"
          // src={
          //  user?.images[0].url
          //    ? user?.images[0].url
          //    : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc1BK8WDj5rqf2vofxLHg5n9PtsZRH1xCenQ&usqp=CAU"
          //  }
          alt={user?.display_name}
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
