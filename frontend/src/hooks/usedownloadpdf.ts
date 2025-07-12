import { useState } from "react";
import { downloadRecipePDF } from "../api/recipe"
import type { RecipeTypes } from "../types"
import { toast } from "react-toastify"

export function usedownloadpdf() {
    const [ispdfdownloading, setpdfdownloading] = useState<boolean>(false)
    const dowloadpdf = async (recipe: RecipeTypes) => {
        setpdfdownloading(true)
        try {
            const blob = await downloadRecipePDF(recipe) as Blob
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${recipe.dish || "Recipe"}.pdf`;
            document.body.appendChild(a)
            a.click();
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
            toast.success("sucessfully download pdf")

        } catch (error) {
            console.log(error)
        }
        finally {
            setpdfdownloading(false)
        }

    }

    return { dowloadpdf, ispdfdownloading }

}
