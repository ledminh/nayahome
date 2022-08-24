import styles from './NavBar.module.scss';
import typographyStyles from '../../styles/Typography.module.scss';
import Menu from './Menu';


export default function NavBar () {

    return (
        <nav className={styles.nav}>
            <h4 className={styles.h4}><span className={typographyStyles.bold}>Naya</span>Home</h4>
            <Menu />
            <button className={styles.button}>LET{"'S"} TALK</button>
        </nav>
    )
}