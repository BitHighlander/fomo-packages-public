require('dotenv').config({path:"../.env"});

// const fomo-coincap = require('fomo-coincap-lib')
// fomo-coincap.open()
// fomo-coincap.on('trades', console.log)

// require('dotenv').config({path:"../.env"});
// let log = require("../loggerdog-client/")()
//
// let TAG = "test"
//
// log.info(TAG," wuddup",{my:"nigga"})


let binance = require("../packages/fomo-binance")



binance.currentUSDValue()
    .then(function(summary){
        console.log(summary)
    })
