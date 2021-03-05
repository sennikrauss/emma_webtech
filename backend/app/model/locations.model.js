/**
 * Schritt 4 Model erstellen
 * @type {Connection}
 */
const sql = require("./db.js");

const Location = function (location){
    this.location=location.location;
    this.description=location.description;
    this.picUrl=location.picUrl;
}

Location.create = (newLocation, result) => {
    sql.query("INSERT INTO storagelocation SET ?", newLocation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created location: ", { id: res.insertId, ...newLocation });
        result(null, { id: res.insertId, ...newLocation });
    });
};

Location.findById = (id, result) => {
    sql.query(`SELECT * FROM storagelocation WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found location: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Location with the id
        result({ kind: "not_found" }, null);
    });
};

Location.getAll = result => {
    sql.query("SELECT * FROM storagelocation", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("location: ", res);
        result(null, res);
    });
};

Location.updateById = (id, location, result) => {
    sql.query(
        "UPDATE storagelocation SET location = ?, description=?,picUrl = ? WHERE id = ?",
        [location.location, location.description,location.picUrl,id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Location with the id
                result({kind: "not_found"}, null);
                return;
            }

            console.log("updated location: ", {id: id, ...location});
            result(null, {id: id, ...location});
        }
    );
};

Location.remove = (id, result) => {
    sql.query("DELETE FROM storagelocation WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found location with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted location with id: ", id);
        result(null, res);
    });
};

module.exports=Location;
