import { useState } from "react";
import styles from "./Select.module.scss";

type Option = {
    label: string;
    value: string;
};

type Props = {
    options: Option[];
    name: string;
    value: string;
    onChange: (value: string) => void;
    InitialValue: Option
};

export default function Select({ options, value, onChange, InitialValue }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectedLabel = options.find((opt) => opt.value === value)?.label || InitialValue.label
    return (
        <div className={styles.container} >
            <div className={styles.selected} onClick={() => setIsOpen((prev) => !prev)}>
                <span>{selectedLabel}</span>
            </div>

            {isOpen && (
                <div className={styles.dropdown}>
                    {options.map((option) => (
                        <div
                            key={option.label}
                            className={styles.option}
                            onClick={(e) => {
                                e.stopPropagation();
                                onChange(option.value)
                                setIsOpen(false)
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}
