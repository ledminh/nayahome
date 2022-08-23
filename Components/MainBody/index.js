import styles from './MainBody.module.scss';
import typographyStyles from '../../styles/Typography.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Image from 'next/image';

import galleryPic1Img from '../../imgs/gallery-pic-1.jpg';
import galleryPic2Img from '../../imgs/gallery-pic-2.jpg';
import galleryPic3Img from '../../imgs/gallery-pic-3.jpg';


import { Carousel } from 'react-responsive-carousel';

import cupAwardImg from '../../imgs/cup-award.png';

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
            <Symbol />
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

const Symbol = () => (
    <div className={styles.Symbol}>
        <div /> <div />
        <div /> <div />
    </div>
)

const Gallery = () => (
    <div className={styles.Gallery}>
        <Carousel 
            showArrows={true}
            showThumbs={false}
            >
            <Image 
                src={galleryPic1Img}
                alt="A room"
            />
            <Image 
                src={galleryPic2Img}
                alt="A room"
            />
            <Image 
                src={galleryPic3Img}
                alt="A room"
            />
        </Carousel>
    </div>
);