/**
 * Schritt 7
 * Controller erstellen mit den entsprechenden CRUD-Funktionen
 * @type {Artikel}
 */

const Category= require("../model/categories.model.js");

// Create and Save a new Artikel
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }


    const category=new Category({
        category: req.body.category,
        description:req.body.description,
        picUrl:req.body.picUrl,
    });


    // Save Customer in the database

    Category.create(category, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Category."
            });
        else res.send(data);
    });


};


exports.findAll=(req,res)=> {
    Category.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving category."
            });
        else res.send(data);
    });

}

exports.findOne=(req,res)=> {
    Category.findById(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving category with id " + req.params.categoryId
                });
            }
        } else res.send(data);
    });
}
// Update a Category identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Category.updateById(
        req.params.categoryId,
        new Category(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found category with id ${req.params.categoryId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating category with id " + req.params.categoryId
                    });
                }
            } else res.send(data);
        }
    );
}



// Delete a Member with the specified memberId in the request

exports.delete = (req, res) => {
    Category.remove(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete category with id " + req.params.categoryId
                });
            }
        } else res.send({ message: `category was deleted successfully!` });
    });
};


