/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'misc.scdn.co',
   },
   {
    protocol: 'https',
    hostname: 'oudcdlshblhvhfsrorfi.supabase.co',
   },
  ],
 },
};

export default nextConfig;
