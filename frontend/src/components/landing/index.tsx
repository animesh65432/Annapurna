import Header from "./Header"
import Herosection from "./Herosection"
import styles from "./Landing.module.scss"
import Hwt from "./Hwt"

export default function Landing() {
    return (
        <div className={styles.LandingContainer}>
            <Header />
            <Herosection />
            <Hwt />
        </div>
    )
}
