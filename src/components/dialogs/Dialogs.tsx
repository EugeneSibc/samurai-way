import React from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';
import { DialogsPageType } from '../../redux/state';

type DialogsProps = {
    state: DialogsPageType
    addMessage: (textMessage: string) => void
}

const Dialogs: React.FC<DialogsProps> = (props) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.addMessage(text)
        }
    }
    let dialogElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />)
    let messageElement = props.state.messages.map(d => <Message message={d.message} key={d.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement}>Add message</textarea>
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};

export default Dialogs;