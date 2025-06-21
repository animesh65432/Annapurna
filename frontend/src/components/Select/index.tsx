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
};

export default function Select({ options, name }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOptionClick = (index: number) => {
        console.log(index)
        setSelectedIndex(index);
        setIsOpen(false);
    };


    return (
        <div className={styles.container} >
            <div className={styles.selected} onClick={() => setIsOpen((prev) => !prev)}>
                <span>{selectedIndex !== null ? options[selectedIndex].label : name}</span>
                {isOpen ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            </div>

            {isOpen && (
                <div className={styles.dropdown}>
                    {options.map((option, index) => (
                        <div
                            key={option.label}
                            className={styles.option}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleOptionClick(index);
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
