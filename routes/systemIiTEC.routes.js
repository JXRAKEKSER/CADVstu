const {Router} = require('express');
const router = Router();
const LandingData = require('../models/ProgramLanding');

router.get('/systemIiTEC', async (req, res) =>{
    try{
        const data = await LandingData.findOne({'name':'systemIiTEC'});
        res.status(200).json(data);
        
    }catch(e){
        console.log(e);
    }   
    
    
});

module.exports = router;