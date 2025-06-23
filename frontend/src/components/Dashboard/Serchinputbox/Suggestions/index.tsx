import React from 'react'
import styles from "./Suggestions.module.scss"
import { Salad } from "lucide-react"

type Props = {
    suggestions: string[],
    OnChangesuggestion: (suggestion: string) => void
}

const Suggestions: React.FC<Props> = ({ suggestions, OnChangesuggestion }) => {
    if (suggestions.length === 0) return null;
    return (
        <div className={styles.suggestionsContainer}>
            {suggestions.map((suggestion) => (
                <div key={suggestion} className={styles.suggestion} onClick={() => OnChangesuggestion(suggestion)}>
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
