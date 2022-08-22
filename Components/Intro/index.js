import Image from 'next/image';
import manTestimonialImg from '../../imgs/man-testimonial.jpg';
export default function Intro () {

    return (
        <>
            <Slogan/>
            <Testimony/>
        </>
    )
}


const Slogan = () => (
    <div>
        <h1>Boost</h1>
        <h1>your profits</h1>
        <h4>from short-term and vacation rentals</h4>
    </div>
);

const Testimony = () => (
    <figure>
        <Image 
            src={manTestimonialImg}
            alt="A smiling man"
        />
        <h5>This inn is so much more comfortable and lovely</h5>
        <figcaption>
            <cite>
                <span>James B</span>
                <span>GM-Reddoorz</span>
            </cite>
        </figcaption>
    </figure>
);