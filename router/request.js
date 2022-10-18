const express=require("express")
const Tokens = require('csrf')
const Cookie = require('cookie')
const router=express.Router();
const csrfProtection=require("../controllers/csrfProtection")
const getBalanceAdmin=require("../controllers/getBalanceAdmin")
const VerifyMytransaction=require("../controllers/verifyMytransaction")
const dataPlanNetworkCodes=require("../controllers/dataPlanNetworkCodes")
const dataPriceListAndDataID=require("../controllers/dataPriceListAndDataID")


let tokens=new Tokens()

router.get('/api/getBalanceAdmin',csrfProtection, getBalanceAdmin,(req, res)=>{})
router.get('/api/VerifyMytransaction',csrfProtection, VerifyMytransaction,(req, res)=>{})
router.get('/api/dataPlanNetworkCodes',csrfProtection, dataPlanNetworkCodes,(req, res)=>{})
router.get('/api/dataPriceListAndDataID',csrfProtection, dataPriceListAndDataID,(req, res)=>{})


//this route protect all form submission 
router.get('/form',function (req, res) {
 
    let secret = tokens.secretSync()
    let token = tokens.create(secret)
    res.setHeader('Set-Cookie', Cookie.serialize('csrfSecret',secret, {
        httpOnly: true,
    })); 
    return  res.status(200).json({express:{payLoad:token,status:true}})    
   
})

module.exports=router;