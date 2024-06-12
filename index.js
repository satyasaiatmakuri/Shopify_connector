require("dotenv").config();
const app = require("./src/app");
// const db = require("./src/database/config");

const port = process.env.PORT || 8080;

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the database successfully");
// });

app.listen(port, () => {
  console.log(`{--Server running on ${port}--}`);
});
