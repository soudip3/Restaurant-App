import React from 'react'
import classes from '../MainHeader/MainHeader.module.css'
import HeaderContent from './HeaderContent'

const MainHeader = () => {

    return (
        <div className={classes.header}>
            <h1>EssenseHub</h1>
            <HeaderContent></HeaderContent>
        </div>
    )
}

export default MainHeader;