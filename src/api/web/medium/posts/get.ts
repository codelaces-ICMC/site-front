import axios from 'axios'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'

export interface MediumPostApiItem {
  title: string
  description: string
  banner: string | null
  author: string
  link: string
  publishedAt: string
  readingTimeMinutes: number
}

interface MediumPostsApiResponse {
  posts: MediumPostApiItem[]
}

const PLACEHOLDER_BANNER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="#f5eefc" width="600" height="400"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#3d2a52" font-family="system-ui,sans-serif" font-size="22">Codelaces</text></svg>`,
  )

/** Mapeia o item da API para as props do card de notícias (Medium). */
export const mapMediumPostToCardNews = (post: MediumPostApiItem) => ({
  imageUrl: post.banner?.trim() || PLACEHOLDER_BANNER,
  imageAlt: post.title,
  title: post.title,
  description: post.description,
  author: post.author,
  date: new Date(post.publishedAt).toLocaleDateString('pt-BR'),
  readTimeInMinutes: post.readingTimeMinutes,
  linkArticle: post.link,
})

export const getMediumPosts = async () => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get<MediumPostsApiResponse>(
      buildApiUrl(baseURL, '/web/medium/posts'),
    )

    const posts = response.data?.posts ?? []
    return posts.map(mapMediumPostToCardNews)
  } catch (error) {
    console.error('[getMediumPosts] error: ', error)
    return []
  }
}
