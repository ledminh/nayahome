import Link from 'next/link';

import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <ul className={styles.ul}>
                <li><button href="/property">PROPERTY</button></li>
                <li><Link href="/services">SERVICES</Link></li>
                <li><Link href="/testimonial">TESTIMONIAL</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
            </ul>
        </div>
    )
}