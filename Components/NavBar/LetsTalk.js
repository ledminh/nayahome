import { useState } from 'react';
import styles from './LetsTalk.module.scss';

export default function LetsTalk() {
    const [chatStream, setChatStream] = useState([]);

    return (
        <div className={styles.LetsTalk}>
            <button className={styles.button}>LET{"'S"} TALK</button>
            <div className={styles.chatbox}>
                <h5 className={styles.title}>LET{"'"}S TALK</h5>
                <ChatBox chatStream={chatStream}/>               
                <Input onSubmit={(val) => setChatStream([...chatStream, val])}/>    
            </div>
        </div>

    )
}

function Input ({onSubmit}) {

    const [value, setValue] = useState("");

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setValue("");

            onSubmit(value);
          }
    
    }
    return (
        <div className={styles.input}>
            <input 
                placeholder='Type your question here ...'
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={keyDownHandler}
            />
        </div>
    )
}




function ChatBox ({chatStream}) {

    return (
        <div className={styles.chatScreen}>
            <p className={styles.agent}>
                <div className={styles.avatar}><i className="fa fa-solid fa-user-tie" /></div>
                <span>Hello, how can I help you today?</span>
            </p>
            
            {
                chatStream.map(chat => (
                    <p className={styles.customer} key={chat}>
                        <span>{chat}</span>
                        <div className={styles.avatar}><i className="fa fa-solid fa-user-tie"/></div>
                    </p>
                ))
            }
        </div>
    )
}