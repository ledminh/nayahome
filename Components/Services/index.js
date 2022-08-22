import Image from 'next/image';

import airbnbIcon from '../../imgs/airbnb-icon.png';
import framerIcon from '../../imgs/framer.png';

export default function Services () {

    return (
        <ul>
            <li>
                <a>
                    <Image 
                        src={airbnbIcon}
                        alt="Airbnb Icon"
                    />
                    <span>airbnb</span>
                </a>
            </li>
            <li>
                <a>
                    <Image 
                        src={framerIcon}
                        alt="Framer Icon"
                    />
                    <span>Framer</span>
                </a>
            </li>
            <li><a><span>Booking.com</span></a></li>
            <li>
                <a>
                    <span>afterpay</span>
                    <i className="fa fa-umbrella-beach"></i>
                </a>
            </li>
            <li>
                <a>
                    <i className="fa fa-solid fa-hand-spock"></i>
                    <span>treehouse</span>
                </a>
            </li>
        </ul>
    )
}