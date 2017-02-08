var db = require('./../massive');
console.log(Object.keys(db))

module.exports = {
    getProducts: function(req, res) {
        db.read_products([], function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    },
    getProduct: function(req, res) {
        db.read_product([req.params.id],
        function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results[0])
            }
        })
    },
    update: function(req, res) {
        db.update_product([req.params.id,
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.imageUrl],
        function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    },
    delete: function(req, res) {
        db.delete_product([req.params.id], function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send('product ' + req.params.id + ' was removed.')
            }
        })
    }
}