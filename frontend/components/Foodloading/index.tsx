import { useState, useEffect } from "react"
import { Soup, Check } from "lucide-react"

const text = "Sourcing best produce"
const steps = [
    { text: "Validating your inputs", duration: 1000 },
    { text: "Analyzing dish type", duration: 1500 },
    { text: "Crafting recipe with AI", duration: 2500 },
    { text: "Saving recipe to kitchen database", duration: 1800 },
]


export default function FoodLoading() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)
    const [completedSteps, setCompletedSteps] = useState(new Set())
    const [showCursor, setShowCursor] = useState(true)
    const [progress, setProgress] = useState(0)

    // Typewriter effect
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

    // Step progression
    useEffect(() => {
        const stepInterval = setInterval(() => {
            setCurrentStep(prev => {
                const nextStep = (prev + 1) % steps.length
                setCompletedSteps(prevCompleted => new Set([...prevCompleted, prev]))
                return nextStep
            })
        }, 2500)

        return () => clearInterval(stepInterval)
    }, [])

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 100
                return prev + 0.8
            })
        }, 50)

        return () => clearInterval(progressInterval)
    }, [])

    return (
        <div className="flex-1   flex justify-center items-center relative px-4 sm:px-6 lg:px-8">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}>
            </div>

            <div className="flex flex-col sitems-center  gap-6 sm:gap-8 lg:gap-10 z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
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
                    <div className="space-y-2 mr-[35%] sm:mr-[40%] ">
                        <div className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight min-h-[24px] sm:min-h-[28px] md:min-h-[32px] lg:min-h-[36px] flex items-center justify-center px-2">
                            {text.split("").map((char, idx) => (
                                <span
                                    key={idx}
                                    className={`inline-block transition-all duration-200 ${idx < currentIndex
                                        ? 'opacity-100 transform translate-y-0'
                                        : 'opacity-0 transform translate-y-1'
                                        }`}
                                    style={{
                                        transitionDelay: `${idx * 40}ms`
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                            {currentIndex < text.length && (
                                <span
                                    className={`inline-block w-0.5 h-5 sm:h-6 md:h-7 lg:h-8 bg-gray-400 ml-0.5 transition-opacity duration-150 ${showCursor ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Status steps section */}
                <div className="w-full space-y-4 sm:space-y-6">
                    <div className="space-y-2 sm:space-y-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 sm:gap-3 transition-all duration-300 ${completedSteps.has(index)
                                        ? 'text-gray-600'
                                        : index === currentStep
                                            ? 'text-gray-900'
                                            : 'text-gray-400'
                                    }`}
                            >
                                {/* Step indicator */}
                                <div className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-all duration-300 ${completedSteps.has(index)
                                        ? 'bg-gradient-to-br from-[#168B5D] to-[#29d691]'
                                        : index === currentStep
                                            ? 'border-2 border-gray-400 bg-white'
                                            : 'border-2 border-gray-200 bg-white'
                                    }`}>
                                    {completedSteps.has(index) ? (
                                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                                    ) : index === currentStep ? (
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                    ) : null}
                                </div>

                                {/* Step text */}
                                <span className={`text-xs sm:text-sm md:text-base text-[#434343] font-medium transition-all duration-300 flex-1 ${index === currentStep ? 'font-semibold' : ''
                                    }`}>
                                    {step.text}
                                </span>

                                {/* Loading dots for current step */}
                                {index === currentStep && (
                                    <div className="flex gap-0.5 sm:gap-1">
                                        <div className="w-1 h-1 sm:w-1 sm:h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-1 h-1 sm:w-1 sm:h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-1 h-1 sm:w-1 sm:h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer note */}
                <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        This may take a few moments
                    </p>
                </div>
            </div>
        </div>
    )
}