import React, { useEffect, useRef } from 'react'
import styles from "./SigninwithGoogle.module.scss"
import { GoogleLogin } from '@react-oauth/google';
import { createPortal } from "react-dom"

type Props = {
    setauth: React.Dispatch<React.SetStateAction<boolean>>
}

const SigninwithGoogle: React.FC<Props> = ({ setauth }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setauth(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setauth])
    return createPortal(
        <div className={styles.Container}>
            <div className={styles.Card} ref={modalRef}>
                <h2 className={styles.Title}>Welcome to <span>Annapurna AI</span></h2>
                <p className={styles.Subtitle}>Sign in to get started</p>
                <div className={styles.ButtonWrapper}>
                    <GoogleLogin
                        onSuccess={(data) => {
                            console.log(data);
                            setauth(true);
                        }}
                        onError={() => {
                            console.log("Login Failed");
                            setauth(false);
                        }}
                    />
                </div>
            </div>
        </div>,
        document.getElementById("overlay")!
    );
};

export default SigninwithGoogle;
