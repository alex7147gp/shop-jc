/** @type {import('next').NextConfig} */


const nextConfig = {
	reactStrictMode: true,
    images: {
      domains: ['placeimg.com',
       'api.lorem.space.com',
       'vuzoon.com',
       'www.complementosdelcafe.com'
      ],
    },
};
const withPWA = require('next-pwa')({
	dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,  
});

module.exports = withPWA(nextConfig);
