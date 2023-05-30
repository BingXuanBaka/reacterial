import { Blend, CorePalette, Hct, Scheme, Theme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities"
import { createContext, useContext } from "react"

type ColorScheme = 'system' | 'light' | 'dark'


export const ThemeContext = createContext<{
    theme: Theme, 
    colorScheme?: ColorScheme
}>({
    theme: themeFromSourceColor(argbFromHex("6751a5"))
})

export const ColorSchemeContext = createContext<ColorScheme>('system')

export function getScheme(): ColorScheme {
    const scheme = useContext(ColorSchemeContext)
    return scheme
}

export function getIsDark(): boolean {
    let scheme = useContext(ThemeContext).colorScheme;
    if (!scheme || scheme == 'system') {
        return window.matchMedia && window.matchMedia(' (prefers-color-scheme: dark)').matches
    }
    return scheme == 'dark'
}

export function getTheme(): Theme {
    const theme = useContext(ThemeContext).theme
    return theme
}

export function getSurfaceColorFromScheme(
    scheme: Scheme
): {
    surface1: number,
    surface2: number,
    surface3: number,
    surface4: number,
    surface5: number,
} {

    return {
        surface1: Blend.cam16Ucs(scheme.surface, scheme.primary, 0.05),
        surface2: Blend.cam16Ucs(scheme.surface, scheme.primary, 0.08),
        surface3: Blend.cam16Ucs(scheme.surface, scheme.primary, 0.11),
        surface4: Blend.cam16Ucs(scheme.surface, scheme.primary, 0.12),
        surface5: Blend.cam16Ucs(scheme.surface, scheme.primary, 0.14),

    }
}

export function getSurfaceElevationColor(scheme: Scheme, elevation: 0 | 1 | 2 | 3 | 4 | 5) {
    switch (elevation) {
        case 0:
            return scheme.surface

        case 1:
            return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.05)

        case 2:
            return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.08)

        case 3:
            return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.11)

        case 4:
            return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.12)

        case 5:
            return Blend.cam16Ucs(scheme.surface, scheme.primary, 0.14)
    }
}

