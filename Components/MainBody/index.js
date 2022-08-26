import styles from './MainBody.module.scss';
import typographyStyles from '../../styles/Typography.module.scss';

import Image from 'next/image';

import Gallery from './Gallery';

import cupAwardImg from '../../imgs/cup-award.png';
import bestPartnerSymbolImg from '../../imgs/best-partner-icon.png';

export default function MainBody () {

    return (
        <>
            <BestPartner />
            <Gallery />
        </>
    )
}

const BestPartner = () => (
    <div className={styles.BestPartner}>
        <div className={styles.title}>
            <h4 className={typographyStyles.bold}>Best Partner</h4>
            <div className={styles.Symbol}>
                <Image 
                    src={bestPartnerSymbolImg}
                    alt="Rectangle symbol"
                />
            </div>
        </div>
        <div className={styles.Image}>
            <Image 
                src={cupAwardImg}
                alt="A cup award"
            />
        </div>
        <p>We earn you the most revenue of operating your rental property.</p>
    </div>
);



