import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const next = i18n.language === 'hu' ? 'en' : 'hu'
    i18n.changeLanguage(next)
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={cn(
        'flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className,
      )}
      aria-label={`Switch to ${i18n.language === 'hu' ? 'English' : 'Hungarian'}`}
    >
      <span className={i18n.language === 'hu' ? 'text-primary' : 'text-text-muted'}>HU</span>
      <span className="text-text-muted">/</span>
      <span className={i18n.language === 'en' ? 'text-primary' : 'text-text-muted'}>EN</span>
    </button>
  )
}
