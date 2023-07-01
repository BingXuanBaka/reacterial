import { Hct, Theme, hexFromArgb } from "@material/material-color-utilities";
import { css } from '@emotion/css'

import {
    typescales,
    elevation,
    getSurfaceColorFromScheme
} from "@/style";

export default (theme: Theme, dark: boolean) => {
    let scheme = dark ? theme.schemes.dark : theme.schemes.light
    return {
        default: css({
            ...elevation.level3,
            position: 'relative',
            border: 0,
            margin: 10,
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            boxSizing: 'border-box',
            transition: '.3s',
            overflow: 'hidden',
            
            '&::after': {
                height: '100%',
                width: '100%',
                position: 'absolute',
                content: '""',
                left: 0,
                top: 0,
                transition: '.2s',
                opacity: 0
            },

            '&:hover': {
                ...elevation.level4,
            },
            '&:hover::after': {
                opacity: 0.08
            },

            '&:active': {
                ...elevation.level3,
            },
            '&:active::after': {
                opacity: 0.12
            },
        }),

        icon: css({
            height: 24,
            width: 24,
            fontSize: 24
        }),
        label:css({
            transition: '0.3s',
            opacity: 0,
            paddingLeft: 16,
            overflow: "hidden",
            '&.shown':{
                opacity: 1,
            }
        }),

        normal: css({
            height: 56,
            width: 56,
            padding: 16,
            borderRadius: 16,
            '&::after':{
                borderRadius: 16
            }
        }),

        extended: css({
            height: 56,
            padding: 16,
            borderRadius: 16,
            '&::after':{
                borderRadius: 16
            },
        }),

        small: css({
            height: 40,
            width: 40,
            padding: 8,
            borderRadius: 12,
            '&::after':{
                borderRadius: 12
            }
        }),

        large: css({
            height: 96,
            width: 96,
            padding: 30,
            borderRadius: 28,
            '&::after':{
                borderRadius: 28
            },

            '*':{
                height: 36,
                width: 36,
                fontSize: '36px!important'
            }
        }),



        primary: css({
            backgroundColor: hexFromArgb(scheme.primaryContainer),
            color: hexFromArgb(scheme.primary),
            fill: hexFromArgb(scheme.primary),
            '&::after': {
                backgroundColor: hexFromArgb(scheme.onPrimaryContainer),
            }
        }),

        secondary: css({
            backgroundColor: hexFromArgb(scheme.secondaryContainer),
            color: hexFromArgb(scheme.secondary),
            fill: hexFromArgb(scheme.secondary),
            '&::after': {
                backgroundColor: hexFromArgb(scheme.onSecondaryContainer),
            }
        }),

        tertiary: css({
            backgroundColor: hexFromArgb(scheme.tertiaryContainer),
            color: hexFromArgb(scheme.tertiary),
            fill: hexFromArgb(scheme.tertiary),
            '&::after': {
                backgroundColor: hexFromArgb(scheme.onTertiaryContainer),
            }
        }),

        surface: css({
            backgroundColor: hexFromArgb(scheme.surface),
            color: hexFromArgb(scheme.primary),
            fill: hexFromArgb(scheme.primary),
            '&::after': {
                backgroundColor: hexFromArgb(scheme.primary),
            }
        })

    }
}