#!env/bin/python
import requests
import json
from tqdm import tqdm


def main():
    print("Fetching recipe names...")
    recipes = {}
    for i in tqdm(range(120)):
        try:
            results = requests.get(
                f"https://www.hemkop.se/search/recipe?page={i}&q=*").json()["results"]
            for result in results:
                recipes[result["id"]] = result
        except Exception as e:
            print(e)
            break

    print(f"Found {len(list(recipes.keys()))} recipes.")
    print("Fetching more details about every recipe...")

    for recipe_id in tqdm(list(recipes.keys())):
        try:
            recipe = requests.get(
                f"https://www.hemkop.se/axfood/rest/recipe/{recipe_id}").json()
            recipes[recipe_id]["products"] = recipe
        except Exception as e:
            print(f"Failed to fetch recipe {recipe_id}")
            print(e)

    print(f"Found {len(recipes)} recipes.")
    print("Saving to file...")

    with open("../recipedb.json", "w") as f:
        recipe_list = [recipe for recipe in recipes.values() if "products" in recipe]
        f.write(json.dumps(recipe_list))


if __name__ == "__main__":
    main()
