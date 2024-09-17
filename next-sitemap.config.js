/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://mapleburningfield.com/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
  },
};
