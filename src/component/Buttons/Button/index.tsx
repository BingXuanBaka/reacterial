import React from "react";
import classNames from "classnames";

import { getIsDark, getScheme, getTheme } from "@/style";

import { CommonButtonProps } from "../props";
import genStyle from "./style";
import { Typography } from "@/component/Typography";

export function Button(props: CommonButtonProps): JSX.Element {
  let theme = getTheme();
  let style = genStyle(theme, getIsDark());
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        style.default,

        props.type == undefined && style.filled,
        props.type == "filled" && style.filled,
        props.type == "tonal" && style.tonal,

        props.type == "elevated" && style.elevated,
        props.type == "outlined" && style.outlined,
        props.type == "text" && style.text
      )}
    >
      {props.icon && <div>{props.icon}</div>}

      {props.type === undefined && (
        <Typography scale="label" level="large" color={getScheme().onPrimary}>
          {props.children}
        </Typography>
      )}
      {props.type === "filled" && (
        <Typography scale="label" level="large" color={getScheme().onPrimary}>
          {props.children}
        </Typography>
      )}

      {props.type === "tonal" && (
        <Typography
          scale="label"
          level="large"
          color={getScheme().onSecondaryContainer}
        >
          {props.children}
        </Typography>
      )}
      {props.type === "elevated" && (
        <Typography scale="label" level="large" color={getScheme().primary}>
          {props.children}
        </Typography>
      )}
      {props.type === "outlined" && (
        <Typography scale="label" level="large" color={getScheme().primary}>
          {props.children}
        </Typography>
      )}
      {props.type === "text" && (
        <Typography scale="label" level="large" color={getScheme().primary}>
          {props.children}
        </Typography>
      )}
    </button>
  );
}
