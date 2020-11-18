const aws = require('../services/aws.service');
const Boom = require('@hapi/boom');
const response = require('../config/response');

const upload = async (req, res) => {
    try {
        const file = req.body;
        let uploadedFile = await aws.s3upload(file, process.env.AWS_BUCKET_NAME, 'client');
        return response.singleData(uploadedFile, 'Success', res) 
    } catch (error) {
        throw Boom.boomify(error);
    }
}

const destroy = async (req, res) => {
    const {key} = req.params;
    try {
        let deletedFile = await aws.s3delete(process.env.AWS_BUCKET_NAME, key) 
        return response.singleData(deletedFile, 'Success', res)                
    } catch (error) {
        throw Boom.boomify(error);
    }
}
module.exports = {
    upload, destroy
}