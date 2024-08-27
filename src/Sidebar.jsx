import React, { useEffect } from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "./Sidebar.css";
import { useDataLayerValue } from "./DataLayer";
import { useState } from "react";
function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  const [displayedPlaylists, setDisplayedPlaylists] = useState([]);

  useEffect(() => {
    if (playlists.items) {
      setDisplayedPlaylists(playlists?.items);
    }
  }, [playlists]);

  return (
    <div className="sidebar">
      <div className="logo">
        <img
          className="sidebar__logo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
          alt="Spotify Logo"
        />
      </div>

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      <div className="playlists">
        {displayedPlaylists?.map((playlist) => (
          <SidebarOption key={playlist.id} title={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
