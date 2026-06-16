import { siteConfig } from '@/config/site'

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'] as const
const MAX_IMAGES = 30

export async function checkImageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

function imageUrlCandidates(basePath: string, prefix: string, index: number): string[] {
  const padded = String(index).padStart(2, '0')
  const names = [index, padded].flatMap((n) =>
    EXTENSIONS.map((ext) => `${basePath}/${prefix}-${n}.${ext}`),
  )
  return [...new Set(names)]
}

export async function detectImages(
  basePath: string,
  prefix: string,
): Promise<string[]> {
  const found: string[] = []

  for (let i = 1; i <= MAX_IMAGES; i++) {
    const candidates = imageUrlCandidates(basePath, prefix, i)
    for (const url of candidates) {
      const exists = await checkImageExists(url)
      if (exists) {
        found.push(url)
        break
      }
    }
  }

  return found
}

export async function detectMenuImages(): Promise<string[]> {
  return detectImages(siteConfig.menuImagePath, 'menu')
}

export async function detectGalleryImages(): Promise<string[]> {
  return detectImages(siteConfig.galleryImagePath, 'gallery')
}

export async function checkLogoExists(): Promise<boolean> {
  return checkImageExists(siteConfig.logoPath)
}
