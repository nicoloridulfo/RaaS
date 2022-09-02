import { readFileSync } from "fs";
import { RecipeAPI } from "./interfaces";
import { parseRecipies } from "./parser";
import { find_groups } from "./random";

const file = readFileSync("./recipedb.json", "utf-8");
const json = JSON.parse(file) as RecipeAPI[];

const recipes = parseRecipies(json);

const start = new Date();
find_groups(recipes, 5, 10000);
const end = new Date();
console.log(end.getTime() - start.getTime());
