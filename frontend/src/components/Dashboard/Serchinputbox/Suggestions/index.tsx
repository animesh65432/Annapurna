import React, { useEffect, useRef } from 'react'
import styles from "./Suggestions.module.scss"
import { Salad } from "lucide-react"

type Props = {
    suggestions: string[],
    selectfromsuggestions: (dish: string) => void,
    setsuggestions: React.Dispatch<string[]>
}

const Suggestions: React.FC<Props> = ({ suggestions, selectfromsuggestions, setsuggestions }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    if (suggestions.length === 0) return null;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setsuggestions([])
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])
    return (
        <div className={styles.suggestionsContainer} ref={modalRef}>
            {suggestions.map((suggestion) => (
                <div key={suggestion} className={styles.suggestion} onClick={() => selectfromsuggestions(suggestion)} >
                    <Salad size={20} />
                    <span>
                        {suggestion}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Suggestions
