import React from 'react'
import s from '../Dialogs.module.css'

type MessageProps = {
    message: string
}

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div>{props.message}</div>
    )
}