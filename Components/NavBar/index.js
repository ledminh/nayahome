import Link from 'next/link';

export default function NavBar () {

    return (
        <nav>
            <h3>NayaHome</h3>
            <ul>
                <li><Link href="/property">PROPERTY</Link></li>
                <li><Link href="/services">SERVICES</Link></li>
                <li><Link href="/testimonial">TESTIMONIAL</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
            </ul>
            <button>LET{"'S"} TALK</button>
        </nav>
    )
}