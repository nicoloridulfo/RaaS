import { RecipeAPI } from "./interfaces";

export interface Recipe {
  id: string;
  ingredients: Ingredient[];
}

interface Ingredient {
  name: string;
  amount: number;
  price: number;
}

export interface Group {
  recipes: Recipe[];
  in_common: string[];
  score: number;
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
    recipes.push({ id: recipe.id, ingredients: ingredients });
  }

  return recipes;
};
