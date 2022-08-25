import Image from 'next/image';
import aboutImg from '../../imgs/about.jpg';

import styles from './About.module.scss';

export default function About() {

    return (
        <div className={styles.About}>
            <div className={styles.intro}>
                <Image 
                    src={aboutImg}
                    alt="About photo"
                />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus temporibus similique, eum voluptates atque eaque quasi iure odit enim.</p>
            </div>
            <div className={styles.contact}>
                <ul className={styles.ul}>
                    <li><span className={styles.title}>Phone:</span> 499-999-9999</li>
                    <li><span className={styles.title}>Email:</span> <a href="mailto:naya@naya.home.com">naya@naya.home.com</a></li>
                    <li><span className={styles.title}>Instagram:</span> <a href="https://www.instagram.com/nayahome">https://www.instagram.com/nayahome</a></li>
                    <li><span className={styles.title}>Facebook:</span> <a href="https://www.instagram.com/nayahome">https://www.facebook.com/nayahome</a></li>
                </ul>
            </div>
        </div>
    )
}