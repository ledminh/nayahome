import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styles from './LetsTalk.module.scss';

import xSymbolImg from '../../imgs/x-symbol.png';


import Image from 'next/image';

export default function LetsTalk() {
    const [chatStream, setChatStream] = useState([]);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const clickHandle = (e) => {
            e.preventDefault();
            setOpened(false);
        }

        window.document.addEventListener('click', clickHandle);

        return () => window.document.removeEventListener('click', clickHandle);

    }, []);
    return (
        <div className={styles.LetsTalk}
                onClick={(e) => e.stopPropagation()}
            >
            <button className={styles.button}
                data-opened={opened}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpened(true);
                }}
            >
                LET{"'S"} TALK
            </button>
            <div className={styles.chatbox}
                data-opened={opened}
            >
                <h5 className={styles.title}>
                    <span>LET{"'"}S TALK</span>
                    <button className={styles.close}
                        onClick={() => setOpened(false)}
                    >
                        <Image 
                            src={xSymbolImg}
                            alt="X mark"
                        />
                    </button>
                </h5>
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