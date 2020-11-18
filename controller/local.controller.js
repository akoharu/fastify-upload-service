const localService = require("../services/local.service");
const Boom = require('@hapi/boom');
const response = require('../config/response');

const upload = async (req, res) => {
    let {folder} = req.params;
    const file = req.body;
    try {
        let data = await localService.upload(file, folder);
        return response.singleData(data, "Uploaded the file successfully: " + file.filename, res)
                
    } catch (error) {
        throw Boom.boomify(error);
    }
}

const destroy = async (req, res) => {
    const file = req.body;
    try {
        let data = await localService.destroy(file);
        return response.singleData(data, "Deleted the file successfully: " + file.filename, res)
    } catch (error) {
        throw Boom.boomify(error);
    }
}
module.exports = {
    upload, destroy
}