import { useEffect, useState } from 'react';

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
    const [currDataExpanded, setCurrDataExpanded] = useState(0);

    useEffect(() => {
        const escape = () => setCurrDataExpanded(0);

        window.document.addEventListener('click', escape);

        return () => window.document.removeEventListener('click', escape);
    }, []);

    return (
        <div className={styles.menu}>
            <ul className={styles.ul}>
                {
                    menuItems.map((item, i) => (
                        <li className={styles.li} key = {item.name}
                            data-expanded={currDataExpanded === i + 1}
                        >
                            {
                                item.expandedMenu? 
                                    (   <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();

                                                    if(currDataExpanded === i + 1){
                                                        setCurrDataExpanded(0);
                                                    }
                                                    else
                                                        setCurrDataExpanded(i + 1)
                                                
                                                }}
                                                >{item.name}</button>
                                            <div 
                                                className={styles.menuExpanded + (i < (menuItems.length - 1)/2? ' ' + styles.left : ' ' + styles.right)}
                                                data-expanded={currDataExpanded === i + 1}
                                                onClick={(e) => e.stopPropagation()}
                                                >
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
