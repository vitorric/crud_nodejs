module.exports = {
    dev: {
        'PORT': 3000,
        'MONGO_HOST': '127.0.0.1',
        'MONGO_PORT': '27017',
        'MONGO_USER': '',
        'MONGO_PWD': '',
        'MONGO_DB': 'yourDB',
        'MONGO_AUTH_SOURCE': ''
    },
    prod: {
        'PORT': 3000,
        'MONGO_HOST': '',
        'MONGO_PORT': 0,
        'MONGO_DB': '',
        'MONGO_USER': '',
        'MONGO_PWD': ''

    }
};



