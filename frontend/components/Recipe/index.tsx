import { useRecipeStore } from "@/store/recipe"
import { useEffect, useState } from "react"
import Pageloading from "../Pageloading"
import { useFecthrecipe } from "@/hooks/useFecthrecipe"
import Ingredients from "./Ingredients"
import Steps from "./Steps"
import WhyTheseChanges from "./WhyTheseChanges"
import History from "./History"
import FuncFat from "./FunFact"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { config } from "@/config"
import NutritionComparison from "./NutritionComparison"
import { Volume2, AudioLines, Pause, Play, Square } from "lucide-react"
import { usetexttospech } from "@/hooks/usetexttospech"

type Props = {
    recipeId: string
}

export default function Recipe({ recipeId }: Props) {
    const { recipe, setRecipe } = useRecipeStore()
    const { fetchrecipe } = useFecthrecipe()
    const { call, pause, resume, stop, togglePlayPause, IsLoading, isPlaying, isPaused } = usetexttospech()
    const [selectedSection, setSelectedSection] = useState<'steps' | 'ingredients'>('steps')

    const loadRecipe = async (id: string) => {
        console.log("Fetching recipe:", id)
        const data = await fetchrecipe(id)
        if (data) {
            setRecipe(data)
            console.log("Recipe set")
        }
    }

    useEffect(() => {
        if (!recipe || recipe.id !== recipeId) {
            setRecipe(null)
            loadRecipe(recipeId)
        }
    }, [recipeId, recipe])

    const handleAudioAction = async () => {
        if (IsLoading) return


        if (isPlaying || isPaused) {
            togglePlayPause()
            return
        }


        if (recipe) {
            let textToSpeak = ""

            if (selectedSection === 'steps') {
                textToSpeak = recipe.healthierVersion.steps.join(". ")
            } else {
                textToSpeak = recipe.healthierVersion.ingredients.join(", ")
            }

            await call(textToSpeak)
        }
    }

    const handleStopAudio = () => {
        stop()
    }

    const getAudioIcon = () => {
        if (IsLoading) {
            return <AudioLines className="animate-spin text-[#757575] w-5 h-5" />
        }

        if (isPlaying) {
            return <Pause className="text-[#757575] w-5 h-5" />
        }

        if (isPaused) {
            return <Play className="text-[#757575] w-5 h-5" />
        }

        return <Volume2 className="text-[#757575] w-5 h-5" />
    }

    if (!recipe) {
        return <Pageloading />
    }

    return (
        <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
            <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh flex flex-col gap-6 lg:gap-8 pb-5">
                <NutritionComparison />


                <div className="flex flex-col items-end gap-2 w-[95%] mx-auto fixed mt-[80vh] md:mt-[65%] lg:mt-[35%] z-40">

                    {(isPlaying || isPaused || IsLoading) && (
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                            <div className="flex gap-2 text-xs">
                                <button
                                    onClick={() => setSelectedSection('steps')}
                                    className={`px-2 py-1 rounded-full transition-colors ${selectedSection === 'steps'
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Steps
                                </button>
                                <button
                                    onClick={() => setSelectedSection('ingredients')}
                                    className={`px-2 py-1 rounded-full transition-colors ${selectedSection === 'ingredients'
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Ingredients
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Audio Controls */}
                    <div className="flex gap-2">
                        {/* Stop button - only show when audio is active */}
                        {(isPlaying || isPaused) && (
                            <div
                                className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                                onClick={handleStopAudio}
                            >
                                <Square className="text-red-500 w-4 h-4" />
                            </div>
                        )}

                        {/* Main play/pause button */}
                        <div
                            className={`bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${IsLoading ? 'cursor-not-allowed opacity-70' : ''
                                }`}
                            onClick={handleAudioAction}
                        >
                            {getAudioIcon()}
                        </div>
                    </div>

                    {/* Status indicator */}
                    {isPlaying && (
                        <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs animate-pulse">
                            Playing {selectedSection}
                        </div>
                    )}

                    {isPaused && (
                        <div className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs">
                            Paused
                        </div>
                    )}
                </div>

                <Ingredients />
                <Steps />
                <WhyTheseChanges />
                <History />
                <FuncFat />
            </div>
        </GoogleOAuthProvider>
    )
}