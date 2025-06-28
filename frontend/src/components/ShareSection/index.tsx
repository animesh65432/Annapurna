import type React from "react"
import { FaWhatsapp, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
import styles from "./ShareSection.module.scss"
import { useEffect, useRef } from "react"

interface ShareOption {
    name: string
    icon: React.ReactNode
    url: string
    className: string
    mobileOnly?: boolean
}

type Props = {
    dishname: string,
    setisShareOPen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ShareSection({ dishname, setisShareOPen }: Props) {
    const modalRef = useRef<HTMLDivElement>(null);
    const shareUrl = window.location.href
    const shareMessage = `📢 Check out this recipe ${dishname} 🚀`
    const encodedMessage = encodeURIComponent(shareMessage)
    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedMessageWithUrl = encodeURIComponent(`${shareMessage} ${shareUrl}`)

    const shareOptions: ShareOption[] = [
        {
            name: "WhatsApp",
            icon: <FaWhatsapp className={styles.shareIcon} />,
            url: `https://wa.me/?text=${encodedMessageWithUrl}`,
            className: styles.whatsapp,
        },
        {
            name: "X (Twitter)",
            icon: <FaTwitter className={styles.shareIcon} />,
            url: `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`,
            className: styles.twitter,
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin className={styles.shareIcon} />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            className: styles.linkedin,
        },
        {
            name: "Email",
            icon: <FaEnvelope className={styles.shareIcon} />,
            url: `mailto:?subject=${encodeURIComponent("Check this out!")}&body=${encodedMessageWithUrl}`,
            className: styles.email,
        },
    ]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setisShareOPen(false)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    const handleShare = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <div className={styles.Container}>
            <div className={styles.shareSection} ref={modalRef}>
                <div className={styles.shareHeader}>
                    <h2 className={styles.shareTitle}>Share This Recipe</h2>
                    <p className={styles.shareSubtitle}>Help others discover this amazing recipes!</p>
                </div>

                <div className={styles.sharePreview}>
                    <p className={styles.shareMessage}>{shareMessage}</p>
                    <p className={styles.shareUrl}>{shareUrl}</p>
                </div>

                <div className={styles.shareGrid}>
                    {shareOptions.map((option) => (
                        <button
                            key={option.name}
                            onClick={() => handleShare(option.url)}
                            className={`${styles.shareButton} ${option.className} `}
                            aria-label={`Share on ${option.name}`}
                        >
                            <div className={styles.shareButtonIcon}>{option.icon}</div>
                            <span className={styles.shareButtonText}>{option.name}</span>
                        </button>
                    ))}
                </div>

                <div className={styles.shareFooter}>
                    <p className={styles.shareFooterText}>Click any option above to share with your network</p>
                </div>
            </div>
        </div>
    )
}
