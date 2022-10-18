

function dataPriceListAndDataID(req,res,next){

    let dataPlanNetworkCodes=[{dataID:"E500MB",Network:"9mobile",Size:"500MB",dataType:"Gifting",validity:"1 month",price:450},
                                {dataID:"E1.5GB",Network:"9mobile",Size:"1.5GB",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E2GB",Network:"9mobile",Size:"2.0BG",dataType:"Gifting",validity:"1 month",price:1100},
                                {dataID:"E3GB",Network:"9mobile",Size:"3.0BG",dataType:"Gifting",validity:"1 month",price:1400},
                                {dataID:"E4.5GB",Network:"9mobile",Size:"4.5BG",dataType:"Gifting",validity:"1 month",price:1850},
                                {dataID:"M500MBG",Network:"MTN",Size:"500.0MB",dataType:"Gifting",validity:"1 month",price:140},
                                {dataID:"M1GBG",Network:"MTN",Size:"1.0BG",dataType:"Gifting",validity:"1 month",price:250},
                                {dataID:"M2GBG",Network:"MTN",Size:"2.0BG",dataType:"Gifting",validity:"1 month",price:500},
                                {dataID:"M3GBG",Network:"MTN",Size:"3.0BG",dataType:"Gifting",validity:"1 month",price:750},
                                
                                {dataID:"M5GBG",Network:"MTN",Size:"5.0BG",dataType:"Gifting",validity:"1 month",price:1270},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900},
                                {dataID:"E3GB",Network:"9mobile",Size:"1.5BG",dataType:"Gifting",validity:"1 month",price:900}]	
        
    res.status(200).json({express:{payLoad:dataPlanNetworkCodes,status:true}}) 

}   

module.exports = dataPriceListAndDataID;

