import styles from './Services.module.scss';

import Image from 'next/image';

import airbnbIcon from '../../imgs/airbnb-icon.png';
import framerIcon from '../../imgs/framer.png';

export default function Services () {

    return (
        <ul className={styles.Services}>
            <li className={styles.li}>
                <a>
                    <div className={styles.Image}>
                        <Image 
                            src={airbnbIcon}
                            alt="Airbnb Icon"
                        />
                    </div>
                    <span>airbnb</span>
                </a>
            </li>
            <li className={styles.li}>
                <a>
                    <div className={styles.Image}>
                        <Image 
                            src={framerIcon}
                            alt="Framer Icon"
                        />
                    </div>
                    <span>Framer</span>
                </a>
            </li>
            <li className={styles.li}><a><span className={styles.Booking}>Booking.com</span></a></li>
            <li className={styles.li}>
                <a>
                    <span>afterpay</span>
                    <i className="fa fa-umbrella-beach"></i>
                </a>
            </li>
            <li className={styles.li}>
                <a>
                    <i className="fa fa-solid fa-hand-spock"></i>
                    <span>treehouse</span>
                </a>
            </li>
        </ul>
    )
}