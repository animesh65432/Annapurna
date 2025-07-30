import Recipe from "@/components/Recipe"
import { useRouter } from "next/router"
export default function RecipeLayout() {
    const router = useRouter();
    const { id } = router.query as { id: string | null }

    if (!id) {
        return
    }

    return (
        <>
            <Recipe recipeId={id} />
        </>
    )
}
