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
        source: '/es/smartphones',
        destination: '/es/smartphones',
      },
      {
        source: '/es/accessories',
        destination: '/es/accessories/',
      },
      {
        source: '/es/computers',
        destination: '/es/computers',
      },
      {
        source: '/es/gaming',
        destination: '/es/gaming',
      },
      {
        source: '/es/tablets',
        destination: "/es/tablets/",
      },
      {
        source: '/es/cryptocurrency',
        destination: "/es/cryptocurrency",
      },
      {
        source: '/es/artificialintelligence/',
        destination: "/es/artificialintelligence",
      },
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
        source: '/es/blog/:category/cryptocurrency/:pageUrl*',
        destination: "/es/blog/cryptocurrency/:pageUrl*",
      },
      {
        source: '/es/blog/:category/artificialintelligence/:pageUrl*',
        destination: "/es/blog/artificialintelligence/:pageUrl*",
      },
      {
        source: '/es/news/:pageUrl*',
        destination: "/es/news/:pageUrl*",
      },
      {
        source: '/es/tutorials/:pageUrl*',
        destination: "/es/tutorials/:pageUrl*",
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
        source: '/en-US/smartphones/',
        destination: '/en-US/smartphones',
      },
      {
        source: '/en-US/accessories',
        destination: '/en-US/accessories',
      },
      {
        source: '/en-US/computers',
        destination: '/en-US/computers',
      },
      {
        source: '/en-US/gaming',
        destination: '/en-US/gaming',
      },
      {
        source: '/en-US/tablets',
        destination: '/en-US/tablets',
      },
      {
        source: '/en-US/cryptocurrency',
        destination: '/en-US/cryptocurrency',
      },
      {
        source: '/en-US/artificialintelligence',
        destination: '/en-US/artificialintelligence',
      },
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
        source: '/en-US/blog/:category/cryptocurrency/:pageUrl*',
        destination: '/en-US/blog/cryptocurrency/:pageUrl*',
      },
      {
        source: '/en-US/blog/:category/artificialintelligence/:pageUrl*',
        destination: '/en-US/blog/artificialintelligence/:pageUrl*',
      },
      {
        source: '/en-US/news/:pageUrl*',
        destination: '/en-US/news/:pageUrl*',
      },
      {
        source: '/en-US/tutorials/:pageUrl*',
        destination: '/en-US/tutorials/:pageUrl*',
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
