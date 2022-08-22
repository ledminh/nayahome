import Link from 'next/link';

import styles from './NavBar.module.scss';

export default function NavBar () {

    return (
        <nav className={styles.nav}>
            <h4>NayaHome</h4>
            <ul>
                <li><Link href="/property">PROPERTY</Link></li>
                <li><Link href="/services">SERVICES</Link></li>
                <li><Link href="/testimonial">TESTIMONIAL</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
            </ul>
            <button>LET{"'S"} TALK</button>
        </nav>
    )
}