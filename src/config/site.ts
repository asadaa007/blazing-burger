export const siteConfig = {
  name: 'Blazing Burger',
  phone: '+36 20 501 5736',
  phoneHref: 'tel:+36205015736',
  address: {
    street: 'Köntösgát sor 3',
    city: 'Debrecen',
    postalCode: '4031',
    country: 'Hungary',
    full: 'Köntösgát sor 3, 4031 Debrecen, Hungary',
  },
  coordinates: {
    lat: 47.5316,
    lng: 21.6273,
  },
  rating: 4.9,
  reviewCount: 499,
  priceRange: 'Ft 2,000–4,000',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.5!2d21.6273!3d47.5316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzUzLjgiTiAyMcKwMzcnMzguMyJF!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu',
  googleMapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Köntösgát+sor+3,+4031+Debrecen,+Hungary',
  social: {
    facebook: 'https://www.facebook.com/blazingburgerdebrecen/',
    facebookPhotos: 'https://www.facebook.com/blazingburgerdebrecen/photos',
    instagram: '#',
  },
  logoPath: '/assets/logo.png',
  menuImagePath: '/assets/menu',
  galleryImagePath: '/assets/gallery',
  images: {
    hero: '/assets/gallery/gallery-02.jpg',
    burger1: '/assets/gallery/gallery-01.jpg',
    burger2: '/assets/gallery/gallery-02.jpg',
    burger3: '/assets/gallery/gallery-03.jpg',
    fries: '/assets/gallery/gallery-04.jpg',
    about: '/assets/gallery/gallery-01.jpg',
    kitchen: '/assets/gallery/gallery-04.jpg',
    restaurant: '/assets/gallery/gallery-03.jpg',
    team: '/assets/gallery/gallery-02.jpg',
  },
  /** Fallback only when no local gallery images are detected */
  galleryFallback: [] as string[],
} as const

export const openingHours = {
  weekdays: { open: '11:00', close: '22:00' },
  weekend: { open: '11:00', close: '23:00' },
} as const

export const services = [
  'dineIn',
  'takeaway',
  'outdoorSeating',
  'catering',
  'familyFriendly',
  'dogFriendly',
] as const

export type ServiceKey = (typeof services)[number]
