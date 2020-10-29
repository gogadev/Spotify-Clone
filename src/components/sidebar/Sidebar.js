import React from "react";

import SidebarOption from "../sidebar-option/SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { useDataLayerValue } from "../../context/DataLayer";

import "./sidebar.style.css";

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Sidebar Logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {/* From Spotify  */}

      {playlists?.items?.map((playlist, id) => (
        <SidebarOption title={playlist.name} key={id} />
      ))}
    </div>
  );
};

export default Sidebar;
