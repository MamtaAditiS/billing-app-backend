const swaggerJsDocs = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Billing Application API's",
      version: "1.0",
      description: "All api end points",
      contact: {
        name: "Mamta Garg"
      },
      servers: ["http://localhost:4000"]
    },
    produces: ["application/json"],
    host: `localhost:4000`
  },
  apis: ["./api/v1/**/*.js"],
  layout: "AugmentingLayout"
};

module.exports = swaggerJsDocs(swaggerOptions)
