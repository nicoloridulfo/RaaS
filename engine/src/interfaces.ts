export interface Image {
  urls: any[];
  cloudinaryUrl: string;
}

export interface Price {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  minQuantity?: any;
  maxQuantity?: any;
}

export interface Image2 {
  imageType: string;
  format: string;
  url: string;
  altText: string;
  galleryIndex?: any;
  width?: any;
}

export interface Thumbnail {
  imageType: string;
  format: string;
  url: string;
  altText: string;
  galleryIndex?: any;
  width?: any;
}

export interface ProductBasketType {
  code: string;
  type: string;
}

export interface Product {
  potentialPromotions: any[];
  averageWeight?: any;
  price: string;
  priceValue: number;
  priceNoUnit: string;
  comparePrice: string;
  comparePriceUnit: string;
  depositPrice: string;
  labels: any[];
  showGoodPriceIcon: boolean;
  image: Image2;
  savingsAmount?: any;
  priceUnit: string;
  energyDeclaration?: any;
  productLine2: string;
  pickupProductLine2: string;
  isDrugProduct: boolean;
  nicotineMedicalProduct: boolean;
  nonEkoProduct: boolean;
  googleAnalyticsCategory: string;
  ranking?: any;
  solrSearchScore?: any;
  newsSplashProduct: boolean;
  gdprTrackingIncompliant: boolean;
  notAllowedAnonymous: boolean;
  notAllowedB2b: boolean;
  code: string;
  name: string;
  displayVolume: string;
  thumbnail: Thumbnail;
  manufacturer: string;
  productBasketType: ProductBasketType;
  incrementValue: number;
  outOfStock: boolean;
  online: boolean;
  addToCartDisabled: boolean;
}

export interface ProductsAtHome {
  product: Product;
  checked: boolean;
  notAvailable: boolean;
  notAvailableReason: string;
}

export interface Price2 {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  minQuantity?: any;
  maxQuantity?: any;
}

export interface PromotionTheme {
  code: string;
  visible: boolean;
}

export interface PotentialPromotion {
  conditionLabelFormatted: string;
  cartLabelFormatted: string;
  conditionLabel: string;
  comparePrice: string;
  price: Price2;
  rewardLabel: string;
  textLabelManual?: any;
  textLabelGenerated: string;
  splashTitleText: string;
  campaignType: string;
  promotionRedeemLimit?: any;
  promotionPercentage?: any;
  promotionType: string;
  promotionTheme: PromotionTheme;
  priority: number;
  redeemLimitLabel: string;
  code: string;
  cartLabel: string;
  validUntil: number;
  timesUsed: number;
  qualifyingCount: number;
  threshold?: any;
  productCodes: string[];
  applied: boolean;
  realMixAndMatch: boolean;
  mainProductCode: string;
}

export interface Image3 {
  imageType: string;
  format: string;
  url: string;
  altText: string;
  galleryIndex?: any;
  width?: any;
}

export interface Thumbnail2 {
  imageType: string;
  format: string;
  url: string;
  altText: string;
  galleryIndex?: any;
  width?: any;
}

export interface ProductBasketType2 {
  code: string;
  type: string;
}

export interface Product2 {
  potentialPromotions: PotentialPromotion[];
  averageWeight?: any;
  price: string;
  priceValue: number;
  priceNoUnit: string;
  comparePrice: string;
  comparePriceUnit: string;
  depositPrice: string;
  labels: string[];
  showGoodPriceIcon: boolean;
  image: Image3;
  savingsAmount?: number;
  priceUnit: string;
  energyDeclaration?: any;
  productLine2: string;
  pickupProductLine2: string;
  isDrugProduct: boolean;
  nicotineMedicalProduct: boolean;
  nonEkoProduct: boolean;
  googleAnalyticsCategory: string;
  ranking?: any;
  solrSearchScore?: any;
  newsSplashProduct: boolean;
  gdprTrackingIncompliant: boolean;
  notAllowedAnonymous: boolean;
  notAllowedB2b: boolean;
  code: string;
  name: string;
  displayVolume: string;
  thumbnail: Thumbnail2;
  manufacturer: string;
  productBasketType: ProductBasketType2;
  incrementValue: number;
  outOfStock: boolean;
  online: boolean;
  addToCartDisabled: boolean;
}

export interface ProductsToBuy {
  product: Product2;
  checked: boolean;
  notAvailable: boolean;
  notAvailableReason: string;
  quantity?: number;
  quantityUnit: string;
}

export interface GenericProduct {
  id: string;
  singularName?: any;
  pluralName?: any;
  shortDescription?: any;
  description?: any;
  readMoreLink?: any;
  products: any[];
}

export interface Ingredient {
  name: string;
  ingredientAmount: number;
  ingredientUnit: string;
  isStandardIngredient: boolean;
  genericProduct: GenericProduct;
}

export interface Section {
  header: string;
  ingredients: Ingredient[];
}

export interface Products {
  price: Price;
  productsAtHome: ProductsAtHome[];
  productsToBuy: ProductsToBuy[];
  sections: Section[];
  maxPortions: number;
  minPortions: number;
  portionsInterval: number;
  disableBuyButton: boolean;
  customNumberOfPortions: number;
  recipeInCart: boolean;
}

export interface RecipeAPI {
  id: string;
  name: string;
  sortableRecipeGroups: string[];
  shortDescription: string;
  description: string;
  cookingTime: number;
  portions: number;
  numberOfIngredients: number;
  purchasable: boolean;
  containsAllergens: boolean;
  image: Image;
  sortableRecipeCategories: string[];
  recipeTypesString: string;
  keywords: string;
  products: Products;
}
