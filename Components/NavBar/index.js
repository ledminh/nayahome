import styles from './NavBar.module.scss';
import typographyStyles from '../../styles/Typography.module.scss';
import Menu from './Menu';

import LetsTalk from './LetsTalk';

export default function NavBar () {

    return (
        <nav className={styles.nav}>
            <h4 className={styles.h4}><span className={typographyStyles.bold}>Naya</span>Home</h4>
            <Menu />
            <LetsTalk />
        </nav>
    )
}