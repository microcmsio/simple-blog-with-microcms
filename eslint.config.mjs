import nextConfig from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';

const config = [...nextConfig, prettierConfig];

export default config;
