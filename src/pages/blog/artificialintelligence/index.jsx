import HeadS from "../../../components/Head";
import HeadPage from "../../../components/HeadPage";

import ReviewOfert from "../../../components/ReviewOfert";
import CategorieOfert from "../../../components/CategorieOfert";

import SecondHeader from "../../../components/SecondHeader";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getCategoryList, getBlogListByCategory } from '../../../../api';

export const getStaticProps = async ({ locale }) => {

  const categoryLocal = 'artificialintelligence';

  const categorie = await getCategoryList({ limit: 10, locale });
  const { entries, category } = await getBlogListByCategory({
      category: categoryLocal,
      limit: 12,
      locale: locale,
    });
  const i18nConf = await serverSideTranslations(locale || 'default-locale');

  return {
    props: {
      categorie,
      entries,
      category,
      locale: locale,
      ...i18nConf
    },
    revalidate: 5 * 60,
  };
};


export default function Accessories({ categorie, entries, category, locale }) {

  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={category.titleCeo}
        description={category.descriptionCeo}
        keywords={category.keywords}
        urlC={`blog/${category.slug}`}
        url={`blog/${category.slug}`}
        locale={locale}
      />
      <SecondHeader /> 
      <HeadPage 
        title={category.title}
        description={category.description}
        image={category.icon}
      />
      <ReviewOfert blogs={entries} article={locale == 'es' ? 'Inteligencia Artificial' : 'Artificial Inteligen'} cantidad={entries.length} />
      <CategorieOfert categorie={categorie} />
    </div>
  );
};
