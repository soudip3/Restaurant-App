import React from 'react'
import classes from '../Image/Image.module.css'
import logo from '../Image/food.jpg'
const Image = () => {
    return(
        <div className={classes.top}>
            <img src={logo} alt="food" className={classes.image}></img>
        </div>
    )
}

export default Image;