const express=require("express")
const router=express.Router();
const csrfProtection=require("../controllers/csrfProtection")
const getBalanceAdmin=require("../controllers/getBalanceAdmin")
const VerifyMytransaction=require("../controllers/verifyMytransaction")
const dataPlanNetworkCodes=require("../controllers/dataPlanNetworkCodes")






router.get('/api/getBalanceAdmin',csrfProtection, getBalanceAdmin,(req, res)=>{})
router.get('/api/verifyMytransaction',csrfProtection, VerifyMytransaction,(req, res)=>{})
router.get('/api/dataPlanNetworkCodes',csrfProtection, dataPlanNetworkCodes,(req, res)=>{})



module.exports=router;