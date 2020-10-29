import React, { useEffect } from "react";

import Login from "./components/login/Login";
import Player from "./components/player/Player";

import { getTokenFromUrl } from "./spotify/spotify";

import SpotifyWebApi from "spotify-web-api-js";

import { useDataLayerValue } from "./context/DataLayer";

import "./App.css";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    let _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("71rFUwTBHpbRrg8xhOvyH0").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <React.Fragment>
      {token ? <Player spotify={spotify} /> : <Login />}
    </React.Fragment>
  );
};

export default App;
