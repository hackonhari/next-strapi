const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["localhost"],
      },
    };
  }

  return {
    images: {
      domains: ["res.cloudinary.com"],
    },
  };
};
