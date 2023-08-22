const app = require("./app");
const serverless = require("serverless-http");

if (process.env.ENVIRONMENT !== "production") {
  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

//handler for the lambda function

exports.handler = serverless(app);