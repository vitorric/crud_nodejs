const Company = require("../../schema/company/index");

exports.list = async () => {  
    try {
        return await Company.find({});
    } catch (error) {
        throw error
    }
};

exports.getById = async (id) => {  
    try {
        var ObjectId = require('mongodb').ObjectID;
        return await Company.findById(ObjectId(id));
    } catch (error) {
        throw error
    }
};

exports.save = async (body) => {  

    let company = new Company(body);

    return await company.save().then(() => {
        return company;
    }).catch((error) => {
        throw error
    });    
};

exports.update = async (id, body) => {  
    var ObjectId = require('mongodb').ObjectID;
    let company = new Company(body);
    company._id = ObjectId(id);

    return await Company.findByIdAndUpdate(company._id, company).then(() => {
        return true;
    }).catch((error) => {
        throw error
    });
};

exports.exclude = async (id) => {  
    var ObjectId = require('mongodb').ObjectID;

    return await Company.findByIdAndRemove(ObjectId(id)).then(() => {
        return true;
    }).catch((error) => {
        throw error
    });
};