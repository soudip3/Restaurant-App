import React from 'react'
import classes from '../Menu/Menu.module.css'
import Card from '../UI/Card/Card'
const Menu = () =>{
    return(
        <Card className={classes.menu}>
            <div className={classes.titleHeader}>
                <p className={classes.title}>Chicken Cheese Burger</p>
                <p className={classes.titleAmount}>Amount</p>
                <input type="number" className={classes.titleBox} value="1"></input>
            </div>
            <div className={classes.titleHeader2}>
                <p className={classes.p}>Finest Chicken and Cheese</p>
                <button className={classes.addButton}>+Add</button>
            </div>
            <p className={classes.amount}>$3.99</p>
            <hr className={classes.line}></hr>
            <p className={classes.amount}>&nbsp;</p>
            <div className={classes.titleHeader}>
                <p className={classes.title}>Chicken Cheese Burger</p>
                <p className={classes.titleAmount}>Amount</p>
                <input type="number" className={classes.titleBox} value="1"></input>
            </div>
            <div className={classes.titleHeader2}>
                <p className={classes.p}>Finest Chicken and Cheese</p>
                <button className={classes.addButton}>+Add</button>
            </div>
            <p className={classes.amount}>$3.99</p>
            <hr className={classes.line}></hr>
            <p className={classes.amount}>&nbsp;</p>
            <div className={classes.titleHeader}>
                <p className={classes.title}>Chicken Cheese Burger</p>
                <p className={classes.titleAmount}>Amount</p>
                <input type="number" className={classes.titleBox} value="1"></input>
            </div>
            <div className={classes.titleHeader2}>
                <p className={classes.p}>Finest Chicken and Cheese</p>
                <button className={classes.addButton}>+Add</button>
            </div>
            <p className={classes.amount}>$3.99</p>
            <hr className={classes.line}></hr>
            <p className={classes.amount}>&nbsp;</p>
        </Card>
    )
}

export default Menu;