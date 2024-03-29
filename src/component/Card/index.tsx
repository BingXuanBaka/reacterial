import { css } from "@emotion/css";
import { Scheme, hexFromArgb } from "@material/material-color-utilities";
import classNames from "classnames";
import React, { ReactNode } from "react";
import { getSurfaceElevationColor, elevation, getScheme } from "@/style";

interface CardProps {
  children?: ReactNode;
  className?: string | undefined;
  onClick?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;

  type?: "elevated" | "filled" | "outlined" | undefined;
}

export function Card(props: CardProps): JSX.Element {
  let scheme: Scheme = getScheme();

  return (
    <div
      style={props.style}
      onClick={props.onClick}
      className={classNames(
        props.className,

        css({
          borderRadius: 12,
          transition: ".3s",
          cursor: props.onClick ? "pointer" : "auto",
          overflow: "hidden",
        }),

        (props.type == "elevated" || props.type == undefined) &&
          css({
            backgroundColor: hexFromArgb(getSurfaceElevationColor(scheme, 1)),

            ...elevation.level1,

            "&:hover": {
              ...elevation.level2,
            },
            "&:active": {
              ...elevation.level1,
            },
          }),

        props.type == "filled" &&
          css({
            backgroundColor: hexFromArgb(getSurfaceElevationColor(scheme, 4)),

            ...elevation.level0,

            "&:hover": props.onClick != undefined && {
              ...elevation.level3,
            },

            "&:active": {
              ...elevation.level0,
            },
          }),

        props.type == "outlined" &&
          css({
            backgroundColor: hexFromArgb(scheme.surface),

            outline: `
                        ${hexFromArgb(scheme.outline)} 
                        solid 1.4px`,

            ...elevation.level0,

            "&:hover": props.onClick != undefined && {
              ...elevation.level3,
              backgroundColor: hexFromArgb(getSurfaceElevationColor(scheme, 1)),
            },

            "&:active": {
              ...elevation.level0,
            },
          })
      )}
    >
      {props.children}
    </div>
  );
}
