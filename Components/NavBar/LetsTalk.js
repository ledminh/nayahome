import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from './LetsTalk.module.scss';

export default function LetsTalk() {
    const [chatStream, setChatStream] = useState([]);

    return (
        <div className={styles.LetsTalk}>
            <button className={styles.button}>LET{"'S"} TALK</button>
            <div className={styles.chatbox}>
                <h5 className={styles.title}>LET{"'"}S TALK</h5>
                <ChatScreen chatStream={chatStream}/>               
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






const ChatScreen = dynamic(() => import('./ChatScreen'), {ssr: false});