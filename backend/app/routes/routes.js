/**
 * Schritt 5
 * Routen definieren
 * @param app
 */
module.exports = app => {
    const article = require("../controller/articles.controller.js");
    const category = require("../controller/categories.controller.js");
    const location = require("../controller/locations.controller.js");

    // Create a new one
    app.post("/article/new", article.create);
    app.post("/category/new", category.create);
    app.post("/location/new", location.create);

    // GET all
    app.get("/articles", article.findAll);
    app.get("/categories",category.findAll);
    app.get("/locations", location.findAll);

    // GET one single with id
    app.get("/article/:articleId", article.findOne);
    app.get("/category/:categoryId", category.findOne);
    app.get("/location/:locationId", location.findOne);

    // Update with id
    app.put("/article/:articleId", article.update);
    app.put("/category/:categoryId", category.update);
    app.put("/location/:locationId", location.update);

    // Delete with id
    app.delete("/article/:articleId", article.delete);
    app.delete("/category/:categoryId", category.delete);
    app.delete("/location/:locationId", location.delete);

};
