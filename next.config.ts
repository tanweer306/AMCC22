import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    devIndicators: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // Allow development hosts for Replit environment
    allowedDevOrigins: [
        '*.replit.dev',
        '*.worf.replit.dev',
        '1ebbc9e2-983f-4125-9681-3b5a40537d39-00-tkfq414fi0ht.worf.replit.dev',
        'localhost:5000',
        '127.0.0.1:5000'
    ],
    // Security headers for production
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
