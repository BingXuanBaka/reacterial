import React from 'react'
import { useState } from 'react'
import { 
  Button,
  ThemeContext
} from '../src';
import { 
  themeFromSourceColor,
  argbFromHex 
} from '@material/material-color-utilities';
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeContext.Provider 
        value={themeFromSourceColor(argbFromHex("#000066"))}>
        <div className='buttons'>
          <Button>123</Button>
          <Button type="elevated">123</Button>
          <Button type='tonal'>123</Button>
          <Button type='filled'>123</Button>
          <Button type='outlined'>123</Button>
          <Button type='text'>123</Button>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
