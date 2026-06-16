import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/SEO'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/config/site'

const stories = [
  { key: 'story1', image: siteConfig.images.about },
  { key: 'story2', image: siteConfig.images.kitchen },
  { key: 'story3', image: siteConfig.images.team },
] as const

const values = ['craft', 'local', 'passion'] as const

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO page="about" />

      <section className="relative overflow-hidden bg-dark pt-28 pb-16 md:pt-36">
        <div className="section-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
            subtitle={t('about.subtitle')}
          />
        </div>
      </section>

      <section className="bg-dark pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {stories.map(({ key, image }, index) => (
              <Reveal key={key} delay={index * 0.1}>
                <div
                  className={`flex flex-col items-center gap-8 md:gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                      {t(`about.${key}.title`)}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                      {t(`about.${key}.description`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('about.values.eyebrow')}
            title={t('about.values.title')}
          />

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((key, index) => (
              <Reveal key={key} delay={index * 0.15}>
                <div className="card-hover rounded-2xl bg-surface-light p-8 ring-1 ring-white/10">
                  <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <h3 className="font-display text-xl font-bold text-white">
                    {t(`about.values.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {t(`about.values.${key}.description`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
