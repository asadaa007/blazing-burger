import { useState, useEffect } from 'react'
import { galleryFoodImages } from '@/config/menu'
import { filterValidImages } from '@/lib/imageValidation'

export function useGalleryImages() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    filterValidImages(galleryFoodImages).then((valid) => {
      if (!cancelled) {
        setImages(valid)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  return { images, loading, hasImages: images.length > 0 }
}
