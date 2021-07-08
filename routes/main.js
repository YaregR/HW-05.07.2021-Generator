const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const sendPlanet = require('../controllers/ctrl.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/form', upload.none(), async (req, res) => {

    const { planetId } = req.body;
    const arrUserInfo = planetId.split(',');
    
    const getArray = sendPlanet.getArrNum(arrUserInfo);
    const result = await sendPlanet.dataBase(getArray);
    
         
    res.json( result );
});


module.exports = router;
