import Select from "../../../Select"
import { optionsforLanguages } from "../../../../utils"
import React from "react"

type Props = {
    setlanguage: React.Dispatch<{ label: string, value: string }>,
    language: { label: string, value: string }
}

export default function LanguageSelect({ setlanguage, language }: Props) {
    return (
        <>
            <Select
                options={optionsforLanguages}
                name="Language"
                InitialValue={optionsforLanguages[optionsforLanguages.length - 1]}
                value={language.value}
                onChange={(val) => setlanguage(val)}
            />
        </>
    )
}
