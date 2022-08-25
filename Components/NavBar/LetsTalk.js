import styles from './LetsTalk.module.scss';

export default function LetsTalk() {

    return (
        <div className={styles.LetsTalk}>
            <button className={styles.button}>LET{"'S"} TALK</button>
            <div className={styles.chatbox}>
                <div className={styles.chatScreen}>
                    <p>Hello, how can I help you today?</p>
                </div>
                <input />
            </div>
        </div>

    )
}