import React, { useState } from 'react'
import {
  Button,
  Card,
  FAB,
  IconButton,
  Surface,
  Topbar,
  Typography,
} from '../src';
import './style.css'
import { css } from '@emotion/css';

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

        {/* Buttons */}
        <div style={{ margin: 4 }}
          className={css({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'space-between'
          })}
        >
          <Button type='filled'>Filled</Button>
          <Button type='tonal'>Filled Tonal</Button>
          <Button type="elevated">Elevated</Button>

          <Button type='outlined'>Outlined</Button>
          <Button type='text'>Text</Button>
        </div>

        {/* FABs */}
        <div>
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

        {/* IconButtons */}
        <div style={{
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

        {/* Unclickable Card */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 4,
          columnGap: 4
        }}>
          <Card
            type='elevated'
            style={{ height: 100, width: '100%' }}>
            <Typography scale={'title'} level={'medium'}>elevated</Typography>
          </Card>
          <Card
            type='filled'
            style={{ height: 100, width: '100%' }}>
            <Typography scale={'title'} level={'medium'}>filled</Typography>
          </Card>
          <Card
            type='outlined'
            style={{ height: 100, width: '100%' }}>
            <Typography scale={'title'} level={'medium'}>outlined</Typography>
          </Card>
        </div>

        {/* Clickable Card */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 4,
          columnGap: 4
        }}>
          <Card
            onClick={() => { alert("clicked") }}
            type='elevated'
            style={{ height: 100, width: '100%' }}>
            <Typography scale={'title'} level={'medium'}>elevated clickable</Typography>
          </Card>
          <Card
            onClick={() => { alert("clicked") }}
            type='filled'
            style={{ height: 100, width: '100%' }}>
            <Typography scale={'title'} level={'medium'}>filled clickable</Typography>
          </Card>
          <Card
            onClick={() => { alert("clicked") }}
            type='outlined'
            style={{ height: 100, width: '100%' }}>
            <Typography scale={'title'} level={'medium'}>outlined clickable</Typography>
          </Card>
        </div>

        {/* Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 8 }}>
          <div style={{ columnGap: 16, display: 'flex', alignItems: 'end' }}>
            <Typography scale={'display'} level={'large'}>display large</Typography>
            <Typography scale={'display'} level={'medium'}>display medium</Typography>
            <Typography scale={'display'} level={'small'}>display small</Typography>
          </div>

          <div style={{ columnGap: 16, display: 'flex', alignItems: 'end' }}>
            <Typography scale={'headline'} level={'large'}>headline large</Typography>
            <Typography scale={'headline'} level={'medium'}>headline medium</Typography>
            <Typography scale={'headline'} level={'small'}>headline small</Typography>
          </div>

          <div style={{ columnGap: 8, display: 'flex', alignItems: 'end' }}>
            <Typography scale={'title'} level={'large'}>title large</Typography>
            <Typography scale={'title'} level={'medium'}>title medium</Typography>
            <Typography scale={'title'} level={'small'}>title small</Typography>
          </div>

          <div style={{ columnGap: 8, display: 'flex', alignItems: 'end' }}>
            <Typography scale={'body'} level={'large'}>body large</Typography>
            <Typography scale={'body'} level={'medium'}>body medium</Typography>
            <Typography scale={'body'} level={'small'}>body small</Typography>
          </div>

          <div style={{ columnGap: 8, display: 'flex', alignItems: 'end' }}>
            <Typography scale={'label'} level={'large'}>label large</Typography>
            <Typography scale={'label'} level={'medium'}>label medium</Typography>
            <Typography scale={'label'} level={'small'}>label small</Typography>
          </div>
        </div>
      </Surface>

    </>
  )
}

export default App
