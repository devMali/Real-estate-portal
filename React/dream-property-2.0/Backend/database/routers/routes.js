const user = require('../models/user');

module.exports = function(app){

    const cityCntrl = require('../controller/cityController');
    const areaCntrl = require('../controller/areaController');
    const typeCntrl = require('../controller/typeController');
    const userCntrl = require('../controller/userController');
    const propCntrl = require('../controller/propController');
    const inqCntrl = require('../controller/inquiryController');
    const myCntrl = require('../controller/myController');


        app.get('/', (req, res) =>{
            res.send('Home page');
        });
        
    // app.get('/cityins', (req, res) =>{    
    //     cityCntrl.cityIns(req, res)
    //     res.send("city inserted")
    // })

    // app.get('/cityup',(req, res) =>{
    //     cityCntrl.cityUp(req, res)
    //     res.send("city updated")
    // })

    // app.get('/citydel',(req, res) =>{
    //     cityCntrl.cityDel(req, res)
    //     res.send("city deleted")
    // })

    // app.get('/cityget',(req, res) =>{
    //     cityCntrl.cityGet(req, res)
    // })
    
    //----------------------------CITY--------------------------------
    
    app.post('/cins',cityCntrl.cityInsert)

    app.put('/cup',cityCntrl.cityUpdate)

    app.delete('/cdel/:id',cityCntrl.cityDelete)

    app.get('/cview',cityCntrl.cityView)

    //---------------------------AREA---------------------------------

    app.post('/ains',areaCntrl.areaInsert)

    app.put('/aup',areaCntrl.areaUpdate)

    app.delete('/adel/:id',areaCntrl.areaDelete)

    app.get('/aview',areaCntrl.areaView)

    //-------------------------------TYPE-----------------------------

    app.post('/tins',typeCntrl.typeInsert)

    app.put('/tup',typeCntrl.typeUpdate)

    app.delete('/tdel/:id',typeCntrl.typeDelete)

    app.get('/tview',typeCntrl.typeView)

    //-------------------------------PROPERTY-----------------------------

    app.post('/pins',propCntrl.propInsert)
    
    app.put('/pup',propCntrl.propUpdate)
    
    app.delete('/pdel/:id',propCntrl.propDelete)
    
    app.get('/pview',propCntrl.propView)

    //---------------------------------USER---------------------------

    app.post('/uins',userCntrl.userInsert)

    app.put('/uup',userCntrl.userUpdate)

    app.delete('/udel/:id',userCntrl.userDelete)

    app.get('/uview',userCntrl.userView)

    //---------------------------------INQUIRY---------------------------

    app.post('/iins',inqCntrl.inquiryInsert)
    
    app.put('/iup',inqCntrl.inquiryUpdate)
    
    app.delete('/idel/:id',inqCntrl.inquiryDelete)
    
    app.get('/iview',inqCntrl.inquiryView)

    //---------------------------------CUSTOM---------------------------

    app.get('/uview/:id',myCntrl.userPK)
    app.get('/pview/:id',myCntrl.propPK)
    app.post('/uview/login',myCntrl.userLogIn)
    app.get('/uview/login/home',myCntrl.userVerify)
    app.post('/uview/logout',myCntrl.userLogOut)
    app.get('/pview/area/:aname',myCntrl.propbyArea)
    app.get('/pview/type/:tname',myCntrl.propbyType)
    app.get('/pview/cat/sell',myCntrl.propForSell)
    app.get('/pview/cat/rent',myCntrl.propForRent)
    app.get('/inqview/user/:uid',myCntrl.inqByUser)
    app.get('/inqview/prop/:pid',myCntrl.inqByProp)
    app.get('/inqview/',myCntrl.inquiry)
    app.get('/inqcnt/',myCntrl.inqCount)
    app.get('/citycnt/',myCntrl.cityCount)
    app.get('/areacnt/',myCntrl.areaCount)
    app.get('/usercnt/',myCntrl.userCount)
    app.get('/propcnt/',myCntrl.propCount)
    app.get('/searchprop/:search',myCntrl.searchProperty)

}