/**
 * Pré-carrega imagens no browser (aquece cache) para alinhar “lista pronta” com pixels da capa.
 * Usar concorrência baixa reduz picos que levam a 429 em CDNs do Google.
 */
export function preloadImage(url: string): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image()
    img.referrerPolicy = 'no-referrer'
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

export async function preloadImagesWithConcurrency(
  urls: string[],
  options: { concurrency?: number } = {},
): Promise<void> {
  const concurrency = Math.max(1, options.concurrency ?? 2)
  const unique = Array.from(new Set(urls.filter(Boolean)))
  if (unique.length === 0) return

  const n = unique.length
  const workers = Math.min(concurrency, n)
  let next = 0

  async function worker(): Promise<void> {
    for (;;) {
      const i = next++
      if (i >= n) return
      await preloadImage(unique[i])
    }
  }

  await Promise.all(Array.from({ length: workers }, () => worker()))
}
