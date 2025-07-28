import React, { SetStateAction, useRef } from "react"
import { useClickOutside } from "../../../hooks/useClickoutside"
type Props = {
    suggestions: string[];
    setsuggestions: React.Dispatch<SetStateAction<string[]>>,
    onselectfromsuggestions: (dish: string) => void
}
export default function Suggestions({ suggestions, setsuggestions, onselectfromsuggestions }: Props) {
    const moderef = useRef<HTMLDivElement>(null)

    useClickOutside(moderef, () => {
        setsuggestions([])
    })
    return (
        <div ref={moderef} className="absolute z-50 left-1 sm:left-1 md:left-7 lg:left-2 top-10 bg-white shadow-md rounded-md w-[100%] sm:w-[100%] md:w-[300px] lg:w-[341px]">
            {suggestions.map((suggestion, index) => (
                <div key={index} className="text-[#4A4A4A] px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => onselectfromsuggestions(suggestion)}>
                    {suggestion}
                </div>
            ))}
        </div>

    )
}
