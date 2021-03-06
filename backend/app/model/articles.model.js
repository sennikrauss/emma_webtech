/**
 * Schritt 4 Model erstellen
 * @type {Connection}
 */
const sql = require("./db.js");
// constructor
const Article = function(article) {
    this.articleDescription = article.articleDescription;
    this.producerName = article.producerName;
    this.unit = article.unit;
    this.items = article.items;
    this.category = article.category;
    this.location = article.location;
    this.purchaseDate = article.purchaseDate;
    this.expirationDate = article.expirationDate;
    this.purchasingPrice_net = article.purchasingPrice_net;
};

Article.create = (newArtikel, result) => {
    sql.query("INSERT INTO articles SET ?", newArtikel, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created article: ", { id: res.insertId, ...newArtikel });
        result(null, { id: res.insertId, ...newArtikel });
    });
};

//hier sind die values der spalten location und category schon als string und nicht mehr number, weil schon verbunden mit Tabellen storagelocation und categories
Article.findById = (artikelId, result) => {
    sql.query(`SELECT a.id,a.articleDescription,a.producerName,a.unit,a.items,c.category,l.location,
a.purchaseDate,a.expirationDate,a.purchasingPrice_net FROM articles a JOIN categories c ON a.category=c.id JOIN
storagelocation l ON a.location=l.id WHERE a.id = ${artikelId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found article: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Article with the id
        result({ kind: "not_found" }, null);
    });
};

Article.updateById = (id, article, result) => {
    sql.query(
        "UPDATE articles SET articleDescription = ?,producerName = ?, unit = ?, items = ?, category=?, location = ?, purchaseDate = ?, expirationDate = ?, purchasingPrice_net = ? WHERE id = ?",
        [article.articleDescription,
            article.producerName,
            article.unit,
            article.items,
            article.category,
            article.location,
            article.purchaseDate,
            article.expirationDate,
            article.purchasingPrice_net,
            id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Article with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated article: ", { id: id, ...article });
            result(null, { id: id, ...article });
        }
    );
};

Article.remove = (id, result) => {
    sql.query("DELETE FROM articles WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Article with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Article with id: ", id);
        result(null, res);
    });
};

//Kategorie und Lagerort sind hier schon nicht mehr als number sondern string aus den Tabellen storagelocation und categories
Article.getAll= result => {
    sql.query("SELECT a.id,a.articleDescription,a.producerName,a.unit,a.items,c.category,l.location,a.purchaseDate,a.expirationDate,a.purchasingPrice_net FROM articles a JOIN categories c ON a.category=c.id JOIN storagelocation l ON a.location=l.id", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("article: ", res);
        result(null, res);
    });
};

module.exports = Article;
