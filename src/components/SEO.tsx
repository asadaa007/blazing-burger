import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/site'

interface SEOProps {
  page: 'home' | 'menu' | 'about' | 'gallery' | 'contact'
}

export function SEO({ page }: SEOProps) {
  const { t, i18n } = useTranslation()
  const title = t(`meta.${page}.title`)
  const description = t(`meta.${page}.description`)
  const url = `https://blazingburger.hu/${page === 'home' ? '' : page}`
  const image = `https://blazingburger.hu${siteConfig.images.hero}`

  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.name,
    image,
    '@id': 'https://blazingburger.hu',
    url: 'https://blazingburger.hu',
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'HU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
    servesCuisine: ['American', 'Burger', 'Craft Burger'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '11:00',
        closes: '23:00',
      },
    ],
  }

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={i18n.language === 'hu' ? 'hu_HU' : 'en_US'} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(restaurantSchema)}</script>
    </Helmet>
  )
}
