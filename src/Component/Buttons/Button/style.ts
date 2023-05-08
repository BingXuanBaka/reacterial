import { Hct, Theme, hexFromArgb } from "@material/material-color-utilities";
import { css } from '@emotion/css'

import { 
    typography, 
    elevation, 
    getSurfaceColorFromScheme 
} from "@/Style";

export default (theme: Theme, dark: boolean) => {
    let scheme = dark ? theme.schemes.dark : theme.schemes.light
    return {
        default: css({
            ...typography.label.large,
            height: 40,
            padding: '0 24px',
            position: 'relative',

            border: 0,
            borderRadius: 20,

            textAlign: 'center',

            margin: 10,

            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',

            transition: '.3s',

            '&::after': {
                height: '100%',
                width: '100%',
                position: 'absolute',
                borderRadius: 20,
                content: '""',
                left: 0,
                top: 0,
                transition: '.2s',
                opacity: 0
            },

            '&:hover::after': {
                opacity: 0.08
            },

            '&:active::after': {
                opacity: 0.12
            },
        }),

        filled: css({
            padding: '0 24px',
            backgroundColor: hexFromArgb(scheme.primary),
            color: hexFromArgb(scheme.onPrimary),
            boxSizing: 'border-box',


            '&::after': {
                backgroundColor: hexFromArgb(scheme.onPrimary),
            },

            '&:hover': {
                ...elevation.level1
            },
            '&:active': {
                boxShadow: ""
            },
        }),

        tonal: css({
            backgroundColor: hexFromArgb(scheme.secondaryContainer),
            color: hexFromArgb(scheme.onSecondaryContainer),

            '&::after': {
                backgroundColor: hexFromArgb(scheme.onSecondaryContainer),
            },

            '&:hover': {
                ...elevation.level1
            },
            '&:active': {
                boxShadow: ""
            },

        }),

        elevated: css({
            color: hexFromArgb(scheme.primary),
            backgroundColor: hexFromArgb(getSurfaceColorFromScheme(scheme).surface3),
            ...elevation.level1,

            '&::after': {
                backgroundColor: hexFromArgb(scheme.primary),
            },
        }),

        outlined: css({
            background: 'none',
            outline: `
                ${hexFromArgb(scheme.outline)}
                solid 1.4px
                `,
            color: hexFromArgb(scheme.primary),
            
            '&::after': {
                backgroundColor: hexFromArgb(scheme.onSurface),
            },
        }),

        text: css({
            background: 'none',
            padding: '0 12px',
            color: hexFromArgb(scheme.primary),
                        
            '&::after': {
                backgroundColor: hexFromArgb(scheme.onSurface),
            },
        })

    }
}