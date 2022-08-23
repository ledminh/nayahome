import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <>
            <p className={styles.p}>Created by <a href="https://www.ledminh.dev">Minh Le</a>.</p>
            <p className={styles.p}>Design: {" "}
                <a href="https://dribbble.com/shots/19130070-NayaHome-Hospitality-Service-Partner">NayaHome</a>
            </p>
        </>
    );
}