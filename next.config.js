/** @type {import('next').NextConfig} */


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
       'res.cloudinary.com'
      ],
    },
};
const withPWA = require('next-pwa')({
	dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,  
});

module.exports = withPWA(nextConfig);
