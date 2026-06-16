import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/SEO'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Lightbox, ImageCard } from '@/components/ui/Lightbox'
import { Button } from '@/components/ui/Button'
import { useGalleryImages } from '@/hooks/useGalleryImages'
import { siteConfig } from '@/config/site'

export function GalleryPage() {
  const { t } = useTranslation()
  const { images, loading } = useGalleryImages()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <SEO page="gallery" />

      <section className="bg-dark pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('gallery.eyebrow')}
            title={t('gallery.title')}
            subtitle={t('gallery.subtitle')}
          />

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
          ) : images.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((src, index) => (
                <Reveal key={src} delay={(index % 6) * 0.05} className="mb-4 break-inside-avoid">
                  <ImageCard
                    src={src}
                    alt={`${t('gallery.viewImage')} ${index + 1}`}
                    onClick={() => openLightbox(index)}
                    className="w-full"
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="rounded-2xl border border-dashed border-white/20 bg-surface py-16 text-center">
                <p className="text-text-muted">{t('menu.empty')}</p>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <div className="mt-16 rounded-2xl bg-surface p-8 text-center ring-1 ring-white/10">
              <p className="text-sm text-text-muted">{t('gallery.facebookDescription')}</p>
              <a
                href={siteConfig.social.facebookPhotos}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  {t('gallery.facebookCta')}
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {images.length > 0 && (
        <Lightbox
          images={[...images]}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentIndex}
          altPrefix={t('gallery.viewImage')}
        />
      )}
    </>
  )
}
