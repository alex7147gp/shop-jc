import HeadS from "../../components/Head";
import Home from "../../templates/Home";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getBlogPageList, getCategoryList, getNewsList, getTutorialsList } from '../../../api';

import { useTranslation } from 'next-i18next';

import logo from '../../assets/icons/logo.jpeg';


export const getStaticProps = async ({ locale }) => {

  const blogs = await getBlogPageList({ limit: 10, locale });
  const categorie = await getCategoryList({ limit: 10, locale });
  const news = await getNewsList({ limit: 10, locale});
  const tutorials = await getTutorialsList({ limit: 10, locale});
  const i18nConf = await serverSideTranslations(locale || 'default-locale');

  return {
    props: {
      blogs,
      categorie,
      news,
      tutorials,
      locale,
      ...i18nConf
    },
    revalidate: 5 * 60,
  };
};

export default function HomeOne({ blogs, categorie, news, tutorials, locale }) {

  const { t } = useTranslation(['categorieOfert']);

  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={t("titleCeoBlog")}
        description={t("descriptionCeoBlog")}
        keywords={t("keywordsCeoBlog")}
        urlC={"/"}
        url={"/"}
        img={logo}
        locale={locale}
      />
      <Home 
        blogs={blogs} categorie={categorie} news={news} tutorials={tutorials} locale={locale} />
    </div>
  );
};
