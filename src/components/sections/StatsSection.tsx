import { Star, MessageCircle, Utensils, Leaf } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/config/site'

const statIcons = [Star, MessageCircle, Utensils, Leaf]

export function StatsSection() {
  const { t } = useTranslation()

  const stats = [
    { value: `${siteConfig.rating}`, label: t('stats.rating'), icon: statIcons[0] },
    { value: `${siteConfig.reviewCount}+`, label: t('stats.reviews'), icon: statIcons[1] },
    { value: t('stats.burgersValue'), label: t('stats.burgers'), icon: statIcons[2] },
    { value: '✓', label: t('stats.fresh'), icon: statIcons[3] },
  ]

  return (
    <section className="relative py-24 md:py-32">
      <div className="section-gradient absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('stats.eyebrow')}
          title={t('stats.title')}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="card-hover rounded-2xl bg-surface p-8 text-center ring-1 ring-white/10">
                <stat.icon className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                <p className="mt-4 font-display text-4xl font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
