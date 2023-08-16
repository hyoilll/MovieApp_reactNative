import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";

export const darkTheme = {
  mainBgColor: "black",
  textColor: "white",
};
export const lightTheme = {
  mainBgColor: "white",
  textColor: "black",
};

export const tab_navigation_items = {
  0: {
    name: "Movies",
    component: Movies,
    icon_focused: "ios-film-outline",
    icon_notFocused: "ios-film",
  },
  1: {
    name: "TV",
    component: Tv,
    icon_focused: "ios-tv-outline",
    icon_notFocused: "ios-tv",
  },
  2: {
    name: "Search",
    component: Search,
    icon_focused: "ios-search-outline",
    icon_notFocused: "ios-search",
  },
};
