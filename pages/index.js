import Head from 'next/head'

import layoutStyles from '../styles/Layout.module.scss'
import homeStyles from '../styles/Home.module.scss'

import NavBar from '../Components/NavBar';
import Intro from '../Components/Intro';
import MainBody from '../Components/MainBody';
import Services from '../Components/Services';

export default function Home() {
  return (
      <div className={layoutStyles.app}>
        <Head>
          <title>NayaHome</title>
          <meta name="description" content="NayaHome" />
        </Head>
        <main className={layoutStyles.main}>
          <section 
              className={layoutStyles.row + ' ' + homeStyles.navBar}
              >
            <NavBar/>
          </section>

          <section
            className={layoutStyles.row + ' ' + homeStyles.intro}
            >
            <Intro />
          </section>

          <section
            className={layoutStyles.row + ' ' + homeStyles.MainBody}
            >
            <MainBody/>
          </section>

          <section 
            className={layoutStyles.row + ' ' + homeStyles.services}
            >
              <Services />
          </section>
        </main>
      </div>


  )
}
