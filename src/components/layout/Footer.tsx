import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Clock } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { siteConfig, openingHours } from '@/config/site'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const footerLinks = [
  { key: 'home', path: '/' },
  { key: 'menu', path: '/menu' },
  { key: 'about', path: '/about' },
  { key: 'gallery', path: '/gallery' },
  { key: 'contact', path: '/contact' },
] as const

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {t('footer.description')}
            </p>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <FacebookIcon className="h-4 w-4 shrink-0" />
              {t('footer.followFacebook')}
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-text-muted transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.hours')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-text-muted">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>
                  {t('footer.weekdays')}: {openingHours.weekdays.open}–{openingHours.weekdays.close}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-muted">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>
                  {t('footer.weekend')}: {openingHours.weekend.open}–{openingHours.weekend.close}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-text-muted">
            © {year} {siteConfig.name}. {t('footer.copyright')}
          </p>
          <p className="text-xs text-text-muted">{t('footer.madeIn')}</p>
        </div>
      </div>
    </footer>
  )
}
