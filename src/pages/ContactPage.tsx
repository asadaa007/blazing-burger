import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ParkingCircle,
  Share2,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/SEO'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { siteConfig, openingHours, services } from '@/config/site'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO page="contact" />

      <section className="relative bg-dark pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="section-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-6">
                <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-white">{t('contact.address')}</p>
                      <p className="mt-1 text-sm text-text-muted">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.postalCode} {siteConfig.address.city},{' '}
                        {siteConfig.address.country}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-white">{t('contact.phone')}</p>
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-1 text-sm text-primary transition-colors hover:text-secondary"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-white">{t('contact.hours')}</p>
                      <p className="mt-1 text-sm text-text-muted">
                        {t('contact.weekdays')}: {openingHours.weekdays.open}–
                        {openingHours.weekdays.close}
                        <br />
                        {t('contact.weekend')}: {openingHours.weekend.open}–
                        {openingHours.weekend.close}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
                  <p className="font-semibold text-white">{t('contact.services')}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {t(`services.${service}`)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
                  <div className="flex items-start gap-4">
                    <ParkingCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-white">{t('contact.parking')}</p>
                      <p className="mt-1 text-sm text-text-muted">{t('contact.parkingInfo')}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
                  <div className="flex items-start gap-4">
                    <Share2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-white">{t('contact.social')}</p>
                      <a
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-primary transition-colors hover:text-secondary"
                      >
                        Facebook — {siteConfig.name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <iframe
                    title="Blazing Burger location"
                    src={siteConfig.googleMapsEmbed}
                    className="aspect-[4/3] w-full border-0 lg:aspect-auto lg:h-[350px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 p-8 ring-1 ring-primary/20">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {t('contact.cta')}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{t('contact.ctaDescription')}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={siteConfig.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="md" className="w-full gap-2">
                        <Navigation className="h-4 w-4" />
                        {t('contact.directions')}
                      </Button>
                    </a>
                    <a href={siteConfig.phoneHref} className="flex-1">
                      <Button variant="outline" size="md" className="w-full gap-2">
                        <Phone className="h-4 w-4" />
                        {t('contact.call')}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
