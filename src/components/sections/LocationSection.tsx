import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { siteConfig, openingHours } from '@/config/site'

export function LocationSection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 md:py-32">
      <div className="section-gradient absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('location.eyebrow')}
          title={t('location.title')}
          subtitle={t('location.subtitle')}
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <iframe
                title="Blazing Burger location"
                src={siteConfig.googleMapsEmbed}
                className="aspect-[16/10] w-full border-0 lg:aspect-auto lg:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-surface p-8 ring-1 ring-white/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t('location.address')}</p>
                    <p className="mt-1 text-sm text-text-muted">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t('location.hours')}</p>
                    <p className="mt-1 text-sm text-text-muted">
                      {t('location.weekdays')}: {openingHours.weekdays.open}–{openingHours.weekdays.close}
                      <br />
                      {t('location.weekend')}: {openingHours.weekend.open}–{openingHours.weekend.close}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="primary" size="md" className="w-full gap-2">
                    <Navigation className="h-4 w-4" />
                    {t('location.directions')}
                  </Button>
                </a>
                <a href={siteConfig.phoneHref} className="flex-1">
                  <Button variant="outline" size="md" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    {t('location.call')}
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
