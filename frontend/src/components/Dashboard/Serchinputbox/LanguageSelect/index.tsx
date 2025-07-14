import { Controller } from "react-hook-form"
import Select from "../../../Select"
import { optionsforLanguages } from "../../../../utils"
import React from "react"

type Props = {
    setlanguage: React.Dispatch<string>,
    language: string
}

export default function LanguageSelect({ setlanguage, language }: Props) {
    return (
        <>
            <Select
                options={optionsforLanguages}
                name="Language"
                InitialValue={optionsforLanguages[optionsforLanguages.length - 1]}
                value={language}
                onChange={(val) => setlanguage(val)}
            />
        </>
    )
}
