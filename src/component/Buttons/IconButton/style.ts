import { Hct, Theme, hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";

import { getSurfaceElevationColor } from "@/style";

export default (theme: Theme, dark: boolean) => {
  let scheme = dark ? theme.schemes.dark : theme.schemes.light;
  return {
    default: css({
      height: 48,
      width: 48,
      position: "relative",

      border: 0,
      borderRadius: 24,

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",

      transition: ".3s",

      "&::after": {
        height: "100%",
        width: "100%",
        position: "absolute",
        borderRadius: 24,
        content: '""',
        left: 0,
        top: 0,
        transition: ".2s",
        opacity: 0,
      },

      "&:hover::after": {
        opacity: 0.08,
      },

      "&:active::after": {
        opacity: 0.12,
      },

      "&.selected": {
        fontVariationSettings: '"FILL" 1',
      },
    }),

    standard: css({
      background: "none",
      padding: "0 12px",
      color: hexFromArgb(scheme.onSurfaceVariant),

      "&::after": {
        backgroundColor: hexFromArgb(scheme.onSurface),
      },

      "&.selected": {
        color: hexFromArgb(scheme.primary),
      },
    }),

    filled: css({
      backgroundColor: hexFromArgb(scheme.primary),
      color: hexFromArgb(scheme.onPrimary),
      boxSizing: "border-box",

      "&::after": {
        backgroundColor: hexFromArgb(scheme.onPrimary),
      },

      "&.unselected": {
        color: hexFromArgb(scheme.primary),
        backgroundColor: hexFromArgb(getSurfaceElevationColor(scheme, 3)),
      },
    }),

    tonal: css({
      backgroundColor: hexFromArgb(scheme.secondaryContainer),
      color: hexFromArgb(scheme.onSecondaryContainer),

      "&::after": {
        backgroundColor: hexFromArgb(scheme.onSecondaryContainer),
      },

      "&.unselected": {
        color: hexFromArgb(scheme.primary),
        backgroundColor: hexFromArgb(getSurfaceElevationColor(scheme, 3)),
      },
    }),

    outlined: css({
      background: "none",
      outline: `
                ${hexFromArgb(scheme.outline)}
                solid 1.4px
                `,
      color: hexFromArgb(scheme.onSurfaceVariant),

      "&::after": {
        backgroundColor: hexFromArgb(scheme.onSurface),
      },

      "&.selected": {
        backgroundColor: hexFromArgb(scheme.inverseSurface),
        outline: "none",
        color: hexFromArgb(scheme.inverseOnSurface),
      },
    }),
  };
};
