// checkPermission
const express = require("express");
const app = express();

// ***logger function for all 3 books ,lib,& authors****

app.use(logger);

app.get("/books", logger, (req, res) => {
  console.log(" books_route");
  return res.send({ route: "/books" });
});
// ***checkPermissions  function for only lib,& authors****
app.use(checkPermission);

app.get("/libraries", logger, checkPermission, (req, res) => {
  console.log(" libs_route");
  return res.send({ route: "/libraries", permission: true });
});
app.get("/authors", logger, checkPermission, (req, res) => {
  console.log(" authors_route");
  return res.send({ route: "/authors", permission: true });
});
function logger(req, res, next) {
  console.log(" fetching books,lib,and authors");
  next();
}
function checkPermission(req, res, next) {
  console.log(" fetching only lib and authors");
  next();
}
app.listen(7000, () => {
  console.log("listening on port 7000");
});
