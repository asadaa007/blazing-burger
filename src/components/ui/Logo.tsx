import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useLogo } from '@/hooks/useLogo'
import { useTranslation } from 'react-i18next'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'navbar' | 'footer' | 'hero'
}

const sizeStyles = {
  sm: 'h-10 w-auto max-w-[120px]',
  md: 'h-14 w-auto max-w-[180px]',
  lg: 'h-16 w-auto max-w-[220px]',
}

const variantStyles = {
  navbar: 'h-14 w-auto max-w-[150px] sm:h-16 sm:max-w-[190px] md:max-w-[210px]',
  footer: 'h-16 w-auto max-w-[200px] sm:h-[72px] sm:max-w-[240px]',
  hero: 'h-28 w-auto max-w-[260px] sm:h-36 sm:max-w-[340px] md:h-44 md:max-w-[400px] lg:h-48 lg:max-w-[440px]',
  default: sizeStyles.md,
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const { exists, loading } = useLogo()
  const { t } = useTranslation()

  const imageClass =
    variant === 'default' ? sizeStyles[size] : variantStyles[variant]

  if (loading) {
    return (
      <div className={cn('flex items-center', className)} aria-hidden="true">
        <div
          className={cn(
            'animate-pulse bg-white/10',
            variant === 'navbar' ? 'h-14 w-32 sm:h-16' : variant === 'hero' ? 'h-28 w-48 sm:h-36' : 'h-14 w-36',
          )}
        />
      </div>
    )
  }

  if (exists) {
    return (
      <img
        src={siteConfig.logoPath}
        alt={t('common.logoAlt')}
        className={cn('shrink-0 object-contain object-left', imageClass, className)}
        loading="eager"
        decoding="async"
      />
    )
  }

  const showText = variant !== 'navbar' && variant !== 'hero'

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary',
          variant === 'hero' ? 'h-20 w-20 sm:h-24 sm:w-24' : variant === 'navbar' ? 'h-12 w-12' : 'h-14 w-14',
        )}
        aria-hidden="true"
      >
        <span className="font-display text-sm font-bold text-white sm:text-base">BB</span>
      </div>
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight text-white">
          {t('common.logoPlaceholder')}
        </span>
      )}
    </div>
  )
}
