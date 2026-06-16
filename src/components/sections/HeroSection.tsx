import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Phone, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { siteConfig } from '@/config/site'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={siteConfig.images.hero}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="section-gradient absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mx-auto max-w-5xl px-4 pt-28 text-center md:px-6 md:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 flex justify-center md:mb-8"
        >
          <Logo variant="hero" className="mx-auto object-center drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)]" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent"
        >
          {t('hero.eyebrow')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient-subtle">{t('hero.title')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/menu">
            <Button size="lg">{t('hero.ctaMenu')}</Button>
          </Link>
          <a href={siteConfig.phoneHref}>
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="h-5 w-5" />
              {t('hero.ctaCall')}
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute right-4 top-28 z-10 md:right-8 md:top-32"
      >
        <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="font-display text-xl font-bold text-white">
              {siteConfig.rating}
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              {siteConfig.reviewCount}+
            </p>
            <p className="text-xs text-text-muted">{t('hero.reviews')}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-white/50" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}
