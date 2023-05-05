import { applyTheme, argbFromHex, themeFromSourceColor } from '@material/material-color-utilities'

export * from './Component/Buttons/Button/index'
export * from './Style'

applyTheme(themeFromSourceColor(argbFromHex("6751a5")))