const app = require("./app");

//uncomment for local 
/*
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */

//handler for the lambda function
exports.handler = (event, context, callback) => {
  app(event, context, callback);
};