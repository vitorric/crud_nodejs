var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({    
        name: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        ein: {
            type: String,
            required: true
        },
        street: String,
        number: Number,
        complement: String,
        neighborhood: String,
        zipCode: String,
        city: String,
        state: String,
        phone1: String,
        phone2: String,
        email: String,
        site: String,
        note: String
    }, {
        collection: 'company',
        timestamps: true
});

module.exports = mongoose.model('company', CompanySchema);