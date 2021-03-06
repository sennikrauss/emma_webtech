/**
 * Schritt 7
 * Controller erstellen mit den entsprechenden CRUD-Funktionen
 * @type {Artikel}
 */
const Article = require("../model/articles.model.js");

// Create and Save a new Article
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Article
    const article = new Article({
        articleDescription: req.body.articleDescription,
        producerName: req.body.producerName,
        unit: req.body.unit,
        items:req.body.items,
        category:req.body.category,
        location:req.body.location,
        purchaseDate:req.body.purchaseDate,
        expirationDate:req.body.expirationDate,
        purchasingPrice_net:req.body.purchasingPrice_net,

    });


    // Save Customer in the database
    Article.create(article, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the article."
            });
        else res.send(data);
    });
};

// Retrieve all Articles from the database.

exports.findAll = (req, res) => {
    Article.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving article."
            });
        else res.send(data);
    });
};

// Find a single Member with a memberId
exports.findOne = (req, res) => {
    Article.findById(req.params.articleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found article with id ${req.params.articleId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving article with id " + req.params.articleId
                });
            }
        } else res.send(data);
    });
};

// Update an Article identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Article.updateById(
        req.params.articleId,
        new Article(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found article with id ${req.params.articleId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating article with id " + req.params.articleId
                    });
                }
            } else res.send(data);
        }
    );
}

// Delete a Member with the specified memberId in the request
exports.delete = (req, res) => {
    Article.remove(req.params.articleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found article with id ${req.params.articleId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete article with id " + req.params.articleId
                });
            }
        } else res.send({ message: `article was deleted successfully!` });
    });
};

exports.findAllArticlesByCategoryId = (req, res) => {
    Article.getAllArticlesByCategoryId(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found article with category-id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving article with category-id " + req.params.categoryId
                });
            }
        } else res.send(data);
    });
};

exports.findAllArticlesByLocationId = (req, res) => {
    Article.getAllArticlesByLocationId(req.params.locationId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found article with category-id ${req.params.locationId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving article with category-id " + req.params.locationId
                });
            }
        } else res.send(data);
    });
};
