import React from 'react';
import classNames from 'classnames';

import {
    getIsDark,
    getTheme
} from '@/Style';

import { FABProps } from '../props';
import genStyle from './style'

export function FAB(props: FABProps): JSX.Element {
    let theme = getTheme();
    let style = genStyle(theme, getIsDark())
    return (
        <button
            onClick={props.onClick}
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

            <span className={
                props.type == 'large' ? style.iconLarge : style.icon
            }>{props.children}</span>
            <span>{props.label}</span>
        </button>
    )

}
