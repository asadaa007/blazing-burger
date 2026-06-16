export type SpiceLevel = 0 | 1 | 2 | 3

export interface MenuItem {
  id: string
  price: number
  spice?: SpiceLevel
  featured?: boolean
}

export interface MenuCombo {
  id: string
  price: number
}

export interface MenuSection {
  id: string
  items: MenuItem[]
}

export const menuCombos: MenuCombo[] = [
  { id: 'comboFries', price: 700 },
  { id: 'comboFriesSoda33', price: 1100 },
  { id: 'comboFriesSoda50', price: 1200 },
]

export const menuSections: MenuSection[] = [
  {
    id: 'burgers',
    items: [
      { id: 'blazingBurger', price: 3450, spice: 2, featured: true },
      { id: 'cheeseBurger', price: 2650 },
      { id: 'classicBurger', price: 2750 },
      { id: 'riotBurger', price: 3150, spice: 3 },
      { id: 'fatBurger', price: 3350 },
      { id: 'mrMarshall', price: 3250 },
      { id: 'baconDoubleCheese', price: 3750 },
      { id: 'babylonTower', price: 3950, spice: 2 },
      { id: 'pacemaker', price: 3950 },
    ],
  },
  {
    id: 'gyros',
    items: [
      { id: 'gyrosPlate', price: 2850 },
      { id: 'gyrosTortilla', price: 2250 },
    ],
  },
  {
    id: 'wraps',
    items: [
      { id: 'mayoWrap', price: 1950 },
      { id: 'bbqWrap', price: 2150 },
      { id: 'sweetChiliWrap', price: 2150, spice: 2 },
      { id: 'sloppyJoeWrap', price: 2250, spice: 2 },
      { id: 'blazingWrap', price: 2250, spice: 1 },
    ],
  },
  {
    id: 'loaded',
    items: [
      { id: 'chickNSalad', price: 2650 },
      { id: 'blazingFries', price: 2850, spice: 2 },
      { id: 'blazingGyrosPlate', price: 2950, spice: 2 },
      { id: 'sloppyJoePlate', price: 2550, spice: 2 },
    ],
  },
  {
    id: 'sides',
    items: [
      { id: 'fries', price: 700 },
      { id: 'onionRings', price: 500 },
      { id: 'potatoPancakes', price: 500 },
      { id: 'salad', price: 500 },
    ],
  },
  {
    id: 'extras',
    items: [
      { id: 'beefPatty', price: 800 },
      { id: 'crispyChicken', price: 700 },
      { id: 'chickenStrips', price: 800 },
      { id: 'bacon', price: 300 },
      { id: 'vegetables', price: 200 },
      { id: 'cheese', price: 300 },
    ],
  },
  {
    id: 'sauces',
    items: [
      { id: 'ketchup', price: 200 },
      { id: 'mustard', price: 200 },
      { id: 'garlicMayo', price: 200 },
      { id: 'burgerSauce', price: 200 },
      { id: 'bbqSauce', price: 200 },
      { id: 'sweetChiliSauce', price: 200 },
      { id: 'hotSauce', price: 200 },
    ],
  },
]

export function formatPrice(price: number, locale: string): string {
  return new Intl.NumberFormat(locale === 'hu' ? 'hu-HU' : 'en-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0,
  }).format(price)
}

/** Food photography only — excludes promo/deal graphics */
export const galleryFoodImages = [
  '/assets/gallery/gallery-01.jpg',
  '/assets/gallery/gallery-02.jpg',
  '/assets/gallery/gallery-03.jpg',
  '/assets/gallery/gallery-04.jpg',
  '/assets/gallery/gallery-05.jpg',
  '/assets/gallery/gallery-06.jpg',
  '/assets/gallery/gallery-07.jpg',
  '/assets/gallery/gallery-08.jpg',
]
