import { applyTheme, argbFromHex, themeFromSourceColor } from '@material/material-color-utilities'

export * from './Component/Buttons'
export * from './Component/Topbar'
export * from './Style'

applyTheme(themeFromSourceColor(argbFromHex("6751a5")))