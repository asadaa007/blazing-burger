import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Logo } from '@/components/ui/Logo'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Button } from '@/components/ui/Button'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'menu', path: '/menu' },
  { key: 'about', path: '/about' },
  { key: 'gallery', path: '/gallery' },
  { key: 'contact', path: '/contact' },
] as const

export function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const scrolled = useScrollPosition(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'glass-strong shadow-lg shadow-black/20',
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" className="relative z-10 shrink-0" aria-label={t('nav.home')}>
          <Logo variant="navbar" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks
            .filter(({ path }) => !(path === '/' && isHome))
            .map(({ key, path }) => (
            <li key={key}>
              <Link
                to={path}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors hover:text-primary',
                  location.pathname === path ? 'text-primary' : 'text-white/80',
                )}
              >
                {t(`nav.${key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <a href={siteConfig.phoneHref}>
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              {t('nav.order')}
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 rounded-lg p-2 text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-strong border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks
                .filter(({ path }) => !(path === '/' && isHome))
                .map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/5 hover:text-primary',
                      location.pathname === path ? 'text-primary bg-white/5' : 'text-white',
                    )}
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-4">
                <a href={siteConfig.phoneHref} className="block w-full">
                  <Button size="md" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    {t('nav.order')}
                  </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
