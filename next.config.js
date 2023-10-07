/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
	reactStrictMode: true,

    images: {
      domains: ['placeimg.com',
       'api.lorem.space.com',
       'vuzoon.com',
       'www.complementosdelcafe.com',
       'images.pexels.com',
       'd1ttb1lnpo2lvz.cloudfront.net',
       'images-na.ssl-images-amazon.com',
       'm.media-amazon.com',
       'encrypted-tbn0.gstatic.com',
       'pics.freeicons.io',
       'res.cloudinary.com',
       'images.ctfassets.net'
      ],
    },
    i18n,

    async rewrites() {
    return [
      // Rutas en español
      { 
        source: '/es/blog/:category/telefonosinteligentes/:pageUrl*',
        destination: '/es/blog/telefonosinteligentes/:pageUrl*',
      },
      {
        source: '/es/blog/:category/accesorios/:pageUrl*',
        destination: '/es/blog/accesorios/:pageUrl*',
      },
      {
        source: '/es/blog/:category/computadoras/:pageUrl*',
        destination: '/es/blog/computadoras/:pageUrl*',
      },
      {
        source: '/es/blog/:category/videojuegos/:pageUrl*',
        destination: '/es/blog/videojuegos/:pageUrl*',
      },
      {
        source: '/es/blog/:category/tabletas/:pageUrl*',
        destination: "/es/blog/tabletas/:pageUrl*",
      },
      {
        source: '/es/PoliticaDePrivacidad',
        destination: "/es/PoliticaDePrivacidad",
      },
      {
        source: '/es/TerminosDelServicio',
        destination: "/es/TerminosDelServicio",
      },
      // Rutas en inglés
      {
        source: '/en-US/blog/:category/smartPhones/:pageUrl*',
        destination: '/en-US/blog/smartPhones/:pageUrl*',
      },
      {
        source: '/en-US/blog/:category/accessories/:pageUrl*',
        destination: '/en-US/blog/accessories/:pageUrl*',
      },
      {
        source: '/en-US/blog/:category/computers/:pageUrl*',
        destination: '/en-US/blog/computers/:pageUrl*',
      },
      {
        source: '/en-US/blog/:category/gaming/:pageUrl*',
        destination: '/en-US/blog/gaming/:pageUrl*',
      },
      {
        source: '/en-US/blog/:category/tablets/:pageUrl*',
        destination: '/en-US/blog:category/tablets/:pageUrl*',
      },
      {
        source: '/en-US/PoliticaDePrivacidad',
        destination: '/en-US/PrivacyPolicy',
      },
      {
        source: '/en-US/TerminosDelServicio',
        destination: '/en-US/TermsofService',
      },
    ];
  },
};
const withPWA = require('next-pwa')({
	dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,  
});

module.exports = withPWA(nextConfig);
