import React from 'react';
import { StyleSheet , StyleSheetStatic , css } from 'aphrodite';
import { Theme , Hct, hexFromArgb } from '@material/material-color-utilities'
import classNames from 'classnames';

import './style.scss';

import default_color_theme from '../../../Style/default_color_theme';


enum ButtonType {
    elevated,
    filled,
    filledTonal,
    outlined,
    text
}

type Props = {
    theme?: Theme,
    children: any,

    iconLeft?: any,
    iconRight?: any,

    type: string
}
type State = {
    theme: Theme,
    coloredStyles: any
}

export class Button extends React.Component <Props,State> {
    constructor(props:Props){
        super(props)
        let theme = this.props.theme ? 
            this.props.theme : 
            default_color_theme;
        this.state = {
            theme:theme,
            coloredStyles: StyleSheet.create({
                filled: {
                    
                    // backgroundColor: 'blue'
                    backgroundColor: hexFromArgb(theme.schemes.light.primary),
                    '@media (prefers-color-scheme: dark)':{
                        backgroundColor: hexFromArgb(theme.schemes.dark.primary),
                    }
                },

                filledTonal: {
                    backgroundColor: hexFromArgb(theme.schemes.light.secondaryContainer),
                    '@media (prefers-color-scheme: dark)':{
                        backgroundColor: hexFromArgb(theme.schemes.light.secondaryContainer),
                    }
                },
             
                elevated: {
                    color:hexFromArgb(theme.schemes.light.primary),

                    backgroundColor:hexFromArgb(theme.schemes.light.surface),
                    '@media (prefers-color-scheme: dark)':{
                        color:hexFromArgb(theme.schemes.dark.primary),
                        backgroundColor:hexFromArgb(theme.schemes.dark.surface),
                    }
                },
                
                outlined: {
                    outline: `
                        ${hexFromArgb(theme.schemes.light.secondaryContainer)}
                        inset 1px
                        `,
                    '@media (prefers-color-scheme: dark)':{
                        outline: `
                            ${hexFromArgb(theme.schemes.dark.secondaryContainer)}
                            inset 1px
                            `
                    }
                },
             
                text: {

                }
            })
        }

        console.log(this.props.theme ? 
            true : 
            false)
        

        console.log(typeof(this.state.coloredStyles))
        console.log(typeof(this.props.children))
    }
    render() {
        return (
            <button 
                className={classNames(
                    'reacterial-button',

                    this.props.type ? this.props.type : 'filled',

                    this.props.iconLeft ? 'icon-left' : null,
                    this.props.iconRight ? 'icon-right' : null,
                
                    this.props.type == 'filled' || this.props.type == '' ?
                        css(this.state.coloredStyles.filled) : null,

                    this.props.type == 'filled-tonal' ?
                        css(this.state.coloredStyles.filledTonal) : null,
                    
                    this.props.type == 'elevated' ?
                        css(this.state.coloredStyles.elevated) : null,

                    this.props.type == 'outlined' ?
                        css(this.state.coloredStyles.outlined) : null,

                    this.props.type == 'text' ?
                        css(this.state.coloredStyles.text) : null,
                )}>

                { this.props.iconLeft }
                <span>{ this.props.children }</span>
                { this.props.iconRight }
            </button>
        )
    }
}
