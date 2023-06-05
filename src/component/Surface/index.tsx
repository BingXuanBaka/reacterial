import { css } from "@emotion/css";
import {
    Scheme,
    hexFromArgb
} from "@material/material-color-utilities";

import {
    getIsDark,
    getTheme,
    getSurfaceElevationColor
} from "@/style";

import classNames from "classnames";
import React, {
    ReactNode
} from "react";

interface SurfaceProps {
    children?: ReactNode,
    className?: string,
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | undefined,
}

export function Surface(props: SurfaceProps) {
    let scheme: Scheme = getIsDark() ?
        getTheme().schemes.dark :
        getTheme().schemes.light
    return (
        <div className={
            classNames(
                props.className, 
                css({
                    backgroundColor: hexFromArgb(
                        getSurfaceElevationColor(scheme, props.elevation ?? 0)
                    )
                })
            )}>
            {props.children}
        </div>
    )
}