import React from 'react'
import classes from '../Modal/Modal.module.css'
import Card from '../UI/Card/Card'

const Modal = () => {
    return (
        <Card className={classes.modal}>
            <p className={classes.p}>
            A great restaurant is one that just makes you feel like you're not sure whether you went out or you came home and confuses you. If it can do both of those things at the same time, you're hooked.
            </p>
        </Card>
    )
}

export default Modal;