

/*
    config template

    Templating global config settings

    RULES:
        Local overrides defaults ALWAYS

    Assume dev unless, NODE_ENV='production'


                        -Highlander
*/



let config = {
    VERSION:"config-0.0.1",

    DATADOG_API:process.env['DATADOG_API'],

    //redis
    REDIS_IP : process.env['REDIS_IP'] || 'redis://127.0.0.1:6379',
    REDIS_PORT : '6379',

    SUPPORTED_VERSIONS:[
    ],
}

module.exports = config
