import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Search.module.scss';
import { useTranslation } from 'next-i18next';
import { getBlogPageList } from '../../api';
import SearchI from '../assets/logos/icons8-search.svg';


const Search = () => {
  const locale = typeof window !== 'undefined' && window.location.pathname.split('/')[1];
  const locales = locale == "es" ? locale : "en-US";

  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { t } = useTranslation(['header']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogPageList({ limit: 20, locale: locales });
        setArticles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    }; 

    fetchData();
  }, [locale]);

  useEffect(() => {
    // Verifica si el término de búsqueda está vacío antes de actualizar los resultados
    if (searchTerm === '') {
      setSearchResults([]);
      return;
    }

    const results = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, articles]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles['navbar-search']}>
        <div className={styles.search}>
          <form>
            <div>
              <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder={t('search')}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <button>
              <Image src={SearchI} alt="search"/>
            </button>
          </form>
        </div>
        {/* Mostrar los resultados de búsqueda debajo del campo de búsqueda */}
        <div className={styles['search-results']}>
          {searchResults.length > 0 && (
            <ul>
              {searchResults.slice(0, 5).map((article) => (
                <li key={article.id} className={styles.li}>
                  <Image 
                    src={article.image.url}
                    alt={article.image.title}
                    className={styles.productImage} 
                    layout="responsive"
                    width={100} 
                    height={90} 
                  />
                  <div className={styles.text}>
                    <Link href={`/blog/${article.category.slug}/${article.url}`}>{article.title}</Link>
                  </div>  
                </li>
              ))}
            </ul>
          )}
          {searchTerm !== '' && searchResults.length === 0 && (
            <p className={styles['no-results']}>No se encontraron resultados para {searchTerm}.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;