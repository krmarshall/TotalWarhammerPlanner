module.exports = {
  apps: [
    {
      name: 'web server',
      script: './dist/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
