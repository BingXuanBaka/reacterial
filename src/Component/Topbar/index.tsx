import React, { ReactNode } from 'react';
import classNames from 'classnames';

import {
    getIsDark,
    getTheme,
    typography
} from '@/Style';

import { css } from '@emotion/css';
import { Scheme, hexFromArgb } from '@material/material-color-utilities';

interface TopbarProps {
    leading?: ReactNode,
    headline?: ReactNode,
    trailing?: ReactNode,
    className?: string,
}

export function Topbar(props: TopbarProps) {
    let scheme: Scheme = getIsDark() ?
        getTheme().schemes.dark :
        getTheme().schemes.light
    return (
        <div className={classNames(
            props.className,
            css({
                height: 64,
                display: 'flex',
                alignItems: 'center',
                margin: '0 4px',
                columnGap: 4
            })
        )}>
            <div>
                {props.leading}
            </div>
            <span className={css({
                flex: 1,
                ...typography.title.large,
                color: hexFromArgb(scheme.onSurface)
            })}>
                {props.headline}
            </span>
            <div>
                {props.trailing}
            </div>
        </div>
    )
}