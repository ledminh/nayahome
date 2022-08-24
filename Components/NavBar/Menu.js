import Link from 'next/link';

import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <ul className={styles.ul}>
                <li>
                    <button href="/property">PROPERTY</button>
                    {/* <div className={styles.menuExpanded}>
                        <Property />
                    </div>     */}

                </li>
                <li>
                    <Link href="/services">SERVICES</Link>


                </li>
                <li>
                    <Link href="/testimonial">TESTIMONIAL</Link>

                </li>
                <li>
                    <Link href="/about">ABOUT</Link>

                </li>
            </ul>
        </div>
    )
}

const Property = () => (
    <>
        <div>
            <h5>Category 1</h5>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
            </ul>
        </div>
    </>
)