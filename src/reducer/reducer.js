export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  playing: false,
  item: null,
  // Remove after finishing developing...
  // token:
  //   "BQDCVHX-kv6abzq6vFMS4dJLouywj4Cnvrv-NEmShBU9bOSMU7iTlhITEJqt9d2U3vte8vSoCtB2VUZ7oNEb9TBvpeQjEovcmeEmK2tGWbSc2hpBQDb2oErzK5CfgWceRdmPncIKUlJtp7a-Q3FMcco-HuEbTZ3jOrqMa_dIpV7D-0Qd",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
