import React, { useState } from 'react';
import classNames from 'classnames';

import {
    getIsDark,
    getTheme
} from '@/Style';

import { FABProps } from '../props';
import genStyle from './style'
import classnames from 'classnames';

export function FAB(props: FABProps): JSX.Element {
    let theme = getTheme();
    let style = genStyle(theme, getIsDark())
    let [labelLength, setLabelLength] = useState(0);
    return (
        <button
            onClick={props.onClick}
            style={props.type == "extended" && labelLength > 0 ? { width: labelLength + 24 + 32 } : {}}
            className={classNames(
                style.default,

                props.type == undefined && style.normal,
                props.type == 'normal' && style.normal,
                props.type == 'extended' && style.extended,

                props.type == 'small' && style.small,
                props.type == 'large' && style.large,

                props.color == undefined && style.primary,
                props.color == "primary" && style.primary,
                props.color == "secondary" && style.secondary,
                props.color == "tertiary" && style.tertiary,
                props.color == "surface" && style.surface,

            )}>

            <span className={style.icon}>{props.children}</span>

            <label
                className={classnames(
                    style.label,
                    props.type == "extended" && 'shown'
                )}
                style={
                    props.type == "extended" && labelLength > 0 ? {
                        width: labelLength
                    } : {}
                }

                ref={(el) => {
                    if (el) setLabelLength(el.scrollWidth)
                }}>{props.label}</label>


        </button>
    )

}
