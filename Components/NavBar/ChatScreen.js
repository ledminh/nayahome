import styles from './ChatScreen.module.scss';

export default function ChatScreen ({chatStream}) {

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