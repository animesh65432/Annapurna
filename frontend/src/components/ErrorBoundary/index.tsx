import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'
import styles from './ErrorBoundary.module.scss'

interface RouteError {
    statusText?: string
    message?: string
    status?: number
}

const ErrorBoundary: React.FC = () => {
    const navigate = useNavigate()
    const error = useRouteError() as RouteError

    return (
        <div className={styles.Container}>
            <h1>Oops! Something went wrong</h1>
            <div className={styles.subtitle}>Sorry, an unexpected error has occurred.</div>
            <div className={styles.subtitle}>{error?.statusText || error?.message || 'Unknown error'}</div>
            <button className={styles.Goback} onClick={() => navigate(-1)}>
                Go back to Home
            </button>
        </div>
    )
}

export default ErrorBoundary
