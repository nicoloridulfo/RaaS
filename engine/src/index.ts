import { readFileSync } from "fs";
import { RecipeAPI } from "./interfaces";
import { parseRecipies } from "./parser";
import { find_groups } from "./random";
import { toBuy } from "./utils";

const file = readFileSync("../recipedb.json", "utf-8");
const recipesJSON = JSON.parse(file) as RecipeAPI[];

const recipe = recipesJSON.find((r) => r.id === "smashed_cheeseburger")!;
console.log(recipe.name);
console.log(recipe.id);
for (let i = 0; i < recipe.products?.productsToBuy?.length; i++) {
  const product = recipe.products?.productsToBuy[i].product;
  const amount = recipe.products.sections[0].ingredients[i].ingredientAmount;
  console.log(recipe.products?.productsToBuy[i].product.name);
  console.log(
    Math.round(
      (1000 * product.priceValue) /
        parseFloat(product.comparePrice.split(" ")[0])
    ),
    "Grams"
  );
  console.log(amount);
  
}

// const recipes = parseRecipies(recipesJSON);

// const start = new Date();
// const groups = find_groups(recipes, 7, 3000);
// const end = new Date();
// console.log(end.getTime() - start.getTime());

// groups.sort((a, b) => b.score - a.score);
// for (const group of groups.slice(0, 3)) {
//   console.log(group);
//   console.log(toBuy(group));
//   console.log();
// }
