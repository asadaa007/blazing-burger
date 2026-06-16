import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Review {
  name: string
  text: string
  localGuide?: boolean
}

export function ReviewsSection() {
  const { t } = useTranslation()
  const reviews = t('reviews.items', { returnObjects: true }) as Review[]
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length)
  }, [reviews.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [reviews.length])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const review = reviews[current]

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          eyebrow={t('reviews.eyebrow')}
          title={t('reviews.title')}
          subtitle={t('reviews.subtitle')}
        />

        <div className="relative">
          <Quote className="absolute -top-4 left-0 h-12 w-12 text-primary/20" aria-hidden="true" />

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-surface-light p-8 ring-1 ring-white/10 md:min-h-[260px] md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-4 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="text-base leading-relaxed text-white md:text-lg">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <footer className="mt-6">
                  <p className="font-display text-lg font-bold text-white">{review.name}</p>
                  <p className="mt-1 text-xs text-text-muted">
                    {review.localGuide ? t('reviews.localGuide') : t('reviews.googleReview')}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={t('reviews.prevReview')}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex max-w-[200px] flex-wrap justify-center gap-2 sm:max-w-none">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'w-8 bg-primary' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`${t('reviews.goToReview')} ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={t('reviews.nextReview')}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
