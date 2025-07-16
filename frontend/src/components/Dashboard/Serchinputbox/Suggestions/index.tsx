import React, { useRef } from 'react'
import styles from "./Suggestions.module.scss"
import { Salad } from "lucide-react"
import { useClickOutside } from "../../../../hooks/useClickOutside"

type Props = {
    suggestions: string[],
    selectfromsuggestions: (dish: string) => void,
    setsuggestions: React.Dispatch<string[]>
}

const Suggestions: React.FC<Props> = ({ suggestions, selectfromsuggestions, setsuggestions }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    if (suggestions.length === 0) return null;

    useClickOutside(modalRef, () => setsuggestions([]));

    return (
        <div className={styles.suggestionsContainer} ref={modalRef} >
            {suggestions.map((suggestion) => (
                <div key={suggestion}
                    className={styles.suggestion}
                    onMouseDown={() => selectfromsuggestions(suggestion)}  >
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
