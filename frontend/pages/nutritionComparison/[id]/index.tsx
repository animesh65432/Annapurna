import Recipe from "@/components/Recipe"
import { useRouter } from "next/router"
import NutritionComparison from "@/components/NutritionComparison";
export default function NutritionComparisonLayout() {
    const router = useRouter();
    const { id } = router.query as { id: string | null }

    if (!id) {
        return
    }

    return (
        <>
            <NutritionComparison recipeId={id} />
        </>
    )
}
