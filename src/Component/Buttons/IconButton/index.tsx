import React from 'react';
import classNames from 'classnames';

import { 
    getIsDark, 
    getTheme 
} from '@/Style/index';

import { IconButtonProps } from '../props';
import genStyle from './style'

export function IconButton(props: IconButtonProps): JSX.Element {
    let theme = getTheme();
    let style = genStyle(theme, getIsDark())
    return (
        <button
            onClick={props.onClick}
            className={classNames(
                style.default,

                props.type == undefined && style.standard,
                props.type == 'standard' && style.standard,

                props.type == 'filled' && style.filled,
                props.type == 'tonal' && style.tonal,
                props.type == 'outlined' && style.outlined,

                props.selected && 'selected',
                props.selected == false && 'unselected',
                
            )}>

            {props.children}
        </button>
    )

}
