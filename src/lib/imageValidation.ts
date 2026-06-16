export async function validateImageUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve(img.naturalWidth > 0 && img.naturalHeight > 0)
    }
    img.onerror = () => resolve(false)
    img.src = url
  })
}

export async function filterValidImages(urls: string[]): Promise<string[]> {
  const results = await Promise.all(
    urls.map(async (url) => ((await validateImageUrl(url)) ? url : null)),
  )
  return results.filter((url): url is string => url !== null)
}
