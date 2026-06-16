import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MenuCombos, MenuSectionBlock } from '@/components/menu/MenuSections'
import { menuSections } from '@/config/menu'
import { siteConfig } from '@/config/site'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function MenuPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO page="menu" />

      <section className="relative bg-dark pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="section-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('menu.eyebrow')}
            title={t('menu.title')}
            subtitle={t('menu.subtitle')}
          />

          <div className="space-y-4">
            {menuSections.map((section, index) => (
              <MenuSectionBlock
                key={section.id}
                sectionId={section.id}
                items={section.items}
                delay={index * 0.05}
              />
            ))}

            <MenuCombos delay={0.4} />

            <div className="mt-12 rounded-2xl bg-surface p-8 text-center ring-1 ring-white/10">
              <p className="text-text-muted">{t('menu.orderCta')}</p>
              <a href={siteConfig.phoneHref} className="mt-4 inline-block">
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  {t('menu.orderNow')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
