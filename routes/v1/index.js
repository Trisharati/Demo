var express = require('express');
var router = express.Router();

const aa=require('../../controller/student.controller');

router.post('/add',aa.add);
router.get('/view',aa.view);
router.put('/update/:id',aa.update);



module.exports=router