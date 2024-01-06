import { css } from "@emotion/css";
import classNames from "classnames";
import React, { useMemo } from "react";
import { getScheme, typescales } from "@/style";
import { hexFromArgb } from "@material/material-color-utilities";

interface TypographyProps {
  children: React.ReactNode;
  scale: "display" | "headline" | "title" | "body" | "label";
  level: "large" | "medium" | "small";
  color?: string | number | undefined;
}

export function Typography(props: TypographyProps): JSX.Element {
  const scaleStyles = useMemo(() => {
    let scale;

    if (props.scale === "display") scale = typescales.display;
    if (props.scale === "headline") scale = typescales.headline;
    if (props.scale === "title") scale = typescales.title;
    if (props.scale === "body") scale = typescales.body;
    if (props.scale === "label" || scale === undefined)
      scale = typescales.label;

    if (props.level === "large") return scale.large;
    if (props.level === "medium") return scale.medium;
    return scale.small;
  }, [props.scale, props.level]);
  return (
    <span
      className={classNames(
        css({
          ...scaleStyles,
          color:
            props.color === undefined
              ? hexFromArgb(getScheme().onSurface)
              : typeof props.color === "number"
              ? hexFromArgb(props.color)
              : props.color,
        })
      )}
    >
      {props.children}
    </span>
  );
}
