import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 1.4,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const hasAnimated = useRef(false);

    useEffect(() => {
        console.log("useEffect triggered, words:", words);

        if (!words || words.trim() === "") {

            return;
        }

        const runAnimation = async () => {
            console.log("Starting animation for:", words);

            try {
                // Reset all spans to opacity 0
                await animate("span", { opacity: 0 }, { duration: 0 });


                // Wait a bit
                await new Promise(resolve => setTimeout(resolve, 50));

                // Animate them in
                await animate(
                    "span",
                    {
                        opacity: 1,
                        filter: filter ? "blur(0px)" : "none",
                    },
                    {
                        duration: duration,
                        delay: stagger(0.2),
                    }
                );


            } catch (error) {

            }
        };

        runAnimation();
    }, [words, animate, duration, filter]);

    const wordsArray = words ? words.split(" ").filter(word => word.trim() !== "") : [];

    if (!words || wordsArray.length === 0) {
        return (
            <div className={className}>
                <span className="text-[#168B5D] text-[1.6rem] sm:text-2xl md:text-[1.8rem] lg:text-2xl">
                    [No words to animate]
                </span>
            </div>
        );
    }

    return (
        <div className={cn("font-bold", className)}>
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <span
                        key={`${word}-${idx}`}
                        className="text-[#168B5D] text-[1.6rem] sm:text-3xl md:text-[1.8rem] lg:text-3xl opacity-0"
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                        }}
                    >
                        {word}
                        {idx < wordsArray.length - 1 ? " " : ""}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};