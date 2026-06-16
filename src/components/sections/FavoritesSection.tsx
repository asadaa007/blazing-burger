import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

const favorites = [
  { key: 'signature', image: siteConfig.images.burger1 },
  { key: 'smash', image: siteConfig.images.burger2 },
  { key: 'fries', image: siteConfig.images.fries },
] as const

export function FavoritesSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('favorites.eyebrow')}
          title={t('favorites.title')}
          subtitle={t('favorites.subtitle')}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {favorites.map(({ key, image }, index) => (
            <Reveal key={key} delay={index * 0.15}>
              <article className="card-hover group overflow-hidden rounded-2xl bg-surface-light ring-1 ring-white/10">
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    {t(`favorites.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {t(`favorites.${key}.description`)}
                  </p>
                  <Link to="/menu" className="mt-4 inline-block">
                    <Button variant="ghost" size="sm" className="px-0">
                      {t('favorites.cta')} →
                    </Button>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm italic text-text-muted">
          {t('favorites.note')}
        </p>
      </div>
    </section>
  )
}
