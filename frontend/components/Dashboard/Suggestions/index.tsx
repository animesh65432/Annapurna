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
        <div ref={moderef} className="absolute z-50 left-[12%] sm:left-[17%] md:left-[1%]  sm:ml-6 md:ml-8 lg:ml-5  w-[80%] sm:w-[60%] md:w-[62%] lg:w-[70%]  top-10 bg-white shadow-md rounded-md ">
            {suggestions.map((suggestion, index) => (
                <div key={index} className="text-[#4A4A4A] px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => onselectfromsuggestions(suggestion)}>
                    {suggestion}
                </div>
            ))}
        </div>

    )
}
