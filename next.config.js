const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "pratik",
        mongodb_password: "picachhoo1",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "pratik",
      mongodb_password: "picachhoo1",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};
