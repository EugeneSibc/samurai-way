import React from 'react'
import s from '../Dialogs.module.css'

type DialogItemProps = {
    name: string
}

export const DialogsItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={s.dialog}>{props.name}</div>
    )
}