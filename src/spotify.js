export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://spotify-clone-f2d13.web.app";
const clientId = "f01473f5bd4546f5bda82d5c790583dc";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
