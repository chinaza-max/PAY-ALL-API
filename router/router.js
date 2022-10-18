const request = require('./request')
const allRoutes = require("express").Router();




module.exports = (app) => {
    allRoutes.use('/request', request);
   // allRoutes.use('/user-settings', request);
    app.use("/", allRoutes);
}