import { useState, useEffect } from 'react'
import { detectMenuImages } from '@/lib/menuImages'

export function useMenuImages() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    detectMenuImages().then((found) => {
      if (!cancelled) {
        setImages(found)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  return { images, loading, hasImages: images.length > 0 }
}
