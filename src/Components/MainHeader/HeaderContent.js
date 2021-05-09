import React from 'react'
import classes from '../MainHeader/HeaderContent.module.css'

const HeaderContent = () => {
    return(
        <div className={classes.header}>
            <button>
                <label className={classes.label1}>Your Cart</label>
                <label className={classes.label2}>0</label>
            </button>
        </div>
    )
}

export default HeaderContent;