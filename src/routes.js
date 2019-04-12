const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const  routes = express.Router();

const BoxController = require("./controller/BoxController");
const FileController = require("./controller/FileController");

// routes.get("/mantovs", (req, res) => {
//     return res.send("Hellow Mantovs1");
// })

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);
routes.post("/boxes/:id/files",     
    multer(multerConfig).single('file'),
    FileController.store
);
// routes.get("/files", FileController.show);

module.exports = routes;
