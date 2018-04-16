'use strict'
const Database = require('../database/database');
class RolesBusinessLogic{
  static async getRoles(){
  	try{
       const database = new Database();
       const readParams = {};
       readParams.collectionName = "roles";
       readParams.criteria = {};
       readParams.projection = {};
       return await database.read(readParams);
  	}catch(error){
  		throw error;
  	}
  }

  static async deleteUser(userId){
    try{
       const database = new Database();
       const deleteParams = {};
       deleteParams.collectionName = "users";
       deleteParams.criteria = { _id : new ObjectId(userId)};
       return await database.delete(deleteParams);
    }catch(error){
      throw error;
    }
  }
}
module.exports = RolesBusinessLogic