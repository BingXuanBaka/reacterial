import React, { useState } from 'react'
import {
  Button,
  FAB,
  IconButton,
  ThemeContext,
  getTheme

} from '../src';
import {
  themeFromSourceColor,
  argbFromHex,
  hexFromArgb
} from '@material/material-color-utilities';
import './style.css'

function App() {
  const [extended, setExtended] = useState(true)
  const [iconBtnSelected, setIconBtnSelected] = useState(true)
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      {/* <ThemeContext.Provider
        value={{ theme: themeFromSourceColor(argbFromHex("#000066")) }}> */}
      <div className='mainContainer' style={{ flex: 1, backgroundColor: hexFromArgb(getTheme().schemes.dark.background) }}>
        <div className='buttons'>
          <Button>Filled</Button>
          <Button type='filled'>Filled</Button>
          <Button type='tonal'>Filled Tonal</Button>
          <Button type="elevated">Elevated</Button>

          <Button type='outlined'>Outlined</Button>
          <Button type='text'>Text</Button>
        </div>
        <div className='FABs'>
          <span style={{ display: 'flex' }}>
            <FAB type='small'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>
            <FAB>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>
            <FAB type={extended ? 'extended' : 'normal'} label='Hello!' onClick={() => { setExtended(!extended) }}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>
            <FAB type='large'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>

          </span>
          <span style={{ display: 'flex' }}>
            <FAB>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>
            <FAB color='secondary'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>
            <FAB color='tertiary'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>
            <FAB color='surface'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </FAB>
          </span>



        </div>
        <div className='iconButtons'>
          <div style={{ display: 'flex' }}>
            <IconButton type='standard'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='filled'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='tonal'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='outlined'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
          </div>
          <div style={{ display: 'flex' }}>
            <IconButton type='standard' onClick={()=>setIconBtnSelected(!iconBtnSelected)} selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='filled' onClick={()=>setIconBtnSelected(!iconBtnSelected)} selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='tonal' onClick={()=>setIconBtnSelected(!iconBtnSelected)} selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='outlined' onClick={()=>setIconBtnSelected(!iconBtnSelected)} selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
          </div>
        </div>
      </div>

      {/* </ThemeContext.Provider> */}
    </>
  )
}

export default App
