import React from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <div className={styles.Container}></div>
        </Layout>
    )
}

export default Dashboard