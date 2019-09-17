let TAG = ' | mongo | ';
const monk = require('monk');
const config = require('../config/env');
const log = require('dumb-lumberjack')();

const hosts = config.MONGO.HOSTS;
const db = config.MONGO.DB;
const options = config.MONGO.OPTIONS;
//console.log("config: ",config)


function _buildConnectionString (hosts, db) {
    if (!hosts && hosts.length > 0) {
        throw new Error('No mongo hosts configured! See configs/example_dbConfig.js')
    }

    let str = hosts.map(host => host.ip + ':' + host.port).join(',');
    str += '/' + (db || '');

    return str
}

const connectionString = _buildConnectionString(hosts, db);

const connection = monk(connectionString, options, err => {
    if (err) {
        console.error(TAG, `Error connecting to mongo!`, err);
        throw new Error(err)
    } else {
        log.debug(TAG, `Successfully connected to mongo`)
    }
});

// collections
let usersDB = connection.get('users');
let predictionsDB = connection.get('predictions');
let transactionsDB = connection.get('transactions');

//TODO indexs on anything searched
// channelsDB.createIndex({id: 1}, {unique: true})



module.exports = exports = {predictionsDB, usersDB,transactionsDB};
