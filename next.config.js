module.exports = { webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { tls: false };

    return config;
  },
};