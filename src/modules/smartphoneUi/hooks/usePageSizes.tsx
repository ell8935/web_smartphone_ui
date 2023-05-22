import { useMemo } from "react";
import { smartphoneUiTheme } from "../theme/smartphoneUiTheme";

export let APP_WIDTH = 460;
export let APP_HEIGHT = 800;

export function usePageSizes() {
  if (window.innerWidth < 1000) {
    APP_WIDTH = window.innerWidth;
    APP_HEIGHT = window.innerHeight;
  }

  return {
    containerSx: useMemo(() => {
      const containerSx = {
        width: "100%",
        maxWidth: APP_WIDTH,
        height: "100%",
        maxHeight: APP_HEIGHT,
        margin: "auto",
      };
      return { ...smartphoneUiTheme, ...containerSx };
    }, []),
    contentSx: useMemo(() => {
      const contentSx = {
        maxWidth: APP_WIDTH,
      };

      return {
        height: "100%",
        width: "100%",
        margin: "auto",
        ...contentSx,
      };
    }, []),
  };
}
