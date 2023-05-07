import React from 'react'
import {
  Button,
  FAB,
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
  return (
    <>
      {/* <ThemeContext.Provider
        value={{ theme: themeFromSourceColor(argbFromHex("#000066")) }}> */}
        <div className='mainContainer' style={{flex: 1, backgroundColor: hexFromArgb(getTheme().schemes.dark.background)}}>
          <div className='buttons'>
            <Button>Filled</Button>
            <Button type='filled'>Filled</Button>
            <Button type='tonal'>Filled Tonal</Button>
            <Button type="elevated">Elevated</Button>

            <Button type='outlined'>Outlined</Button>
            <Button type='text'>Text</Button>
          </div>
          <div className='FABs'>
            <span style={{display: 'flex'}}>
              <FAB type='small'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB>
              <FAB>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB>
              {/* <FAB type='extended' label='Hello!'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB> */}
              <FAB type='large'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB>

            </span>
            <span style={{display: 'flex'}}>
              <FAB>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB>
              <FAB color='secondary'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB>
              <FAB color='tertiary'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB>
              <FAB color='surface'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                  <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </FAB>
            </span>



          </div>
        </div>

      {/* </ThemeContext.Provider> */}
    </>
  )
}

export default App
