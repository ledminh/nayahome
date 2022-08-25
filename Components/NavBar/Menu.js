import Link from 'next/link';

import styles from './Menu.module.scss';

import Property from './Property';
import Services from './Services';
import About from './About';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <button href="/property">PROPERTY</button>
                    <div className={styles.menuExpanded}>
                    </div>    

                </li>
                <li className={styles.li}>
                    <Link href="/services">SERVICES</Link>
                    <div className={styles.menuExpanded}>
                    </div>

                </li>
                <li className={styles.li}>
                    <Link href="/testimonial">TESTIMONIAL</Link>

                </li>
                <li className={styles.li}>
                    <Link href="/about">ABOUT</Link>
                    <div className={styles.menuExpanded}>
                        <About />
                    </div>

                </li>
            </ul>
        </div>
    )
}
