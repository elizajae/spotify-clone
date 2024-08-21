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
  const [showAll, setShowAll] = useState(false);
  const [displayedPlaylists, setDisplayedPlaylists] = useState([]);

  useEffect(() => {
    if (showAll && playlists.items) {
      setDisplayedPlaylists(playlists.items);
    } else if (playlists.items) {
      setDisplayedPlaylists(playlists?.items.slice(0, 15));
    }
  }, [playlists, showAll]);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {displayedPlaylists?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}

      <button onClick={() => setShowAll(!showAll)} className="sidebar__button">
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
}

export default Sidebar;
