/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/saigonu',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/saigonuguntla',
        permanent: true,
      },
      {
        source: '/new',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
