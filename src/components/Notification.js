import React from 'react';
import { useState, useEffect, useContext } from 'react'
import {MessageContext} from '../context/message'

const style = {
    backgroundColor: "red",
    fontSize: "bold"
}

const Notification = () => {
    const [disappear, setDisappear] = useState(false);
    const {message, setMessage} = useContext(MessageContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisappear(true)
        }, 5000)
        return () => {
            clearTimeout(timer)
            setDisappear(false)
        };
    }, [message]);

    return (
        <div>
            {!disappear ? <p style={style}>{message}</p> : null}
        </div>
    )
}

export default Notification