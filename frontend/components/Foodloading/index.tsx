import { useState, useEffect } from "react"
import { Soup, Check } from "lucide-react"
import { useTranslation } from "react-i18next"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

interface FoodLoadingProps {
    currentServerStep?: string;
    serverMessage?: string;
}

export default function FoodLoading({ currentServerStep, serverMessage }: FoodLoadingProps) {
    const { t } = useTranslation()
    const text = t("Fooodloading-title")
    const steps = t("Fooodloading", { returnObjects: true }) as { id: string, text: string, completed: boolean }[]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [completedSteps, setCompletedSteps] = useState(new Set<number>())
    const [showCursor, setShowCursor] = useState(true)
    const [localSteps, setLocalSteps] = useState(steps)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev >= text.length) return text.length
                return prev + 1
            })
        }, 80)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 500)

        return () => clearInterval(cursorInterval)
    }, [])


    useEffect(() => {
        if (currentServerStep) {
            const stepIndex = steps.findIndex(step => step.id === currentServerStep)
            if (stepIndex !== -1) {

                const newCompletedSteps = new Set<number>()
                for (let i = 0; i < stepIndex; i++) {
                    newCompletedSteps.add(i)
                }
                setCompletedSteps(newCompletedSteps)
                setCurrentStepIndex(stepIndex)
            }
        }
    }, [currentServerStep])


    useEffect(() => {
        if (!currentServerStep) {
            const stepInterval = setInterval(() => {
                setCurrentStepIndex(prev => {
                    if (prev >= steps.length - 1) return prev
                    const nextStep = prev + 1
                    setCompletedSteps(prevCompleted => new Set([...prevCompleted, prev]))
                    return nextStep
                })
            }, 2500)

            return () => clearInterval(stepInterval)
        }
    }, [currentServerStep])

    return (
        <div className="flex-1 flex justify-center items-center relative px-4 sm:px-6 lg:px-8">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}>
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Logo and title section */}
                <div className="text-center space-y-4 sm:space-y-6">
                    {/* Logo */}
                    <div className="relative mx-auto">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#168B5D] to-[#29d691] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl relative overflow-hidden">
                            {/* Subtle shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                            <Soup className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white relative z-10" />
                        </div>
                    </div>

                    {/* Main title with typewriter */}
                    <div className="mr-auto ml-0">
                        <TextGenerateEffect words={text} />
                    </div>
                </div>

                {/* Status steps section */}
                <div className="w-full space-y-4 sm:space-y-6">
                    <div className="space-y-2 sm:space-y-3">
                        {localSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex items-center gap-2 sm:gap-3 transition-all duration-500 ${completedSteps.has(index)
                                    ? 'text-gray-600'
                                    : index === currentStepIndex
                                        ? 'text-gray-900 scale-105'
                                        : 'text-gray-400'
                                    }`}
                            >
                                {/* Step indicator */}
                                <div className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-all duration-500 ${completedSteps.has(index)
                                    ? 'bg-gradient-to-br from-[#168B5D] to-[#29d691] scale-110'
                                    : index === currentStepIndex
                                        ? 'border-2 border-[#168B5D] bg-white shadow-md'
                                        : 'border-2 border-gray-200 bg-white'
                                    }`}>
                                    {completedSteps.has(index) ? (
                                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                                    ) : index === currentStepIndex ? (
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#168B5D] rounded-full animate-pulse"></div>
                                    ) : null}
                                </div>

                                {/* Step text */}
                                <span className={`text-xs sm:text-sm md:text-base text-[#434343] font-medium transition-all duration-500 flex-1 ${index === currentStepIndex ? 'font-semibold' : ''
                                    }`}>
                                    {step.text}
                                </span>

                                {/* Loading dots for current step */}
                                {index === currentStepIndex && (
                                    <div className="flex gap-0.5 sm:gap-1">
                                        <div className="w-1 h-1 sm:w-1 sm:h-1 bg-[#168B5D] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-1 h-1 sm:w-1 sm:h-1 bg-[#168B5D] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-1 h-1 sm:w-1 sm:h-1 bg-[#168B5D] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-[#168B5D] to-[#29d691] h-full transition-all duration-1000 ease-out"
                            style={{
                                width: `${((completedSteps.size + (currentStepIndex >= 0 ? 0.5 : 0)) / localSteps.length) * 100}%`
                            }}
                        ></div>
                    </div>
                </div>

                {/* Footer note */}
                <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        {t("Fooodloading-description")}
                    </p>
                </div>
            </div>
        </div>
    )
}