import {
  Blend,
  Scheme,
  Theme,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { createContext, useContext } from "react";

type ColorScheme = "system" | "light" | "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  colorScheme?: ColorScheme;
}>({
  theme: themeFromSourceColor(argbFromHex("6751a5")),
});

export function getTheme(): Theme {
  const theme = useContext(ThemeContext).theme;
  return theme;
}

export function getScheme(): Scheme {
  return getIsDark() ? getTheme().schemes.dark : getTheme().schemes.light;
}

export function getIsDark(): boolean {
  let scheme = useContext(ThemeContext).colorScheme;
  if (!scheme || scheme == "system") {
    return (
      window.matchMedia &&
      window.matchMedia(" (prefers-color-scheme: dark)").matches
    );
  }
  return scheme == "dark";
}

export function getSurfaceElevationColor(
  scheme: Scheme,
  elevation: 0 | 1 | 2 | 3 | 4 | 5
): number {
  switch (elevation) {
    case 1:
      return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.05);

    case 2:
      return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.08);

    case 3:
      return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.11);

    case 4:
      return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.12);

    case 5:
      return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.14);
  }

  return scheme.surface;
}
