import Image from 'next/image';
import galleryPic1Img from '../../imgs/gallery-pic-1.jpg';
import galleryPic2Img from '../../imgs/gallery-pic-2.jpg';
import galleryPic3Img from '../../imgs/gallery-pic-3.jpg';


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from './Gallery.module.scss';
import { useState } from 'react';



export default function Gallery () {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className={styles.Gallery}>
            <div className={styles.content_lg}>
                <div className={styles.Image + ' ' + styles.Image_1}
                    onClick={() => setCurrentImage(1)}
                    onMouseLeave={() => setCurrentImage(0)}
                    data-expanded={currentImage === 1}
                >
                    <Image 
                        src={galleryPic1Img}
                        alt="A room"
                    />
                </div>
                <div className={styles.Image + ' ' + styles.Image_2}
                    onClick={() => setCurrentImage(2)}
                    onMouseLeave={() => setCurrentImage(0)}
                    data-expanded={currentImage === 2}
                >
                    <Image 
                        src={galleryPic2Img}
                        alt="A room"
    
                    />
                </div>
                <div className={styles.Image + ' ' + styles.Image_3}
                    onClick={() => setCurrentImage(3)}
                    onMouseLeave={() => setCurrentImage(0)}
                    data-expanded={currentImage === 3}
                >
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