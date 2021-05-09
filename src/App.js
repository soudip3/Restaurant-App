import React from 'react'
import MainHeader from './Components/MainHeader/MainHeader'
import Image from './Components/Image/Image'
import Modal from './Components/Modal/Modal'
import classes from '../src/App.module.css'
import Menu from './Components/Menu/Menu'
function App() {
  return (
    <div className={classes.App}>
      <MainHeader></MainHeader>
      <Image></Image>
      <Modal></Modal>
      <Menu></Menu>
    </div>
  );
}

export default App;
