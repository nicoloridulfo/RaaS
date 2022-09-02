import { RecipeAPI } from "./interfaces";

export interface Recipe {
  id: string;
  ingredients: Set<string>;
}

export const parseRecipies = (rawRecipes: RecipeAPI[]) => {
  const recipes: Recipe[] = [];
  for (const recipe of rawRecipes) {
    if (recipe.products?.productsToBuy === undefined) continue;

    const ingredients: string[] = [];
    for (const product of recipe.products.productsToBuy) {
      ingredients.push(product.product.name);
    }
    if (ingredients.length === 0) continue;
    recipes.push({ id: recipe.id, ingredients: new Set(ingredients) });
  }

  return recipes;
};
