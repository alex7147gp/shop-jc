import { GraphQLClient } from 'graphql-request'
import {
  getSdk,
  IGetblogPageListQueryVariables,
  ISearchBlogQueryVariables,
  IGetCategoryListQueryVariables,
  IGetBlogListByCategoryQueryVariables,
} from './generated/graphql'
import axios from 'axios'
import * as selectors from './selectors'



import { Blog } from './resources'

import { Category } from './resources'

export type QueryStatus = 'idle' | 'loading' | 'success' | 'error'

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  }
)

const api = getSdk(client)

export const sdk = api

export function getBlogPageList(
  args?: IGetblogPageListQueryVariables
): Promise<Blog[]> {

  return api
    .getblogPageList({ limit: 10, skip: 0, ...args })
    .then((responseData) => {
      if (!responseData || !responseData.blogPageCollection) {

        throw new Error(`Unexpected response data from API`)
      }

      return selectors.selectBlogPages(responseData.blogPageCollection)
    })
    .catch((error) => {
      console.error('Error fetching blog pages:', error)
      throw error
    })
}

// This request handler has support for Preview content
export function getBlog(
  pageUrl: string,
  isPreview = false,
  locale?: string
): Promise<Blog> {

  const extraHeaders: HeadersInit = {}
  if (isPreview) {
    // Use the preview access token for auth
    extraHeaders['Authorization'] = `Bearer ${process.env.PREVIEW_ACCESS_TOKEN}`
  }

  return api
    .getblog({ pageUrl, preview: isPreview, locale }, extraHeaders)
    .then((responseData) => {

      if (
        responseData == null ||
        responseData.blogPageCollection == null ||
        responseData.blogPageCollection.items.length < 1
      ) {

        throw new Error(`BlogPage with pageUrl: "${pageUrl}" not found`)
      }

      return selectors.selectBlogPage(responseData.blogPageCollection.items[0])
    })
}

export function searchBlog({
  term,
  locale,
  limit = 8,
}: ISearchBlogQueryVariables): Promise<Blog[]> {
  return api.searchBlog({ term, locale, limit }).then((responseData) => {
    if (responseData == null || responseData.blogPageCollection == null) {
      return []
    }

    return selectors.selectBlogPages(responseData.blogPageCollection)
  })
}

export function getCategoryList(
  args?: IGetCategoryListQueryVariables
): Promise<Category[]> {
  return api
    .getCategoryList({ limit: 10, skip: 0, ...args })
    .then((responseData) =>
      selectors.selectCategories(responseData.categoryCollection)
    )
}


export function getBlogListByCategory(
  args: IGetBlogListByCategoryQueryVariables
): Promise<{ entries: Blog[]; category: Category }> {


  return api
    .getBlogListByCategory({ limit: 10, ...args })
    .then((responseData) => {
      if (
        responseData == null ||
        responseData.categoryCollection == null ||
        responseData.categoryCollection.items.length < 1
      ) {
        console.log(responseData)
        throw new Error(`Category with slug: "${args.category}" not found`)
      }

      return {
        category: selectors.selectCategories(
          responseData.categoryCollection
        )[0],
        entries: selectors.selectBlogPages(responseData.blogPageCollection),
      }
    })
}

export async function getContentfulAssetById(assetId) {
  try {
    const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN; 
    const CONTENTFUL_API_URL = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/assets/${assetId}`;

    const response = await axios.get(CONTENTFUL_API_URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    if (response.status === 200 && response.data && response.data.fields) {
      return response.data;
    } else {
      throw new Error('No se pudo obtener el Asset de Contentful.');
    }
  } catch (error) {
    console.error('Error al obtener el Asset de Contentful:', error);
    throw error;
  }
}