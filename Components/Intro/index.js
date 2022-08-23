import Image from 'next/image';
import manTestimonialImg from '../../imgs/man-testimonial.jpg';

import styles from './Intro.module.scss';
import typographyStyles from '../../styles/Typography.module.scss';

export default function Intro () {

    return (
        <>
            <Slogan/>
            <Testimony/>
        </>
    )
}


const Slogan = () => (
    <div className={styles.slogan}>
        <h1 className={typographyStyles.bold + ' ' + styles.firstLine}>Boost</h1>
        <h1 className={typographyStyles.bold + ' ' + styles.secondLine}>your profits</h1>
        <h4>from short-term and vacation rentals</h4>
    </div>
);

const Testimony = () => (
    <figure className={styles.testimony}>
        <div className={styles.Image}>
            <Image 
                src={manTestimonialImg}
                alt="A smiling man"
            />
        </div>
        <h5 className={typographyStyles.bold + ' ' + styles.text}>This inn is so much more comfortable and lovely</h5>
        <figcaption>
            <cite className={styles.cite}>
                <span className={styles.name}>James B</span>
                <span className={styles.company}>GM-Reddoorz</span>
            </cite>
        </figcaption>
    </figure>
);