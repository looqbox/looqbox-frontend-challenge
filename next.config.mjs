/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design'
  ],
  images: {
    domains: ['raw.githubusercontent.com']
  }
};

export default nextConfig;
