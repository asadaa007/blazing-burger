import { SEO } from '@/components/SEO'
import { HeroSection } from '@/components/sections/HeroSection'
import { SignatureSection } from '@/components/sections/SignatureSection'
import { FavoritesSection } from '@/components/sections/FavoritesSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { LocationSection } from '@/components/sections/LocationSection'

export function HomePage() {
  return (
    <>
      <SEO page="home" />
      <HeroSection />
      <SignatureSection />
      <FavoritesSection />
      <StatsSection />
      <ReviewsSection />
      <LocationSection />
    </>
  )
}
