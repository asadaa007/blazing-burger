import { useTranslation } from 'react-i18next'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/config/site'

const items = [
  { key: 'handmade', image: siteConfig.images.burger1 },
  { key: 'fresh', image: siteConfig.images.burger2 },
  { key: 'quality', image: siteConfig.images.burger3 },
  { key: 'service', image: siteConfig.images.restaurant },
] as const

export function SignatureSection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 md:py-32">
      <div className="section-gradient absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('signature.eyebrow')}
          title={t('signature.title')}
          subtitle={t('signature.subtitle')}
        />

        <div className="space-y-16 md:space-y-24">
          {items.map(({ key, image }, index) => (
            <Reveal key={key} delay={index * 0.1}>
              <div
                className={`flex flex-col items-center gap-8 md:gap-12 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                    {t(`signature.${key}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                    {t(`signature.${key}.description`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
