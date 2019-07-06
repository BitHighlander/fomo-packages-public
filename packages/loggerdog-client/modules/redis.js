/**
 * Created by highlander on 3/6/17.
 */

const config = require('../config/env.js')
let TAG = " | REDIS-CONNECTION-MODULE | "
const Redis = require('ioredis');



let subscriber
let publisher
let redis
try{
    const pubsub = require('redis')
    publisher = pubsub.createClient(config.REDIS_IP)
    subscriber = pubsub.createClient(config.REDIS_IP)

    const Redis = require('then-redis/lib')
    redis = Redis.createClient(config.REDIS_IP)

}catch(e){
    console.error(TAG+"e: ",e)
    //if prod, throw
    if(process.env("NODE_ENV") === 'production') throw Error("101: Redis misconfiguration! ")
}

module.exports = {redis, publisher, subscriber}
