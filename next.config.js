/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hbdy-s3.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '/cert-images/**',
      },
      {
        protocol: 'https',
        hostname: 'hbdy-s3.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
