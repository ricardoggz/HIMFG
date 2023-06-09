/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    unoptimized : true
  },
  env:{
    BASE_URL_API: 'https://courses-rest-api-hospital.vercel.app/',
    BASE_URL_IMAGE: 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1686274934/banner-80_zhlxd1_11zon_gywcvl.jpg'
  }
}

module.exports = nextConfig
