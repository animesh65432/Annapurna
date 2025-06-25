import RecipeLayout from ".."
import { useRecipeStore } from "../../../store/Recipe"
export default function Recipe() {
    const { recipe } = useRecipeStore()

    console.log(recipe)
    return (
        <RecipeLayout>
            <div>
            </div>
        </RecipeLayout>
    )
}
