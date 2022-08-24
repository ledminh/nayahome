import Image from 'next/image';
import galleryPic1Img from '../../imgs/gallery-pic-1.jpg';
import galleryPic2Img from '../../imgs/gallery-pic-2.jpg';
import galleryPic3Img from '../../imgs/gallery-pic-3.jpg';


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from './Gallery.module.scss';

export default function Gallery () {


    return (
        <div className={styles.Gallery}>
            <div className={styles.content_lg}>
                <div className={styles.Image + ' ' + styles.Image_1}
                    
                >
                    <Image 
                        src={galleryPic1Img}
                        alt="A room"
                    />
                </div>
                <div className={styles.Image + ' ' + styles.Image_2}>
                    <Image 
                        src={galleryPic2Img}
                        alt="A room"
    
                    />
                </div>
                <div className={styles.Image + ' ' + styles.Image_3}>
                    <Image 
                        src={galleryPic3Img}
                        alt="A room"
                    />
                </div>
            </div>
            <div className={styles.content_sm}>
                <Carousel 
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
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
        </div>
    );
} 