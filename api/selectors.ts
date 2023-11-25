import type {
  Maybe,
  ISys,
  IAsset,
  ICategory,
  IBlogPage,
  INews
} from './generated/graphql';
import type { Image, Category, Blog, News } from './resources';

// Generic utilities
// ----------------------------------------------------------------
export function nonEmpty<T, O = unknown>(selector: (entity: T) => O) {
  return (entity: Maybe<T> | undefined | null) => {
    if (entity == null) {
      throw new Error(`unexpected empty object found`);
    }

    return selector(entity);
  };
}

type PartialCollection<T> = {
  items: Array<Maybe<T>>
}
export function selectListOf<T, O>(entitySelector: (entity: T) => O) {
  return nonEmpty<PartialCollection<T>, Array<O>>((partialCollection) =>
    partialCollection.items.map(nonEmpty(entitySelector))
  );
}

type PartialEntityWithId = { sys: Pick<ISys, 'id'> }
export const selectEntityId = ({ sys: { id } }: PartialEntityWithId): string =>
  id;

// Entities selectors
// ----------------------------------------------------------------
type PartialImageFields = Pick<IAsset, 'title' | 'url' | 'width' | 'height'>
export const selectImage = nonEmpty<PartialImageFields, Image>(
  (partialImage) => ({
    title: partialImage.title!,
    url: partialImage.url!,
    width: partialImage.width!,
    height: partialImage.height!,
  })
);

type PartialCategory = PartialEntityWithId & {
  icon?: Maybe<PartialImageFields>
} & Pick<ICategory, 'title' | 'slug' | 'description' | 'titleCeo' | 'descriptionCeo' | 'keywords' | 'titleShow'>
export const selectCategory = nonEmpty<PartialCategory, Category>(
  (partialCategory) => ({
    id: selectEntityId(partialCategory),
    title: partialCategory.title!,
    slug: partialCategory.slug!,
    icon: selectImage(partialCategory.icon),
    description: partialCategory.description!,
    titleCeo: partialCategory.titleCeo!,
    descriptionCeo: partialCategory.descriptionCeo!,
    keywords: partialCategory.keywords!,
    titleShow: partialCategory.titleShow!
  })
);

export const selectCategories = selectListOf(selectCategory)

type PartialBlogPageRecommendedPost = {
  sys: {
    id: string;
  };
  pageUrl?: string;
  title?: string;
  intro?: string;
  image?: PartialImageFields | null;
  conclucion?: string;
  titleCeo?: string;
  descripctionCep?: string;
  category?: PartialCategory | null;
  update?: string;

};

type PartialBlog = Pick<IBlogPage, 
'pageUrl' | 
'title' | 
'intro' |
'conclucion' |
'titleCeo' |
'descripctionCep' |
'keywords' |
'urlCeo' |
'urlCanonical' |
'productT' |
'productI' |
'productD' |
'productP' |
'productUrl' |
'productT2' |
'productI2' |
'productD2' |
'productP2' |
'productUrl2' |
'update' 
> &
  PartialEntityWithId & { description?: Maybe<{ json: JSON }> } & { body?: Maybe<{ json: JSON }>; } & {
    image?: Maybe<PartialImageFields> 
  } & { category?: Maybe<PartialCategory> } & { recommendedPostsCollection?: Maybe<{
    items: Array<PartialBlogPageRecommendedPost>;
  }>;}

export const selectBlogPage = nonEmpty<PartialBlog, Blog>((partialBlogPage) => ({
  id: selectEntityId(partialBlogPage),
  pageUrl: partialBlogPage.pageUrl || '', // Hacer opcionales las propiedades opcionales
  title: partialBlogPage.title || '',       // Hacer opcionales las propiedades opcionales
  intro: partialBlogPage.intro || '',       // Hacer opcionales las propiedades opcionales
  body: partialBlogPage.body ? (partialBlogPage.body.json as any) : null,
  conclucion: partialBlogPage.conclucion || '', // Hacer opcionales las propiedades opcionales
  titleCeo: partialBlogPage.titleCeo || '',     // Hacer opcionales las propiedades opcionales
  image: partialBlogPage.image ? selectImage(partialBlogPage.image) : null,
  category: partialBlogPage.category ? selectCategory(partialBlogPage.category) : null,
  descripctionCep: partialBlogPage.descripctionCep || '', // Hacer opcionales las propiedades opcionales
  keywords: partialBlogPage.keywords || '',               // Hacer opcionales las propiedades opcionales
  urlCeo: partialBlogPage.urlCeo || '',                   // Hacer opcionales las propiedades opcionales
  urlCanonical: partialBlogPage.urlCanonical || '',       // Hacer opcionales las propiedades opcionales
   recommendedPostsCollection: partialBlogPage.recommendedPostsCollection
    ? partialBlogPage.recommendedPostsCollection.items.map((item) => ({
        id: selectEntityId(item),
        pageUrl: item.pageUrl || '',
        title: item.title || '',
        intro: item.intro || '',
        image: item.image ? selectImage(item.image) : null,
        conclucion: item.conclucion || '',
        titleCeo: item.titleCeo || '',
        descripctionCep: item.descripctionCep || '',
        category: item.category ? selectCategory(item.category) : null,
        update: item.update
        // Otras propiedades de BlogPage aquí...
      }))
    : [], // Puedes establecer un valor predeterminado si es null o undefined
  productT: partialBlogPage.productT || '',               // Hacer opcionales las propiedades opcionales
  productI: partialBlogPage.productI || '',               // Hacer opcionales las propiedades opcionales
  productD: partialBlogPage.productD || '',               // Hacer opcionales las propiedades opcionales
  productP: partialBlogPage.productP,               // Hacer opcionales las propiedades opcionales
  productUrl: partialBlogPage.productUrl || '',           // Hacer opcionales las propiedades opcionales
  productT2: partialBlogPage.productT2 || '',             // Hacer opcionales las propiedades opcionales
  productI2: partialBlogPage.productI2 || '',             // Hacer opcionales las propiedades opcionales
  productD2: partialBlogPage.productD2 || '',             // Hacer opcionales las propiedades opcionales
  productP2: partialBlogPage.productP2,             // Hacer opcionales las propiedades opcionales
  productUrl2: partialBlogPage.productUrl2 || '',         // Hacer opcionales las propiedades opcionales
  update: partialBlogPage.update || '',                   // Hacer opcionales las propiedades opcionales
}));

type PartialNewsRecommendedPost = {
  sys: {
    id: string;
  };
  pageUrl?: string;
  title?: string;
  intro?: string;
  image?: PartialImageFields | null;
  titleCeo?: string;
  descripctionCep?: string;
  category?: PartialCategory | null;
  update?: string;

};

type PartialNews = Pick<INews, 
'pageUrl' | 
'title' | 
'intro' |
'titleCeo' |
'descripctionCep' |
'keywords' |
'urlCeo' |
'urlCanonical' |
'update' 
> &
  PartialEntityWithId & { description?: Maybe<{ json: JSON }> } & { body?: Maybe<{ json: JSON }>; } & {
    image?: Maybe<PartialImageFields> 
  } & { category?: Maybe<PartialCategory> } & { recommendedPostsCollection?: Maybe<{
    items: Array<PartialNewsRecommendedPost>;
  }>;}


export const selectNew = nonEmpty<PartialNews, News>((partialNews) => ({
  id: selectEntityId(partialNews),
  pageUrl: partialNews.pageUrl || '', // Hacer opcionales las propiedades opcionales
  title: partialNews.title || '',       // Hacer opcionales las propiedades opcionales
  intro: partialNews.intro || '',       // Hacer opcionales las propiedades opcionales
  body: partialNews.body ? (partialNews.body.json as any) : null,
  titleCeo: partialNews.titleCeo || '',     // Hacer opcionales las propiedades opcionales
  image: partialNews.image ? selectImage(partialNews.image) : null,
  category: partialNews.category ? selectCategory(partialNews.category) : null,
  descripctionCep: partialNews.descripctionCep || '', // Hacer opcionales las propiedades opcionales
  keywords: partialNews.keywords || '',               // Hacer opcionales las propiedades opcionales
  urlCeo: partialNews.urlCeo || '',                   // Hacer opcionales las propiedades opcionales
  urlCanonical: partialNews.urlCanonical || '',       // Hacer opcionales las propiedades opcionales
   recommendedPostsCollection: partialNews.recommendedPostsCollection
    ? partialNews.recommendedPostsCollection.items.map((item) => ({
        id: selectEntityId(item),
        pageUrl: item.pageUrl || '',
        title: item.title || '',
        intro: item.intro || '',
        image: item.image ? selectImage(item.image) : null,
        titleCeo: item.titleCeo || '',
        descripctionCep: item.descripctionCep || '',
        category: item.category ? selectCategory(item.category) : null,
        update: item.update
        // Otras propiedades de BlogPage aquí...
      }))
    : [], // Puedes establecer un valor predeterminado si es null o undefined
  update: partialNews.update || '',                   // Hacer opcionales las propiedades opcionales
}));

export const selectBlogPages = selectListOf(selectBlogPage);

export const selectNews = selectListOf(selectNew);
