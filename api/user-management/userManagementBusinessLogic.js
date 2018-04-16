'use strict'
const Database = require('../database/database');
const ObjectId = require('mongodb').ObjectID;
class UserManagementBusinessLogic {
    static async getUsers() {
        try {
            const database = new Database();
            const readParams = {};
            readParams.collectionName = "users";
            readParams.criteria = {};
            readParams.projection = {};
            return await database.read(readParams);
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser(userId) {
        try {
            const database = new Database();
            const deleteParams = {};
            deleteParams.collectionName = "users";
            deleteParams.criteria = { _id: new ObjectId(userId) };
            return await database.delete(deleteParams);
        } catch (error) {
            throw error;
        }
    }

    static async createUser(user) {
        try {
            const database = new Database();
            const createParams = {};
            createParams.collectionName = "users";
            createParams.payload = user;
            return await database.create(createParams);
        } catch (error) {
            throw error;
        }
    }

    static async getUser(userId){
        try {
            const database = new Database();
            const readParams = {};
            readParams.collectionName = "users";
            readParams.criteria = { _id: new ObjectId(userId) };
            readParams.projection = { "_id" : 1,
                                        "firstName" : 1,
                                        "lastName" : 1,
                                        "description" : 1,
                                        "userName" : 1,
                                        "roles" : 1 };
            return await database.read(readParams);
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(user){
        try {
            const database = new Database();
            const updateParams = {};
            updateParams.collectionName = "users";
            updateParams.criteria = { _id: new ObjectId(user._id) };
            updateParams.dataToBeUpdated = {"$set":{"description":user.description,"roles":user.roles}};
            return await database.update(updateParams);
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UserManagementBusinessLogic