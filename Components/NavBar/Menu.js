import Link from 'next/link';

import styles from './Menu.module.scss';

import Property from './Property';
import Services from './Services';
import About from './About';

const menuItems = [
    {
        name: 'PROPERTY',
        expandedMenu: Property
    },

    {
        name: 'SERVICES',
        expandedMenu: Services
    },

    {
        name: 'TESTIMONIAL',
        link: '/testimonial'
    },

    {
        name: 'ABOUT',
        expandedMenu: About
    }
]

export default function Menu() {
    return (
        <div className={styles.menu}>
            <ul className={styles.ul}>
                {
                    menuItems.map((item, i) => (
                        <li className={styles.li} key = {item.name}>
                            {
                                item.expandedMenu? 
                                    (   <>
                                            <button>{item.name}</button>
                                            <div className={styles.menuExpanded + (i < (menuItems.length - 1)/2? ' ' + styles.left : ' ' + styles.right)}>
                                                <item.expandedMenu/>
                                            </div>
                                        </>):
                                    (<Link href={item.link}>{item.name}</Link>) 
                            }                  
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
