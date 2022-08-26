import styles from './LetsTalk.module.scss';

export default function LetsTalk() {

    return (
        <div className={styles.LetsTalk}>
            <button className={styles.button}>LET{"'S"} TALK</button>
            <div className={styles.chatbox}>
                <h5 className={styles.title}>LET{"'"}S TALK</h5>
                <div className={styles.chatScreen}>
                    <p className={styles.agent}>
                        <div className={styles.avatar}><i className="fa fa-solid fa-user-tie" /></div>
                        <span>Hello, how can I help you today?</span>
                    </p>
                    
                    <p className={styles.customer}>
                        <span>I would like to ...</span>
                        <div className={styles.avatar}><i className="fa fa-solid fa-user-tie"/></div>
                    </p>
                    
                    <p className={styles.agent}>
                        <div className={styles.avatar}><i className="fa fa-solid fa-user-tie"/></div>
                        <span>I{"'"}m sorry</span>
                    </p>
                    
                    <p className={styles.customer}>
                        <span>It{"'s"} ok!</span>
                        <div className={styles.avatar}><i className="fa fa-solid fa-user-tie"/></div>
                    </p>

                </div>
                <div className={styles.input}>
                    <input />
                </div>
            </div>
        </div>

    )
}