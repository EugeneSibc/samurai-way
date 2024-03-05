import React from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';

type DialogsProps = {

}




const Dialogs: React.FC<DialogsProps> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={'Dimytch'}/>
                <DialogsItem name={'Viktor'}/>
                <DialogsItem name={'Sveta'}/>
                <DialogsItem name={'Igor'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello, how your IT-KAMASUTRA'}/>
                <Message message={'Its too difficult'}/>
                <Message message={'yov yov you'}/>                
            </div>
        </div>
    );
};

export default Dialogs;