import React from 'react';
import { useState, useEffect } from 'react'

const style = {
    backgroundColor: "red",
    fontSize: "bold"
}

const Notification = ({ error }) => {
    const [disappear, setDisappear] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisappear(true)
        }, 5000)
        return () => {
            clearTimeout(timer)
            setDisappear(false)
        };
    }, [error]);

    return (
        <div>
            {!disappear ? <p style={style}>{error}</p> : null}
        </div>
    )
}

export default Notification