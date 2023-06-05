import React, { useState } from 'react'
import {
  Button,
  Card,
  FAB,
  IconButton,
  Surface,
  ThemeContext,
  Topbar,
} from '../src';
import './style.css'
import { css } from '@emotion/css';
import {
  argbFromHex,
  themeFromSourceColor
} from '@material/material-color-utilities';

function App() {
  const [extended, setExtended] = useState(true)
  const [iconBtnSelected, setIconBtnSelected] = useState(true)
  return (
    <>
      <link rel="stylesheet"
        href={"https://fonts.googleapis.com/css2?" +
          "family=Material+Symbols+Outlined:opsz,wght,FILL," +
          "GRAD@20..48,100..700,0..1,-50..200"
        } />
      <Surface className={css({ flex: 1 })}>
        <Topbar
          leading={
            <IconButton type='standard'>
              <span className="material-symbols-outlined">
                menu
              </span>
            </IconButton>
          }
          headline={
            "hello world!"
          }
          trailing={
            <IconButton type='standard'>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
          }

        />

        <div className='buttons' style={{ margin: 4 }}>
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
            <FAB type={extended ? 'extended' : 'normal'}
              label='Hello!'
              onClick={() => { setExtended(!extended) }}>
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
        <div className='iconButtons' style={{
          display: 'flex',
          rowGap: 12,
          flexDirection: 'column',
          margin: 4
        }}>
          <div style={{ display: 'flex', columnGap: 12 }}>
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
          <div style={{ display: 'flex', columnGap: 12 }}>
            <IconButton type='standard'
              onClick={() => setIconBtnSelected(!iconBtnSelected)}
              selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='filled'
              onClick={() => setIconBtnSelected(!iconBtnSelected)}
              selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='tonal'
              onClick={() => setIconBtnSelected(!iconBtnSelected)}
              selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
            <IconButton type='outlined'
              onClick={() => setIconBtnSelected(!iconBtnSelected)}
              selected={iconBtnSelected}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </IconButton>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 4,
          columnGap: 4
        }}>
          <Card
            type='elevated'
            style={{ height: 100, width: '100%' }}>
            <span>elevated</span>
          </Card>
          <Card
            type='filled'
            style={{ height: 100, width: '100%' }}>
            <span>filled</span>
          </Card>
          <Card
            type='outlined'
            style={{ height: 100, width: '100%' }}>
            <span>outlined</span>
          </Card>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 4,
          columnGap: 4
        }}>
          <Card
            onClick={()=>{alert("clicked")}}
            type='elevated'
            style={{ height: 100, width: '100%' }}>
            <span>elevated clickable</span>
          </Card>
          <Card
            onClick={()=>{alert("clicked")}}
            type='filled'
            style={{ height: 100, width: '100%' }}>
            <span>filled clickable</span>
          </Card>
          <Card
            onClick={()=>{alert("clicked")}}
            type='outlined'
            style={{ height: 100, width: '100%' }}>
            <span>outlined clickable</span>
          </Card>
        </div>
      </Surface>

    </>
  )
}

export default App
