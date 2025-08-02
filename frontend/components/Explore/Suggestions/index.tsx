import React, { useRef } from 'react'
import { useClickOutside } from "@/hooks/useClickoutside"

type Props = {
    suggestions: { name: string }[],
    setSuggestions: React.Dispatch<React.SetStateAction<{ name: string }[]>>,
    selectfromSuggestion: (suggestion: string) => void
}
export default function Suggestions({ suggestions, setSuggestions, selectfromSuggestion }: Props) {
    const moderef = useRef<HTMLDivElement>(null)

    useClickOutside(moderef, () => {
        setSuggestions([]);
    });

    return (
        <div className="absolute z-50  sm:top-15 bg-slate-10 md:bg-white shadow-md rounded-md w-[100%] " ref={moderef}>
            {suggestions.map((suggestion, index) => (
                <div key={index} className="text-[#4A4A4A] px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => selectfromSuggestion(suggestion.name)}>
                    {suggestion.name}
                </div>
            ))}
        </div>
    )
}
