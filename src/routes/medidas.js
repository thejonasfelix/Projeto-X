var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/jordan/:ano", function (req, res) {
    medidaController.buscarDadosJordan(req, res);
});

module.exports = router;

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })
