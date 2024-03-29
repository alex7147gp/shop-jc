import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getBlogListByCategory, getCategoryList } from '../../api';
import ReviewOfert from '../components/ReviewOfert';

function BlogSection({ locale }) {
  const categories = ['accessories', 'smartphone', 'cryptocurrency', 'artificialintelligence', 'computers', 'gaming', 'tablets'];
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [categoryBlogs, setCategoryBlogs] = useState({});
  const [hasMore, setHasMore] = useState(true);
  
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryList({ limit: 10, locale });
        setCategorie(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    }; 

    fetchData();
  }, [locale]);

  const article = (name) => {

    const nameArticle = categorie.filter(categoria => categoria.slug === name);

    const nameCategory = nameArticle[0]?.titleShow;

    return nameCategory;
  };

  const loadMoreBlogs = async (category) => {
    
    try {
      const response = await getBlogListByCategory({
        category,
        limit: 12,
        locale,
        skip: categoryBlogs[category] ? categoryBlogs[category].length : 0,
      });

      if (response.entries && response.entries.length > 0) {
        setCategoryBlogs((prevCategoryBlogs) => ({
          ...prevCategoryBlogs,
          [category]: prevCategoryBlogs[category]
            ? [...prevCategoryBlogs[category], ...response.entries]
            : response.entries,
        }));

        // Cambia al siguiente índice de categoría
        const nextCategoryIndex = currentCategoryIndex + 1;

        if (nextCategoryIndex < categories.length) {
          setCurrentCategoryIndex(nextCategoryIndex);
        } else {
          // No hay más categorías para mostrar
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error al cargar más blogs:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    const currentCategory = categories[currentCategoryIndex];
    loadMoreBlogs(currentCategory);
  }, [currentCategoryIndex]);


  return (
    <div>
      {categories.map((category, index) => (
        <ReviewOfert 
          key={index}
          blogs={categoryBlogs[category] || []}
          article={article(category)} 
        />
      ))}
      <InfiniteScroll
        dataLength={categoryBlogs[categories[currentCategoryIndex]] ? categoryBlogs[categories[currentCategoryIndex]].length : 0}
        next={() => {
          // La lógica de cambio de categoría ahora está dentro de loadMoreBlogs
        }} 
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
        //endMessage={
        //  <p style={{ textAlign: 'center' }}> 
        //    No hay más categorías para mostrar.
        //  </p>
        //}
      />
    </div>
  );
}

export default BlogSection;