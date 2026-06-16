import { useState, useEffect } from 'react'
import { checkLogoExists } from '@/lib/menuImages'

export function useLogo() {
  const [exists, setExists] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    checkLogoExists().then((found) => {
      if (!cancelled) {
        setExists(found)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  return { exists, loading }
}
