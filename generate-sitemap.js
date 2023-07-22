const fs = require('fs');
const { create } = require('xmlbuilder2');

// Importa los datos de tus páginas, por ejemplo, desde una base de datos o un archivo JSON.
const pages = [
  { url: '/', lastmod: '2023-07-18', changefreq: 'daily', priority: 1.0 },
  { url: '/PoliticaDePrivacidad', lastmod: '2023-07-18', changefreq: 'weekly', priority: 0.8 },
  { url: '/TerminosDelServicio', lastmod: '2023-07-18', changefreq: 'weekly', priority: 0.8 },
];

const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

pages.forEach(({ url, lastmod, changefreq, priority }) => {
  sitemap.ele('url').ele('loc').txt(`https://www.jcshop.shop/${url}`);
  sitemap.ele('lastmod').txt(lastmod);
  sitemap.ele('changefreq').txt(changefreq);
  sitemap.ele('priority').txt(priority);
});

// Crea el archivo sitemap.xml en la carpeta pública
fs.writeFileSync('./public/sitemap.xml', sitemap.end({ prettyPrint: true }));