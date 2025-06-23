import { ArrowDown, ArrowUp } from "lucide-react";
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
};

export default function Select({ options, name, value, onChange }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectedLabel = options.find((opt) => opt.value === value)?.label || name;
    return (
        <div className={styles.container} >
            <div className={styles.selected} onClick={() => setIsOpen((prev) => !prev)}>
                <span>{selectedLabel}</span>
                {isOpen ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
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
