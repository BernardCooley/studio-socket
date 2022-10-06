const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/login",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;

module.exports = withImages({
    inlineImageLimit: 0,
    webpack(config, options) {
        return config;
    },
});

module.exports = { images: { domains: ["firebasestorage.googleapis.com"] } };
