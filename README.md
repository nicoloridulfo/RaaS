# Recipes as a Service (RaaS)

The goal of this project is to create recipe recommendations that minimize the number of products needed to be bought. By finding recipes that have a high number of ingredients in common we as consumers are able to decrease our food expenses while utilizing our groceries more effectively. Furthermore, by using the store's promotions we are able to reduce expenses even further and help the stores sell the items they wish to get rid of.

## Background

I have always had a hard time at planning the week's meals. It is trivial to randomly pick 7 recipes from a list of recipes and creating a grocery list from the recipe's ingredients. Although this approach results in a varied week, such a grocery list is extremely expensive! A second problem that I have had is the ineffective usage of all food items in the fridge. Having to throw out vegetables because of spoilage is a problem that could easily be avoided if all food items have a purpose.

## Goals

- [ ] Create algorithm for generating groups of `n` recipes that have a high number of ingredients in common
- [ ] Calculate cost and create shopping list
- [ ] Create CLI
- [ ] Improve suggestions:
  - [ ] User should be able to browse the suggested groups
  - [ ] User should be able to filter based on type of recipes
- [ ] Create frontend

## Algorithms

1. All combinations
1. Pick random, then pick random among the best match 
1. Find groups and merge (USED IN PROJECT)

## Disclaimer

**This project is not in collaboration with Hemköp.**

### [Hemköp's Terms of service](https://www.hemkop.se/artikel/anvandarvillkor)

Original in Swedish:

> 15. Immateriella rättigheter<br>
>     Samtliga immateriella rättigheter, inkluderat men inte begränsat till varumärken och upphovsrätt, på hemkop.se tillhör Hemköp eller licensgivare. All användning av hemkop.se och dess innehåll är endast tillåtet för ditt personliga bruk. Annat användande, såväl för kommersiella som för privata syften, är inte tillåtet utan tillåtelse från Hemköp.

Translated using google translate:

> 15. Intellectual property rights<br>
>     All intellectual property rights, including but not limited to trademarks and copyrights, on hemkop.se belong to Hemköp or licensors. All use of hemkop.se and its contents is only permitted for your personal use. Other use, both for commercial and private purposes, is not permitted without permission from Hemköp.
