import Link from 'next/link';

import styles from './NavBar.module.scss';
import typographyStyles from '../../styles/Typography.module.scss';

export default function NavBar () {

    return (
        <nav className={styles.nav}>
            <h4 className={styles.h4}><span className={typographyStyles.bold}>Naya</span>Home</h4>
            <div className={styles.menu}>
                <ul className={styles.ul}>
                    <li><Link href="/property">PROPERTY</Link></li>
                    <li><Link href="/services">SERVICES</Link></li>
                    <li><Link href="/testimonial">TESTIMONIAL</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                </ul>
            </div>
            <button className={styles.button}>LET{"'S"} TALK</button>
        </nav>
    )
}