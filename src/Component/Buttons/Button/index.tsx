import React from 'react';
import classNames from 'classnames';

import { 
    getIsDark, 
    getTheme 
} from '@/Style/index';

import { CommonButtonProps } from '../props';
import genStyle from './style'

export function Button(props: CommonButtonProps): JSX.Element {
    let theme = getTheme();
    let style = genStyle(theme, getIsDark())
    return (
        <button
            className={classNames(
                style.default,

                props.type == undefined && style.filled,
                props.type == 'filled' && style.filled,
                props.type == 'tonal' && style.tonal,
                
                props.type == 'elevated' && style.elevated,
                props.type == 'outlined' && style.outlined,
                props.type == 'text' && style.text,
            )}>

            {props.icon && <div>{props.icon}</div>}
            <span>{props.children}</span>
        </button>
    )

}
