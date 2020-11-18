const fs = require("fs-extra");
const util = require("util");

const upload = async (file, folder) => {
    let fileName = Date.now()+"_"+file.filename.replace(/ /g,"_");
    await fs.outputFile(`./files/${folder}/${fileName}`, Buffer.from(file.data));
    let newFile = {
        key: fileName,
        location: `/files/${folder}/${fileName}`
    }
    return newFile;
}

const destroy = async (file) => {
    await fs.remove(`.${file.location}`);
    let newFile = {
        key: file.key,
        location: file.location
    }
    return newFile;
}

module.exports = {
    upload, destroy
}