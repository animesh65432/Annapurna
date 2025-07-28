import db from "../db";

export async function updateimg(id: string, Img: string) {

    const data = await db.recipe.update({
        where: {
            id
        },
        data: {
            Img
        }
    })

    console.log(data)
}
