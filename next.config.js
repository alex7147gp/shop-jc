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
        source: '/es/blog/:category/smartphones/:pageUrl*',
        destination: '/es/blog/smartphones/:pageUrl*',
      },
      {
        source: '/es/blog/:category/accessories/:pageUrl*',
        destination: '/es/blog/accessories/:pageUrl*',
      },
      {
        source: '/es/blog/:category/computers/:pageUrl*',
        destination: '/es/blog/computers/:pageUrl*',
      },
      {
        source: '/es/blog/:category/gaming/:pageUrl*',
        destination: '/es/blog/gaming/:pageUrl*',
      },
      {
        source: '/es/blog/:category/tablets/:pageUrl*',
        destination: "/es/blog/tablets/:pageUrl*",
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
        source: '/en-US/blog/:category/smartphones/:pageUrl*',
        destination: '/en-US/blog/smartphones/:pageUrl*',
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
        destination: '/en-US/blog/tablets/:pageUrl*',
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
