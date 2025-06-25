import RecipeLayout from ".."
import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
export default function Recipe() {
    const { recipe } = useRecipeStore()
    const title = nutritionTranslations[recipe!.language]
    return (
        <RecipeLayout>
            <div>
                <div>
                    <div>
                        {title.ingredients}
                    </div>
                    <div>
                        {recipe?.healthierVersion.ingredients.map((ingredient) => <div>{ingredient}</div>)}
                    </div>
                </div>
                <div>
                    <div>{title.steps}</div>
                    <div>
                        {recipe?.healthierVersion.steps.map((step, index) =>
                            <div key={index}>
                                <div></div>
                                <div>{step}</div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </RecipeLayout>
    )
}
