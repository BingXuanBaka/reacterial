import { Blend, CorePalette, Hct, Scheme, Theme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities"
import { createContext, useContext } from "react"

type ColorScheme = 'system' | 'light' | 'dark'


const ThemeContext = createContext<{theme: Theme, colorScheme?: ColorScheme}>({theme: themeFromSourceColor(argbFromHex("6751a5"))})
const ColorSchemeContext = createContext<ColorScheme>('system')

function getScheme (): ColorScheme {
    const scheme = useContext(ColorSchemeContext)
    return scheme
}

function getIsDark (): boolean{
    let scheme = useContext(ThemeContext).colorScheme;
    if(!scheme || scheme == 'system'){
        return window.matchMedia && window.matchMedia(' (prefers-color-scheme: dark)').matches
    }
    return scheme == 'dark'
}

function getTheme (): Theme {
    const theme = useContext(ThemeContext).theme
    console.log(theme)
    return theme
}

function getSurfaceColorFromScheme(
    scheme: Scheme
):{
    surface1: number, 
    surface2: number,
    surface3: number,
    surface4: number,
    surface5: number,
} {
   
    return {
        surface1:  Blend.cam16Ucs(scheme.surface, scheme.primary, 0.05 ),
        surface2:  Blend.cam16Ucs(scheme.surface, scheme.primary, 0.08 ),
        surface3:  Blend.cam16Ucs(scheme.surface, scheme.primary, 0.11 ),
        surface4:  Blend.cam16Ucs(scheme.surface, scheme.primary, 0.12 ),
        surface5:  Blend.cam16Ucs(scheme.surface, scheme.primary, 0.14 ),

    }
}

export { ThemeContext, ColorSchemeContext, getScheme, getTheme, getIsDark, getSurfaceColorFromScheme}
