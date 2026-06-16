import { Flame } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/ui/SectionHeading'
import { formatPrice, type MenuItem } from '@/config/menu'
import { cn } from '@/lib/utils'

interface MenuItemCardProps {
  item: MenuItem
  sectionId: string
}

function SpiceIndicator({ level }: { level: number }) {
  if (!level) return null
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Spice level ${level}`}>
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="h-3.5 w-3.5 fill-red-500 text-red-500" />
      ))}
    </span>
  )
}

export function MenuItemCard({ item, sectionId }: MenuItemCardProps) {
  const { t, i18n } = useTranslation()
  const key = `menuData.${sectionId}.items.${item.id}`
  const description = t(`${key}.description`)

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl p-6 transition-all duration-300',
        item.featured
          ? 'bg-gradient-to-br from-primary/15 to-secondary/10 ring-2 ring-primary/40'
          : 'bg-surface-light ring-1 ring-white/10 hover:ring-primary/30',
      )}
    >
      {item.featured && (
        <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {t('menuData.signature')}
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-bold text-white md:text-xl">
              {t(`${key}.name`)}
            </h3>
            <SpiceIndicator level={item.spice ?? 0} />
          </div>
          {description && (
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
          )}
        </div>
        <div className="shrink-0 text-right">
          <span className="font-display text-lg font-bold text-secondary md:text-xl">
            {formatPrice(item.price, i18n.language)}
          </span>
        </div>
      </div>

      <div className="mt-4 h-px bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />
    </article>
  )
}

interface MenuSectionBlockProps {
  sectionId: string
  items: MenuItem[]
  delay?: number
}

export function MenuSectionBlock({ sectionId, items, delay = 0 }: MenuSectionBlockProps) {
  const { t, i18n } = useTranslation()
  const isSauces = sectionId === 'sauces'

  return (
    <Reveal delay={delay}>
      <div className="mb-10">
        <div className="mb-6 flex items-center gap-4">
          <h2 className="font-display text-2xl font-bold text-gradient md:text-3xl">
            {t(`menuData.${sectionId}.title`)}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {isSauces ? (
          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-full bg-surface-light px-5 py-3 ring-1 ring-white/10"
              >
                <span className="text-sm font-medium text-white">
                  {t(`menuData.${sectionId}.items.${item.id}.name`)}
                </span>
                <span className="font-display text-sm font-bold text-secondary">
                  {formatPrice(item.price, i18n.language)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <MenuItemCard key={item.id} item={item} sectionId={sectionId} />
            ))}
          </div>
        )}
      </div>
    </Reveal>
  )
}

interface MenuCombosProps {
  delay?: number
}

export function MenuCombos({ delay = 0 }: MenuCombosProps) {
  const { t, i18n } = useTranslation()

  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 p-6 ring-1 ring-primary/30 md:p-8">
        <h3 className="font-display text-xl font-bold text-white md:text-2xl">
          {t('menuData.combos.title')}
        </h3>
        <p className="mt-1 text-sm text-text-muted">{t('menuData.combos.subtitle')}</p>
        <ul className="mt-6 space-y-3">
          {(['comboFries', 'comboFriesSoda33', 'comboFriesSoda50'] as const).map((id) => (
            <li
              key={id}
              className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
            >
              <span className="text-sm text-white md:text-base">
                {t(`menuData.combos.${id}`)}
              </span>
              <span className="shrink-0 font-display font-bold text-accent">
                +{formatPrice(
                  id === 'comboFries' ? 700 : id === 'comboFriesSoda33' ? 1100 : 1200,
                  i18n.language,
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
