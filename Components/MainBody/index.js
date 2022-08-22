import Image from 'next/image';

import galleryPic1Img from '../../imgs/gallery-pic-1.jpg';
import galleryPic2Img from '../../imgs/gallery-pic-2.jpg';
import galleryPic3Img from '../../imgs/gallery-pic-3.jpg';

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
    <div>
        <div>
            <h3>Best Partner</h3>
            <Symbol />
        </div>
        <Image 
            src={cupAwardImg}
            alt="A cup award"
        />
        <p>We earn you the most revenue of operating your rental property.</p>
    </div>
);

const Symbol = () => (
    <div></div>
)

const Gallery = () => (
    <div>
        <div>
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
        </div>
        <div>Pagination</div>
    </div>
);