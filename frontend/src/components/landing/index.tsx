import Header from "./Header"
import Herosection from "./Herosection"
import styles from "./Landing.module.scss"
import Hwt from "./Hwt"
import Faq from "./Faq"
import Footer from "./Footer"

export default function Landing() {
    return (
        <div className={styles.LandingContainer}>
            <Header />
            <Herosection />
            <Hwt />
            <Faq />
            <Footer />
        </div>
    )
}
