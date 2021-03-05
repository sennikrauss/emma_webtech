/**
 * Schritt 4 Model erstellen
 * @type {Connection}
 */
const sql = require("./db.js");

const Category = function(category) {
    this.category=category.category;
    this.description=category.description;
    this.picUrl=category.picUrl;
};
// constructor

Category.create = (newCategory, result) => {
    sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created category: ", { id: res.insertId, ...newCategory });
        result(null, { id: res.insertId, ...newCategory });
    });
};



Category.findById = (categoryId, result) => {
    sql.query(`SELECT * FROM categories WHERE id = ${categoryId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found category: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Category with the id
        result({ kind: "not_found" }, null);
    });
};

Category.getAll = result => {
    sql.query("SELECT * FROM categories", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("category: ", res);
        result(null, res);
    });
};




Category.updateById = (id, category, result) => {
    sql.query(
        "UPDATE categories SET category = ?, description=?,picUrl = ? WHERE id = ?",
        [category.category, category.description,category.picUrl,id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({kind: "not_found"}, null);
                return;
            }

            console.log("updated category: ", {id_kate: id, ...category});
            result(null, {id_kate: id, ...category});
        }
    );
};

Category.remove = (id, result) => {
    sql.query("DELETE FROM categories WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Category with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted category with id: ", id);
        result(null, res);
    });
};

module.exports=Category;
