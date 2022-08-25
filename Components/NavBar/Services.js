import styles from './Services.module.scss';
import Image from 'next/image';

import service1Img from '../../imgs/service-1.jpg'
import service2Img from '../../imgs/service-2.jpg'
import service3Img from '../../imgs/service-3.jpg'
import service4Img from '../../imgs/service-4.jpg'

export default function Services() {

    return (
        <div className={styles.Services}>
            <div className={styles.intro}>
                <h5>TOP-NOTCH SERVICES</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti similique ea obcaecati eveniet sapiente, aspernatur quisquam veniam distinctio ad saepe, ab ex fugit possimus laboriosam mollitia corporis eos excepturi vero?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab, quis quo atque corrupti minima est in, odio, repellat minus quam inventore maiores voluptatem odit? In molestias rerum quis similique.</p>
            </div>
            <div className={styles.ServiceItem + ' ' + styles.Service1}>
                <h6>SERVICE 1</h6>
                <Image 
                    src={service1Img}
                    alt="Service 1"
                />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, illum laboriosam deleniti asperiores.</p>
            </div>
            <div className={styles.ServiceItem + ' ' + styles.Service2}>
                <h6>SERVICE 2</h6>
                <Image 
                    src={service2Img}
                    alt="Service 2"
                />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, illum laboriosam.</p>
            </div>
            <div className={styles.ServiceItem + ' ' + styles.Service3}>
                <h6>SERVICE 3</h6>
                <Image 
                    src={service3Img}
                    alt="Service 3"
                />
                <p>Earum ratione, veritatis distinctio possimus assumenda consequatur facilis id esse perferendis?</p>
            </div>
            <div className={styles.ServiceItem + ' ' + styles.Service4}>
                <h6>SERVICE 4</h6>
                <Image 
                    src={service4Img}
                    alt="Service 4"
                />
                <p>Lorem ipsum adipisicing elit. Fuga, illum laboriosam deleniti asperiores totam veniam.</p>
            </div>
        </div>
    )
}