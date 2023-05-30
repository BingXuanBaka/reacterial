import { applyTheme, argbFromHex, themeFromSourceColor } from '@material/material-color-utilities'

export * from './component/Buttons'
export * from './component/Topbar'
export * from './component/Surface'
export * from './style'

applyTheme(themeFromSourceColor(argbFromHex("6751a5")))