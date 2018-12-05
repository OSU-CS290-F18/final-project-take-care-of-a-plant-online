var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3137;
var plantData = require('./plantData');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get(['/', '/index.html'], function (req, res, next) {
    res.status(200).render('plantPage', {
        plants: plantData
    })
});

app.get('*', function (req, res) {
    res.status(404).render('404', {});
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});


// var path = require('path');
// var express = require('express');
// var app = express();
// var exphbs = require('express-handlebars');
// var port = process.env.PORT || 3870;
// var plantData = require('./plantData');

// var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;

// var mongoHost = "classmongo.engr.orgegonstate.edu";
// var mongoPort = process.env.MONGO_PORT || '27027';
// var mongoUsername = "cs290_noonanj";
// var mongoPassword = "cs290_noonanj";
// var mongoDBName = "cs290_noonanj";

// var mongoURL = "mongodb://" +
//     mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;

// var mongoDB = null;

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// app.use(bodyParser.json())

// app.use(express.static('public'));

// app.get(['/', '/plants'], function (req, res, next) {
//     var plantCollection = mongoDB.collection('plants');
//     plantCollection.find({}).toArray(function (err, plantDocs) {
//         if (err) {
//             res.status(500).send("Error communicating with DB.");
//         }
//         res.status(200).render('plantPage', {
//             plants: plantDocs
//         });
//     });
// });

// app.get('/plants/:plant', function (req, res, next) {
//     var plant = req.params.plant.toLowerCase();
//     var plantCollection = mongoDB.collection('plants');
//     plantCollection.find({ name: plant }).toArray(function (err, plantDocs) {
//         if (err) {
//             res.status(500).send("Error communicating with DB.");
//         }
//         else if (peopleDocs.length > 0) {
//             res.status(200).render('plantPage', plantDocs[0]);
//         }
//         else {
//             next();
//         }
//     });
// });

// app.post('/plants/:name/', function (req, res, next) {

// });

// app.get('*', function (req, res, next) {
//     res.status(404).render('404');
// });

// // app.get(['/', 'index.html'], function (req, res, next) {
// //     res.status(404).render('plantPage', {
// //         plants: plantData
// //     })
// // });

// MongoClient.connect(mongoURL, function (err, client) {
//     if (err) {
//         throw err;
//     }
//     mongoDB = client.db(mongoDBName);
//     app.listen(port, function () {
//         console.log("== Server is listening on port", port);
//     });
// });

// // app.listen(port, function () {
// //     console.log("== Server is listening on port", port);
// // });