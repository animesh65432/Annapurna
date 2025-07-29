export function getIngredientSearchLink(ingredient: string) {
    const encoded = encodeURIComponent(ingredient);
    return {
        amazon: `https://www.amazon.in/s?k=${encoded}`,
        flipkart: `https://www.flipkart.com/search?q=${encoded}`,
        blinkit: `https://www.blinkit.com/s/?q=${encoded}`,
    };
}