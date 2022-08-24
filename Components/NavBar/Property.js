import styles from './Property.module.scss';

export default function Property () {

    return (
        <div className={styles.Property}>
            <div className={styles.category}>
                <div className={styles.title}><h5>Category 1</h5></div>
                <ul className={styles.ul}>
                    <li className={styles.li}><a>Link 1</a></li>
                    <li className={styles.li}><a>Link 2</a></li>
                    <li className={styles.li}><a>Link 3</a></li>
                    <li className={styles.li}><a>Link 4</a></li>
                    <li className={styles.li}><a>Link 5</a></li>
                </ul>
            </div>

            <div className={styles.category}>
                <div className={styles.title}><h5>Category 2</h5></div>
                <ul className={styles.ul}>
                    <li className={styles.li}><a>Link 1</a></li>
                    <li className={styles.li}><a>Link 2</a></li>
                    <li className={styles.li}><a>Link 3</a></li>
                    <li className={styles.li}><a>Link 4</a></li>
                    <li className={styles.li}><a>Link 5</a></li>
                </ul>
            </div>

            <div className={styles.category}>
                <div className={styles.title}><h5>Category 3</h5></div>
                <ul className={styles.ul}>
                    <li className={styles.li}><a>Link 1</a></li>
                    <li className={styles.li}><a>Link 2</a></li>
                    <li className={styles.li}><a>Link 3</a></li>
                    <li className={styles.li}><a>Link 4</a></li>
                    <li className={styles.li}><a>Link 5</a></li>
                </ul>
            </div>

            <div className={styles.category}>
                <div className={styles.title}><h5>Category 4</h5></div>
                <ul className={styles.ul}>
                    <li className={styles.li}><a>Link 1</a></li>
                    <li className={styles.li}><a>Link 2</a></li>
                    <li className={styles.li}><a>Link 3</a></li>
                    <li className={styles.li}><a>Link 4</a></li>
                    <li className={styles.li}><a>Link 5</a></li>
                </ul>
            </div>

            <div className={styles.category}>
                <div className={styles.title}><h5>Category 5</h5></div>

                <ul className={styles.ul}>
                    <li className={styles.li}><a>Link 1</a></li>
                    <li className={styles.li}><a>Link 2</a></li>
                    <li className={styles.li}><a>Link 3</a></li>
                    <li className={styles.li}><a>Link 4</a></li>
                    <li className={styles.li}><a>Link 5</a></li>
                </ul>
            </div>

        </div>
    ); 

} 