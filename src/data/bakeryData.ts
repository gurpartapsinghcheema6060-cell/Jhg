import { CakeItem, GalleryItem, MenuCategory, ProductItem, ReviewItem } from '../types';

export const BUSINESS_INFO = {
  name: 'New Vijay Bakery',
  tagline: 'Freshly Baked. Made With Love.',
  subtitle: 'Welcome to New Vijay Bakery — delicious cakes, bakery treats, snacks and fast food in Batala.',
  address: 'R6F4+M64, Gurdaspur Road, Near Salwan Dairy, Simbel, Batala, Punjab 143505, India',
  shortAddress: 'Near Salwan Dairy, Gurdaspur Road, Simbel, Batala',
  city: 'Batala, Punjab',
  phone: '+91 90564 75754',
  phoneClean: '+919056475754',
  whatsappNumber: '919056475754',
  hours: 'Every Day — 7:00 AM to 10:00 PM',
  businessType: 'Bakery & Fast Food Restaurant',
  ratingScore: '4.6',
  ratingMax: '5.0',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=New+Vijay+Bakery+Gurdaspur+Road+Near+Salwan+Dairy+Simbel+Batala+Punjab+143505',
};

export const POPULAR_CAKES: CakeItem[] = [
  {
    id: 'cake-vanilla',
    name: 'Vanilla Cake',
    flavorProfile: 'Classic Madagascar Vanilla Bean with Silky Whipped Cream',
    demoPriceHalfKg: '₹350 (Demo)',
    demoPriceOneKg: '₹650 (Demo)',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: false,
    description: 'Timeless light vanilla sponge layered with fluffy fresh cream and delicate white chocolate shavings.',
    tag: 'Classic',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-milk-badam',
    name: 'Milk Badam Cake',
    flavorProfile: 'Rich Saffron-Cardamom Milk Sponge loaded with Roasted Almonds',
    demoPriceHalfKg: '₹480 (Demo)',
    demoPriceOneKg: '₹880 (Demo)',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: true,
    description: 'A royal Punjabi bakery specialty infused with sweetened badam milk, pistachio slivers, and fragrant spices.',
    tag: 'Punjab Special',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'contains-nuts', label: 'Contains Almonds & Pistachios' }
    ]
  },
  {
    id: 'cake-butterscotch',
    name: 'Butterscotch Cake',
    flavorProfile: 'Caramel Butterscotch Glaze with Crunchy Praline Crunch',
    demoPriceHalfKg: '₹380 (Demo)',
    demoPriceOneKg: '₹700 (Demo)',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: true,
    description: 'Layers of golden moist sponge topped with house-made butterscotch crunch and silky caramel drizzle.',
    tag: 'Favorite',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'contains-nuts', label: 'Contains Cashew Praline' }
    ]
  },
  {
    id: 'cake-strawberry',
    name: 'Strawberry Cake',
    flavorProfile: 'Fresh Strawberry Compote & Natural Berry Cream',
    demoPriceHalfKg: '₹380 (Demo)',
    demoPriceOneKg: '₹720 (Demo)',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: false,
    description: 'Luscious summer strawberry reduction swirled with light vanilla sponge and fresh berry garnish.',
    tag: 'Fruity',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-blueberry',
    name: 'Blueberry Cake',
    flavorProfile: 'Wild Blueberry Glaze & Velvet Cream Cheese Swirl',
    demoPriceHalfKg: '₹440 (Demo)',
    demoPriceOneKg: '₹820 (Demo)',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: true,
    description: 'Bursting with tangy-sweet blueberries, tender crumb, and glossy mirror blueberry glaze.',
    tag: 'Premium',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-pineapple',
    name: 'Pineapple Cake',
    flavorProfile: 'Juicy Tropical Pineapple Chunks with Whipped Cream',
    demoPriceHalfKg: '₹340 (Demo)',
    demoPriceOneKg: '₹620 (Demo)',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: true,
    description: 'The all-time Batala family favorite! Loaded with caramelized pineapple chunks and cherries.',
    tag: 'All-Time Classic',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-oreo',
    name: 'Oreo Cake',
    flavorProfile: 'Cookies & Cream Frosting with Crushed Oreo Truffles',
    demoPriceHalfKg: '₹420 (Demo)',
    demoPriceOneKg: '₹780 (Demo)',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: false,
    description: 'Decadent dark cocoa sponge filled with generous layers of real Oreo cookie crumble cream.',
    tag: 'Kids Favorite',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-black-forest',
    name: 'Black Forest Cake',
    flavorProfile: 'Dark Chocolate Curls, Glacé Cherries & Rich Kirsch Cream',
    demoPriceHalfKg: '₹380 (Demo)',
    demoPriceOneKg: '₹700 (Demo)',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: true,
    description: 'Rich chocolate sponge soaked in sweet cherry nectar, enveloped in Belgian dark chocolate curls.',
    tag: 'Top Pick',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-truffle',
    name: 'Truffle Cake',
    flavorProfile: 'Pure 54% Dark Chocolate Ganache Truffle Layers',
    demoPriceHalfKg: '₹460 (Demo)',
    demoPriceOneKg: '₹850 (Demo)',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: true,
    description: 'For genuine chocoholics: thick, silky molten Dutch chocolate ganache poured over dense cocoa sponge.',
    tag: 'Decadent',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-chocolate',
    name: 'Chocolate Cake',
    flavorProfile: 'Smooth Chocolate Fudge with Milk Cocoa Frosting',
    demoPriceHalfKg: '₹390 (Demo)',
    demoPriceOneKg: '₹720 (Demo)',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: false,
    description: 'Soft, melt-in-mouth sponge filled with aromatic chocolate cream and cocoa sprinkles.',
    tag: 'Classic',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-rasmalai',
    name: 'Rasmalai Cake',
    flavorProfile: 'Authentic Chenna Rasmalai Dumplings, Kesar Rabri & Pistachio',
    demoPriceHalfKg: '₹500 (Demo)',
    demoPriceOneKg: '₹950 (Demo)',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: true,
    description: 'The ultimate celebration fusion dessert: sponge soaked in kesar milk, topped with mini rasmalai pieces.',
    tag: 'Celebration Hit',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'contains-nuts', label: 'Contains Pistachios' }
    ]
  },
  {
    id: 'cake-mixed-fruit',
    name: 'Mixed Fruit Cake',
    flavorProfile: 'Handpicked Seasonal Fruits & Light Vanilla Custard Cream',
    demoPriceHalfKg: '₹440 (Demo)',
    demoPriceOneKg: '₹820 (Demo)',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: false,
    description: 'Topped generously with kiwi, oranges, pomegranate, apples, and glazed in natural fruit jelly.',
    tag: 'Fresh & Light',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'cake-mango',
    name: 'Mango Cake',
    flavorProfile: 'Alphonso Mango Pulp Infusion with Velvety Mango Cream',
    demoPriceHalfKg: '₹420 (Demo)',
    demoPriceOneKg: '₹790 (Demo)',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    isEggless: true,
    isBestseller: false,
    description: 'Golden mango sponge layered with pure Alphonso fruit reduction and white chocolate pearls.',
    tag: 'Seasonal Special',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  }
];

export const MENU_PRODUCTS: ProductItem[] = [
  // Cakes
  {
    id: 'prod-cake-1',
    name: 'Royal Rasmalai Cake',
    category: 'Cakes',
    description: 'Kesar milk soaked sponge loaded with soft mini rasmalais and roasted pistachios.',
    demoPrice: '₹500 / 0.5kg (Demo)',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Bestseller',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'contains-nuts', label: 'Contains Pistachios' }
    ]
  },
  {
    id: 'prod-cake-2',
    name: 'Dark Dutch Truffle Cake',
    category: 'Cakes',
    description: 'Pure 54% dark chocolate ganache draped over rich moist sponge.',
    demoPrice: '₹460 / 0.5kg (Demo)',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Popular',
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'prod-cake-3',
    name: 'Butterscotch Praline Cake',
    category: 'Cakes',
    description: 'Crisp hand-caramelized praline crunch layered in rich butterscotch cream.',
    demoPrice: '₹380 / 0.5kg (Demo)',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'contains-nuts', label: 'Contains Cashews' }
    ]
  },
  {
    id: 'prod-cake-4',
    name: 'Fresh Fruit Paradise Cake',
    category: 'Cakes',
    description: 'Loaded with sliced kiwi, pomegranate, apples, and glazed strawberries.',
    demoPrice: '₹440 / 0.5kg (Demo)',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Fresh Fruit' }
    ]
  },

  // Bakery
  {
    id: 'prod-bakery-1',
    name: 'Crispy Veg Aloo Patty',
    category: 'Bakery',
    description: 'Flaky golden puff pastry stuffed with spiced potato and green peas filling.',
    demoPrice: '₹35 / pc (Demo)',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Fresh Daily',
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'spicy', label: 'Mildly Spiced' }
    ]
  },
  {
    id: 'prod-bakery-2',
    name: 'Spicy Paneer Tikka Patty',
    category: 'Bakery',
    description: 'Multi-layered crispy puff pastry with marinated tandoori paneer filling.',
    demoPrice: '₹55 / pc (Demo)',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Fresh Paneer' },
      { type: 'spicy', label: 'Spicy' }
    ]
  },
  {
    id: 'prod-bakery-3',
    name: 'Artisanal Milk Bread & Pav',
    category: 'Bakery',
    description: 'Soft, oven-fresh sliced milk loaf baked every morning with zero preservatives.',
    demoPrice: '₹45 / loaf (Demo)',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Fresh Milk' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'prod-bakery-4',
    name: 'Butter Elaichi Rusk & Biscuits',
    category: 'Bakery',
    description: 'Crunchy twice-baked suji rusks and dry fruit cookies, perfect for tea time.',
    demoPrice: '₹90 / pack (Demo)',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'contains-nuts', label: 'Contains Almonds' }
    ]
  },
  {
    id: 'prod-bakery-5',
    name: 'Chocolate Cream Roll',
    category: 'Bakery',
    description: 'Crispy wafer rolls piped to the brim with fluffy sweet chocolate cream.',
    demoPrice: '₹30 / pc (Demo)',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'eggless', label: 'Eggless' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },

  // Pizza
  {
    id: 'prod-pizza-1',
    name: 'Farmhouse Special Pizza',
    category: 'Pizza',
    description: '100% mozzarella, crisp capsicum, diced red onions, juicy tomatoes, and golden corn.',
    demoPrice: '₹220 (Demo)',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Popular',
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: '100% Mozzarella' }
    ]
  },
  {
    id: 'prod-pizza-2',
    name: 'Spicy Paneer Tikka Pizza',
    category: 'Pizza',
    description: 'Chunks of spiced paneer, roasted bell peppers, red paprika, and tandoori drizzle.',
    demoPrice: '₹260 (Demo)',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Paneer & Cheese' },
      { type: 'spicy', label: 'Spicy' }
    ]
  },
  {
    id: 'prod-pizza-3',
    name: 'Classic Margherita Pizza',
    category: 'Pizza',
    description: 'Stone-crust base, tangy Italian herb marinara, melted blend of mozzarella, and basil.',
    demoPrice: '₹180 (Demo)',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Mozzarella Cheese' }
    ]
  },
  {
    id: 'prod-pizza-4',
    name: 'Cheese Burst Corn & Mushroom Pizza',
    category: 'Pizza',
    description: 'Molten cheese stuffed crust topped with sweet corn, sauteed mushrooms, and jalapeños.',
    demoPrice: '₹290 (Demo)',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Molten Cheese Burst' }
    ]
  },

  // Burgers
  {
    id: 'prod-burger-1',
    name: 'Crispy Veg Herb Burger',
    category: 'Burgers',
    description: 'Golden spiced herb vegetable patty, crunchy iceberg lettuce, cucumber, and creamy mayo.',
    demoPrice: '₹80 (Demo)',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'prod-burger-2',
    name: 'Crunchy Paneer Supreme Burger',
    category: 'Burgers',
    description: 'Thick crumb-fried spiced paneer patty, double cheese slice, and sweet chili relish.',
    demoPrice: '₹130 (Demo)',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Chef Pick',
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Paneer & Cheese' }
    ]
  },
  {
    id: 'prod-burger-3',
    name: 'Double Decker Cheese Burger',
    category: 'Burgers',
    description: 'Twin vegetable patties stacked with melted cheddar, pickled gherkins, and smoked sauce.',
    demoPrice: '₹150 (Demo)',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Cheddar Cheese' }
    ]
  },

  // Sandwiches
  {
    id: 'prod-sand-1',
    name: 'Grilled Cheese & Corn Sandwich',
    category: 'Sandwiches',
    description: 'Buttery golden toasted jumbo bread with gooey molten cheese and sweet corn.',
    demoPrice: '₹95 (Demo)',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Loaded Cheese' }
    ]
  },
  {
    id: 'prod-sand-2',
    name: 'Tandoori Paneer Club Sandwich',
    category: 'Sandwiches',
    description: 'Triple-decker grilled sandwich layered with spiced cottage cheese, mint chutney, and veggies.',
    demoPrice: '₹130 (Demo)',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Tandoori Paneer' },
      { type: 'spicy', label: 'Spicy Mint' }
    ]
  },
  {
    id: 'prod-sand-3',
    name: 'Classic Veg Coleslaw Sandwich',
    category: 'Sandwiches',
    description: 'Chilled cream mayo with finely shredded cabbage, carrots, and crushed black pepper.',
    demoPrice: '₹75 (Demo)',
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },

  // Pasta
  {
    id: 'prod-pasta-1',
    name: 'Creamy Alfredo White Sauce Pasta',
    category: 'Pasta',
    description: 'Penne pasta tossed in velvety garlic-infused parmesan cheese sauce with sweet bell peppers.',
    demoPrice: '₹160 (Demo)',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Popular',
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Garlic Cream Cheese' }
    ]
  },
  {
    id: 'prod-pasta-2',
    name: 'Spicy Arrabbiata Red Sauce Pasta',
    category: 'Pasta',
    description: 'Tangy sundried tomato sauce, chilli flakes, black olives, and fresh basil herbs.',
    demoPrice: '₹150 (Demo)',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'spicy', label: 'Fiery Tomato' }
    ]
  },
  {
    id: 'prod-pasta-3',
    name: 'Pink Mixed Sauce Loaded Pasta',
    category: 'Pasta',
    description: 'The best of both worlds: rich cream and zesty marinara with mushrooms and sweet corn.',
    demoPrice: '₹180 (Demo)',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Cheese & Cream' }
    ]
  },

  // Chinese
  {
    id: 'prod-chinese-1',
    name: 'Veg Hakka Noodles',
    category: 'Chinese',
    description: 'Wok-tossed thin noodles with crispy julienned vegetables and aromatic soy seasoning.',
    demoPrice: '₹120 (Demo)',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Hot Seller',
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'prod-chinese-2',
    name: 'Chilli Paneer (Dry / Gravy)',
    category: 'Chinese',
    description: 'Crispy paneer cubes stir-fried with diced capsicum, onions, and spicy Indo-Chinese sauces.',
    demoPrice: '₹170 (Demo)',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'dairy', label: 'Fresh Paneer' },
      { type: 'spicy', label: 'Spicy Indo-Chinese' }
    ]
  },
  {
    id: 'prod-chinese-3',
    name: 'Crispy Veg Spring Rolls',
    category: 'Chinese',
    description: 'Golden fried crispy wrappers filled with seasoned cabbage, carrots, and glass noodles.',
    demoPrice: '₹110 (Demo)',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'prod-chinese-4',
    name: 'Veg Manchurian Gravy',
    category: 'Chinese',
    description: 'Steamed and fried vegetable dumplings served in savory ginger-garlic soy gravy.',
    demoPrice: '₹140 (Demo)',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'pure-veg', label: '100% Veg' },
      { type: 'spicy', label: 'Ginger Garlic Spiced' }
    ]
  },

  // Beverages
  {
    id: 'prod-bev-1',
    name: 'Thick Cold Coffee with Ice Cream',
    category: 'Beverages',
    description: 'Chilled creamy espresso blend topped with a generous scoop of vanilla ice cream.',
    demoPrice: '₹90 (Demo)',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    badge: 'Popular',
    dietary: [
      { type: 'dairy', label: 'Creamy Dairy' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'prod-bev-2',
    name: 'Rich Belgian Chocolate Shake',
    category: 'Beverages',
    description: 'Dense milkshake blended with dark cocoa syrup, chocolate chips, and whipped topping.',
    demoPrice: '₹110 (Demo)',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    dietary: [
      { type: 'dairy', label: 'Dairy & Cocoa' },
      { type: 'nut-free', label: 'Nut-Free' }
    ]
  },
  {
    id: 'prod-bev-3',
    name: 'Royal Kesariya Badam Milk',
    category: 'Beverages',
    description: 'Chilled rich saffron milk infused with crushed roasted almonds and green cardamom.',
    demoPrice: '₹100 (Demo)',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'dairy', label: 'Saffron Milk' },
      { type: 'contains-nuts', label: 'Contains Almonds & Pistachios' }
    ]
  },
  {
    id: 'prod-bev-4',
    name: 'Fresh Mint Virgin Mojito',
    category: 'Beverages',
    description: 'Zesty crushed mint leaves, fresh lime wedges, sparkling soda, and light cane sweetness.',
    demoPrice: '₹80 (Demo)',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: false,
    dietary: [
      { type: 'nut-free', label: 'Dairy-Free' },
      { type: 'pure-veg', label: '100% Veg' }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Multi-Tier Celebration Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    caption: 'Custom-designed celebration cake with fresh florals and hand-piped golden accents.'
  },
  {
    id: 'gal-2',
    title: 'Decadent Fruit Tart & Pastries',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
    caption: 'Individual fresh cream pastries and glazed fruit tartlets made every morning.'
  },
  {
    id: 'gal-3',
    title: 'Stone-Oven Cheesy Pizza',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
    caption: 'Hot from the oven with stretchable mozzarella and hand-picked garden toppings.'
  },
  {
    id: 'gal-4',
    title: 'Crispy Flaky Patties & Puffs',
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    caption: 'Batala favourite spiced aloo and paneer patties baked golden and flaky.'
  },
  {
    id: 'gal-5',
    title: 'Hot Snacks & Loaded Burgers',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
    caption: 'Crisp vegetable patties, melted cheese, and toasted sesame buns.'
  },
  {
    id: 'gal-6',
    title: 'Bakery Display & Counter Ambiance',
    category: 'Shop',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    caption: 'Warm, hygienic, and welcoming bakery counter ready for takeaways and celebration orders.'
  },
  {
    id: 'gal-7',
    title: 'Berry Glazed Gateau',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=1000&q=80',
    caption: 'Silky strawberry mirror-glaze sponge crafted for intimate birthday celebrations.'
  },
  {
    id: 'gal-8',
    title: 'Artisanal Breads & Tea Rusks',
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    caption: 'Freshly packed elaichi rusks, biscuits, and daily morning milk loaves.'
  }
];

export const DEMO_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Harpreet Singh',
    rating: 5,
    date: 'Demo Review • Local Resident, Batala',
    comment: 'Ordered a custom Milk Badam Cake for my niece’s birthday. The cake was fresh, moist, and perfectly sweetened. The staff was super polite on call!',
    occasion: 'Birthday Celebration'
  },
  {
    id: 'rev-2',
    name: 'Gurleen Kaur',
    rating: 5,
    date: 'Demo Review • Gurdaspur Road Visitor',
    comment: 'The hot crispy paneer patties and cold coffee here are unmatched in Simbel Batala! Always fresh whenever I drop by in the evening.',
    occasion: 'Evening Snacks'
  },
  {
    id: 'rev-3',
    name: 'Rajesh Kumar',
    rating: 5,
    date: 'Demo Review • Batala Resident',
    comment: 'Their Black Forest and Pineapple cakes are consistently top quality. Clean counter, quick packing, and very reasonable pricing for celebrations.',
    occasion: 'Family Anniversary'
  },
  {
    id: 'rev-4',
    name: 'Navjot Sandhu',
    rating: 4.5,
    date: 'Demo Review • Batala Shopper',
    comment: 'Great bakery near Salwan Dairy. Also surprised by how good their farm pizza and veg noodles were! A great one-stop spot for snacks and cakes.',
    occasion: 'Weekend Takeaway'
  }
];

export const SPECIAL_OCCASIONS = [
  {
    id: 'occ-birthday',
    title: 'Birthday Cakes',
    subtitle: 'Make their special day memorable',
    desc: 'From cartoon themes for kids to elegant tier cakes for milestone birthdays, baked with your favorite fillings.',
    icon: 'Cake',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'occ-anniversary',
    title: 'Anniversary Cakes',
    subtitle: 'Sweet milestones celebrated together',
    desc: 'Romantic heart-shaped bakes, floral fondants, and rich truffle chocolates designed for couple milestones.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'occ-celebration',
    title: 'Celebration Cakes',
    subtitle: 'Successes, festivals & reunions',
    desc: 'Festive fusion cakes like Rasmalai and Milk Badam that bring genuine Punjabi warmth to your celebrations.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'occ-custom',
    title: 'Custom Cakes',
    subtitle: 'Your vision, baked to perfection',
    desc: 'Bring your custom design ideas, photo prints, personalized messages, and weight preferences.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'occ-party',
    title: 'Party Orders',
    subtitle: 'Snack boxes & bulk celebrations',
    desc: 'Party combos with fresh patties, pastries, sandwiches, and beverages for school parties and family gatherings.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  }
];
