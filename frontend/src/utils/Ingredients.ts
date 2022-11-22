import { RecipeAPI } from "../interfaces";

export const uniqueIngredients = (recipes: RecipeAPI[]): string[] => {
  const ingredients = recipes.flatMap((recipe) =>
    recipe.products?.productsToBuy?.map((product) => product.product.name)
  );
  return [...new Set(ingredients)];
};

export const inCommon = (
  recipe: RecipeAPI,
  ingredients: string[]
): string[] => {
  return ingredients.filter((ingredient) =>
    recipe?.products?.productsToBuy
      ?.map((product) => product.product.name)
      .includes(ingredient)
  );
};
