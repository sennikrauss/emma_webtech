/**
 * Schritt 7
 * Controller erstellen mit den entsprechenden CRUD-Funktionen
 * @type {Artikel}
 */
const Location=require("../model/locations.model.js");

// Create and Save a new Location
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const location=new Location({
        location:req.body.location,
        description:req.body.description,
        picUrl:req.body.picUrl,
    })




    Location.create(location, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Location."
            });
        else res.send(data);
    });
};

// Retrieve all locations from the database.

exports.findAll=(req,res)=> {
    Location.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving location."
            });
        else res.send(data);
    });
}


// Find a single location with a id
exports.findOne=(req,res)=> {
    Location.findById(req.params.locationId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found location with id ${req.params.locationId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving location with id " + req.params.locationId
                });
            }
        } else res.send(data);
    });
}


// Update a location identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Location.updateById(
        req.params.locationId,
        new Location(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found location with id ${req.params.locationId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating location with id " + req.params.locationId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a location with the specified memberId in the request

exports.delete = (req, res) => {
    Location.remove(req.params.locationId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found location with id ${req.params.locationId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete location with id " + req.params.locationId
                });
            }
        } else res.send({ message: `location was deleted successfully!` });
    });
};
