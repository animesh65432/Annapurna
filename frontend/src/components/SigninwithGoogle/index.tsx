import React, { useEffect, useRef, useState } from 'react'
import styles from "./SigninwithGoogle.module.scss"
import { GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';
import { createPortal } from "react-dom"
import { singinwithgoogle } from "../../api/user"
import { Loader } from "lucide-react"
import jscookie from "js-cookie"
import { toast } from "react-toastify"
import { useAuthstroe } from '../../store/useauth';

type Props = {
    setauth: React.Dispatch<React.SetStateAction<boolean>>
}

const SigninwithGoogle: React.FC<Props> = ({ setauth }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isSinginLoading, setisSinginLoading] = useState<boolean>(false)
    const { addtoken } = useAuthstroe()

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

    const onsinginwithgoogle = async (data: CredentialResponse) => {
        setisSinginLoading(true)
        try {
            const res = await singinwithgoogle(data.credential!, data.clientId!) as { message: string }

            const token = jscookie.get("token") as string
            if (token) {
                addtoken(token)
                setauth(false);
                toast.success(res.message)
            } else {
                toast.error("Something went wrong please try again later.");
                setauth(false);
            }
        } finally {
            setisSinginLoading(false)
        }
    }


    return createPortal(
        <div className={styles.Container}>
            <div className={styles.Card} ref={modalRef}>
                <h2 className={styles.Title}>Welcome to <span>Annapurna AI</span></h2>
                <p className={styles.Subtitle}>Sign in to get started</p>
                <div className={styles.ButtonWrapper}>
                    {isSinginLoading ? <Loader /> : <GoogleLogin
                        onSuccess={(data) => onsinginwithgoogle(data)}
                    />}
                </div>
            </div>
        </div>,
        document.getElementById("overlay")!
    );
};

export default SigninwithGoogle;
