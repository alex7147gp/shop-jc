import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type IAsset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<IAssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: ISys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<IImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IAssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<IAsset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blogPageCollection?: Maybe<IBlogPageCollection>;
  categoryCollection?: Maybe<ICategoryCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  newsCollection?: Maybe<INewsCollection>;
};


export type IAssetLinkingCollectionsBlogPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type IAssetLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type IAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type IAssetLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum IAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPage = IEntry & {
  __typename?: 'BlogPage';
  body?: Maybe<IBlogPageBody>;
  categories?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ICategory>;
  conclucion?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: IContentfulMetadata;
  descripctionCep?: Maybe<Scalars['String']['output']>;
  image?: Maybe<IAsset>;
  intro?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<IBlogPageLinkingCollections>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  productD?: Maybe<Scalars['String']['output']>;
  productD2?: Maybe<Scalars['String']['output']>;
  productI?: Maybe<Scalars['String']['output']>;
  productI2?: Maybe<Scalars['String']['output']>;
  productP?: Maybe<Scalars['Int']['output']>;
  productP2?: Maybe<Scalars['Int']['output']>;
  productT?: Maybe<Scalars['String']['output']>;
  productT2?: Maybe<Scalars['String']['output']>;
  productUrl?: Maybe<Scalars['String']['output']>;
  productUrl2?: Maybe<Scalars['String']['output']>;
  recommendedPostsCollection?: Maybe<IBlogPageRecommendedPostsCollection>;
  sys: ISys;
  title?: Maybe<Scalars['String']['output']>;
  titleCeo?: Maybe<Scalars['String']['output']>;
  update?: Maybe<Scalars['String']['output']>;
  urlCanonical?: Maybe<Scalars['String']['output']>;
  urlCeo?: Maybe<Scalars['String']['output']>;
};

/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageCategoriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ICategoryFilter>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageConclucionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageDescripctionCepArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPagePageUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductDArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductD2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductIArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductI2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductPArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductP2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductTArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductT2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageProductUrl2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageRecommendedPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IBlogPageRecommendedPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IBlogPageFilter>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageTitleCeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageUpdateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageUrlCanonicalArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/blogPage) */
export type IBlogPageUrlCeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IBlogPageBody = {
  __typename?: 'BlogPageBody';
  json: Scalars['JSON']['output'];
  links: IBlogPageBodyLinks;
};

export type IBlogPageBodyAssets = {
  __typename?: 'BlogPageBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
};

export type IBlogPageBodyEntries = {
  __typename?: 'BlogPageBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
};

export type IBlogPageBodyLinks = {
  __typename?: 'BlogPageBodyLinks';
  assets: IBlogPageBodyAssets;
  entries: IBlogPageBodyEntries;
  resources: IBlogPageBodyResources;
};

export type IBlogPageBodyResources = {
  __typename?: 'BlogPageBodyResources';
  block: Array<IResourceLink>;
  hyperlink: Array<IResourceLink>;
  inline: Array<IResourceLink>;
};

export type IBlogPageCollection = {
  __typename?: 'BlogPageCollection';
  items: Array<Maybe<IBlogPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IBlogPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<IBlogPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IBlogPageFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['String']['input']>;
  categories_contains?: InputMaybe<Scalars['String']['input']>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_not?: InputMaybe<Scalars['String']['input']>;
  categories_not_contains?: InputMaybe<Scalars['String']['input']>;
  categories_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category?: InputMaybe<ICfCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  conclucion?: InputMaybe<Scalars['String']['input']>;
  conclucion_contains?: InputMaybe<Scalars['String']['input']>;
  conclucion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  conclucion_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  conclucion_not?: InputMaybe<Scalars['String']['input']>;
  conclucion_not_contains?: InputMaybe<Scalars['String']['input']>;
  conclucion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  descripctionCep?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_contains?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descripctionCep_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descripctionCep_not?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_not_contains?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  intro_contains?: InputMaybe<Scalars['String']['input']>;
  intro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  intro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  intro_not?: InputMaybe<Scalars['String']['input']>;
  intro_not_contains?: InputMaybe<Scalars['String']['input']>;
  intro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  pageUrl_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl_not?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD?: InputMaybe<Scalars['String']['input']>;
  productD2?: InputMaybe<Scalars['String']['input']>;
  productD2_contains?: InputMaybe<Scalars['String']['input']>;
  productD2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productD2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD2_not?: InputMaybe<Scalars['String']['input']>;
  productD2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productD2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD_contains?: InputMaybe<Scalars['String']['input']>;
  productD_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productD_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD_not?: InputMaybe<Scalars['String']['input']>;
  productD_not_contains?: InputMaybe<Scalars['String']['input']>;
  productD_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI?: InputMaybe<Scalars['String']['input']>;
  productI2?: InputMaybe<Scalars['String']['input']>;
  productI2_contains?: InputMaybe<Scalars['String']['input']>;
  productI2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productI2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI2_not?: InputMaybe<Scalars['String']['input']>;
  productI2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productI2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI_contains?: InputMaybe<Scalars['String']['input']>;
  productI_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productI_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI_not?: InputMaybe<Scalars['String']['input']>;
  productI_not_contains?: InputMaybe<Scalars['String']['input']>;
  productI_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productP?: InputMaybe<Scalars['Int']['input']>;
  productP2?: InputMaybe<Scalars['Int']['input']>;
  productP2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productP2_gt?: InputMaybe<Scalars['Int']['input']>;
  productP2_gte?: InputMaybe<Scalars['Int']['input']>;
  productP2_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productP2_lt?: InputMaybe<Scalars['Int']['input']>;
  productP2_lte?: InputMaybe<Scalars['Int']['input']>;
  productP2_not?: InputMaybe<Scalars['Int']['input']>;
  productP2_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productP_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productP_gt?: InputMaybe<Scalars['Int']['input']>;
  productP_gte?: InputMaybe<Scalars['Int']['input']>;
  productP_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productP_lt?: InputMaybe<Scalars['Int']['input']>;
  productP_lte?: InputMaybe<Scalars['Int']['input']>;
  productP_not?: InputMaybe<Scalars['Int']['input']>;
  productP_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productT?: InputMaybe<Scalars['String']['input']>;
  productT2?: InputMaybe<Scalars['String']['input']>;
  productT2_contains?: InputMaybe<Scalars['String']['input']>;
  productT2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productT2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productT2_not?: InputMaybe<Scalars['String']['input']>;
  productT2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productT2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productT_contains?: InputMaybe<Scalars['String']['input']>;
  productT_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productT_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productT_not?: InputMaybe<Scalars['String']['input']>;
  productT_not_contains?: InputMaybe<Scalars['String']['input']>;
  productT_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl?: InputMaybe<Scalars['String']['input']>;
  productUrl2?: InputMaybe<Scalars['String']['input']>;
  productUrl2_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productUrl2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl2_not?: InputMaybe<Scalars['String']['input']>;
  productUrl2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl_not?: InputMaybe<Scalars['String']['input']>;
  productUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recommendedPosts?: InputMaybe<ICfBlogPageNestedFilter>;
  recommendedPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCeo?: InputMaybe<Scalars['String']['input']>;
  titleCeo_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleCeo_not?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  update?: InputMaybe<Scalars['String']['input']>;
  update_contains?: InputMaybe<Scalars['String']['input']>;
  update_exists?: InputMaybe<Scalars['Boolean']['input']>;
  update_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  update_not?: InputMaybe<Scalars['String']['input']>;
  update_not_contains?: InputMaybe<Scalars['String']['input']>;
  update_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCanonical?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_contains?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlCanonical_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCanonical_not?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCeo?: InputMaybe<Scalars['String']['input']>;
  urlCeo_contains?: InputMaybe<Scalars['String']['input']>;
  urlCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCeo_not?: InputMaybe<Scalars['String']['input']>;
  urlCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IBlogPageLinkingCollections = {
  __typename?: 'BlogPageLinkingCollections';
  blogPageCollection?: Maybe<IBlogPageCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  newsCollection?: Maybe<INewsCollection>;
};


export type IBlogPageLinkingCollectionsBlogPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IBlogPageLinkingCollectionsBlogPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type IBlogPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type IBlogPageLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IBlogPageLinkingCollectionsNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum IBlogPageLinkingCollectionsBlogPageCollectionOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ProductD2Asc = 'productD2_ASC',
  ProductD2Desc = 'productD2_DESC',
  ProductDAsc = 'productD_ASC',
  ProductDDesc = 'productD_DESC',
  ProductI2Asc = 'productI2_ASC',
  ProductI2Desc = 'productI2_DESC',
  ProductIAsc = 'productI_ASC',
  ProductIDesc = 'productI_DESC',
  ProductP2Asc = 'productP2_ASC',
  ProductP2Desc = 'productP2_DESC',
  ProductPAsc = 'productP_ASC',
  ProductPDesc = 'productP_DESC',
  ProductT2Asc = 'productT2_ASC',
  ProductT2Desc = 'productT2_DESC',
  ProductTAsc = 'productT_ASC',
  ProductTDesc = 'productT_DESC',
  ProductUrl2Asc = 'productUrl2_ASC',
  ProductUrl2Desc = 'productUrl2_DESC',
  ProductUrlAsc = 'productUrl_ASC',
  ProductUrlDesc = 'productUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

export enum IBlogPageLinkingCollectionsNewsCollectionOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

export enum IBlogPageOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ProductD2Asc = 'productD2_ASC',
  ProductD2Desc = 'productD2_DESC',
  ProductDAsc = 'productD_ASC',
  ProductDDesc = 'productD_DESC',
  ProductI2Asc = 'productI2_ASC',
  ProductI2Desc = 'productI2_DESC',
  ProductIAsc = 'productI_ASC',
  ProductIDesc = 'productI_DESC',
  ProductP2Asc = 'productP2_ASC',
  ProductP2Desc = 'productP2_DESC',
  ProductPAsc = 'productP_ASC',
  ProductPDesc = 'productP_DESC',
  ProductT2Asc = 'productT2_ASC',
  ProductT2Desc = 'productT2_DESC',
  ProductTAsc = 'productT_ASC',
  ProductTDesc = 'productT_DESC',
  ProductUrl2Asc = 'productUrl2_ASC',
  ProductUrl2Desc = 'productUrl2_DESC',
  ProductUrlAsc = 'productUrl_ASC',
  ProductUrlDesc = 'productUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

export type IBlogPageRecommendedPostsCollection = {
  __typename?: 'BlogPageRecommendedPostsCollection';
  items: Array<Maybe<IBlogPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum IBlogPageRecommendedPostsCollectionOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ProductD2Asc = 'productD2_ASC',
  ProductD2Desc = 'productD2_DESC',
  ProductDAsc = 'productD_ASC',
  ProductDDesc = 'productD_DESC',
  ProductI2Asc = 'productI2_ASC',
  ProductI2Desc = 'productI2_DESC',
  ProductIAsc = 'productI_ASC',
  ProductIDesc = 'productI_DESC',
  ProductP2Asc = 'productP2_ASC',
  ProductP2Desc = 'productP2_DESC',
  ProductPAsc = 'productP_ASC',
  ProductPDesc = 'productP_DESC',
  ProductT2Asc = 'productT2_ASC',
  ProductT2Desc = 'productT2_DESC',
  ProductTAsc = 'productT_ASC',
  ProductTDesc = 'productT_DESC',
  ProductUrl2Asc = 'productUrl2_ASC',
  ProductUrl2Desc = 'productUrl2_DESC',
  ProductUrlAsc = 'productUrl_ASC',
  ProductUrlDesc = 'productUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategory = IEntry & {
  __typename?: 'Category';
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  descriptionCeo?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<IAsset>;
  keywords?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ICategoryLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: ISys;
  title?: Maybe<Scalars['String']['output']>;
  titleCeo?: Maybe<Scalars['String']['output']>;
  titleShow?: Maybe<Scalars['String']['output']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryDescriptionCeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryTitleCeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Category with title, slug, icon and description [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/category) */
export type ICategoryTitleShowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ICategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<ICategory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ICategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICategoryFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionCeo_not?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCeo?: InputMaybe<Scalars['String']['input']>;
  titleCeo_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleCeo_not?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleShow?: InputMaybe<Scalars['String']['input']>;
  titleShow_contains?: InputMaybe<Scalars['String']['input']>;
  titleShow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleShow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleShow_not?: InputMaybe<Scalars['String']['input']>;
  titleShow_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleShow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ICategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  blogPageCollection?: Maybe<IBlogPageCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  newsCollection?: Maybe<INewsCollection>;
};


export type ICategoryLinkingCollectionsBlogPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ICategoryLinkingCollectionsBlogPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ICategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ICategoryLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ICategoryLinkingCollectionsNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ICategoryLinkingCollectionsBlogPageCollectionOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ProductD2Asc = 'productD2_ASC',
  ProductD2Desc = 'productD2_DESC',
  ProductDAsc = 'productD_ASC',
  ProductDDesc = 'productD_DESC',
  ProductI2Asc = 'productI2_ASC',
  ProductI2Desc = 'productI2_DESC',
  ProductIAsc = 'productI_ASC',
  ProductIDesc = 'productI_DESC',
  ProductP2Asc = 'productP2_ASC',
  ProductP2Desc = 'productP2_DESC',
  ProductPAsc = 'productP_ASC',
  ProductPDesc = 'productP_DESC',
  ProductT2Asc = 'productT2_ASC',
  ProductT2Desc = 'productT2_DESC',
  ProductTAsc = 'productT_ASC',
  ProductTDesc = 'productT_DESC',
  ProductUrl2Asc = 'productUrl2_ASC',
  ProductUrl2Desc = 'productUrl2_DESC',
  ProductUrlAsc = 'productUrl_ASC',
  ProductUrlDesc = 'productUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

export enum ICategoryLinkingCollectionsNewsCollectionOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

export enum ICategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleShowAsc = 'titleShow_ASC',
  TitleShowDesc = 'titleShow_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type IContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<IContentfulTag>>;
};

export type IContentfulMetadataFilter = {
  tags?: InputMaybe<IContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type IContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IEntry = {
  contentfulMetadata: IContentfulMetadata;
  sys: ISys;
};

export type IEntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<IEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  sys?: InputMaybe<ISysFilter>;
};

export enum IEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum IImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum IImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum IImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type IImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<IImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<IImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<IImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INews = IEntry & {
  __typename?: 'News';
  body?: Maybe<INewsBody>;
  categories?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ICategory>;
  contentfulMetadata: IContentfulMetadata;
  descripctionCep?: Maybe<Scalars['String']['output']>;
  image?: Maybe<IAsset>;
  intro?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<INewsLinkingCollections>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  recommendedPostsCollection?: Maybe<INewsRecommendedPostsCollection>;
  sys: ISys;
  title?: Maybe<Scalars['String']['output']>;
  titleCeo?: Maybe<Scalars['String']['output']>;
  update?: Maybe<Scalars['String']['output']>;
  urlCanonical?: Maybe<Scalars['String']['output']>;
  urlCeo?: Maybe<Scalars['String']['output']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsCategoriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ICategoryFilter>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsDescripctionCepArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsPageUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsRecommendedPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<INewsRecommendedPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IBlogPageFilter>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsTitleCeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsUpdateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsUrlCanonicalArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Blog page with title, body, image and other recommended posts [See type definition](https://app.contentful.com/spaces/tele5jwzdht7/content_types/news) */
export type INewsUrlCeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type INewsBody = {
  __typename?: 'NewsBody';
  json: Scalars['JSON']['output'];
  links: INewsBodyLinks;
};

export type INewsBodyAssets = {
  __typename?: 'NewsBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
};

export type INewsBodyEntries = {
  __typename?: 'NewsBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
};

export type INewsBodyLinks = {
  __typename?: 'NewsBodyLinks';
  assets: INewsBodyAssets;
  entries: INewsBodyEntries;
  resources: INewsBodyResources;
};

export type INewsBodyResources = {
  __typename?: 'NewsBodyResources';
  block: Array<IResourceLink>;
  hyperlink: Array<IResourceLink>;
  inline: Array<IResourceLink>;
};

export type INewsCollection = {
  __typename?: 'NewsCollection';
  items: Array<Maybe<INews>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type INewsFilter = {
  AND?: InputMaybe<Array<InputMaybe<INewsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<INewsFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['String']['input']>;
  categories_contains?: InputMaybe<Scalars['String']['input']>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_not?: InputMaybe<Scalars['String']['input']>;
  categories_not_contains?: InputMaybe<Scalars['String']['input']>;
  categories_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category?: InputMaybe<ICfCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  descripctionCep?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_contains?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descripctionCep_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descripctionCep_not?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_not_contains?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  intro_contains?: InputMaybe<Scalars['String']['input']>;
  intro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  intro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  intro_not?: InputMaybe<Scalars['String']['input']>;
  intro_not_contains?: InputMaybe<Scalars['String']['input']>;
  intro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  pageUrl_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl_not?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recommendedPosts?: InputMaybe<ICfBlogPageNestedFilter>;
  recommendedPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCeo?: InputMaybe<Scalars['String']['input']>;
  titleCeo_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleCeo_not?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  update?: InputMaybe<Scalars['String']['input']>;
  update_contains?: InputMaybe<Scalars['String']['input']>;
  update_exists?: InputMaybe<Scalars['Boolean']['input']>;
  update_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  update_not?: InputMaybe<Scalars['String']['input']>;
  update_not_contains?: InputMaybe<Scalars['String']['input']>;
  update_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCanonical?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_contains?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlCanonical_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCanonical_not?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCeo?: InputMaybe<Scalars['String']['input']>;
  urlCeo_contains?: InputMaybe<Scalars['String']['input']>;
  urlCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCeo_not?: InputMaybe<Scalars['String']['input']>;
  urlCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type INewsLinkingCollections = {
  __typename?: 'NewsLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type INewsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum INewsOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

export type INewsRecommendedPostsCollection = {
  __typename?: 'NewsRecommendedPostsCollection';
  items: Array<Maybe<IBlogPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum INewsRecommendedPostsCollectionOrder {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  DescripctionCepAsc = 'descripctionCep_ASC',
  DescripctionCepDesc = 'descripctionCep_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ProductD2Asc = 'productD2_ASC',
  ProductD2Desc = 'productD2_DESC',
  ProductDAsc = 'productD_ASC',
  ProductDDesc = 'productD_DESC',
  ProductI2Asc = 'productI2_ASC',
  ProductI2Desc = 'productI2_DESC',
  ProductIAsc = 'productI_ASC',
  ProductIDesc = 'productI_DESC',
  ProductP2Asc = 'productP2_ASC',
  ProductP2Desc = 'productP2_DESC',
  ProductPAsc = 'productP_ASC',
  ProductPDesc = 'productP_DESC',
  ProductT2Asc = 'productT2_ASC',
  ProductT2Desc = 'productT2_DESC',
  ProductTAsc = 'productT_ASC',
  ProductTDesc = 'productT_DESC',
  ProductUrl2Asc = 'productUrl2_ASC',
  ProductUrl2Desc = 'productUrl2_DESC',
  ProductUrlAsc = 'productUrl_ASC',
  ProductUrlDesc = 'productUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleCeoAsc = 'titleCeo_ASC',
  TitleCeoDesc = 'titleCeo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdateAsc = 'update_ASC',
  UpdateDesc = 'update_DESC',
  UrlCanonicalAsc = 'urlCanonical_ASC',
  UrlCanonicalDesc = 'urlCanonical_DESC',
  UrlCeoAsc = 'urlCeo_ASC',
  UrlCeoDesc = 'urlCeo_DESC'
}

export type IQuery = {
  __typename?: 'Query';
  asset?: Maybe<IAsset>;
  assetCollection?: Maybe<IAssetCollection>;
  blogPage?: Maybe<IBlogPage>;
  blogPageCollection?: Maybe<IBlogPageCollection>;
  category?: Maybe<ICategory>;
  categoryCollection?: Maybe<ICategoryCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  news?: Maybe<INews>;
  newsCollection?: Maybe<INewsCollection>;
};


export type IQueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type IQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IAssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IAssetFilter>;
};


export type IQueryBlogPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type IQueryBlogPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IBlogPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IBlogPageFilter>;
};


export type IQueryCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type IQueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ICategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ICategoryFilter>;
};


export type IQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IEntryFilter>;
};


export type IQueryNewsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type IQueryNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<INewsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<INewsFilter>;
};

export type IResourceLink = {
  __typename?: 'ResourceLink';
  sys: IResourceSys;
};

export type IResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type ISys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type ISysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type ICfBlogPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICfBlogPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfBlogPageNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['String']['input']>;
  categories_contains?: InputMaybe<Scalars['String']['input']>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_not?: InputMaybe<Scalars['String']['input']>;
  categories_not_contains?: InputMaybe<Scalars['String']['input']>;
  categories_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  conclucion?: InputMaybe<Scalars['String']['input']>;
  conclucion_contains?: InputMaybe<Scalars['String']['input']>;
  conclucion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  conclucion_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  conclucion_not?: InputMaybe<Scalars['String']['input']>;
  conclucion_not_contains?: InputMaybe<Scalars['String']['input']>;
  conclucion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  descripctionCep?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_contains?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descripctionCep_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descripctionCep_not?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_not_contains?: InputMaybe<Scalars['String']['input']>;
  descripctionCep_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  intro_contains?: InputMaybe<Scalars['String']['input']>;
  intro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  intro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  intro_not?: InputMaybe<Scalars['String']['input']>;
  intro_not_contains?: InputMaybe<Scalars['String']['input']>;
  intro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  pageUrl_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl_not?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD?: InputMaybe<Scalars['String']['input']>;
  productD2?: InputMaybe<Scalars['String']['input']>;
  productD2_contains?: InputMaybe<Scalars['String']['input']>;
  productD2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productD2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD2_not?: InputMaybe<Scalars['String']['input']>;
  productD2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productD2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD_contains?: InputMaybe<Scalars['String']['input']>;
  productD_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productD_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productD_not?: InputMaybe<Scalars['String']['input']>;
  productD_not_contains?: InputMaybe<Scalars['String']['input']>;
  productD_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI?: InputMaybe<Scalars['String']['input']>;
  productI2?: InputMaybe<Scalars['String']['input']>;
  productI2_contains?: InputMaybe<Scalars['String']['input']>;
  productI2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productI2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI2_not?: InputMaybe<Scalars['String']['input']>;
  productI2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productI2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI_contains?: InputMaybe<Scalars['String']['input']>;
  productI_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productI_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productI_not?: InputMaybe<Scalars['String']['input']>;
  productI_not_contains?: InputMaybe<Scalars['String']['input']>;
  productI_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productP?: InputMaybe<Scalars['Int']['input']>;
  productP2?: InputMaybe<Scalars['Int']['input']>;
  productP2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productP2_gt?: InputMaybe<Scalars['Int']['input']>;
  productP2_gte?: InputMaybe<Scalars['Int']['input']>;
  productP2_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productP2_lt?: InputMaybe<Scalars['Int']['input']>;
  productP2_lte?: InputMaybe<Scalars['Int']['input']>;
  productP2_not?: InputMaybe<Scalars['Int']['input']>;
  productP2_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productP_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productP_gt?: InputMaybe<Scalars['Int']['input']>;
  productP_gte?: InputMaybe<Scalars['Int']['input']>;
  productP_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productP_lt?: InputMaybe<Scalars['Int']['input']>;
  productP_lte?: InputMaybe<Scalars['Int']['input']>;
  productP_not?: InputMaybe<Scalars['Int']['input']>;
  productP_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productT?: InputMaybe<Scalars['String']['input']>;
  productT2?: InputMaybe<Scalars['String']['input']>;
  productT2_contains?: InputMaybe<Scalars['String']['input']>;
  productT2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productT2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productT2_not?: InputMaybe<Scalars['String']['input']>;
  productT2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productT2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productT_contains?: InputMaybe<Scalars['String']['input']>;
  productT_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productT_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productT_not?: InputMaybe<Scalars['String']['input']>;
  productT_not_contains?: InputMaybe<Scalars['String']['input']>;
  productT_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl?: InputMaybe<Scalars['String']['input']>;
  productUrl2?: InputMaybe<Scalars['String']['input']>;
  productUrl2_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productUrl2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl2_not?: InputMaybe<Scalars['String']['input']>;
  productUrl2_not_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUrl_not?: InputMaybe<Scalars['String']['input']>;
  productUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  productUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recommendedPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCeo?: InputMaybe<Scalars['String']['input']>;
  titleCeo_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleCeo_not?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  update?: InputMaybe<Scalars['String']['input']>;
  update_contains?: InputMaybe<Scalars['String']['input']>;
  update_exists?: InputMaybe<Scalars['Boolean']['input']>;
  update_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  update_not?: InputMaybe<Scalars['String']['input']>;
  update_not_contains?: InputMaybe<Scalars['String']['input']>;
  update_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCanonical?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_contains?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlCanonical_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCanonical_not?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlCanonical_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCeo?: InputMaybe<Scalars['String']['input']>;
  urlCeo_contains?: InputMaybe<Scalars['String']['input']>;
  urlCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlCeo_not?: InputMaybe<Scalars['String']['input']>;
  urlCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ICfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionCeo_not?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCeo?: InputMaybe<Scalars['String']['input']>;
  titleCeo_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleCeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleCeo_not?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleCeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleShow?: InputMaybe<Scalars['String']['input']>;
  titleShow_contains?: InputMaybe<Scalars['String']['input']>;
  titleShow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleShow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleShow_not?: InputMaybe<Scalars['String']['input']>;
  titleShow_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleShow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IAssetFieldsFragment = { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null };

export type ICategoryFieldsFragment = { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null };

export type IRecommendedPostsCollectionFragment = { __typename?: 'BlogPageRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> };

export type IBlogFieldsFragment = { __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, productT?: string | null, productI?: string | null, productD?: string | null, productP?: number | null, productUrl?: string | null, productT2?: string | null, productI2?: string | null, productD2?: string | null, productP2?: number | null, productUrl2?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'BlogPageBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'BlogPageRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null };

export type IGetblogPageListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type IGetblogPageListQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, productT?: string | null, productI?: string | null, productD?: string | null, productP?: number | null, productUrl?: string | null, productT2?: string | null, productI2?: string | null, productD2?: string | null, productP2?: number | null, productUrl2?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'BlogPageBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'BlogPageRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type IGetblogQueryVariables = Exact<{
  pageUrl: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type IGetblogQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, productT?: string | null, productI?: string | null, productD?: string | null, productP?: number | null, productUrl?: string | null, productT2?: string | null, productI2?: string | null, productD2?: string | null, productP2?: number | null, productUrl2?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'BlogPageBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'BlogPageRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type INewsRecommendedPostsCollectionFragment = { __typename?: 'NewsRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> };

export type INewsFieldsFragment = { __typename?: 'News', pageUrl?: string | null, title?: string | null, intro?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'NewsBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'NewsRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null };

export type IGetNewsListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type IGetNewsListQuery = { __typename?: 'Query', newsCollection?: { __typename?: 'NewsCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'News', pageUrl?: string | null, title?: string | null, intro?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'NewsBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'NewsRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type IGetNewsQueryVariables = Exact<{
  pageUrl: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type IGetNewsQuery = { __typename?: 'Query', newsCollection?: { __typename?: 'NewsCollection', items: Array<{ __typename?: 'News', pageUrl?: string | null, title?: string | null, intro?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'NewsBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'NewsRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type ISearchBlogQueryVariables = Exact<{
  term: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ISearchBlogQuery = { __typename?: 'Query', blogPageCollection?: { __typename?: 'BlogPageCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, productT?: string | null, productI?: string | null, productD?: string | null, productP?: number | null, productUrl?: string | null, productT2?: string | null, productI2?: string | null, productD2?: string | null, productP2?: number | null, productUrl2?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'BlogPageBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'BlogPageRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type IGetCategoryListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<ICategoryOrder>> | InputMaybe<ICategoryOrder>>;
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type IGetCategoryListQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type IGetBlogListByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type IGetBlogListByCategoryQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null, blogPageCollection?: { __typename?: 'BlogPageCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, keywords?: string | null, urlCeo?: string | null, urlCanonical?: string | null, productT?: string | null, productI?: string | null, productD?: string | null, productP?: number | null, productUrl?: string | null, productT2?: string | null, productI2?: string | null, productD2?: string | null, productP2?: number | null, productUrl2?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, body?: { __typename?: 'BlogPageBody', json: any } | null, recommendedPostsCollection?: { __typename?: 'BlogPageRecommendedPostsCollection', items: Array<{ __typename?: 'BlogPage', pageUrl?: string | null, title?: string | null, intro?: string | null, conclucion?: string | null, titleCeo?: string | null, descripctionCep?: string | null, update?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null, category?: { __typename?: 'Category', slug?: string | null, title?: string | null, description?: string | null, titleCeo?: string | null, descriptionCeo?: string | null, keywords?: string | null, titleShow?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export const AssetFieldsFragmentDoc = gql`
    fragment AssetFields on Asset {
  title
  url
  width
  height
}
    `;
export const CategoryFieldsFragmentDoc = gql`
    fragment CategoryFields on Category {
  sys {
    id
  }
  slug
  title
  description
  icon {
    ...AssetFields
  }
  titleCeo
  descriptionCeo
  keywords
  titleShow
}
    ${AssetFieldsFragmentDoc}`;
export const RecommendedPostsCollectionFragmentDoc = gql`
    fragment RecommendedPostsCollection on BlogPageRecommendedPostsCollection {
  items {
    sys {
      id
    }
    pageUrl
    title
    intro
    image {
      ...AssetFields
    }
    conclucion
    titleCeo
    descripctionCep
    category {
      ...CategoryFields
    }
    update
  }
}
    ${AssetFieldsFragmentDoc}
${CategoryFieldsFragmentDoc}`;
export const BlogFieldsFragmentDoc = gql`
    fragment BlogFields on BlogPage {
  sys {
    id
  }
  pageUrl
  title
  intro
  image {
    ...AssetFields
  }
  body {
    json
  }
  conclucion
  recommendedPostsCollection {
    ...RecommendedPostsCollection
  }
  titleCeo
  descripctionCep
  keywords
  urlCeo
  urlCanonical
  category {
    ...CategoryFields
  }
  productT
  productI
  productD
  productP
  productUrl
  productT2
  productI2
  productD2
  productP2
  productUrl2
  update
}
    ${AssetFieldsFragmentDoc}
${RecommendedPostsCollectionFragmentDoc}
${CategoryFieldsFragmentDoc}`;
export const NewsRecommendedPostsCollectionFragmentDoc = gql`
    fragment newsRecommendedPostsCollection on NewsRecommendedPostsCollection {
  items {
    sys {
      id
    }
    pageUrl
    title
    intro
    image {
      ...AssetFields
    }
    conclucion
    titleCeo
    descripctionCep
    category {
      ...CategoryFields
    }
    update
  }
}
    ${AssetFieldsFragmentDoc}
${CategoryFieldsFragmentDoc}`;
export const NewsFieldsFragmentDoc = gql`
    fragment NewsFields on News {
  sys {
    id
  }
  pageUrl
  title
  intro
  image {
    ...AssetFields
  }
  body {
    json
  }
  recommendedPostsCollection {
    ...newsRecommendedPostsCollection
  }
  titleCeo
  descripctionCep
  keywords
  urlCeo
  urlCanonical
  category {
    ...CategoryFields
  }
  update
}
    ${AssetFieldsFragmentDoc}
${NewsRecommendedPostsCollectionFragmentDoc}
${CategoryFieldsFragmentDoc}`;
export const GetblogPageListDocument = gql`
    query getblogPageList($limit: Int = 10, $skip: Int = 0, $locale: String) {
  blogPageCollection(limit: $limit, skip: $skip, locale: $locale) {
    total
    skip
    limit
    items {
      ...BlogFields
    }
  }
}
    ${BlogFieldsFragmentDoc}`;
export const GetblogDocument = gql`
    query getblog($pageUrl: String!, $preview: Boolean = false, $locale: String) {
  blogPageCollection(
    where: {pageUrl: $pageUrl}
    preview: $preview
    limit: 1
    locale: $locale
  ) {
    items {
      ...BlogFields
    }
  }
}
    ${BlogFieldsFragmentDoc}`;
export const GetNewsListDocument = gql`
    query getNewsList($limit: Int = 10, $skip: Int = 0, $locale: String) {
  newsCollection(limit: $limit, skip: $skip, locale: $locale) {
    total
    skip
    limit
    items {
      ...NewsFields
    }
  }
}
    ${NewsFieldsFragmentDoc}`;
export const GetNewsDocument = gql`
    query getNews($pageUrl: String!, $preview: Boolean = false, $locale: String) {
  newsCollection(
    where: {pageUrl: $pageUrl}
    preview: $preview
    limit: 1
    locale: $locale
  ) {
    items {
      ...NewsFields
    }
  }
}
    ${NewsFieldsFragmentDoc}`;
export const SearchBlogDocument = gql`
    query searchBlog($term: String!, $locale: String, $limit: Int = 10, $skip: Int = 0) {
  blogPageCollection(
    where: {title_contains: $term}
    locale: $locale
    limit: $limit
    skip: $skip
  ) {
    total
    skip
    limit
    items {
      ...BlogFields
    }
  }
}
    ${BlogFieldsFragmentDoc}`;
export const GetCategoryListDocument = gql`
    query getCategoryList($limit: Int = 10, $skip: Int = 0, $order: [CategoryOrder] = sys_publishedAt_DESC, $locale: String) {
  categoryCollection(limit: $limit, skip: $skip, order: $order, locale: $locale) {
    items {
      ...CategoryFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}`;
export const GetBlogListByCategoryDocument = gql`
    query getBlogListByCategory($category: String!, $locale: String, $limit: Int = 10) {
  categoryCollection(limit: 1, locale: $locale, where: {slug: $category}) {
    items {
      ...CategoryFields
    }
  }
  blogPageCollection(
    limit: $limit
    locale: $locale
    where: {category: {slug: $category}}
  ) {
    items {
      ...BlogFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}
${BlogFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getblogPageList(variables?: IGetblogPageListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetblogPageListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetblogPageListQuery>(GetblogPageListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getblogPageList', 'query');
    },
    getblog(variables: IGetblogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetblogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetblogQuery>(GetblogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getblog', 'query');
    },
    getNewsList(variables?: IGetNewsListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetNewsListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetNewsListQuery>(GetNewsListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNewsList', 'query');
    },
    getNews(variables: IGetNewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetNewsQuery>(GetNewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNews', 'query');
    },
    searchBlog(variables: ISearchBlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ISearchBlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ISearchBlogQuery>(SearchBlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchBlog', 'query');
    },
    getCategoryList(variables?: IGetCategoryListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetCategoryListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetCategoryListQuery>(GetCategoryListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryList', 'query');
    },
    getBlogListByCategory(variables: IGetBlogListByCategoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetBlogListByCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetBlogListByCategoryQuery>(GetBlogListByCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogListByCategory', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;