export type MenuCategory = 
  | 'All'
  | 'Cakes'
  | 'Bakery'
  | 'Pizza'
  | 'Burgers'
  | 'Sandwiches'
  | 'Pasta'
  | 'Chinese'
  | 'Beverages';

export type DietaryType = 'eggless' | 'contains-nuts' | 'nut-free' | 'dairy' | 'spicy' | 'pure-veg';

export interface DietaryTag {
  type: DietaryType;
  label: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  demoPrice: string;
  image: string;
  isVeg?: boolean;
  isPopular?: boolean;
  badge?: string;
  dietary?: DietaryTag[];
}

export interface CakeItem {
  id: string;
  name: string;
  flavorProfile: string;
  demoPriceHalfKg: string;
  demoPriceOneKg: string;
  image: string;
  isEggless: boolean;
  isBestseller?: boolean;
  description: string;
  tag: string;
  dietary?: DietaryTag[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Cakes' | 'Pastries' | 'Pizza' | 'Bakery' | 'Snacks' | 'Shop';
  image: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  occasion?: string;
}
