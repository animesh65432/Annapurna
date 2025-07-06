import { Controller } from "react-hook-form"
import Select from "../../../Select"
import { optionsforLanguages } from "../../../../utils"

type Props = {
    control: any
}

export default function LanguageSelect({ control }: Props) {
    return (
        <Controller
            name="language"
            control={control}
            render={({ field }) => (
                <Select
                    options={optionsforLanguages}
                    name="Language"
                    InitialValue={optionsforLanguages[optionsforLanguages.length - 1]}
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                />
            )}
        />
    )
}
