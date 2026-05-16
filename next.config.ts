import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    turbopack:{
        rules:{
            "*.svg":{
                loaders:["@svgr/webpack"],
                as:"*.js"
            }
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8888',
                pathname: '/uploads/**',
            },
            {
                protocol:"https",
                hostname:"encrypted-tbn0.gstatic.com",
                pathname:"/**"
            },
            {
                protocol:"https",
                hostname:"www.chess.com",
                pathname:"/**"
            },
            {
                protocol:"https",
                hostname:"via.placeholder.com",
                pathname:"/**"
            },
            {
                protocol:"https",
                hostname:"i.ytimg.com",
                pathname:"/**"
            }
        ],
        dangerouslyAllowLocalIP: true
    }
};

export default nextConfig;
