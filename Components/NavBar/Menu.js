import Link from 'next/link';

import styles from './Menu.module.scss';

import Property from './Property';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <button href="/property">PROPERTY</button>
                    <div className={styles.menuExpanded}>
                        <Property />
                    </div>    

                </li>
                <li className={styles.li}>
                    <Link href="/services">SERVICES</Link>


                </li>
                <li className={styles.li}>
                    <Link href="/testimonial">TESTIMONIAL</Link>

                </li>
                <li className={styles.li}>
                    <Link href="/about">ABOUT</Link>

                </li>
            </ul>
        </div>
    )
}
