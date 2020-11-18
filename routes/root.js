'use strict'
const awsController = require('../controller/aws.controller');
const localController = require('../controller/local.controller')
module.exports = async function (fastify, opts) {
  fastify.post('/s3/upload', {preValidation : [fastify.authenticate]}, awsController.upload)
  fastify.delete('/s3/:key', {preValidation : [fastify.authenticate]}, awsController.destroy)
  fastify.post('/local/:folder/upload', {preValidation : [fastify.authenticate]}, localController.upload)
  fastify.post('/local/delete', {preValidation : [fastify.authenticate]}, localController.destroy)
}
